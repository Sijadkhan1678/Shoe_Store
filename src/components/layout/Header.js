import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart';
import { Box, Stack, Badge, IconButton, List, ListItem, ListItemText } from '@mui/material';
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
    const { items } = useCartContext();

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

        <Box bgcolor={currentLocation === '/' ? '#eeeeee' : 'white'} py={5} px={{ lg: 12, md: 8, sm: 4, xs: 3 }}>

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
                    <NavLink style={{ color: 'black', }} to='/cart' onClick={() => setNavActiveItem('cart')}>

                        <Badge badgeContent={items.length || '0'} color='primary'> <ShoppingCartOutlinedIcon /> </Badge>

                    </NavLink>

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