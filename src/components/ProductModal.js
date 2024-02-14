import React from 'react'
import { Box, Stack, Modal, Grid, Typography, ButtonGroup, Button } from '@mui/material'
import hero from '../components/hero2.jpeg'

const ProductModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 900,
                    overflow: 'hidden',
                    height: 390,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                }}>

                    <Grid container>

                        <Grid item lg={6} md={6} sm={6} xs={5}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uStY5nioO6w7Bc7tqzodcfy2EVmVpfCjOQ&usqp=CAU' width='100%' height='390' alt='hero' />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={5}>
                            <Box p={2.5}>

                                <Typography variant='h4' component='h3' mb={1.3} fontSize={30} fontWeight={500}>Jordan 4 Thund</Typography>
                                <Typography variant='h6' fontWeight={300} component='h4'>$45.00 USD</Typography>

                                <Box mt={2}>
                                    <Stack >
                                        <ButtonGroup>
                                            <Button sx={{
                                                variant: 'contained',
                                                backgroundColor: '#f7f7f7',
                                                color: '#696969',
                                                width: '12%',
                                                border: 'none',
                                                py: 1.2,
                                                px: 3,
                                                '&:hover': { border: 'none', bgcolor: '#e5e5e5' }

                                            }}>-</Button>
                                            <Button sx={{
                                                variant: 'contained',
                                                backgroundColor: '#f7f7f7',
                                                color: '#696969',
                                                width: '12%',
                                                px: 3,
                                                py: 1.2,
                                                border: 'none',
                                                '&:hover': { border: 'none', bgcolor: '#e5e5e5' }

                                            }}>1</Button>
                                            <Button sx={{
                                                variant: 'contained',
                                                backgroundColor: '#f7f7f7',
                                                color: '#696969',
                                                py: 1.2,
                                                px: 3,
                                                width: '12%',
                                                border: 'none',
                                                '&:hover': { border: 'none', bgcolor: '#f7f7f7' }

                                            }}>+</Button>
                                        </ButtonGroup>

                                    </Stack>
                                    <Button fullWidth variant="contained" size="large" sx={{
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

        </div>
    )
}

export default ProductModal