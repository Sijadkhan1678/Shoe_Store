import React, { useContext, useState } from 'react'
import context from '../context/AppContext';
import { Grid, Box, Stack, Typography, FormControl, InputBase, Button } from '@mui/material'


const CartSummary = () => {


    const [promoCode, setPromoCode] = useState('')

    const applyPromodCode = () => { }

    const handleChange = (e) => setPromoCode(e.target.value)


    const { cart } = useContext(context);

    const subTotal = cart.reduce((total, item) => (item.price * item.quantity) + total, 0)

    const shippingPrice = 4.00;

    const totalPrice = cart.reduce((total, product) => {

        return (product.price * product.quantity) + (product.quantity * shippingPrice) + total;

    }, 0)


    return (

        <Grid container>

            <Grid item lg={7} md={6} sm={9} xs={6}>
                <FormControl variant='standard'>

                    <InputBase placeholder="Promo Code" type='text' value={promoCode} onChange={handleChange} sx={{
                        border: '1px solid #EDF1FF',
                        fontSize: '1rem',
                        padding: '8px 12px',
                    }} />

                </FormControl>

            </Grid>

            <Grid item lg={5} md={6} sm={3} xs={6} >

                <Button fullWidth onClick={() => applyPromodCode()} variant="contained" size="medium"
                    sx={{
                        p: '13px 0px',
                        boxShadow: '0',
                        borderRadius: '0px', bgcolor: "#524938",
                        '&:hover': { bgcolor: '#ff7800' }
                    }}
                > Apply coupon</Button>

            </Grid>


            <Grid item lg={12} sm={12} xs={12} mt='3rem'>
                <Box bgcolor='#eeeeee' p='0.75rem 1.25rem'>
                    <Typography fontSize="1.5rem" fontWeight={600} variant='h4'>

                        Cart Summary

                    </Typography>
                </Box>
                <Box borderLeft='1px solid' borderRight='1px solid' borderBottom='1px solid' borderColor='rgb(237, 241, 255)'>
                    <Box p='1.4rem'>

                        <Stack direction='row' justifyContent='space-between' pt='0.25rem' mb='1rem'>

                            <Typography variant='h6' fontSize="1rem">
                                Subtotal
                            </Typography>

                            <Typography variant='h6' fontSize="1rem">
                                ${subTotal.toFixed(2)}
                            </Typography>

                        </Stack>

                        <Stack direction='row' justifyContent='space-between'>

                            <Typography variant='h6' fontSize="1rem">
                                Shipping
                            </Typography>

                            <Typography variant='h6' fontSize="1rem">
                                ${shippingPrice}
                            </Typography>

                        </Stack>

                    </Box>

                    <Box p='0.75rem 1.25rem' borderTop='1px solid rgb(237, 241, 255)'>

                        <Stack direction='row' mt='0.5rem' justifyContent='space-between'>

                            <Typography variant='h4' fontSize="1.25rem" fontWeight={700}>
                                Total
                            </Typography>

                            <Typography variant='h4' fontSize="1.25rem" fontWeight={700}>
                                {totalPrice.toFixed(2)}
                            </Typography>

                        </Stack>

                    </Box>

                    <Box px='1.25rem' pb='0.75rem' my='1rem'>

                        <Button fullWidth variant="contained" size="large"
                            sx={{
                                p: '1rem',
                                bgcolor: "#524938",
                                '&:hover': { bgcolor: '#ff7800' }
                            }}
                        > Proceed To Checkout </Button>

                    </Box>

                </Box>

            </Grid>



        </Grid>

    )
}

export default CartSummary
