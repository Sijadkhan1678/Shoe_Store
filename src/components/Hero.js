import React from 'react';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import hero from './hero3.png'

const Hero = () => {
  return (
    <Container>
      <Box width='100%' px="2.5rem" pt="0rem" boxSizing="border-box" pb="3rem">
        <Stack direction='row' justifyContent='space-between' >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',

          }}>
            <Typography variant='h1' color='orange' fontSize="7rem" fontWeight="bold" ml="-4px" p="12px 0 10px 0">  New Nike series</Typography>
            <Typography variant='p' fontSize="14px" color='#684815'>
              purchase awesome shoes with high quality
              original branded shoes with fastest delivery on your door step
            </Typography>
            <Button variant='contained' size='small'
              style={{
                backgroundColor: 'orange',
                padding: '8px 15px',
                marginTop: '1.8rem',
                marginLeft: '-25rem',
                borderRadius: '3px'
              }}>
              explore now
            </Button>
          </Box>

          <Box width='50%' >
            <img src={hero} alt='hero' width='100%' height='500' />
          </Box>
        </Stack>
      </Box>
    </Container>
  )

}
export default Hero
