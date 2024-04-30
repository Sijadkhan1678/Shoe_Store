import React from 'react'
import { Box, Container, Grid, Typography, Stack, Divider, Button, ButtonGroup, Rating, useMediaQuery, Chip } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product = () => {

  const xs = 600;
  const sm = 900;
  const md = 1200;
  // const lg = 1536;

  const isMobile = useMediaQuery(`(max-width: ${xs}px)`);
  const isSmall = useMediaQuery(`(max-width: ${sm}px)`);
  const isLarge = useMediaQuery(`(min-width: ${md}px)`);
  const [currentChip, setCurrentChip] = React.useState('S')

  const handleChip = (chip) => { setCurrentChip(chip.target.innerText) }

  const imageStyle = {
    width: '100%',
    maxWidth: isLarge ? 700 : '100%',
    borderRadius: 6,
    height: isLarge ? 450 : (isSmall ? (isMobile ? 350 : 450) : 450),
    objectFit: 'cover'
  };
  const buttonDefaultStyle = {
    variant: 'contained',
    width: '12%',
    color: '#ff7800',
    fontSize: 16,
    fontWeight:700,
    // py: 1.2,
    px: 3,
    backgroundColor: '#f7f7f7',
    border: 'none',
    '&:hover': { border: 'none', bgcolor: '#e5e5e5' }
  }
  return (
    <Box /*sx={{ bgcolor: 'yellow' }}*/ mt={7}>
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
              <Typography variant='h3' component='h4' /*color='#ff7800'*/ mt={2} fontWeight={700}> $99.00 </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant='h6' fontWeight={700} fontSize={14} component='h3'>Description</Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor...</Typography>

            </Box>
            {/* size chips */}
            <Box mt={1}>
              <Typography variant='h6' fontWeight={700} fontSize={14} component='h3' mb={1}>Size</Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label='S' onClick={handleChip} variant={currentChip === 'S' ? 'contained' : 'outlined'} color='warning' />
                </Grid>
                <Grid item>
                  <Chip label='M' onClick={handleChip} variant={currentChip === 'M' ? 'contained' : 'outlined'} color='warning' />
                </Grid>
                <Grid item>
                  <Chip label='L' onClick={handleChip} variant={currentChip === 'L' ? 'contained' : 'outlined'} color='warning' />
                </Grid>
                <Grid item>
                  <Chip label='XL' onClick={handleChip} variant={currentChip === 'XL' ? 'contained' : 'outlined'} color='warning' />
                </Grid>
                <Grid item>
                  <Chip label='XXL' onClick={handleChip} variant={currentChip === 'XXL' ? 'contained' : 'outlined'} color='warning' />
                </Grid>

              </Grid>
            </Box>
            <Box mt={4}>
              {/* <Typography variant='h6' fontWeight={700} fontSize={14} component='h3' mb={1}>Quantity</Typography> */}
              <Stack direction='row' spacing={2}>
                <ButtonGroup>

                  <Button /*onClick={() => handleProductQuantity('decrease')}*/ sx={{ ...buttonDefaultStyle, /*fontSize: 18,*/ }}>-</Button>

                  <Button disableRipple sx={{
                    ...buttonDefaultStyle,
                    cursor: 'default',
                    '&:hover': { border: 'none', bgcolor: '#f7f7f7' },
                    // fontSize: 16,
                    color:'black !important'
                  }}>{/*quantity*/}1</Button>

                  <Button /*onClick={() => handleProductQuantity('increase')}*/ sx={{ ...buttonDefaultStyle,fontSize: 18, }}>+</Button>

                </ButtonGroup>
                <Stack direction='row' spacing={5} mt={4} /*bgcolor='red'*/>

                  <Button /*fullWidth*/ /*onClick={() => addToCart({ ...product, quantity }, 'modal_view')}*/ variant="contained" size="large" sx={{
                    color: "white",
                    // width: '22%',
                    px: 4,
                    // fontWeight: 700,
                    bgcolor: "#ff7800",
                    '&:hover': { bgcolor: '#ff7800' },
                    boxShadow: 'none',
                    // display: 'block',
                    // borderRadius: '0px',
                    // my: 2.5
                  }}>Buy Now</Button>
                  <Button /*fullWidth*/ startIcon={<ShoppingCartIcon />} /*onClick={() => addToCart({ ...product, quantity }, 'modal_view')}*/ variant="contained" size="large" sx={{
                    color: "white",
                    // width: '22%',
                    px: 2,
                    // fontWeight: 700,
                    bgcolor: "#524938",
                    '&:hover': { bgcolor: '#ff7800' },
                    // boxShadow: 'none',
                    // display: 'block',
                    // borderRadius: '0px',
                    // my: 2.5
                  }}>Add To Cart</Button>

                </Stack>
              </Stack>

            </Box>
            
          </Grid>

        </Grid>

      </Container>
    </Box>
  )
}

export default Product
