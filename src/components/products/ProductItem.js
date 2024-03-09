import React, { useState } from 'react';
import { Grid, Typography, Box, Rating, Stack } from '@mui/material'
import ProductActionButton from './ProductActionButtons';



const ProductItem = ({ product }) => {

    const [isHovered, setHovered] = useState(false)
    const { name, img, price, rating, brand } = product
    
    function handleHover() { setHovered(!isHovered) }

    return (

        <Grid item lg={4} md={4} sm={6} xs={12} onMouseEnter={handleHover} onMouseLeave={handleHover}>

            <Box width="100%" >
                <img src={img} alt='shoe' width='100%' height={250} style={productImgStyle} />
            </Box>

            <ProductActionButton product={product} isHovered={isHovered} />
            <Stack direction='column' justifyContent='space-evenly'>

                <Box sx={itemContentStyle}>
                    <Typography variant='h6' color="#1c1c1c" fontWeight='400' fontSize='1rem'>
                        {name}
                    </Typography>

                    <Typography
                        variant='body1'
                        color='primary'>
                        $ {price}
                    </Typography>
                </Box>

                <Box sx={itemContentStyle2}>
                    <Rating value={rating} size='small' readOnly sx={{ color: 'black' }} />
                    <Typography variant='body1' fontSize='14px' fontWeight='300' >
                        {brand}
                    </Typography>
                </Box>

            </Stack>

        </Grid>

    )
}
const itemContentStyle = {

    pb: '1rem',
    pr: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}
const itemContentStyle2 = {

    pb: '0.5rem',
    pr: '0.4rem',
    ml: '-0.23rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const productImgStyle = {

    borderRadius: '0.8rem',
    objectFit: 'cover',
}

export default ProductItem;
