import React from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { ListItem, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useProductContext } from '../../context/product'

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#0F0F0F',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
        ...theme.applyStyles('dark', {
            color: '#bfbfbf',
            opacity: undefined,
        }),
    },
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}


export const PriceRange = () => {

    const [debounceTimeout, setDebounceTimeout] = React.useState(null);
    const [value, setValue] = React.useState([0, 130])
    const { filterPrice, activeFilters } = useProductContext()
    const [min, max] = value

    const handleChange = (e) => {

        // const [min, max] = e.target.value;
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        console.log(e.target.value)
        // setValue([Math.floor(e.target.value[0] * 1.3), Math.floor(e.target.value[1] * 1.3)]);
        setValue([Math.floor(e.target.value[0]), Math.floor(e.target.value[1])])

        const timeout = setTimeout(() => {
            filterPrice({ min, max }); // Update final state after delay
        }, 1200);

        setDebounceTimeout(timeout);

    }

    React.useEffect(() => {
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout])

    React.useEffect(() => {
        // check priceFilter existence at initial rendering
        const priceFilter = activeFilters.find(filter => filter.includes(" - "))

        if (priceFilter) {
            const [min, max] = priceFilter.split(" - ").map(Number)
            setValue([min, max])
        }

    }, [])


    return (
        <React.Fragment>
            <Stack flexDirection="row" justifyContent='space-between'>
                <Typography variant="body2"
                    sx={{ cursor: 'pointer' }}>
                    {min} min
                </Typography>
                <Typography variant="body2"
                    sx={{ cursor: 'pointer' }}>
                    {max} max
                </Typography>
            </Stack>

            <ListItem>
                <AirbnbSlider
                    slots={{ thumb: AirbnbThumbComponent }}
                    onChange={handleChange}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    // defaultValue={[1, 130]}                    
                    min={0}
                    max={130}
                    value={value}
                />
            </ListItem>
        </React.Fragment>
    )
}