import React from 'react';
import { Box, Stack, Grid, Typography, Button, Chip, Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useProductContext } from '../../context/product'
import ProductSort from '../ProductSort'
import ProductItem from '../products/ProductItem'
import shopBg from './bg-shop.webp'

import { ProductFilter } from '../filter'

const ShopPageHeader = () => {

  const breadcrumbs = [
    <Link to="/" style={{
      color:'white',
      textDecoration:'none',
      fontSize:16
    }}>
      Home
    </Link>,
    <Typography sx={{color:'white', cursor:'pointer'}}>Shop</Typography>,
  ];

  return (
    <Box sx={{
      backgroundImage: `url(${shopBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      textAlign: "center",
      height: 300,
      mb: 6,
    }}>
      <Box sx={{ position: 'absolute', top: 40, left: 0, right: 0 }}>

        <Typography component='h5' sx={{ fontSize: 52, color: 'whitesmoke', fontWeight: 700 }} >SHOP</Typography>

        <Stack spcaing={1} direction="row" justifyContent="center">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>

      </Box>

    </Box>
  )
}
export const Shop = () => {

  const { products, filterProducts, currentBrand } = useProductContext();

  const handleDelete = () => {

    console.info('You clicked the delete icon.');
  };

  const selectedProducts = currentBrand === 'All' ? products : filterProducts

  return (
    <Box mt={2} px={{ lg: 6, md: 8, sm: 4, xs: 3 }}>

      <ShopPageHeader />

      <Grid container>
        <Grid item lg={2.5}>
          <ProductFilter /> {/* product filter component*/}
        </Grid>

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

            <ProductSort />
            
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
