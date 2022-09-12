import React from 'react';
import {Box,Stack,Badge,IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from './logo.jpg'
import {Link} from 'react-router-dom'

const Header = () => {
  
   return (
        <Box p={4} px={8} >
           <Stack direction='row' justifyContent='space-between' 
           alignItems='center'>
             <Box width='10px'>
             <img width='40px' src={logo} alt='logo'/>
             </Box>
             <Stack direction='row' justifyContent='space-between'
             width='30%'>
             <Link to='/' style={style}>Home</Link>
             <Link to='/brands' style={style}>Brands</Link>
             <Link to='/about' style={style}>About</Link>
             </Stack>
             <Box width='13%' > 

        <IconButton
              aria-label='cart' 
              size='large'
              p={5}  >
          <Link style={style} to='/cart'>
           <Badge badgeContent={3}
                  color='primary'>
                  
            <ShoppingCartIcon  />
      
           </Badge>
           </Link>
        </IconButton>
     
             </Box>
            </Stack>
        </Box>
      
        )
  
}
const style={
  fontWieght: '800px',
  fontSize: '1.3rem',
  textDecoration: 'none',
  color: 'orange',
  
}
export default Header;