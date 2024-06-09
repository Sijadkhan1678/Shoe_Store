import React from 'react'
import { Dialog, DialogTitle,DialogContent,DialogContentText } from '@mui/material'

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

            <DialogTitle id="alert-dialog-title" sx={{fontSize:'36px',fontWeight:700}}>
                {"Get Discount 30% Off"}
            </DialogTitle>
            <DialogContent>
          <DialogContentText id="alert-dialog-description">
          '    Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!'
          </DialogContentText>
        </DialogContent>

        </Dialog>
    )
}

export default NewsLetterPopup
