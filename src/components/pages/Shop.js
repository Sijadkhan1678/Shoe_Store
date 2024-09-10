import React from 'react';
import { useProductContext } from '../../context/product'

import ProductItem from '../products/ProductItem'
import { Container, Box,Stack, Grid, Typography } from '@mui/material'
import {ProductFilter} from '../filter'

export const Shop = () => {

    const { products, filterProducts, currentBrand } = useProductContext();

    const selectedProducts = currentBrand === 'All' ? products : filterProducts

    return (
        <Box mt={6} px={10}>

                {/* <Typography variant='h5' fontSize="2rem" fontWeight="bold" >
                    Brands
                </Typography> */}
                <Stack direction='row' gap={3}>
                <ProductFilter />

                <Grid container justifyContent='space-between' spacing={6}>
                    {
                        selectedProducts.map(product => <ProductItem key={product.id} product={product} />)
                    }
                </Grid>
                </Stack>

        </Box>
    )
}

