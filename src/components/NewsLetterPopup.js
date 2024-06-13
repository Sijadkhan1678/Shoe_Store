import React from 'react'
import { Dialog, Grid, Box, Stack,DialogTitle, DialogContent, DialogContentText, TextField, Button, FormHelperText, Checkbox } from '@mui/material'
import newLetter from './newsletter-img.webp'

const NewsLetterPopup = () => {

    const [open, setOpen] = React.useState(true)
    const [close, setClose] = React.useState(false)

    const handleClose = () => {
        setClose(false)
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
                <Grid item lg={6} p={2.5}>
                    <img src={newLetter} alt='newsLetter' width='100%' height='490' />
                </Grid>

                <Grid item lg={6} pr={4}>
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
                            <Checkbox sx={{ color: 'red', }} /> <FormHelperText>don`t show again`</FormHelperText>
                        </Stack>
                    </Box>

                </Grid>

            </Grid>
        </Dialog >
    )
}

export default NewsLetterPopup
