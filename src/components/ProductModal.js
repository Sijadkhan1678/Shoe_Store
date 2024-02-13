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
                    width: 800,
                    height: 355,
                    bgcolor: 'background.paper',

                    boxShadow: 24,
                    '&:hover': { bgcolor: 'red' },
                    // p: 2,
                }}>

                    <Grid container>


                        <Grid item lg={6} md={6} sm={6} xs={5}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uStY5nioO6w7Bc7tqzodcfy2EVmVpfCjOQ&usqp=CAU' width='100%' height='355' alt='hero' />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={5}>
                            <Box p={3}>
                                <Typography variant='h4' component='h3' mb={1.3} /*fontSize={28}*/ fontWeight={500}>Jordan 4 Thund</Typography>

                                <Stack direction='row'>
                                    <Typography variant='h6' component='h4'>price</Typography>
                                    <Typography variant='h6' component='h4'></Typography>
                                </Stack>
                                <Box mt={2}>
                                    <Stack >
                                        <ButtonGroup>
                                            <Button sx={{
                                                variant: 'contained',
                                                backgroundColor: '#524938',
                                                color: 'white',
                                                width: '20%',
                                                border: 'none',
                                                borderLeft: '1px solid white',
                                            }}>+</Button>
                                            <Button>1</Button>
                                            <Button>-</Button>
                                        </ButtonGroup>

                                    </Stack>
                                    <Button fullWidth variant="contained" size="large" sx={{
                                        color: "white",
                                        bgcolor: "#524938",
                                        '&:hover': { bgcolor: '#ff7800' },
                                        display: 'block',
                                        borderRadius: '0px'
                                    }}>Add To Cart</Button>
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
