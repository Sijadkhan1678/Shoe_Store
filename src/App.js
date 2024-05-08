import React, { Fragment } from 'react'
import Box from '@mui/material/Box'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home';
import Brand from './components/pages/Brand'
import About from './components/pages/About'
import Checkout from './components/pages/Checkout'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'
import AppState from './context/AppState'
import ProductModal from './components/ProductModal'
import Product from './components/pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <AppState>
      <Router>
        <Fragment>
          <ProductModal />
          <Header />
          <Box>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="brands" element={<Brand />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path='/cart/checkout' element={<Checkout />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </Box>
          <Footer />
        </Fragment>
      </Router>
    </AppState>
  );
}

export default App;

