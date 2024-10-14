import React, { useState, useLayoutEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart';
import { Box, Stack, Badge, IconButton, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer'
import Logo from './Logo'


const Header = () => {
    

    useLayoutEffect(() => {
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            
            if (currentScrollY > 70) {
                setVisible(true);
            } else if(currentScrollY < 30){
                
                setVisible(false);
            }
            
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    },  [])
    
    const [currentNavItemHovered, setCurrentNavItemHovered] = useState(undefined)
    const [navActiveItem, setNavActiveItem] = useState('Home')
    const currentLocation = useLocation().pathname
    const [isHovered, setHovered] = useState(false)
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false);
    const { items, openDrawer } = useCartContext();

    const toggleDrawer = () => { setOpen(!open) }

    const setCurrentItemHoveredEffect = (e) => {
        setHovered(true);
        setCurrentNavItemHovered(e.target.textContent)
    }

    const links = [
        { text: 'Home', path: '/' },
        { text: 'Shop', path: '/shop' },
        { text: 'Men', path: '/men' },
        { text: 'Women', path: '/women' },
        { text: 'About', path: 'About' },
    ]

    return (

        <Box sx={{
            backgroundColor: currentLocation === '/' ? '#eeeeee' : 'white',
            transition: 'all 1s cubic-bezier(0.25, 0.8, 0.25, 1)',
            boxShadow: visible
              ? 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
              : 'none',
            position: visible ? 'fixed' : 'static',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 1200,
            py: 2.5,
            px: { lg: 12, md: 8, sm: 4, xs: 3 },
            animation: visible && 'slideDown 1s ease', 
            '@keyframes slideDown': {
              '0%': {

                transform: 'translateY(-100%)',

              },
              '100%': {
                transform: 'translateY(0%)',
              },
            },
          }}>

            <NavDrawer open={open} toggleDrawer={toggleDrawer} />

            <Stack direction='row' justifyContent='space-between' alignItems='center'>

                <IconButton

                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{ display: { md: 'none', sm: 'none' }, }}>

                    <MenuIcon />

                </IconButton>

                <Logo />

                <Stack direction='row'
                    sx={{
                        justifyContent: 'space-between',
                        display: { sm: 'flex', xs: 'none', },
                    }}>

                    {links.map(link => {

                        return (
                            <ListItem sx={{ '&:hover': { color: 'cyan' } }}>
                                <NavLink
                                    to={link.path} style={isHovered && currentNavItemHovered === link.text && navActiveItem !== link.text ? hoverStyled : style}
                                    onClick={() => setNavActiveItem(link.text)} onMouseEnter={setCurrentItemHoveredEffect}
                                    onMouseLeave={() => setHovered(false)}>
                                    {link.text}
                                </NavLink>
                            </ListItem>
                        )
                    })}

                </Stack>

                <Box>
                    <IconButton sx={{ color: '#1c1c1c', transition: 'all 250ms ease-in', '&:hover': { color: '#ff7800', transform: 'scale(1.1)' } }} onClick={() => openDrawer()}>

                        <Badge badgeContent={items.length || '0'} color='warning'> <ShoppingCartOutlinedIcon /> </Badge>

                    </IconButton>

                </Box>

            </Stack>
        </Box>
    )
}
const style = ({ isActive }) => {
    return {
        fontWieght: 700,
        fontSize: 18,
        textDecoration: 'none',
        color: isActive ? '#ff7800' : 'black',
        borderBottom: isActive ? '2px solid black' : '',


    }
}
const hoverStyled = {
    fontWieght: 700,
    fontSize: 18,
    textDecoration: 'none',
    color: '#ff7800',

}

export default Header;

