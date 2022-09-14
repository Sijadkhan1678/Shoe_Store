import React,{useContext} from 'react'
import {Stack,Box,IconButton,Typography} from '@mui/material'
import  DeleteIcon from '@mui/icons-material/Delete' 
import  AddIcon from '@mui/icons-material/AddCircle' 
import  RemoveCircleIcon from '@mui/icons-material/RemoveCircle' 
import context from '../context/AppContext' 

const CartItem = ({item}) => {
    const {id,name,img,price,quantity} = item
    const {increaseQuantity,decreaseQuantity,removeFromCart} = useContext(context)
   
    return (
      
     <Stack direction='row' 
            spacing={2.5}
             mt={7} mb={8}>
        <Box>
           <img src={img} 
                alt='item'
                width='200px' />
        </Box>
        <Box width='100%'>
        <Stack direction='row' 
               justifyContent='space-between'>
           <Typography variant='h5'>
            {name}
           </Typography>
          <IconButton 
                    onClick={()=>removeFromCart(id)}
                    variant='contained' 
                    size='large' 
                    color='error'>
           <DeleteIcon /> 
            </IconButton> 
            </Stack>
              <Stack direction='row' justifyContent='space-between' alignItems='center'  mt={5}>
           <Typography variant='h5' >
              $ {price}
            </Typography>
               <Stack direction='row' alignItems='center' spacing={1.7  }>
              <IconButton  onClick={()=>increaseQuantity(id)}
                          variant='contained'     size='large'
                          color='primary'>
                    <AddIcon /> 
                </IconButton>
                 <Typography variant='h6'>
                  {quantity}
                 </Typography>
                <IconButton 
                      onClick={()=> decreaseQuantity(id)}
                      variant='contained' 
                      size='large'
                      color='secondary'>
                   <RemoveCircleIcon />
                </IconButton>
                </Stack>
                </Stack>
               
             </Box>
      </Stack>
      )  
      
  
}
export default CartItem