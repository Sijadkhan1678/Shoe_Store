import React from 'react'
import {Stack,Box,IconButton,Typography} from '@mui/material'
import  DeleteIcon from '@mui/icons-material/Delete' 
import  AddIcon from '@mui/icons-material/AddCircle' 
import  RemoveCircleIcon from '@mui/icons-material/RemoveCircle' 
import product from './products/product.jpeg' 

const CartItem = () => {
    
    return (
      
     <Stack direction='row' 
            spacing={2.5}
             mt={7} mb={8}>
        <Box>
           <img src={product} 
                alt='item'
                width='200px' />
        </Box>
        <Box width='100%'>
        <Stack direction='row' 
               justifyContent='space-between'>
           <Typography variant='h5'>
            Nike shoes red black 9
           </Typography>
          <IconButton variant='contained' size='large' color='error'>
           <DeleteIcon /> 
            </IconButton> 
            </Stack>
              <Stack direction='row' justifyContent='space-between' alignItems='center'  mt={5}>
           <Typography variant='h5' >
              $ 54
            </Typography>
               <Stack direction='row' alignItems='center' spacing={1.7  }>
              <IconButton varian='contained'            size='large'
                          color='primary'
                          size='1000px'>
                    <AddIcon /> 
                </IconButton>
                 <Typography variant='h6'>
                  23
                 </Typography>
                <IconButton 
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