import React from 'react'
import { Dialog, Grid, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button } from '@mui/material'
import newLetter from './newsletter.webp'
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
            aria-describedby="alert-dialog-description">

            <Grid container>
                <Grid item lg={6}>
                    <img src={newLetter} alt='newsLetter' width='100%' height='500' />
                </Grid>

                <Grid item lg={6}>
                    <DialogTitle id="alert-dialog-title">
                        {"Get Discount 30% Off"}
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            '  Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!'
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                    <Button variant="contained" size="large" sx={{
                            color: "white",
                            bgcolor: "#524938",
                            '&:hover': { bgcolor: '#ff7800' },
                            display: 'block',
                            borderRadius: '5px'
                        }}>Subscribe Now</Button>
                    </DialogActions>
                </Grid>

            </Grid>
        </Dialog >
    )
}

export default NewsLetterPopup
