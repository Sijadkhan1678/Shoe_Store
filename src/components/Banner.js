import React from 'react'
import { Grid, Box, Stack, Typography, Button } from '@mui/material'
import banner1 from './banner-1.webp'
import banner2 from './banner-2.webp'
import banner3 from './banner-3.webp'
import banner4 from './banner-4.webp'

const Banner = () => {
  return (
    <Grid container>
      <Grid item lg={4}>
        <img src={banner1} alt='banner1' />
        <Box>
          <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: 'white' }}>Run Don't Hide</Typography>
          <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: 'white' }}>Nike Flash Be Seen</Typography>
        </Box>
      </Grid>

      <Grid item lg={8} >
        <Grid item>
          <img src={banner2} alt='banner1' />
          <Box>
            <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: 'white' }}>Women's Training</Typography>
            <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: 'white' }}>Don't Rest Bra</Typography>
            <Typography variant='body1'>Best Sellers</Typography>
            <Button>More info</Button>
          </Box>
        </Grid>

        <Grid container>
          <Grid item lg={6} >
            <img src={banner3} alt='banner3' />
            <Box>
              <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: '#222' }}>Hello Summer 2019</Typography>
              <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: '#222' }}>Extra 50%Off h2</Typography>
              <Typography variant='subtitle1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
              <Button>More info</Button>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <img src={banner4} alt='banner4' />
            <Box>
              <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: 'white' }}>Nike Shoes</Typography>
              <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: 'white' }}>Collection 2019</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Banner
