import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

 const Featured = () => {
  const  FeaturedContents = ['Quality Product','Free Shipping','14-Day Return','24/7 Support']

  return (
     
    <Box m='0 auto' px="3rem" pt="2rem">
            <Stack direction='row' mx="1rem" mb="3rem" mr="5rem">
              {
                // #1C1C1C black-light shed
                //#6F6F6F gray like color
                FeaturedContents.map((content) => <Typography variant='h5' color="#1C1C1C" fontSize="1.25rem" fontWeight={600}  p="1.63rem 3.13rem" ml="1.8rem"  border="1px solid #EDF1FF"> {content} </Typography>)
              
              }
            </Stack>     
    </Box>
    
  )
}

export default Featured

