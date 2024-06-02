import React, { Fragment, useContext, useEffect } from 'react';
import { Container, Typography } from '@mui/material'
import Hero from '../Hero'
import Products from '../products/Products'
import Featured from '../Featured';

const Home = () => {

  return (

    <Fragment>
      <Hero />
      <Featured />
      <Products />
    </Fragment>
  )

}
export default Home;
