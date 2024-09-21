import React from 'react'
import { ButtonGroup, Button, IconButton } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../../context/cart';
import { useAlertContext } from '../../context/alert';
import { useModalContext } from '../../context/modal';

const ProductActionButtons = ({ product, isHovered }) => {

    const { addProduct, openModal } = useModalContext();
    const { addToCart } = useCartContext()
    const { setAlert } = useAlertContext();

    function handleViewModal() {

        addProduct(product)
        openModal()
    }
    function handleCart() {

        addToCart(product)
        setAlert('Successfully Add To Cart')
    }

    const defaultStyle = {
        variant: 'contained',
        bgcolor: '#524938',
        color: 'white',
        border: 'none',
        borderRadius: 1,

        // p:'7px 16px',
        // textAlign: 'center'
    }
    const hoverStyled = {
        transform: isHovered ? 'translateY(-50px)' : 'translateY(-10px)',
        visibility: isHovered ? 'visible' : 'hidden',
        opacity: isHovered ? '1' : '0',
        '&:hover': { bgcolor: '#ff7800', border: 'none' }
    }
    const addDefaultStyle = (style) => {

        return { ...defaultStyle, ...style, ...hoverStyled }

    }
    const quickViewButtonStyle = addDefaultStyle({
        width: { md: '20%', sm: '33.333%', },
        pb: 0.6,
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, visibility 300ms ease-in-out',
        transitionDelay: '100ms',
        display: { sm: 'block', xs: 'none' }
    })
    const addToCartButtonStyle = addDefaultStyle({
        width: { md: '60%', xs: '100%' },
        fontSize: 11,
        borderLeft: '1px solid white',
        transition: 'opacity 400ms ease-in-out, transform 300ms ease-in-out, visibility 400ms ease-in-out',
        transitionDelay: '200ms',
        display: { md: 'block', sm: 'none', xs: 'block' }
    })
    const addToCartIconStyle = addDefaultStyle({
        width: '33.333%',
        pb: 0.2,
        '&:hover': { bgcolor: 'red' },
        borderLeft: '1px solid white',
        transition: 'opacity 400ms ease-in-out, transform 300ms ease-in-out, visibility 400ms ease-in-out',
        transitionDelay: '200ms',
        display: { md: 'none', sm: 'block', xs: 'none' }
    })
    const compareButtonStyle = addDefaultStyle({
        width: { md: '21%', sm: '34.3333%' },
        pb: 0.4,
        borderLeft: '1px solid white',
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, visibility 600ms ease-in-out',
        transitionDelay: '300ms',
        display: { sm: 'block', xs: 'none' }
    })

    return (
        <ButtonGroup orientation="horizontal" size="large"
            sx={{
                width: '100%',
                transform: 'translateY(50px)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            }}>

            <IconButton aria-label="quickStyle button" onClick={handleViewModal} sx={quickViewButtonStyle}><VisibilityIcon /></IconButton>
            <Button onClick={handleCart} sx={addToCartButtonStyle}>ADD TO CART</Button>
            <IconButton aria-label="add to cart button" onClick={handleCart} sx={addToCartIconStyle}><AddShoppingCartIcon /></IconButton>
            <IconButton aria-label="compare button" sx={compareButtonStyle}><CompareArrowsIcon /></IconButton>
        </ButtonGroup>
    )
}

export default ProductActionButtons
