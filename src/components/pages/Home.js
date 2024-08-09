import React, { Fragment } from 'react';
import Hero from '../Hero'
import Products from '../products/Products'
import Featured from '../Featured';
import Banner from '../Banner'

const Home = () => {

  return (
    <Fragment>
      <Hero />
      <Featured />
      <Banner />
      <Products />
    </Fragment>
  )

}
export default Home;
