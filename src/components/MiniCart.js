import React, { Fragment, useLayoutEffect } from 'react'
import { Box, Stack, SwipeableDrawer, Divider, List, ListItem, ListItemText, Typography, Button, IconButton, darkScrollbar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveCircleIcon from '@mui/icons-material/Remove'
import { useCartContext } from '../context/cart'
import { Link } from 'react-router-dom'

const CartItem = ({ cartItem }) => {

    const { calculateSubTotal, calculateTotal, increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext()

    const handleCartOperation = (operationType) => {
        switch (operationType) {

            case 'REMOVE_FROM_CART':
                removeFromCart(cartItem.id)
                calculateSubTotal()
                calculateTotal()
                break;

            case 'INCREASE_QTY':
                increaseQuantity(cartItem.id)
                calculateSubTotal()
                calculateTotal()
                break;

            case 'DECREASE_QTY':
                decreaseQuantity({ id: cartItem.id, quantity: cartItem.quantity })
                calculateSubTotal()
                calculateTotal()
                break

            default:
                return
        }
    }
    return (
        <Stack direction="row" gap={2} mb={2} >

            <img src={cartItem.img} alt='shoe' style={{
                width: 110,
                height: 'auto',
                objectFit: 'cover',
            }} />

            <Stack width="100%" sx={{ position: 'relative' }}>
                <Stack direction="row" width='100%' justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography components='h4' sx={{ fontSize: { sm: 15, xs: 16, }, fontWeight: 700, color: "#1c1c1c", }}>
                        {cartItem.name}
                    </Typography>

                    <IconButton onClick={() => handleCartOperation("REMOVE_FROM_CART")} sx={{ color: 'gray', m: 0, p: 0 }}>
                        <DeleteIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    {/* <DeleteIcon disabled style={{ color: '#d32f2f', }} /> */}
                </Stack>
                <Stack direction='row' sx={{ justifyContent: "space-between", alignItems: "center", position: "absolute", bottom: 0, left: 0, right: 0 }}>
                    <Typography variant='h6' color='#1c1c1c' sx={{ fontSize: 14, fontWeight: 700, color: "#1c1c1c", }}>
                        ${cartItem.price}
                    </Typography>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', border: '1px solid whitesmoke' }} >


                        <IconButton onClick={() => handleCartOperation('INCREASE_QTY')} sx={{ color: '#1c1c1c', }}><AddIcon sx={{ fontSize: 16 }} /></IconButton>

                        <Typography variant='body2' px={1}>{cartItem.quantity}</Typography>

                        <IconButton onClick={() => handleCartOperation('DECREASE_QTY')} sx={{ color: '#1c1c1c' }}><RemoveCircleIcon sx={{ fontSize: 16 }} /></IconButton>


                    </Stack>
                </Stack>

            </Stack>
        </Stack>
    )
}
const MiniCart = () => {
    const { items, subTotalPrice,open,calculateSubTotal,openDrawer,closeDrawer } = useCartContext()
    useLayoutEffect(() => {

        calculateSubTotal()

    }, [])
    return (
        <Fragment>
            <SwipeableDrawer open={open} anchor="right" onOpen={openDrawer} onClose={closeDrawer} sx={{ '.MuiPaper-root::-webkit-scrollbar': { width: '0px' } }}>

                <Box
                    sx={{ width: 400, }}
                    role="presentation">
                    <Stack sx={{ px: 3, py: 3, position: 'relative', }}>
                        <Box pb={3}>
                            <Typography components="h3" sx={{
                                fontSize: 22,
                                fontWeight: 700,
                                // textAlign:'center'
                            }}>Shopping Cart</Typography>
                        </Box>
                        <Divider />

                        <Box mt={3}>

                            {items.map((item) => <CartItem key={item.id} cartItem={item} />)}

                        </Box>
                    </Stack>
                    <Box sx={{
                        width: 400,
                        bgcolor: 'white',
                        py: 2,
                        position: 'fixed',
                        right: 0,
                        bottom: 0,
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    }}>

                        <Stack direction='row' justifyContent='space-between' px={3} mb={2.5}>

                            <Typography component="h3" sx={{
                                fontSize: 20,
                                fontWeight: 700
                            }}>
                                Subtotal
                            </Typography>

                            <Typography component="h3" sx={{
                                fontSize: 20,
                                fontWeight: 700
                            }}>
                                ${subTotalPrice.toFixed(2)}
                            </Typography>

                        </Stack>
                        <Box px={3}>
                            <Button fullWidth component={Link} to='/cart' variant="contained" size="large"
                                sx={{
                                    py: 1.5,
                                    mb: 2,
                                    fontSize: 14,
                                    bgcolor: "#524938",
                                    '&:hover': { bgcolor: '#ff7800' }
                                }}
                            > View Cart </Button>
                            <Button fullWidth component={Link} to='/cart/checkout' variant="contained" size="large"
                                sx={{
                                    py: 1.5,
                                    fontSize: 14,
                                    bgcolor: "#524938",
                                    '&:hover': { bgcolor: '#ff7800' }
                                }}
                            >Continue Checkout </Button>
                        </Box>
                    </Box>

                </Box>
            </SwipeableDrawer>
        </Fragment>
    )
}

export default MiniCart