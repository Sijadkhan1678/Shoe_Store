import React, { Fragment, useState } from 'react'
import { SwipeableDrawer,Box, List, ListItemText, Divider, Typography } from '@mui/material'
import { BrandList } from './BrandList'
import { PriceRange } from './PriceRange'
import {useProductContext} from '../../context/product'

const FilterDrawer = () => {
    // const [open, setOpen] = useState(false)
    const {open,closeDrawer} = useProductContext()
    const toggleCartDrawer = () => {
        // setOpen(!open)
    }
    return (
        <Fragment>
            <SwipeableDrawer open={open} anchor="left" onClose={closeDrawer}>

                <Box
                    sx={{ width: 300 }}
                    role="presentation"
                >
                    <Box sx={{ px: 4, py: 3 }}>
                        <Box /*width="20%"*/  /*border="1px solid whitesmoke"*/  /*display={{ lg: 'block', xs: 'none' }}*/>
                            <Typography variant='h1' fontSize={24} fontWeight={700}>Filter</Typography>

                            <List >
                            
                                <ListItemText primary="BRAND" primaryTypographyProps={{ mt: 3, fontSize: 16, fontWeight: 700, }} />

                                <BrandList />
                                <Box mb={1.5} />
                                <Divider />
                                <ListItemText primary="PRICE" primaryTypographyProps={{ my: 2, fontSize: 16, fontWeight: 700, }} />
                                <PriceRange />
                            </List>
                        </Box>
                    </Box>

                </Box>
            </SwipeableDrawer>
        </Fragment>
    )
}

export default FilterDrawer