import React from 'react'
import { Box, Container, Grid, Typography, Button, Rating, useMediaQuery, Chip } from '@mui/material'

const Product = () => {

  const xs = 600;
  const sm = 900;
  const md = 1200;
  // const lg = 1536;

  const isMobile = useMediaQuery(`(max-width: ${xs}px)`);
  const isSmall = useMediaQuery(`(max-width: ${sm}px)`);
  const isLarge = useMediaQuery(`(min-width: ${md}px)`);

  const imageStyle = {
    width: '100%',
    maxWidth: isLarge ? 700 : '100%',
    borderRadius: 6,
    height: isLarge ? 450 : (isSmall ? (isMobile ? 350 : 450) : 450),
    objectFit: 'cover'
  };
  return (
    <Box /*sx={{ bgcolor: 'yellow' }}*/ mt={8}>
      <Container /*style={{ backgroundColor: 'red' }}*/>
        <Grid container>


          {/* product image section */}
          <Grid item /*bgcolor='gray'*/ lg={6} md={6} sm={12} xs={12}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadMayQjrxuWmqXB6nTaNUXJRumlXGHD7u2w&usqp=CAU' style={imageStyle} alt='product' />
          </Grid>


          {/* product detail section */}
          <Grid item /*bgcolor='cadetblue'*/ lg={6} md={6} sm={12} xs={12} px={2}>
            <Box mt={4}>
              <Typography variant='h6' component='h4' mb={1} fontSize={12} color="#ff7800" fontWeight={600} ml={0.6}>{'Addidas brand'.toUpperCase()}</Typography>

              <Typography variant='h4' component='h3' mb={1} fontSize={32} fontWeight={700}>Addidas energy Bounce</Typography>
              <Rating value={4.5} size='small' readOnly sx={{ color: 'black' }} />
              <Typography variant='h3' component='h4' color='#ff7800' mt={2} fontWeight={700}> $99.00 </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant='h6' fontWeight={700} fontSize={14} component='h3'>Description</Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor...</Typography>

            </Box>
            {/* size chips */}
            <Box mt={1}>
            <Typography variant='h6' fontWeight={700} fontSize={14} component='h3' gutterBottom>Size</Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label='S' />
                </Grid>
                <Grid item>
                  <Chip label='M' />
                </Grid>
                <Grid item>
                  <Chip label='L' />
                </Grid>
                <Grid item>
                  <Chip label='XL' />
                </Grid>
                <Grid item>
                  <Chip label='XXL' />
                </Grid>
                
              </Grid>
            </Box>
          </Grid>

        </Grid>

      </Container>
    </Box>
  )
}

export default Product
