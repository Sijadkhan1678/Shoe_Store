import React, { Fragment } from 'react'
import Box from '@mui/material/Box'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home';
import Brand from './components/pages/Brand'
import About from './components/pages/About'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'
import AppState from './context/AppState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {


  return (
    <AppState>
      <Router>
        <Fragment>
          <Header />
          <Box>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="brands" element={<Brand />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
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

