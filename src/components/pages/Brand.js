import React from 'react';
import { useProductContext } from '../../context/product'
import BrandItem from '../BrandItem'
import ProductItem from '../products/ProductItem'
import { Container, Box, Grid, Typography } from '@mui/material'

const Brands = () => {

    const { products, filterProducts, currentBrand } = useProductContext();

    const selectedProducts = currentBrand === 'All' ? products : filterProducts

    return (
        <Box mt={6}>
            <Container>
                <Typography variant='h5' fontSize="2rem" fontWeight="bold" >
                    Brands
                </Typography>
                <BrandItem />
                <Grid container justifyContent='space-between' spacing={4}>
                    {
                        selectedProducts.map(product => <ProductItem key={product.id} product={product} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}
export default Brands;
