import React from 'react'
import { Alert } from '@mui/material'


const CartAlert = () => {
  const [topPosition, setTopPosition] = React.useState('-60px')
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setTopPosition((window.scrollY - 60) + 'px')

    })

  }, [])

  return (
    <Alert variant="filled" severity="success" sx={{ maxWidth: 300, transition: 'top 300ms ease-in-out', position: 'absolute', left: 0, right: 0, top: `${topPosition}`, mx: 'auto', zIndex: 100 }}>
      Successfully Add To Cart
    </Alert>
  )
}

export default CartAlert
