import React, { useContext, useState } from 'react';
import { Box, Stack, Typography, Badge, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import context from '../../context/AppContext'

const Header = () => {

    const { cart } = useContext(context)
    const [open, setOpen] = useState(false)
    const [navActiveItem, setNavActiveItem] = useState('Home')
    const [isHovered, setHovered] = useState(undefined)
    const [currentNavItemHovered, setCurrentNavItemHovered] = useState(undefined)
    const toggleDrawer = () => setOpen(!open)

    const setCurrentItemHoveredEffect = (e) => {

        setHovered(true);
        setCurrentNavItemHovered(e.target.textContent)

    }

    return (

        <Box bgcolor='#eeeeee' py={5} px={{ xs: 2, sm: 4, md: 8, lg: 10 }}>
            <SwipeableDrawer open={open} onOpen={toggleDrawer} onClose={toggleDrawer}>

                <Box
                    sx={{ width: 200, textAlign: 'center' }}
                    role="presentation"
                    onClick={toggleDrawer}
                //   onKeyDown={toggleDrawer}
                >
                    <List>

                        <ListItem> <NavLink to='/' style={style} ><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary='Home' /></NavLink></ListItem>
                        <ListItem><NavLink to='/brands' style={style}><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary='Brand' /></NavLink></ListItem>
                        <ListItem><NavLink to='/about' style={style}><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary='About' /></NavLink></ListItem>
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

                    <NavLink to='/' style={isHovered && currentNavItemHovered === 'Home' && navActiveItem !== "Home" ? hoverStyled : style} onClick={() => setNavActiveItem('Home')} onMouseEnter={setCurrentItemHoveredEffect} onMouseLeave={() => setHovered(false)}>Home</NavLink>
                    <NavLink to='/brands' style={isHovered && currentNavItemHovered === 'Brand' && navActiveItem !== "Brands" ? hoverStyled : style} onClick={() => setNavActiveItem('Brands')} onMouseEnter={setCurrentItemHoveredEffect} onMouseLeave={() => setHovered(false)}>Brand</NavLink>
                    <NavLink to='/about' style={isHovered && currentNavItemHovered === 'About' && navActiveItem !== "About" ? hoverStyled : style} onClick={() => setNavActiveItem('About')} onMouseEnter={setCurrentItemHoveredEffect} onMouseLeave={() => setHovered(false)}>About</NavLink>

                </Stack>

                <Box maxWidth='13%'>
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
        fontWieght: 500,
        fontSize: '1.2rem',
        textDecoration: 'none',
        transition: 'border 100ms ease-in',
        color: 'black',
        borderBottom: isActive ? '2px solid black' : ''
    }
}
const hoverStyled = {

    fontWieght: 500,
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: '#ff7800',
}


export default Header;
