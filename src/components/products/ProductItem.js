import React, { useContext, useState } from 'react';
import { Grid, Typography, Box, Rating, Button, ButtonGroup, Stack } from '@mui/material'
import context from '../../context/AppContext'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';



const ProductItem = ({ product }) => {

    const { name, img, price, rating, brand } = product
    const [isHovered, setHovered] = useState(false)
    const { addToCart,addProduct } = useContext(context);

    let shoeName = name.slice(0, 14)

    function handleHover() {
        if (isHovered) {
            setHovered(false)
        } else {
            setHovered(true)
        }

    }

    return (

        <Grid item lg={4} md={4} sm={6} xs={12} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <Box width="100%" >
                <img src={img} alt='shoe' width='100%' height={250} style={imgStyle} />
            </Box>

            <ButtonGroup orientation="horizontal" size="large"
                sx={{ width: '100%', ml: '9px', transform: 'translateY(-20px)' }}
            >
                <Button onClick={()=> addProduct(product)} startIcon={<VisibilityIcon />} sx={{
                    variant: 'contained',
                    bgcolor: '#524938',
                    color: 'white',
                    width: '20%',
                    border:'none',
                    transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
                    transition: 'opacity 300ms ease-in,transform 300ms ease-in,visibility 300ms ease-in',
                    visibility: isHovered ? 'visible' : 'hidden',
                    opacity: isHovered ? '1' : '0',
                    '&:hover': { bgcolor: '#ff7800',border:'none' }
                }}></Button>
                <Button onClick={() => addToCart(product)}

                    sx={{
                        variant: 'contained',
                        bgcolor: '#524938',
                        color: 'white',
                        width: '56%',
                        border:'none',
                        borderLeft: '1px solid white',
                        transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
                        transition: 'opacity 400ms ease-in, transform 400ms ease-in-out, visibility 400ms ease-in',
                        transitionDelay: '200ms',
                        visibility: isHovered ? 'visible' : 'hidden',
                        opacity: isHovered ? '1' : '0',
                        '&:hover': { bgcolor: '#ff7800',border:'none' }

                    }}>ADD TO CART</Button>
                <Button sx={{
                    variant: 'contained',
                    backgroundColor: '#524938',
                    color: 'white',
                    width: '20%',
                    border:'none',
                    borderLeft: '1px solid white',
                    transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
                    transition: 'opacity 600ms ease-in,transform 600ms ease-in,visibility 600ms ease-in',
                    visibility: isHovered ? 'visible' : 'hidden',
                    transitionDelay: '200ms',
                    opacity: isHovered ? '1' : '0',
                    '&:hover': { bgcolor: '#ff7800',border:'none' }
                }} startIcon={<CompareArrowsIcon />}></Button>
            </ButtonGroup>

            <Stack direction='column' justifyContent='space-evenly'>

                <Box sx={itemContentStyle}>
                    <Typography variant='h6' color="#1c1c1c" fontWeight='400' fontSize='1rem'>
                        {shoeName}
                    </Typography>

                    <Typography
                        variant='body1'
                        color='primary'>
                        $ {price}
                    </Typography>
                </Box>

                <Box sx={star$brand_sx}>
                    <Rating value={rating} size='small' readOnly />
                    <Typography variant='body1' fontSize='14px' fontWeight='300' >
                        {brand}
                    </Typography>
                </Box>

            </Stack>

        </Grid>

    )
}
const itemContentStyle = {
    pt: '1.5rem',
    pb: '1rem',
    pr: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}
const star$brand_sx = {
    pt: '0rem',
    pb: '0.5rem',
    pr: '0.4rem',
    ml: '-0.23rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const imgStyle = {
    borderRadius: '0.8rem',
    objectFit: 'cover',

}

export default ProductItem;
