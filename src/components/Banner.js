import React from 'react'
import { Grid, Box,Typography, Button } from '@mui/material'
import BannerImage from './BannerImage'
import banner1 from './banner-1.webp'
import banner2 from './banner-2.webp'
import banner3 from './banner-3.webp'
import banner4 from './banner-4.webp'

const Banner = () => {
  return (
    <Grid container px={{md:4,sm:2,xs:2}}>
      <Grid item lg={3.96} sm={3.96} xs={12} position='relative'>
        <BannerImage banner={banner1} />
        <Box sx={{
          position: 'absolute',
          bottom: '50px',
          left: 0,
          right: 0,
          textAlign: 'center'
        }}>
          <Typography variant='h2' sx={{ fontSize: {md:50,sm:30,xs:40}, fontWeight: 700, color: 'white' }}>Run Don't Hide</Typography>
          <Typography variant='h5' sx={{ fontSize: {md:20,sm:18,xs:18}, fontWeight: 400, color: 'white' }}>Nike Flash Be Seen</Typography>
        </Box>
      </Grid>

      <Grid item lg={8} sm={8} xs={12} position='relative'>
        <Grid item>
          <BannerImage banner={banner2} />
          <Box sx={{
            position: 'absolute',
            top: '25%',
            right: '20px',
            transform: 'translateY(-50%)',

          }}>
            <Typography variant='h5' sx={{ fontSize: {md:22,sm:20,xs:20}, fontWeight: 400, color: 'white' }}>Women's Training</Typography>
            <Typography variant='h2' sx={{ fontSize: {md:50,sm:30,xs:30}, fontWeight: 700, color: 'white' }}>Don't Rest Bra</Typography>
            <Typography variant='body1' sx={{ fontSize: 24, fontWeight: 700, color: 'white', mb: 1, }}>Best Sellers</Typography>
            <Button sx={{ bgcolor: '#222', color: '#fff', fontSize: 16, textTransform: 'capitalize', fontWeight: 400, borderRadius: '50px', py: '10px', px: '50px' }}>More info</Button>
          </Box>
        </Grid>

        <Grid container>
          <Grid item lg={6} sm={6} xs={6} position='relative'>
            <BannerImage banner={banner3} />
            <Box sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: 0,
              left: 0,
              textAlign: 'center',
              px: {md:'30px',sm:'20px'}
            }}>
              <Typography variant='h5' sx={{ mb: {md:1,sm:0}, fontSize: {md:20,sm:16}, fontWeight: 400, color: '#222' }}>Hello Summer 2019</Typography>
              <Typography variant='h2' sx={{ mb: 1, fontSize: {md:50,sm:30,xs:30}, fontWeight: 700, color: '#222' }}>Extra 50%Off</Typography>
              <Typography variant='subtitle1' sx={{fontSize:{sm:12,xs:12}}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
              <Button sx={{ bgcolor: '#222', color: '#fff', mt: 2, fontSize: 18, textTransform: 'capitalize', fontWeight: 400, borderRadius: '50px', py: '10px', px: '50px' }}>More info</Button>
            </Box>
          </Grid>
          <Grid item lg={6} sm={6} xs={6} position='relative'>
            <BannerImage banner={banner4} />
            <Box sx={{
              position: 'absolute',
              top: {md:'80px',sm:'30px',xs:'30px'},
              left: 0,
              right: 0,
              // transform:'translateY(50%)',
              textAlign: 'center'
            }}>
              <Typography variant='h5' sx={{ fontSize: {md:20,sm:18,xs:18}, fontWeight: 400, color: 'white' }}>Nike Shoes</Typography>
              <Typography variant='h2' sx={{ fontSize: {md:50,sm:30,xs:30}, fontWeight: 700, color: 'white' }}>Collection 2019</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Banner
