import React, { useContext } from 'react'
import { ButtonGroup, Button } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Appcontext from '../../context/AppContext';


const ProductActionButtons = ({ product, isHovered }) => {

    const { addToCart, addProduct, openModal } = useContext(Appcontext);

    function handleViewModal() {

        addProduct(product)
        openModal()
    }
    const defaultStyle = {
        variant: 'contained',
        bgcolor: '#524938',
        color: 'white',
        border: 'none',
    }
    const hoverStyled = {
        transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
        visibility: isHovered ? 'visible' : 'hidden',
        opacity: isHovered ? '1' : '0',
        '&:hover': { bgcolor: '#ff7800', border: 'none' }
    }
    const addDefaultStyle = (style) => {

        return { ...defaultStyle, ...style, ...hoverStyled }

    }
    const quickViewButtonStyle = addDefaultStyle({
        width: '20%',
        transition: 'opacity 300ms ease-in, transform 300ms ease-in, visibility 300ms ease-in',
    })
    const addToCartButtonStyle = addDefaultStyle({
        width: '56%',
        borderLeft: '1px solid white',
        transition: 'opacity 400ms ease-in, transform 400ms ease-in-out, visibility 400ms ease-in',
        transitionDelay: '200ms',
    })
    const compareButtonStyle = addDefaultStyle({
        width: '20%',
        borderLeft: '1px solid white',
        transition: 'opacity 600ms ease-in, transform 600ms ease-in, visibility 600ms ease-in',
        transitionDelay: '200ms',

    })

    return (

        <ButtonGroup orientation="horizontal" size="large"
            sx={{
                width: '100%',
                ml: '9px',
                transform: 'translateY(-20px)'
            }}>

            <Button onClick={handleViewModal} startIcon={<VisibilityIcon />} sx={quickViewButtonStyle} />

            <Button onClick={() => addToCart(product)} sx={addToCartButtonStyle}>ADD TO CART</Button>

            <Button sx={compareButtonStyle} startIcon={<CompareArrowsIcon />} />

        </ButtonGroup>
    )
}

export default ProductActionButtons
