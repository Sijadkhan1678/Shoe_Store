import React,{useContext} from 'react';
import {Box,Stack,Badge,IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from './logo.jpg'
import {NavLink} from 'react-router-dom'
import context from '../../context/AppContext'

const Header = () => {
  
  const {cart} = useContext(context)
   return (
        <Box p={4} px={8} >
           <Stack direction='row' justifyContent='space-between' 
           alignItems='center'>
             <Box width='10px'>
             <img width='40px' src={logo} alt='logo'/>
             </Box>
             <Stack direction='row' justifyContent='space-between'
             width='30%'>
             <NavLink to='/' style={style}>Home</NavLink>
             <NavLink to='/brands' style={style}>Brands</NavLink>
             <NavLink to='/about' style={style}>About</NavLink>
             </Stack>
             <Box width='13%' > 

        <IconButton
              aria-label='cart' 
              size='large'
              p={5}  >
          <NavLink style={{color:'orange'}} to='/cart'>
           <Badge badgeContent={cart.length}
                  color='primary'>
                  
            <ShoppingCartIcon  />
      
           </Badge>
           </NavLink>
        </IconButton>
     
             </Box>
            </Stack>
        </Box>
      
        )
  
}
const style = ({isActive}) => {
 return { fontWieght: '800px',
  fontSize: '1.3rem',
  textDecoration: 'none',
  color: 'orange',
  borderBottom: isActive ? '3px solid orange' :''
 }
}
export default Header;