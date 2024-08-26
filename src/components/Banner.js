import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, } from '@mui/material'
import FirstBanner from './Banner1'
import SecondBanner from './Banner2'
import ThirdBanner from './Banner3'
import FourthBanner from './Banner4'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const Banner = () => {

  return (
  <ThemeProvider theme={theme}>
    <Grid container px={{ lg: 4,md: 2, sm: 2, xs: 2 }}>
      {/* banner 1 component */}
      <FirstBanner />
      
      <Grid item lg={8} sm={8} xs={12}
        sx={{

            position: 'relative',
            overflow: 'hidden'
          
        }}>
        {/* Banner 2 */}
        <SecondBanner />

        <Grid container>
          {/* {banner 3} */}
          <ThirdBanner /> 
          {/* {banner 4} */}
          <FourthBanner />        
        </Grid>
      </Grid>
    </Grid >
    </ThemeProvider>
  )
}

export default Banner
