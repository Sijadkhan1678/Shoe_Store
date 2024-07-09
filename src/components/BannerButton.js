import { Grid, Box, Typography, Button } from '@mui/material'

const BannerButton = ({ text, fontSize, marginTop }) => { 
return (
    <Button sx={{
      fontSize,
      color: '#fff',
      fontWeight: 400,
      bgcolor: '#222',
      textTransform: 'capitalize',
      borderRadius: '50px',
      mt: marginTop,
      px: '50px',
      py: '10px',
    }}>
      {text}
    </Button>
    
  )
  
  }
  
  export default BannerButton
