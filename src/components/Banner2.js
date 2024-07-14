import React from 'react'
import { Grid, Box, Typography, } from '@mui/material'
import BannerHeading from './BannerHeading'
import BannerSubHeading from './BannerSubHeading'
import BannerButton from './BannerButton'
import BannerImage from './BannerImage'
import banner2 from './banner-2.webp'


const SecondBanner = () => {

  const [isHovered, setHovered] = React.useState(false);

  const handleHovered = () => {

    setHovered(!isHovered)
  }
  return (
    <Grid item
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}>
      <BannerImage banner={banner2} isHovered={isHovered} />
      <Box sx={{
        position: 'absolute',
        top: '25%',
        right: '20px',
        transform: 'translateY(-50%)',
      }}>
        <BannerSubHeading text="Women's Training" font={{ md: 22, sm: 20, xs: 20 }} />
        <BannerHeading text="Don't Rest Bra" font={{ md: 50, sm: 30, xs: 30 }} />
        <Typography variant='body1' sx={{ fontSize: 24, fontWeight: 700, color: 'white', mb: 1, }}>Best Sellers</Typography>
        <BannerButton text='More info' fontSize={16} />
      </Box>
    </Grid>
  )
}

export default SecondBanner