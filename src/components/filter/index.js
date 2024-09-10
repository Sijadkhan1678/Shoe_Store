import React from 'react'
import { Box,List,ListItemText,Divider } from '@mui/material'
import {BrandList} from './BrandList'
import {PriceRange} from './PriceRange'

export const ProductFilter = () => {

    return (
        <Box width="20%" pl={2} border="1px solid whitesmoke">
        <List>
          <ListItemText primary="Brand" primaryTypographyProps={{fontSize:18,fontWeight:'medium'}}/>
            <BrandList />
            <Divider />
            <ListItemText primary="Price" primaryTypographyProps={{my:2,fontSize:18,fontWeight:'medium'}}/>
            <PriceRange />
        </List>
        </Box>
    )
}