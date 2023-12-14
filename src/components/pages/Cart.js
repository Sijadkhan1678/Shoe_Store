import React, { useContext } from 'react';
import {
  Container, TableContainer, Table, TableHead, TableCell, TableRow, Stack, Grid, Typography, Button, FormControl, Box,
  TableBody, InputBase
} from '@mui/material';
import { styled } from '@mui/material/styles';
import context from '../../context/AppContext';
import CartItem from '../CartItem';

const Cart = () => {

  const { cart } = useContext(context)
  let column_Heading = ['Image', 'Name', 'Price', 'Quantity', 'Total', 'Action']

  const totalPrice = cart.reduce((currentTotal, item) => (item.price + currentTotal) * item.quantity, 0)

  const PromoInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {

      border: '1px solid #EDF1FF',
      fontSize: '1rem',
      padding: '12px 12px',

    }

  }))

  return (
    <Container mt={5.6}>
    
      <Typography variant='h4'>Cart Items</Typography>

      <Grid container mt={2} spacing={4}>
        <Grid item lg={8} md={8} mb={{ md: '0rem', sm: "3rem", xs: "3rem" }} sm={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: '#ffa71f' }}>
                  {

                    column_Heading.map(Heading => (<TableCell><Typography variant='h3' fontSize={16} fontWeight={700}>   {Heading} </Typography>  </TableCell>))

                  }
                </TableRow>
              </TableHead>

              <TableBody>

                {cart && cart.map((item, index) => (<CartItem
                  key={index} item={item} />))}

              </TableBody>


            </Table>
          </TableContainer>
        </Grid>

        <Grid item lg={4} md={4} sm={12}>
          <Grid container>

            <Grid item lg={7} md={6} sm={9} xs={6}>
              <FormControl fullWidth variant='standard'>
  
                <PromoInput placeholder="Promo Code" />

              </FormControl>

            </Grid>

            <Grid item lg={5} md={6} sm={3} xs={6} >
              <Button fullWidth variant="contained" sx={{
                color: "#000000", p: '12px 0px', boxShadow: '0', borderRadius: '0px', bgcolor: "#ffa71f", '&:hover': { color: 'whitesmoke !important' }
              }}
                size="medium"> Apply coupon</Button>
            </Grid>

            {/* Cart Summary  start*/}

            <Grid item lg={12} sm={12} xs={12} mt='3rem'>
              <Box bgcolor='#ffa71f' p='0.75rem 1.25rem'>
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
                      Price
                    </Typography>

                  </Stack>

                  <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='h6' fontSize="1rem">
                      Shipping

                    </Typography>
                    <Typography variant='h6' fontSize="1rem">
                      Price
                    </Typography>

                  </Stack>

                </Box>


                <Box p='0.75rem 1.25rem'
                  borderTop='1px solid rgb(237, 241, 255)'>

                  <Stack direction='row' mt='0.5rem' justifyContent='space-between'>
                    <Typography variant='h4' fontSize="1.25rem" fontWeight={700}>
                      Total

                    </Typography>
                    <Typography variant='h4' fontSize="1.25rem" fontWeight={700}>
                      Price
                    </Typography>

                  </Stack>



                </Box>

                <Box px='1.25rem' pb='0.75rem' my='1rem'>

                  <Button fullWidth variant="contained" sx={{ p: '1rem', color: "#000000", bgcolor: "#ffa71f" }} size="large"> Proceed To Checkout </Button>

                </Box>

              </Box>

            </Grid>
            {/* Cart Summary end */}


          </Grid>



        </Grid>



      </Grid>

    </Container>
  )
}
export default Cart;
