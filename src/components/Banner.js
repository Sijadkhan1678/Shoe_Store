import React from 'react'
import { Grid, } from '@mui/material'
import FirstBanner from './Banner1'
import SecondBanner from './Banner2'
import ThirdBanner from './Banner3'
import FourthBanner from './Banner4'

const Banner = () => {

  return (
    <Grid container px={{ md: 4, sm: 2, xs: 2 }}>
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
  )
}

export default Banner
