import React from 'react';
import { useProductContext } from '../../context/product'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ProductItem from '../products/ProductItem'
import { Container, Box, Stack, Grid, Typography, Select, MenuItem, FormControl, Button, Chip } from '@mui/material'
import { ProductFilter } from '../filter'

export const Shop = () => {

    const { products, filterProducts, currentBrand } = useProductContext();
    const [sortProducts, setSortProducts] = React.useState('');
    const sortOptions = [
        "Best Selling",
        "Alphabetically, A-Z",
        "Alphabetically, Z-A",
        "Price, low to high",
        "Price, high to low",
        "Date, old to new",
        "Date, new to old"]

    const handleChange = (event) => {
        setSortProducts(event.target.value);
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const selectedProducts = currentBrand === 'All' ? products : filterProducts

    return (
        <Box mt={6} px={{ lg: 6, md: 8, sm: 4, xs: 3 }}>

            {/* <Typography variant='h5' fontSize="2rem" fontWeight="bold" >
                    Brands
                </Typography> */}

            <Grid container>
                <Grid item lg={2.5}> <ProductFilter /></Grid>

                <Grid item lg={9.5} md={12}>
                    <Stack direction='row' justifyContent={{ xs: "space-between" }} alignItems='center' mb={5} px={0.5}>

                        <Button startIcon={<FilterAltIcon />}
                            sx={{
                                color: '#0F0F0F',
                                p: 0,
                                m: 0,
                                display: { lg: 'none' }

                            }}
                        >Filter</Button>
                        <Typography component='h4' sx={{ display: { lg: 'block', xs: 'none' }, fontWeight: 700, }}>{40} ITEMS</Typography>

                        <FormControl sx={{ minWidth: 200, }} size="small" >
                            <Select
                                value={sortProducts}
                                onChange={handleChange}
                                // sx={{'& .MuiInputBase-input':{color:'red'}}}
                                displayEmpty
                                inputProps={{ 'aria-label': 'shoe sort' }}>

                                <MenuItem value=""> <em>Sort By</em></MenuItem>
                                {sortOptions.map(option => <MenuItem >{option}</MenuItem>)}

                            </Select>
                        </FormControl>

                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1} mb={5}>
                        {/* <Typography component="p" >Applied Filter: </Typography> */}
                        <Chip label="Addidas" onDelete={handleDelete} />
                        <Chip label="Nike" onDelete={handleDelete} />
                    </Stack>
                    <Grid container columnSpacing={1} rowSpacing={4}>
                        {selectedProducts.map(product => <ProductItem key={product.id} product={product} />)}
                    </Grid>
                </Grid>

            </Grid>

        </Box>
    )
}

