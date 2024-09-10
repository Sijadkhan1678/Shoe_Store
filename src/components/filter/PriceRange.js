import React from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { ListItem,Box,ListItemText,Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#707070f7',
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
const handleChange = (e) => {

    const [min,max] = e.target.value;
    console.log('min:',min,'max:',max)
}
    return (
        <Box>
            <ListItem disablePadding>
            <ListItemText primary="$20"/>
            <ListItemText primaryTypographyProps={ 
            <React.Fragment>
              <Typography
                component="p"
                variant="h1"
                sx={{ color:'black',textAlign:'right' }}
              >
                222
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>} />
            </ListItem>
            
        <ListItem px={1}>
            
            <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                onChange={handleChange}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[0, 200]}
            />
        </ListItem>
        </Box>
    )
}