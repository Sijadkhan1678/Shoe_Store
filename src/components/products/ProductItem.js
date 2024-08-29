import React, { useState } from 'react';
import { Grid, Typography, Box, Rating, Stack } from '@mui/material'
import ProductActionButton from './ProductActionButtons';
import { Link } from 'react-router-dom'


const ProductItem = ({ product }) => {

    const [isHovered, setHovered] = useState(false)
    const { id, name, img, price, rating, brand } = product

    function handleHover() { setHovered(!isHovered) }

    return (

        <Grid item lg={3} md={4} sm={4} xs={12} onMouseEnter={handleHover} onMouseLeave={handleHover}>


            <Box sx={{ position: 'relative', overflow: 'hidden', /*height: 250*/ }} >
                <Link to={`/product/${id}`} style={linkStyle} >

                    <img src={img} alt='shoe' style={{
                        // width: '100%',
                        width:270,
                        // display: 'block',
                        // height: 300,
                        height:'auto',
                        borderTopLeftRadius: '0.8rem',
                        borderTopRightRadius: '0.8rem',
                        borderBottomLeftRadius: '0.8rem',
                        borderBottomRightRadius: '0.8rem',
                        // aspectRatio: 'auto 270/270',
                        objectFit: 'cover',
                    }} />

                </Link>
                <ProductActionButton product={product} isHovered={isHovered} />

            </Box>

            <Stack direction='column' justifyContent='space-evenly' mt={2}>

                <Link to={`/product/${id}`} style={linkStyle} >
                    <Box>

                        <Typography variant='h5' color="#1c1c1c" fontWeight={700} fontSize={20} mb={0.5}>
                            {name}
                        </Typography>
                        <Rating size='small' value={rating} readOnly sx={{ color: 'orange' }} />


                    </Box>

                    <Box>

                        <Typography variant='h6' color='#c50215' fontWeight={700}>
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
