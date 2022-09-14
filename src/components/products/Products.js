import React,{useContext} from 'react';
import context from '../../context/AppContext'
import {Grid,Box} from '@mui/material'
import ProductItem from './ProductItem'

const Products = () => {
   
    const {products,brandProducts,selectedBrand} = useContext(context);
      
    const Products = selectedBrand === 'All' || selectedBrand === 'Home' ? products : brandProducts
    
    return (
    <Box width='100%' mt={7} >
      <Grid container justifyContent='space-between' spacing={6}>
      
    {Products && Products.map( (product,index) =>( <ProductItem key={index}
                   
                   product={product} />)) }
      
      </Grid>
    </Box>
      )
}
export default Products;