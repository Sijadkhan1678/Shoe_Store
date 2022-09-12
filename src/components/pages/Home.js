import React,{Fragment} from 'react';
import {Box,Typography} from '@mui/material'
import Hero from '../Hero'
import Products from '../products/Products'
const Home = () => {
  return (
  <Fragment>
   <Hero />
     <Box /* bgcolor='yellow'*/>
    
       <Typography variant='h2' mt={4.2} ml={1.5} fontWeight='300' >
       Products
       </Typography>
       <hr />
       <Products />
       
     </Box>
  </Fragment>
    )
  
}
export default Home;