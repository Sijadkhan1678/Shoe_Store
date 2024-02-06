import React, { useContext } from 'react';
import { Grid, Typography, Box, Rating, Button, ButtonGroup, Stack } from '@mui/material'
import context from '../../context/AppContext'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';



const ProductItem = ({ product }) => {

  const { name, img, price, rating, brand } = product
  const { addToCart } = useContext(context);
  
  let shoeName = name.slice(0, 14)
  

  return (

    <Grid item lg={4} md={4} sm={6} xs={12} position='relative' zIndex={1}>
      <Box width="100%" >
        <img src={img} alt='shoe' width='100%' height={250}  style={imgStyle} />
      </Box>
      
      <ButtonGroup

        orientation="horizontal"
        size="large"
        sx={{width:'100%',ml:'9px',transform:'translateY(-20px)'}}
      >
        <Button variant='contained' boxShadow='none' style={{
            backgroundColor: '#524938',
            width:'20%',
          }}  startIcon={<VisibilityIcon />}></Button>
        <Button  onClick={() => addToCart(product)} variant='contained'
          
          style={{
            backgroundColor: '#524938',
            width:'56%',
            
          }}>ADD TO CART</Button>
        <Button variant='contained' style={{
            backgroundColor: '#524938',
            width:'20%', 
          }} startIcon={<CompareArrowsIcon />}></Button>
      </ButtonGroup>
      
      <Stack direction='column' justifyContent='space-evenly'>

        <Box sx={itemContentStyle}>
          <Typography variant='h6' color="#1c1c1c" fontWeight='400' fontSize='1rem'>
            {shoeName}
          </Typography>

          <Typography
            variant='p'
            color='primary'>
            $ {price}
          </Typography>
        </Box>

        <Box sx={star$brand_sx}>
          <Rating value={rating} size='small' readOnly />
          <Typography variant='body1' fontSize='14px' fontWeight='300' >
            {brand}
          </Typography>
        </Box>

      </Stack>

    </Grid>

  )
}
const itemContentStyle = {
  pt: '1.5rem',
  pb: '1rem',
  pr: '0.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
const star$brand_sx = {
  pt: '0rem',
  pb: '0.5rem',
  pr: '0.4rem',
  ml: '-0.23rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const imgStyle = {
  borderRadius: '0.8rem',
  objectFit: 'cover',

}

export default ProductItem;
