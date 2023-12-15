import React, { useContext } from 'react';
import { Container, TableContainer, Table, TableHead, TableCell, TableRow, Grid, Typography,TableBody,
} from '@mui/material';

import context from '../../context/AppContext';
import CartItem from '../CartItem';
import CartSummary from '../CartSummary'

const Cart = () => {

  const { cart } = useContext(context)
  let column_Heading = ['Image', 'Name', 'Price', 'Quantity', 'Total', 'Action']

 console.log('cart',cart)
 

  

  return (
    <Container mt={5.6}>
      <Typography variant='h4'>
        Cart Items
      </Typography>


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
          

        <CartSummary />

        </Grid>



      </Grid>

    </Container>
  )
}
export default Cart;
