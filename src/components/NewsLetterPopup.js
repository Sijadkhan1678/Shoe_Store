import React from 'react'
import { Dialog, Grid, useMediaQuery, Box, Stack, DialogTitle, DialogContent, DialogContentText, TextField, Button, FormHelperText, Checkbox } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import newLetter from './newsletter-img.webp'

const NewsLetterPopup = () => {

    const [open, setOpen] = React.useState(true)
    const [close, setClose] = React.useState(false)
    const isMobile = useMediaQuery(`(max-width:600px)`)
    const isSmall = useMediaQuery(`(max-width:900px)`)
    const isMedium = useMediaQuery(`(max-width:1200px)`)
    const isLarge = useMediaQuery(`(min-width:1200px)`)

    const handleClose = () => {
        setClose(false)
    }
    const imgStyle = {

        display: (isLarge ? 'block' : (isMedium ? 'none' : (isSmall ? 'none' : isMobile ? 'none' : 'block')))
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth='xl'>
            <Grid container>
                <Grid item lg={6} md={6} p={2.5} sx={{
                    display: {
                        md: 'block',
                        sm: 'none',
                        xs: 'none'
                    }
                }}>
                    <img src={newLetter} alt='newsLetter' width='100%' height={490} />
                </Grid>

                <Grid item lg={6} md={6} sm={12} pr={{ md: 4, xs: 0 }}>
                    <Box mt={{ md: 6, xs: 2 }}>
                        <DialogTitle id="alert-dialog-title" sx={{
                            textAlign: 'center',
                            fontSize: { md: 36, xs: 27 },
                            fontWeight: { md: 700, xs: 600 }
                        }}>
                            "Get Discount <span style={{ color: 'red' }}>30%</span> Off"
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{
                                mb: 4,
                                textAlign: 'center',
                                fontSize: 16,
                                fontWeight: 400,
                            }}>
                                'Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!'
                            </DialogContentText>
                            <Box sx={{
                                p: 2,
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
                                        // p:2,
                                        borderRadius: '50px'
                                    }}

                                />
                            </Box>
                            <FormHelperText sx={{ color: 'red', mt: 1 }}>please enter your email</FormHelperText>
                        </DialogContent>
                        <Button
                            variant="contained"
                            type='submit'
                            size="large"
                            sx={{
                                color: "white",
                                bgcolor: "#524938",
                                mt: { md: '30px', xs: '10px' },
                                mb: { md: '60px', xs: '10px' },
                                p: { md: '15px 55px', xs: '8px 40px' },
                                mx: 'auto',
                                display: 'block',
                                borderRadius: '50px',
                                '&:hover': { bgcolor: '#ff7800' },
                            }}>Subscribe</Button>
                        <Stack direction='row' alignItems='center' justifyContent='center'>
                            <Checkbox sx={{ color: 'gray', '&:hover': { color: 'darkgray' } }} />
                            <FormHelperText>don`t show again`</FormHelperText>
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
                    }} />
                </Box>

            </Grid>
        </Dialog >
    )
}

export default NewsLetterPopup
