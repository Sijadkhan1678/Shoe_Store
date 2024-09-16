import React from 'react'
import { Box,List,ListItemText,Divider, Typography } from '@mui/material'
import {BrandList} from './BrandList'
import {PriceRange} from './PriceRange'

export const ProductFilter = () => {

    return (
        <Box /*width="20%"*/  /*border="1px solid whitesmoke"*/ pr={4} display={{lg:'block',xs:'none'}}>
         <Typography variant='h1' fontSize={20} fontWeight={700}>Filter</Typography>   
        <List>
          <ListItemText primary="BRAND" primaryTypographyProps={{fontSize:14,fontWeight:700,}}/>
            <BrandList />
            <Box mb={1} />
            <Divider />
            <ListItemText primary="PRICE" primaryTypographyProps={{my:2,fontSize:14,fontWeight:700,}}/>
            <PriceRange />
        </List>
        </Box>
    )
}