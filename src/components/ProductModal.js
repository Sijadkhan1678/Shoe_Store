import React from 'react'
import { Box, Modal, Grid, Typography, ButtonGroup, Button, useMediaQuery, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import contextAlert from '../context/alert/Context';
import { useCartContext } from '../context/cart'
import context from '../context/AppContext'


const ProductModal = () => {

    const { product, modalOpen, closeModal } = React.useContext(context);
    const { addToCart } = useCartContext()
    const { setAlert } = React.useContext(contextAlert);
    const [quantity, setQuantity] = React.useState(1);

    const handleProductQuantity = (type) => {

        if (type === 'increase') {
            setQuantity(quantity + 1)
        }
        if (type === 'decrease') {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }

        }
    }
    const handleClose = () => { closeModal(false); setQuantity(1) }

    const handleAddToCart = () => {

        addToCart({ ...product, quantity }, 'modal_view')
        setAlert('Successfully Add To Cart')
    }

    const xs = 600;
    const sm = 900;
    const md = 1200;
    // const lg = 1536;

    const isMobile = useMediaQuery(`(max-width: ${xs}px)`);
    const isSmall = useMediaQuery(`(max-width: ${sm}px)`);
    const isLarge = useMediaQuery(`(min-width: ${md}px)`);

    const imageStyle = {
        width: '100%',
        maxWidth: isLarge ? 700 : '100%',
        height: isLarge ? 450 : (isSmall ? (isMobile ? 350 : 450) : 450),
        objectFit: 'cover'
    };

    const buttonDefaultStyle = {
        variant: 'contained',
        width: '12%',
        color: '#696969',
        py: 1.2,
        px: 3,
        backgroundColor: '#f7f7f7',
        border: 'none',
        '&:hover': { border: 'none', bgcolor: '#e5e5e5' }
    }

    return (

        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { lg: 900, md: 900, sm: '90%', xs: '80%' },
                overflowY: { lg: 'hidden', md: 'hidden', sm: 'hidden', xs: 'scroll' },
                height: { lg: 450, sm: 450, xs: 450 },
                bgcolor: 'background.paper',
                boxShadow: 24,
            }}>

                <Grid container>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        {product && (
                            <img src={product.img} style={imageStyle} alt={product.name} />
                        )}

                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Box sx={{ position: 'absolute', right: 8, top: 3 }}><IconButton onClick={handleClose}><CloseIcon /></IconButton></Box>
                        <Box p={2.5}>


                            {product && (<Typography variant='h4' component='h3' mb={1.3} fontSize={30} fontWeight={500}>{product.name}</Typography>)}
                            {product && (<Typography variant='h6' fontWeight={300} component='h4'>${product.price} USD</Typography>)}

                            <Box mt={2}>

                                <ButtonGroup>

                                    <Button onClick={() => handleProductQuantity('decrease')} sx={{ ...buttonDefaultStyle }}>-</Button>

                                    <Button disableRipple sx={{
                                        ...buttonDefaultStyle,
                                        cursor: 'default',
                                        '&:hover': { border: 'none', bgcolor: '#f7f7f7' }

                                    }}>{quantity}</Button>

                                    <Button onClick={() => handleProductQuantity('increase')} sx={{ ...buttonDefaultStyle, }}>+</Button>

                                </ButtonGroup>


                                <Button fullWidth onClick={handleAddToCart} variant="contained" size="large" sx={{
                                    color: "white",
                                    bgcolor: "#524938",
                                    '&:hover': { bgcolor: '#ff7800' },
                                    boxShadow: 'none',
                                    display: 'block',
                                    borderRadius: '0px',
                                    my: 2.5
                                }}>Add To Cart</Button>
                            </Box>

                            <Box mt={3}>
                                <Typography variant='h4' fontWeight={500} component='h3' mb={2}>Description</Typography>
                                <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor...</Typography>

                            </Box>

                        </Box>

                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default ProductModal
