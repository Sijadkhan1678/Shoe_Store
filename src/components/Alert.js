import React from 'react'
import { Alert } from '@mui/material'
import context from '../context/alert/Context'


const CartAlert = () => {

  const { message, removeAlert } = React.useContext(context)


  React.useEffect(() => {

    message && removeAlert()

  }, [removeAlert, message])


  return (

    <Alert variant="filled" severity="success" sx={{
      maxWidth: 300,
      transition: 'all 300ms ease-in-out',
      position: 'fixed',
      left: 0,
      right: 0,
      top: message !== null ? 20 : -50,
      mx: 'auto',
      zIndex: 100,
      // display: alert === null ? 'block' : 'none'
    }}>

      {message}

    </Alert>

  )
}

export default CartAlert
