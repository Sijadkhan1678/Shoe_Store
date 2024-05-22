import React from 'react';
import { Container, TableContainer, Table, TableHead, TableCell, TableRow, Grid, Typography, TableBody } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useCartContext } from '../../context/cart';
import CartItem from '../CartItem';
import CartSummary from '../CartSummary'

const Cart = () => {

  const { item } = useCartContext()
  let column_Heading = ['Image', 'Name', 'Price', 'Quantity', 'Total', 'Action']

  return (
    <Container mt={5.6}>
      <Typography variant='h4'>
        Cart Items
      </Typography>

      <Grid container mt={2} spacing={4}>
        <Grid item lg={8} md={8} sm={12} mb={{ md: '0rem', sm: "3rem", xs: "3rem" }} >
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow style={{ backgroundColor: '#eeeeee' }}>
                  {

                    column_Heading.map((Heading, index) => (<TableCell key={index} style={{ minWidth: 80 }}><Typography variant='h3' fontSize={16} fontWeight={700}> {Heading} </Typography>  </TableCell>))

                  }
                </TableRow>
              </TableHead>

              <TableBody>

                {item && item.map((item, index) => (<CartItem key={index} item={item} />))}

              </TableBody>

            </Table>
          </TableContainer>
        </Grid>

        <Grid item lg={4} md={4} sm={12}> <CartSummary /> </Grid>

      </Grid>
      <Outlet />
    </Container>
  )
}
export default Cart;