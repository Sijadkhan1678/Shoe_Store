import React, { useContext, useState } from 'react';
import { Box, Stack, Badge, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.jpg'
import { NavLink } from 'react-router-dom'
import context from '../../context/AppContext'

const Header = () => {

    const { cart } = useContext(context)
    const [open, setOpen] = useState(true)
    const toggleDrawer = () => setOpen(!open)

    return (

        <Box p={3} px={{ xs: 2, sm: 4, md: 8, lg: 8 }}>
            <SwipeableDrawer open={open} onClose={toggleDrawer}>

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
                        display: { md: 'none', sm: 'none' }, // Hide on md and larger screens
                        mr: 2,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Box width='50px' marginTop="6px">
                    <img width='40px' src={logo} alt='logo' />
                </Box>

                <Stack direction='row' sx={{
                    display: { xs: 'none', sm: 'flex' }, // Hide on xs, show on sm and above
                    // Adjust spacing for different screen sizes
                    width: { sm: '50%', md: '30%', lg: '30%' },
                    ml: { sm: "0", md: "24rem", lg: "24rem" }
                }}
                    justifyContent='space-between' >

                    <NavLink to='/' style={style}>Home</NavLink>
                    <NavLink to='/brands' style={style}>Brand</NavLink>
                    <NavLink to='/about' style={style}>About</NavLink>

                </Stack>

                <Box maxWidth='13%' >

                    <IconButton aria-label='cart' size='large' p={5}>

                        <NavLink style={{ color: '#e09d51' }} to='/cart'>

                            <Badge badgeContent={cart.length} color='primary'> <ShoppingCartIcon /> </Badge>

                        </NavLink>

                    </IconButton>

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
        color: '#97670f',
        borderBottom: isActive ? '2px solid #b78f46' : ''
    }
}
export default Header;
