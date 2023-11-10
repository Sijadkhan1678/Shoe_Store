import React, { useContext,useState } from 'react';
import context from '../../context/AppContext'
import { Container, Grid, Box, Typography } from '@mui/material'
import ProductItem from './ProductItem'

const Products = () => {

  const { products, brandProducts, selectedBrand } = useContext(context);


  const selectedProducts = selectedBrand === 'All' || selectedBrand === 'Home' ? products : brandProducts


  return (
    <Box  pt="4rem" pb="3rem">
      <Container>
      <Typography variant='h2' pb="3rem" fontWeight='800' lineHeight="55px" fontSize="40px">  Products </Typography>
        <Grid container justifyContent='space-between' spacing={4}>
          {
          
          selectedProducts && selectedProducts.map( (product) => (<ProductItem key={product.id} product={product} />))
          
          }
 
        </Grid>
      </Container>
    </Box>

  )
}
export default Products;
