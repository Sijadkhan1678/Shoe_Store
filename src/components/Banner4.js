import React from 'react'
import { Grid, Box, } from '@mui/material'
import banner4 from './banner-4.webp'
import BannerImage from './BannerImage'
import BannerHeading from './BannerHeading'
import BannerSubHeading from './BannerSubHeading'
const FourthBanner = () => {

  const [isHovered, setHovered] = React.useState(false);

  const handleHovered = (e) => {

    setHovered(!isHovered)
  }

  return (
    <Grid item lg={6} sm={6} xs={12} sx={{
      position: 'relative',
      overflow: 'hidden'
    }}
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}>
      <BannerImage banner={banner4} isHovered={isHovered} />
      <Box sx={{
        position: 'absolute',
        top: { lg:'80px',md: '20px', sm: '30px', xs: '30px' },
        left: 0,
        right: 0,
        // transform:'translateY(-50%)',
        textAlign: 'center'
      }}>
        <BannerSubHeading text="Nike Shoes" mb={1} font={{ md: 20, sm: 16,xs:18 }} />
        <BannerHeading 
          text="Collection 2019" 
          mb={1} 
          font={{ lg:50,md: 30, sm: 30, xs: 30 }} />

      </Box>
    </Grid>
  )
}

export default FourthBanner
