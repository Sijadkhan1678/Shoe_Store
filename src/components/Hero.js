import React from 'react';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import hero from './hero3.png'

const Hero = () => {
  return(
    <Box width='100%'>
       <Stack direction='row' justifyContent='space-between' >
          <Box sx={{
             display:'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             width: '50%',
          
          }}>
            <Typography variant='h3' color='orange' mb={2}>
           New Nike series
            </Typography>
            <Typography variant='p' mt={1.4} color='#120B0E'>
            purchase awsome shoes with high quality
            and original branded shoes with fastest delivery
            </Typography>
          </Box>
         
          <Box width='50%' >
            <img  src={hero} alt='hero' width='100%' height='330'  />
          </Box>
       </Stack>
    </Box>
    )
  
}
export default Hero