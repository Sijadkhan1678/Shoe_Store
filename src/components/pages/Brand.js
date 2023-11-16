import React, { useContext } from 'react';
import context from '../../context/AppContext'
import BrandItem from '../BrandItem'
import ProductItem from '../products/ProductItem'
import { Container, Box, Grid, Typography } from '@mui/material'

const Brands = () => {

  const { products, brandProducts, selectedBrand } = useContext(context);


  const selectedProducts = selectedBrand === 'All' || selectedBrand === 'Home' ? products : brandProducts

  return (
    <Box mt={6}>
      <Container>
        <Typography variant='h5' m="-14px" ml="4rem" fontSize="1.8rem" fontWeight="500" >
          Brands
        </Typography>
        <BrandItem />
        <Grid container justifyContent='space-between' spacing={6}>
          {selectedProducts.map(product => (<ProductItem key={product.id} product={product} />))}
        </Grid>
      </Container>
    </Box>
  )
}
export default Brands;
