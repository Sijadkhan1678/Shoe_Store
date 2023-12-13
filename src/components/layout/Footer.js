 import React from 'react'
 import {Box,Stack,Typography,TextField,Button} from '@mui/material'
 import { Link, NavLink } from 'react-router-dom'
 import logo from './logo.jpg'

 
 const Footer = () => {
   return (
     <Box mt="3rem" pt="3rem" px="0.9rem" bgcolor="#EDF1FF">
         <Stack pt="3rem" px={{lg:"3rem",md:'1.5rem'}}  direction={{lg:'row',md:"row",sm:'column'}} justifyContent="space-between">
            <Box pl={{lg:"15px",sm:'0px',xs:'15px'}} pr="3rem" ml={{lg:'0rem',sm:'0rem'}} mb="3rem">
            <Box width='50px' mb="1.5rem">
             <img width='50px' src={logo} alt='logo'/>
             </Box>
             

             <Box mt="1.5rem">
              <Typography variant='body1'>123 Street, New York, USA</Typography>
              <Typography variant='body1'>info@example.com</Typography>
              <Typography variant='body1'>+012 345 67890</Typography>
              </Box>
            </Box>
            <Stack direction={{lg:'row',sm:'row',sx:'column'}} flex='0 0 66%' justifyContent={{lg:'space-between',md:'space-between',sm:'space-around'}}>
            <Box pl={{lg:'15px',md:"15px",sm:'70px',xs:'15px'}} pr="15px" mb="3rem" ml={{lg:"-80px",md:'-80px',sm:'-80px',xs:'0px'}}>
                <Typography variant='h5' fontSize="1.25rem" color="#2c2c2c" fontWeight={700} marginBottom="1.5rem">
                  Quick Shop
                </Typography>

               <Typography varinat="body1" fontWeight={400}> <NavLink to='/' fontWeight={400} style={style}> Home </NavLink> </Typography>
                <NavLink to="/brands" fontWeight={400} style={style}> Brand  </NavLink>
                <NavLink to="/cart" fontWeight={400} style={style}> Cart</NavLink>
                <NavLink to="/about" fontWeight={400} style={style}> Contact Us </NavLink> 
                <NavLink to="/about" fontWeight={400} style={style}> Shopping Cart </NavLink> 
                
                <NavLink to="/about" fontWeight={400} style={style}> About us </NavLink> 

            </Box>
            <Box pl="15px" mb="3rem">
                <Typography variant="h5" marginBottom="1.5rem" fontSize="1.25rem" fontWeight={700} color="#2c2c2c">
                    Social Links
                </Typography>
                <Typography variant='body1'>
                <NavLink to='Facebook'   style={style}> Facebook </NavLink>
                </Typography>
                
                <NavLink to="/twitter" fontWeight={400}  style={style}> twitter  </NavLink>
                <NavLink to="/Linkdin"  fontWeight={400} style={style}>  Linkdin</NavLink>
                <NavLink to="/instagram" fontWeight={400} style={style}> Instagram </NavLink> 
                <NavLink to="/instagram" fontWeight={400} style={style}> Instagram </NavLink> 
                <NavLink to="/instagram" fontWeight={400} style={style}> Instagram </NavLink> 
                 


            </Box>
            <Box pl={{lg:'30px',md:'30px',sm:"30px",xs:'15px'}} pr={{xs:"1rem"}} mb="3rem">
                <Typography variant="h5" fontSize="1.25rem" fontWeight={700} color="#2c2c2c" marginBottom="1.5rem">
                    Newsletter
                </Typography>
                <Box mb="1rem">
                <TextField fullWidth={{sm:"true"}} label="Your Name"  bgcolor="whitesmoke" />
                </Box>
                <Box mb="1rem">
                <TextField fullWidth={{sm:"true"}} label="Your Email" bgcolor="whitesmoke" />
                </Box>
                
                <Button fullWidth variant="contained" sx={{color:"#000000",bgcolor:"#ffa71f",'&:hover':{color:'whitesmoke'}}}  size="large">Subscribe Now</Button>
        
                
            </Box>
            </Stack>
          
         </Stack>
         <Stack direction="row" flexWrap='wrap' alignItems='center' mx={{lg:'3rem',md:'3rem',sm:'orem'}} py="1.3rem">
         ©  <Typography variant='body1' fontWeight={600} ml={1}> Your Site Name.</Typography>
           <Typography variant="body1" ml={1}>All Rights Reserved. Designed by</Typography>
           <Typography variant='body1' fontWeight={600} ml={1}>HTML Codex</Typography>
          

         </Stack>
     </Box>
   )
 }

 const style = ({isActive}) => {
  return { 
         display:'block',
         fontSize: '1rem',
         marginBottom:'0.8rem',
         textAlign:"left",
         textDecoration: 'none',
         color: '#1c1c1c',
         '&:hover':"#2c2c2c",
  }
 }
 
 
 export default Footer
