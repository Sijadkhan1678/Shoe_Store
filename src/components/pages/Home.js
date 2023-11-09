import React, { Fragment, useContext, useEffect } from 'react';
import { Container, Typography } from '@mui/material'
import Hero from '../Hero'
import Products from '../products/Products'
import Featured from '../Featured';
import context from '../../context/AppContext';

const Home = () => {

  const { changeBrand } = useContext(context);
  useEffect(() => {
    changeBrand('Home');
    //eslint-disable-next-line
  }, [])

  return (

    <Fragment>
      <Hero />
      <Featured />
      <Products />
    </Fragment>
  )

}
export default Home;
