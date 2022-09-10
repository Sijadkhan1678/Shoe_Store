import React,{Fragment} from 'react'
import Container from '@mui/material/Container'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const  App = () => {

  
  return (
   <Router>
     <Fragment>
      <Header />
    
  <Container maxWidth="md" >
    <Routes>
      <Route path="/" element={<Home />}>
        
      </Route>
    </Routes>
   </Container>
  
    </Fragment>
   </Router>
    
  );
}

export default App;
