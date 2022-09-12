import React from 'react';
import BrandItem from '../BrandItem'
import Products from '../products/Products'
import {Box,Typography} from '@mui/material'

const Brands = () => {
  
     return (
      <Box mt={6}> 
        <Typography variant='h4'> 
          Brands
        </Typography>
        <BrandItem />
         <Products />
     
     </Box>
       )
}
export default Brands;