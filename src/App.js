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
import AlertState from './context/alert/State'
import ModalState from './context/modal/State'
import CartState from './context/cart/State'
import ProductState from './context/product/State'
import ProductModal from './components/ProductModal'
import Alert from './components/Alert'
import Product from './components/pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <ProductState>
      <AlertState>
        <CartState>
          <ModalState>
            <Router>
              <Fragment>
                <ProductModal />
                <Alert />
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
          </ModalState>
        </CartState>
      </AlertState>
    </ProductState>
  );
}

export default App;

