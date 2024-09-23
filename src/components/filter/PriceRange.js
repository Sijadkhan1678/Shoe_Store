import React from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { ListItem, Box, Stack, ListItemText, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

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

    const [value, setValue] = React.useState([1, 130])
    const [min, max] = value
    const handleChange = (e) => {

        const [min, max] = e.target.value;

        setValue([Math.floor(min * 1.3), Math.floor(max * 1.3)]);

    }
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
                    defaultValue={[0, 100]}
                />
            </ListItem>
        </React.Fragment>
    )
}