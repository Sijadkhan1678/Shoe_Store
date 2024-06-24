import React from 'react'
import { Dialog, Grid, Box, Stack, DialogTitle, DialogContent, DialogContentText, Button, FormHelperText, Checkbox, InputBase } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import newLetter from './newsletter-img.webp'

const NewsLetterPopup = () => {

    const [open, setOpen] = React.useState(true)

    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth='xl'
        >
            <Grid container>
                <Grid item lg={6} md={6} p={{ md: 2.5, xs: 1.5 }} sx={{
                    display: {
                        md: 'block',
                        sm: 'none',
                        xs: 'none'
                    }
                }}>
                    <img src={newLetter} width='100%' height={490} alt='newsLetter' />
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} pr={{ lg: 4, md: 2, xs: 0 }}>
                    <Box mt={{ md: 6, xs: 0 }}>
                        <DialogTitle id="alert-dialog-title" sx={{
                            textAlign: 'center',
                            fontSize: { lg: 36, md: 34, xs: 27 },
                            fontWeight: { md: 700, xs: 600 },
                            lineHeight: 1.2
                        }}>
                            Get Discount <span style={{ color: 'red' }}>30%</span> Off
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{
                                mb: { md: 4, xs: 2.5 },
                                textAlign: 'center',
                                fontSize: 16,
                                fontWeight: 400,
                            }}>
                                'Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!'
                            </DialogContentText>
                            <Box sx={{
                                px: { md: 2, xs: 3 },
                                py: { md: 2, xs: 1 },
                                // height:44,
                                // textAlign:'center',
                                bgcolor: '#f4f4f4',
                                borderRadius: '50px'
                            }}>
                                <InputBase
                                    fullWidth
                                    // height='10px'
                                    id='email'
                                    type='email'
                                    placeholder="Enter Your Email"
                                    sx={{
                                        color: '#222',
                                        // fontSize:16,
                                        // p:2,
                                        borderRadius: '50px'
                                    }}
                                />
                            </Box>
                            <FormHelperText sx={{ color: 'red', ml: 1, mt: 1.5 }}>please enter your email</FormHelperText>
                        </DialogContent>
                        <Button
                            variant="contained"
                            type='submit'
                            size="large"
                            sx={{
                                color: "white",
                                bgcolor: "#524938",
                                mt: { lg: '30px', md: '30px', xs: '0px' },
                                mb: { lg: '60px', md: '60px', sm: '30px', xs: '5px' },
                                p: { sm: '15px 55px', xs: '8px 40px' },
                                mx: 'auto',
                                display: 'block',
                                borderRadius: '50px',
                                '&:hover': { bgcolor: '#ff7800' },
                            }}>Subscribe</Button>
                        <Stack direction='row' alignItems='center' justifyContent='center'>
                            <Checkbox value='first' color='primary' size='small' sx={{ '&:hover': { color: 'darkgray' } }} />
                            <FormHelperText>Do not show this popup again`</FormHelperText>
                        </Stack>
                    </Box>

                </Grid>
                <Box sx={{
                    position: 'absolute',
                    right: { md: 15, xs: 5 },
                    top: { md: 10, xs: 5 },
                    textAlign: 'center',


                }}>
                    <CloseIcon sx={{
                        color: 'gray',
                        bgcolor: '#f4f4f4',
                        fontSize: { md: 20, xs: 16 },
                        p: { md: 1.2, xs: 0.9 },
                        borderRadius: '50px'
                    }}
                        onClick={handleClose} />
                </Box>

            </Grid>
        </Dialog >
    )
}

export default NewsLetterPopup