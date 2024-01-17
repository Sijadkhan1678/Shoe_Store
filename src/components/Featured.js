import React from 'react'
import { Box, Stack, Typography, Container, IconButton } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PhoneIcon from '@mui/icons-material/Phone';




const Featured = () => {
  const createContent = (icon, content) => {

    return { icon, content }

  }

  const FeaturedContents = [createContent(<DoneIcon  sx={{ fontSize: '2rem',color:'orange' }} />, 'Quality Product'), createContent(<LocalShippingIcon sx={{ fontSize: '2rem',color:'orange' }} />, 'Free Shipping'), createContent(<CompareArrowsIcon  sx={{ fontSize: '2rem',color:'orange' }} />, '14-Day Return'), createContent(<PhoneIcon sx={{ fontSize: '2rem',color:'orange' }} />, '24/7 Support')]


  return (
    <Container>
      <Stack direction={{ lg: 'row', md: 'row', sm: 'row' }}
        mr={{ lg: "4rem", md: '0rem' }}
        mx={{ lg: "1rem", md: "1.4rem", sm: '1.4rem' }} mb="3rem"
        flexWrap={{ lg: 'nowrap', md: 'nowrap', sm: 'wrap', xs: 'wrap' }}>

        {FeaturedContents.map((feature, index) => {

          return (<Box key={index} px="15px"

            flex={{
              lg: '0 0 23%',
              md: '0 0 22%',
              sm: '0 0 44%',
              xs: '0 0 100%'
            }}>

            <Stack direction='row' alignItems='center' spacing={1} mb={{ sm: "1.3rem", xs: '1rem' }} p="30px" border="1px solid #EDF1FF">

              {feature.icon}

              <Typography variant='h5' color="#1C1C1C" fontSize="1.25rem" textAlign='justify' fontWeight={600}>
                {feature.content}
              </Typography>

            </Stack>

          </Box>
          )
        })

        }
      </Stack>

    </Container>

  )
}

export default Featured
