import React from 'react'
import { Dialog, Grid, useMediaQuery,Box, Stack, DialogTitle, DialogContent, DialogContentText, TextField, Button, FormHelperText, Checkbox } from '@mui/material'
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
        
         display:(isLarge? 'block':(isMedium? 'none':(isSmall?'none': isMobile?'none':'block')))
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
                <Grid item lg={6}  p={2.5}>
                    hello
                    <img src={newLetter} alt='newsLetter' style={imgStyle} width='100%' height='490' />
                </Grid>

                <Grid item lg={6} sm={12} pr={4}>
                    <Box mt={6}>
                        <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontSize: 36, fontWeight: 700 }}>
                            "Get Discount <span style={{ color: 'red' }}>30%</span> Off"
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ mb: 4, textAlign: 'center', fontSize: 16, fontWeight: 400, }}>
                                '  Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!'
                            </DialogContentText>
                            <TextField
                                fullWidth
                                margin='desne'
                                id='email'
                                type='email'
                                label="Enter Your Email"
                                sx={{ bgcolor: "#f4f4f4", color: '#222', borderRadius: '100' }}

                            />
                            <FormHelperText sx={{ color: 'red', mt: 1 }}>please enter your email</FormHelperText>
                        </DialogContent>
                        <Button
                            variant="contained"
                            type='submit'
                            size="large"
                            sx={{
                                color: "white",
                                bgcolor: "#524938",
                                mt: '30px',
                                mb: '60px',
                                p: '15px 55px',
                                mx: 'auto',
                                display: 'block',
                                borderRadius: '50px',
                                '&:hover': { bgcolor: '#ff7800' },
                            }}>Subscribe</Button>
                        <Stack direction='row' alignItems='center' justifyContent='center'>
                            <Checkbox sx={{ color: 'gray','&:hover':{color:'darkgray'} }} /> <FormHelperText>don`t show again`</FormHelperText>
                        </Stack>
                    </Box>

                </Grid>
                <Box sx={{
                    position: 'absolute',
                    right: 15,
                    top: 10,
                    textAlign: 'center',
                    
                    
                }}>
                    <CloseIcon sx={{
                        color: 'gray',
                        // size: 'small',
                        bgcolor: '#f4f4f4',
                        fontSize:20,
                        p: 1.2,
                        borderRadius: '50px'
                    }} />
                </Box>

            </Grid>
        </Dialog >
    )
}

export default NewsLetterPopup
