import React from 'react';
import {Grid,Box} from '@mui/material'
import ProductItem from './ProductItem'
const Products = () => {
  
    return (
    <Box width='100%' mt={7} >
      <Grid container justifyContent='space-between' spacing={6}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      </Grid>
    </Box>
      )
}
export default Products;