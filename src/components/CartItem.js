import React, { useContext } from 'react'
import { TableRow, TableCell, Stack, Box,Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import context from '../context/AppContext'

const CartItem = ({ item }) => {

   const { id, name, img, price, quantity } = item
   const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(context)

   return (

      <TableRow>

         <TableCell> <img src={img} alt='item' width='70px' /> </TableCell>

         <TableCell>

            <Typography variant='h2' fontSize='1rem' >{name}</Typography>

         </TableCell>

         <TableCell>

            <Typography variant='h2' fontSize='1rem'>  $ {price} </Typography>

         </TableCell>

         <TableCell>

            <Stack direction='row' justifyContent='space-between' alignItems='center'>
           
               <AddIcon onClick={() => increaseQuantity(id)} style={{ color: '#834e00bd', paddingRight: '1rem' }} />
               
               {quantity}
               
               <RemoveCircleIcon disabled onClick={() => decreaseQuantity({ id, quantity })} style={{ color: '#d32f2f', paddingLeft: '1rem' }} />

            </Stack>
         </TableCell>

         <TableCell>

            <Typography variant='h2' fontSize='1rem'>${price * quantity} </Typography>

         </TableCell>

         <TableCell>

            <IconButton
               onClick={() => removeFromCart(id)}
               variant='contained'
               size='large'
               color='error'>
               <DeleteIcon />
            </IconButton>

         </TableCell>


      </TableRow>

   )


}
export default CartItem
