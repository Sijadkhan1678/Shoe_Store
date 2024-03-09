import React, { useContext } from 'react'
import { ButtonGroup, Button } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Appcontext from '../../context/AppContext';


const ProductActionButtons = ({  product, isHovered  }) => {

    const { addToCart, addProduct, openModal } = useContext(Appcontext);

    function handleViewModal() {

        addProduct(product)
        openModal()
    }

    return (

        <ButtonGroup orientation="horizontal" size="large"
            sx={{ width: '100%', ml: '9px', transform: 'translateY(-20px)' }}
        >
            <Button onClick={handleViewModal} startIcon={<VisibilityIcon />} sx={{
                variant: 'contained',
                bgcolor: '#524938',
                color: 'white',
                width: '20%',
                border: 'none',
                transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
                transition: 'opacity 300ms ease-in,transform 300ms ease-in,visibility 300ms ease-in',
                visibility: isHovered ? 'visible' : 'hidden',
                opacity: isHovered ? '1' : '0',
                '&:hover': { bgcolor: '#ff7800', border: 'none' }
            }} />
            <Button onClick={() => addToCart(product)}

                sx={{
                    variant: 'contained',
                    bgcolor: '#524938',
                    color: 'white',
                    width: '56%',
                    border: 'none',
                    borderLeft: '1px solid white',
                    transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
                    transition: 'opacity 400ms ease-in, transform 400ms ease-in-out, visibility 400ms ease-in',
                    transitionDelay: '200ms',
                    visibility: isHovered ? 'visible' : 'hidden',
                    opacity: isHovered ? '1' : '0',
                    '&:hover': { bgcolor: '#ff7800', border: 'none' }

                }}>ADD TO CART</Button>
            <Button sx={{
                variant: 'contained',
                backgroundColor: '#524938',
                color: 'white',
                width: '20%',
                border: 'none',
                borderLeft: '1px solid white',
                transform: isHovered ? 'translateY(-24px)' : 'translateY(-10px)',
                transition: 'opacity 600ms ease-in,transform 600ms ease-in,visibility 600ms ease-in',
                visibility: isHovered ? 'visible' : 'hidden',
                transitionDelay: '200ms',
                opacity: isHovered ? '1' : '0',
                '&:hover': { bgcolor: '#ff7800', border: 'none' }
            }} startIcon={<CompareArrowsIcon />} />

        </ButtonGroup>
    )
}

export default ProductActionButtons
