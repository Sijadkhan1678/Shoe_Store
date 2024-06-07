import React, { Fragment } from 'react';
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
