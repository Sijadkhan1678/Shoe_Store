import React, { useState } from 'react';
import { Grid, Typography, Box, Rating, Stack } from '@mui/material'
import ProductActionButton from './ProductActionButtons';
import { Link } from 'react-router-dom'


const ProductItem = ({ product }) => {

    const [isHovered, setHovered] = useState(false)
    const { id, name, img, price, rating, } = product

    function handleHover() { setHovered(!isHovered) }


    return (
        <Grid item lg={3} md={4} sm={4} xs={6} onMouseEnter={handleHover} onMouseLeave={handleHover}>

            <Box sx={{ position: 'relative', overflow: 'hidden', height: { md: 215, xs: 170 }, }} >
                <Link to={`/product/${id}`} style={linkStyle} >
                    <img src={img} alt={name} style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: '0.8rem',
                        borderTopRightRadius: '0.8rem',
                        borderBottomLeftRadius: '0.8rem',
                        borderBottomRightRadius: '0.8rem',
                        objectFit: 'cover',
                    }} />

                </Link>
                <ProductActionButton product={product} isHovered={isHovered} />
            </Box>

            <Stack direction='column' justifyContent='space-evenly' mt={2}>
                <Link to={`/product/${id}`} style={linkStyle} >
                    <Box px={0.5}>
                        <Typography component="h5" sx={{ color: "#1c1c1c", fontSize: { sm: 18, xs: 16 }, fontWeight: 700, mb: 0.5 }}   >
                            {name}
                        </Typography>

                        <Rating value={rating} readOnly sx={{ fontSize: 16, color: 'orange' }} />

                        <Typography component='h6' sx={{ color: '#1c1c1c', fontSize: { xs: 20 }, fontWeight: 700 }}>
                            ${price}
                        </Typography>
                    </Box>
                </Link>
            </Stack>

        </Grid>
    )
}
const linkStyle = {
    textDecoration: 'none',
    color: 'black',
}

export default ProductItem;
