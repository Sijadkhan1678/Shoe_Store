import React from 'react'
import { TableRow, TableCell, Stack, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useCartContext } from '../context/cart'

const CartItem = ({ item }) => {

    const { id, name, img, price, quantity } = item
    const { totalPrice, calculateSubTotal, calculateTotal, increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext()


    const handleCartOperation = (operationType) => {
        switch (operationType) {

            case 'REMOVE_FROM_CART':
                removeFromCart(id)
                calculateSubTotal()
                calculateTotal()
                break;

            case 'INCREASE_QTY':
                increaseQuantity(id)
                calculateSubTotal()
                calculateTotal()
                break;

            case 'DECREASE_QTY':
                decreaseQuantity({ id, quantity })
                calculateSubTotal()
                calculateTotal()
                break

            default:
                return
        }


    }
    console.log('cartItem', totalPrice)
    return (

        <TableRow>

            <TableCell> <img src={img} alt='item' width='70px' /> </TableCell>

            <TableCell>

                <Typography variant='h2' fontSize='1rem' >{name}</Typography>

            </TableCell>

            <TableCell>

                <Typography variant='h2' fontSize='1rem'>  $ {price} </Typography>

            </TableCell>

            <TableCell style={{ minWidth: 100 }}>

                <Stack direction='row' justifyContent='space-between' alignItems='center'>

                    <AddIcon onClick={() => handleCartOperation('INCREASE_QTY')} style={{ color: '#834e00bd', paddingRight: '1rem' }} />

                    {quantity}

                    <RemoveCircleIcon disabled onClick={() => handleCartOperation('DECREASE_QTY')} style={{ color: '#d32f2f', paddingLeft: '1rem' }} />

                </Stack>
            </TableCell>

            <TableCell style={{ width: 80 }}>

                <Typography variant='h2' fontSize='1rem'>${(price * quantity).toFixed(2)} </Typography>

            </TableCell>

            <TableCell>

                <IconButton
                    onClick={() => handleCartOperation('REMOVE_FROM_CART')}
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
