import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart';
import { Box, Stack, Badge, IconButton, } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer'
import Logo from './Logo'


const Header = () => {

    const [currentNavItemHovered, setCurrentNavItemHovered] = useState(undefined)
    const [navActiveItem, setNavActiveItem] = useState('Home')
    const currentLocation = useLocation().pathname
    const [isHovered, setHovered] = useState(false)
    const [open, setOpen] = useState(false)
    const { item } = useCartContext();

    const toggleDrawer = () => { setOpen(!open) }

    const setCurrentItemHoveredEffect = (e) => {
        setHovered(true);
        setCurrentNavItemHovered(e.target.textContent)
    }

    return (

        <Box bgcolor={currentLocation === '/' ? '#eeeeee' : 'white'} py={5} px={{ xs: 2, sm: 4, md: 8, lg: 10 }}>

            <NavDrawer open={open} toggleDrawer={toggleDrawer} />

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

                <Logo />

                <Stack direction='row' sx={{
                    justifyContent: 'space-between',
                    display: { xs: 'none', sm: 'flex' },
                    width: { sm: '50%', md: '30%', lg: '30%' },
                    height: 30
                }}>

                    <NavLink to='/' style={isHovered && currentNavItemHovered === 'Home' && navActiveItem !== "Home" ? hoverStyled : style} onClick={() => setNavActiveItem('Home')} onMouseEnter={setCurrentItemHoveredEffect} onMouseLeave={() => setHovered(false)}>Home</NavLink>
                    <NavLink to='/brands' style={isHovered && currentNavItemHovered === 'Brand' && navActiveItem !== "Brand" ? hoverStyled : style} onClick={() => setNavActiveItem('Brand')} onMouseEnter={setCurrentItemHoveredEffect} onMouseLeave={() => setHovered(false)}>Brand</NavLink>
                    <NavLink to='/about' style={isHovered && currentNavItemHovered === 'About' && navActiveItem !== "About" ? hoverStyled : style} onClick={() => setNavActiveItem('About')} onMouseEnter={setCurrentItemHoveredEffect} onMouseLeave={() => setHovered(false)}>About</NavLink>

                </Stack>

                <Box maxWidth='13%'>
                    <NavLink style={{ color: 'black' }} to='/cart' onClick={() => setNavActiveItem('cart')}>

                        <Badge badgeContent={item.length || '0'} color='primary'> <ShoppingCartOutlinedIcon /> </Badge>

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