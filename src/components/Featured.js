import React from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'


const Featured = () => {

  const FeaturedContents = ['Quality Product', 'Free Shipping', '14-Day Return', '24/7 Support']

  return (
    <Container>
      <Stack direction={{ lg: 'row', md: 'row', sm: 'row' }}
             mr={{ lg: "4rem", md: '0rem' }}
             mx={{ lg: "1rem", md: "1.4rem", sm: '1.4rem' }} mb="3rem"
             flexWrap={{ lg: 'nowrap', md: 'nowrap', sm: 'wrap', xs: 'wrap' }}>

        {FeaturedContents.map((content, index) => (

          <Box key={index} px="15px"

            flex={{
              lg: '0 0 23%',
              md: '0 0 22%',
              sm: '0 0 44%',
              xs: '0 0 100%'
            }}>

            <Box mb={{ sm: "1.3rem", xs: '1rem' }} p="30px" border="1px solid #EDF1FF">

              <Typography variant='h5' color="#1C1C1C" fontSize="1.25rem" fontWeight={600}>
                {content}
              </Typography>
            </Box>
          </Box>
        ))

        }
      </Stack>

    </Container>

  )
}

export default Featured
