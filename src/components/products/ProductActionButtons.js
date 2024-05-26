import React, { useContext } from 'react'
import { ButtonGroup, Button } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Appcontext from '../../context/AppContext';
import { useCartContext } from '../../context/cart';
import contextAlert from '../../context/alert/context';
import {useModalContext} from '../../context/modal';


const ProductActionButtons = ({ product, isHovered }) => {

    const { addProduct, openModal } = useModalContext(Appcontext);
    const { addToCart } = useCartContext()
    const { setAlert } = useContext(contextAlert);

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
    }
    const hoverStyled = {
        transform: isHovered ? 'translateY(-15px)' : 'translateY(-10px)',
        visibility: isHovered ? 'visible' : 'hidden',
        opacity: isHovered ? '1' : '0',
        '&:hover': { bgcolor: '#ff7800', border: 'none' }
    }
    const addDefaultStyle = (style) => {

        return { ...defaultStyle, ...style, ...hoverStyled }

    }
    const quickViewButtonStyle = addDefaultStyle({
        width: '20%',
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in, visibility 300ms ease-in-out',
        transitionDelay: '300ms'
    })
    const addToCartButtonStyle = addDefaultStyle({
        width: '60%',
        borderLeft: '1px solid white',
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, visibility 400ms ease-in-out',
        transitionDelay: '600ms',
    })
    const compareButtonStyle = addDefaultStyle({
        width: '21%',
        borderLeft: '1px solid white',
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, visibility 600ms ease-in-out',
        transitionDelay: '800ms',

    })

    return (

        <ButtonGroup orientation="horizontal" size="large"
            sx={{
                width: '100%',
                transform: 'translateY(15px)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            }}>

            <Button onClick={handleViewModal} startIcon={<VisibilityIcon />} sx={quickViewButtonStyle} />

            <Button onClick={handleCart} sx={addToCartButtonStyle}>ADD TO CART</Button>

            <Button sx={compareButtonStyle} startIcon={<CompareArrowsIcon />} />

        </ButtonGroup>
    )
}

export default ProductActionButtons
