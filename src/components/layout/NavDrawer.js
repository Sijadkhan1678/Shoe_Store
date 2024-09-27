import React, { Fragment } from 'react'
import { Box, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
const NavigationDrawer = ({ open, toggleDrawer }) => {
const links = [
        { text: 'Home', path: '/' },
        { text: 'Shop', path: '/shop' },
        { text: 'Men', path: '/men' },
        { text: 'Women', path: '/women' },
        { text: 'About', path: 'About' },
    ]
    return (
        <Fragment>
            <SwipeableDrawer open={open} onOpen={toggleDrawer} onClose={toggleDrawer}>

                <Box
                    sx={{ width: 200, textAlign: 'center' }}
                    role="presentation"
                    onClick={toggleDrawer}
                //   onKeyDown={toggleDrawer}
                >
                    <List>
                    {links.map(link=>(
  <ListItem> <NavLink to={link.path} style={style} ><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary={link.text} /></NavLink></ListItem>
               ))}
          </List>
                </Box>
            </SwipeableDrawer>
        </Fragment>
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


export default NavigationDrawer