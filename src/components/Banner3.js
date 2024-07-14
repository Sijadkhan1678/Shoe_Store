import React from 'react'
import { Grid, Box, Typography, } from '@mui/material'
import BannerButton from './BannerButton'
import BannerImage from './BannerImage'
import banner3 from './banner-3.webp'
import BannerHeading from './BannerHeading'
import BannerSubHeading from './BannerSubHeading'

const ThirdBanner = () => {

  const [isHovered, setHovered] = React.useState(false);

  const handleHovered = () => {

    setHovered(!isHovered)

  }
  return (
    <Grid item lg={6} sm={6} xs={6} sx={{
      position: 'relative',
      overflow: 'hidden'
    }}
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}>
      <BannerImage banner={banner3} isHovered={isHovered} />
      <Box sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: 0,
        left: 0,
        textAlign: 'center',
        px: { md: '30px', sm: '20px' }
      }}>
        <BannerSubHeading text="Hello Summer 2019" color='#222' font={{ md: 20, sm: 16 }} marginBottom={{ md: 1, sm: 0 }} />
        <BannerHeading text="Extra 50%Off" marginBottom={1} color='#222' font={{ md: 50, sm: 30, xs: 30 }} />
        <Typography variant='subtitle1' sx={{ fontSize: { sm: 12, xs: 12 } }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
        <BannerButton text='More info' fontSize={18} marginTop={2} />
      </Box>
    </Grid>
  )
}

export default ThirdBanner