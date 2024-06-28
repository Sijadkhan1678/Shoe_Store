import React from 'react'
import { Grid, Box, Stack, Typography, Button } from '@mui/material'
import banner1 from './banner-1.webp'
import banner2 from './banner-2.webp'
import banner3 from './banner-3.webp'
import banner4 from './banner-4.webp'

const Banner = () => {
  return (
    <Grid container px={4}>
      <Grid item lg={4} position='relative'>
        <img src={banner1} alt='banner1' style={{verticalAlign:'middle',width:'100%' ,height:'auto'}} />
        <Box sx={{
          position: 'absolute',


          bottom: '50px',
          left: 0,
          right: 0,
          // transform:'translateX(-50%)'

          // zIndex:100
          textAlign:'center'

        }}>
          <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: 'white' }}>Run Don't Hide</Typography>
          <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: 'white' }}>Nike Flash Be Seen</Typography>
        </Box>
      </Grid>

      <Grid item lg={8} position='relative'>
        <Grid item>
          <img src={banner2} alt='banner1' style={{verticalAlign:'middle',width:'100%' ,height:'auto'}} />
          <Box sx={{
            position: 'absolute',

            top: '25%',
            right: '20px',
            transform: 'translateY(-50%)',
          
          }}>
          <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: 'white' }}>Women's Training</Typography>
          <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: 'white' }}>Don't Rest Bra</Typography>
          <Typography variant='body1' sx={{ fontSize: 24, fontWeight: 700, color: 'white',mb:1, }}>Best Sellers</Typography>
          <Button sx={{bgcolor:'#222',color:'#fff',fontSize:16,fontWeight:400,borderRadius:'50px',p:'10px 50px'}}>More info</Button>
        </Box>
      </Grid>

      <Grid container>
        <Grid item lg={6} position='relative'>
          <img src={banner3} alt='banner3' style={{verticalAlign:'middle',width:'100%' ,height:'auto'}} />
          <Box sx={{
            position: 'absolute',
            top: '50%',
            transform:'translateY(-50%)',
            right:0,
            left:0,
            textAlign:'center',
            px:'30px'
          }}>
            <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: '#222' }}>Hello Summer 2019</Typography>
            <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: '#222' }}>Extra 50%Off</Typography>
            <Typography variant='subtitle1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
            <Button sx={{bgcolor:'#222',color:'#fff',mt:2,fontSize:18,fontWeight:400,borderRadius:'50px',px:'30px'}}>More info</Button>
          </Box>
        </Grid>
        <Grid item lg={6} position='relative'>
          <img src={banner4} style={{verticalAlign:'middle',width:'100%' ,height:'auto'}} alt='banner4'  />
          <Box sx={{
            position: 'absolute',
            top: '80px',
            left:0,
            right:0,
            // transform:'translateY(50%)',
            textAlign:'center'
          }}>
            <Typography variant='h5' sx={{ fontSize: 24, fontWeight: 400, color: 'white' }}>Nike Shoes</Typography>
            <Typography variant='h2' sx={{ fontSize: 50, fontWeight: 700, color: 'white' }}>Collection 2019</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    </Grid >
  )
}

export default Banner
