import React, { useContext, useState } from 'react';
import { Box, Stack,Typography ,Badge, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from 'react-router-dom'
import context from '../../context/AppContext'

const Header = () => {

    const { cart } = useContext(context)
    const [open, setOpen] = useState(false)
    const toggleDrawer = () => setOpen(!open)

    return (

        <Box bgcolor='#eeeeee'  py={5} px={{ xs: 2, sm: 4, md: 8, lg: 10 }}>
            <SwipeableDrawer open={open} onOpen={toggleDrawer} onClose={toggleDrawer}>

                <Box
                    sx={{ width: 200 }}
                    role="presentation"
                    onClick={toggleDrawer}
                //   onKeyDown={toggleDrawer}
                >
                    <List>
                        <ListItem> <NavLink to='/' style={style}><ListItemText primary='Home' /></NavLink></ListItem>
                        <ListItem><NavLink to='/brands' style={style}><ListItemText primary='Brand' /></NavLink></ListItem>
                        <ListItem><NavLink to='/about' style={style}><ListItemText primary='About' /></NavLink></ListItem>
                    </List>

                </Box>
            </SwipeableDrawer>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>

                <IconButton

                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{
                        display: { md: 'none', sm: 'none' }, 
                        mr: 2,
                    }}>

                    <MenuIcon />
                    
                </IconButton>

                <Box width='50px' marginTop="6px">
                    <Typography variant='h4' color='black' fontWeight={800}>Shoefy</Typography>
                </Box>

                <Stack direction='row' sx={{
                    justifyContent: 'space-between',
                    display: { xs: 'none', sm: 'flex' },
                    width: { sm: '50%', md: '30%', lg: '30%' },
                }}>

                    <NavLink to='/' style={style}>Home</NavLink>
                    <NavLink to='/brands' style={style}>Brand</NavLink>
                    <NavLink to='/about' style={style}>About</NavLink>

                </Stack>

                <Box maxWidth='13%' >
                <NavLink style={{ color: 'black' }} to='/cart'>
  
                    <Badge badgeContent={cart.length} color='primary'> <ShoppingCartOutlinedIcon /> </Badge>

                </NavLink>

                </Box>

            </Stack>
        </Box>

    )

}
const style = ({ isActive }) => {
    return {
        fontWieght: '500',
        fontSize: '1.2rem',
        textDecoration: 'none',
        color: 'black',
        borderBottom: isActive ? '2px solid black' : ''
    }
}
export default Header;
