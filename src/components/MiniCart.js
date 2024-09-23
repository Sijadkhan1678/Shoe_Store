import React, { Fragment, useState } from 'react'
import { Box, Stack,SwipeableDrawer, Divider,List, ListItem, ListItemText, Typography,Button } from '@mui/material'
import {Link} from 'react-router-dom'
const MiniCart = () => {
    const [open, setOpen] = useState(true)
    const toggleCartDrawer = () => {
        // setOpen(!open)
    }
    return (
        <Fragment>
            <SwipeableDrawer open={open} anchor="right" onOpen={toggleCartDrawer} onClose={toggleCartDrawer}>

                <Box
                    sx={{ width: 350 }}
                    role="presentation"
                    onClick={toggleCartDrawer}
                >
                    <Stack sx={{px: 3, py: 3, }}>
                    <Box>

                    <Typography components="h3" sx={{
                        fontSize:22,
                        fontWeight:700,
                        // textAlign:'center'
                    }}>Shopping Cart</Typography>
                    </Box>
                    <Divider />
                    <Box>
                        
                    </Box>
                    <Box>
                    <Button fullWidth component={Link} to='/cart/checkout' variant="contained" size="large"
                            sx={{
                                p: '1rem',
                                bgcolor: "#524938",
                                '&:hover': { bgcolor: '#ff7800' }
                            }}
                        > Proceed To Checkout </Button>
                    </Box>
                    </Stack>
                </Box>
            </SwipeableDrawer>
        </Fragment>
    )
}

export default MiniCart