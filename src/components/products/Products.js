import React from 'react';
import { useProductContext } from '../../context/product'
import { Container, Grid, Box, Typography } from '@mui/material'
import ProductItem from './ProductItem'

const Products = () => {

  const { products } = useProductContext();

  const Extract_hightRatingProducts = () => {

    const highRatingProducts = products.filter((product) => product.rating > 4.5)
    highRatingProducts.pop()
    return highRatingProducts

  }

  const highRatingProducts = Extract_hightRatingProducts()

  return (

    <Box pt="4rem" pb="3rem">
      <Container>
        <Typography variant='h2' pb="3rem" fontWeight='800' lineHeight="55px" fontSize="40px">  Products </Typography>
        <Grid container spacing={3}>
          {
            highRatingProducts.map(product => (<ProductItem key={product.id} product={product} />))
          }
        </Grid>
      </Container>
    </Box>

  )
}
export default Products;

