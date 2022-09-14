import React,{Fragment,useContext,useEffect} from 'react';
import {Box,Typography} from '@mui/material'
import Hero from '../Hero'
import Products from '../products/Products'
import context from '../../context/AppContext';

const Home = () => {
  
  const {changeBrand} = useContext(context);
  useEffect( () =>{
   changeBrand('Home');
   //eslint-disable-next-line
  },[])
  
  return (
  <Fragment>
   <Hero />
     <Box>
    
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