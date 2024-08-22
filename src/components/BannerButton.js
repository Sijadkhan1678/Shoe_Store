import { Grid, Box, Typography, Button } from '@mui/material'

const BannerButton = ({ text, marginTop }) => { 
return (
    <Button sx={{
      fontSize:{sm:18,xs:16},
      color: '#fff',
      fontWeight: 400,
      bgcolor: '#222',
      textTransform: 'capitalize',
      borderRadius: '50px',
      mt: marginTop,
      px: {sm:'50px',xs:'30px'},
      py: {sm:'10px',xs:'5px'}
    }}>
      {text}
    </Button>
    
  )
  
  }
  
  export default BannerButton
