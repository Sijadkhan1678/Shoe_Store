import React, { Fragment } from 'react'
import { Box, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
const NavigationDrawer = ({ open, toggleDrawer }) => {

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
                        <ListItem> <NavLink to='/' style={style} ><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary='Home' /></NavLink></ListItem>
                        <ListItem><NavLink to='/brands' style={style}><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary='Brand' /></NavLink></ListItem>
                        <ListItem><NavLink to='/about' style={style}><ListItemText sx={{ transition: 'color 200ms ease-in', '&:hover': { color: 'red' } }} primary='About' /></NavLink></ListItem>
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