import React from 'react';
import {Typography,Box} from '@mui/material'
import CartItem from '../CartItem'
const Cart = () => {
  
    return (
    <Box mt={5.6}>
      <Typography variant='h4'> 
          Cart Items
       </Typography>
       <hr />
        <CartItem />
        <CartItem />
       
    </Box>
      )
}
export default Cart;