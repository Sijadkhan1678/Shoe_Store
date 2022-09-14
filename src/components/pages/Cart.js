import React,{useContext} from 'react';
import {Typography,Box} from '@mui/material';
import context from '../../context/AppContext';
import CartItem from '../CartItem';

const Cart = () => {
  
  const {cart} = useContext(context)
  
  const totalPrice = cart.reduce((currentTotal,item)=> (item.price + currentTotal) *item.quantity,0)
   
  return (
    <Box mt={5.6} position='relative'>
      <Typography variant='h4'> 
          Cart Items
       </Typography>
       <hr />
       { cart && cart.map( (item,index) => (<CartItem
      key={index}  item={item} />))}
      
      <Box bgcolor='#B3824F'
           width='100%' 
           height='11vh'
           left={0} 
           position='fixed' 
           bottom={0}>
      <Typography align='center'
                  variant='h5' mt={2.2} 
                  color='white'>
      Total : $ {totalPrice}
      </Typography>
      
       </Box>
    </Box>
      )
}
export default Cart;