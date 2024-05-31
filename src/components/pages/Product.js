import React from 'react'
import { Box, Container, Grid, Typography, Stack, Divider, Button, ButtonGroup, Rating, useMediaQuery, Chip } from '@mui/material'
import contextAlert from '../../context/alert/context';
import { useCartContext } from '../../context/cart'
import { useProductContext } from '../../context/product'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom'

const Product = () => {

  const xs = 600;
  const md = 1200;
  const [currentChip, setCurrentChip] = React.useState('S')
  const isMobile = useMediaQuery(`(max-width: ${xs}px)`);
  const isLarge = useMediaQuery(`(min-width: ${md}px)`);
  const { setAlert } = React.useContext(contextAlert);
  const { addToCart } = useCartContext()
  const { products } = useProductContext()

  const [quantity, setQuantity] = React.useState(1);

  const { id } = useParams()

  React.useEffect(() => {
    window.scrollTo({ top: 130, left: 0, behavior: 'smooth' })
  }, [])

  const handleQuantity = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1)
    } else if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {

    addToCart({ ...product, quantity }, 'product_view')
    setAlert('Successfully Add To Cart')
  }

  const getCurrentProduct = () => {
    const product = products.find((product) => product.id === id)

    if (product) {
      return product
    }
  }

  const product = getCurrentProduct()

  const { name, img, price, rating, brand } = product

  const handleChip = (chip) => { setCurrentChip(chip.target.innerText) }

  const imageStyle = {
    width: '100%',
    maxWidth: isLarge ? 600 : '100%',
    borderRadius: 6,
    height: isLarge ? 450 : (isMobile ? 200 : 350),
    objectFit: 'cover'
  };
  const buttonDefaultStyle = {
    variant: 'contained',
    width: '12%',
    fontWeight: 700,
    color: '#696969',
    px: 3,
    backgroundColor: '#f7f7f7',
    border: 'none',
    '&:hover': { border: 'none', bgcolor: '#e5e5e5' }
  }
  return (

    <Box mt={7}>
      <Container /*style={{ backgroundColor: 'red' }}*/>
        <Grid container>

          {/* product image section */}
          <Grid item /*bgcolor='gray'*/ lg={6} md={6} sm={12} xs={12}>
            {product && <img src={img} style={imageStyle} alt='product' />}
          </Grid>

          {/* product detail section */}
          <Grid item /*bgcolor='cadetblue'*/ lg={6} md={6} sm={12} xs={12} px={2}>
            <Box mt={4}>
              {product && <Typography variant='h6' component='h4' sx={{ mb: 1, fontSize: 12, color: "#ff7800", fontWeight: 600, ml: 0.6 }}>{`${brand} brand`.toUpperCase()}</Typography>}

              {product && <Typography variant='h4' component='h3' sx={{ mb: 1, fontSize: 32, fontWeight: 700, }}>{name}</Typography>}
              {product && <Rating value={rating} size='small' readOnly sx={{ color: 'black' }} />}
              {product && <Typography variant='h3' component='h4' /*color='#ff7800'*/ mt={2} fontWeight={700}> ${price} </Typography>}
            </Box>
            <Box mt={2}>
              <Typography variant='h6' fontWeight={700} fontSize={14} component='h3'>Description</Typography>
              <Typography variant='body1' color='#696969'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor...</Typography>

            </Box>
            {/* size chips */}
            <Box mt={1}>
              <Typography variant='h6' fontWeight={700} fontSize={14} component='h3' mb={1}>Size</Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label='S' onClick={handleChip} variant={currentChip === 'S' ? 'contained' : 'outlined'} />
                </Grid>
                <Grid item>
                  <Chip label='M' onClick={handleChip} variant={currentChip === 'M' ? 'contained' : 'outlined'} />
                </Grid>
                <Grid item>
                  <Chip label='L' onClick={handleChip} variant={currentChip === 'L' ? 'contained' : 'outlined'} />
                </Grid>
                <Grid item>
                  <Chip label='XL' onClick={handleChip} variant={currentChip === 'XL' ? 'contained' : 'outlined'} />
                </Grid>
                <Grid item>
                  <Chip label='XXL' onClick={handleChip} variant={currentChip === 'XXL' ? 'contained' : 'outlined'} />
                </Grid>

              </Grid>
            </Box>

            <Box my={3}>

              <Typography variant='h6' fontWeight={700} fontSize={14} gutterBottom component='h3'>Quantity</Typography>

              <ButtonGroup>

                <Button onClick={() => handleQuantity('decrease')} sx={{ ...buttonDefaultStyle }}><RemoveIcon /></Button>


                <Button disableRipple sx={{
                  ...buttonDefaultStyle,
                  cursor: 'default',
                  '&:hover': { border: 'none', bgcolor: '#f7f7f7' },
                  fontSize: 18,

                }}>{quantity}</Button>

                <Button onClick={() => handleQuantity('increase')} sx={{ ...buttonDefaultStyle, fontSize: '50px !important' }}><AddIcon />  </Button>

              </ButtonGroup>

            </Box>
            <Box mt={2}>
              <Divider />
            </Box>
            <Stack direction='row' spacing={4} mt={4} /*bgcolor='red'*/>

              <Button onClick={() => addToCart({ ...product, quantity }, 'modal_view')} startIcon={<ElectricBoltIcon />} variant="contained" size="large" sx={{
                color: "white",
                fontSize: 12,
                fontWeight: 700,
                bgcolor: "#ff7800",
                '&:hover': { bgcolor: '#ff7800' },
                boxShadow: 'none',

              }}>Buy Now</Button>
              <Button startIcon={<ShoppingCartIcon />} onClick={handleAddToCart} variant="contained" size="large" sx={{
                color: "white",
                px: 2,
                fontSize: 12,
                fontWeight: 700,
                bgcolor: "#524938",
                '&:hover': { bgcolor: '#ff7800' },

              }}>Add To Cart</Button>

            </Stack>

          </Grid>

        </Grid>

      </Container>
    </Box>
  )
}

export default Product
