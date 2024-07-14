import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import BannerImage from './BannerImage'
import banner1 from './banner-1.webp'
import banner2 from './banner-2.webp'
import banner3 from './banner-3.webp'
import banner4 from './banner-4.webp'

const Banner = () => {
console.log(banner1)
  const [isHovered, setHovered] = React.useState(false);
  const handleHovered = () => {
    setHovered(!isHovered)
  }

  
  return (
    <Grid container px={{ md: 4, sm: 2, xs: 2 }}>
      <Grid item lg={3.96} sm={3.96} xs={12}
        sx={{
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={handleHovered}
        onMouseLeave={handleHovered}>
        <BannerImage banner={banner1} isHovered={isHovered} currentBanner={banner1}/>
        <Box sx={{
          position: 'absolute',
          bottom: '50px',
          left: 0,
          right: 0,
          textAlign: 'center'
        }}>
          <BannerHeading text="Run Don't Hide" font={{ md: 50, sm: 30, xs: 40 }} />
          <BannerSubHeading text='Nike Flash Be Seen' font={{ md: 20, sm: 18, xs: 18 }} />
        </Box>
      </Grid>

      <Grid item lg={8} sm={8} xs={12}
        sx={{
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={handleHovered}
        onMouseLeave={handleHovered}>
        <Grid item>
          <BannerImage banner={banner2} isHovered={isHovered} currentBanner={banner2}  />
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

        <Grid container>
          <Grid item lg={6} sm={6} xs={6} sx={{
            position: 'relative',
            overflow: 'hidden'
          }}
            onMouseEnter={handleHovered}
            onMouseLeave={handleHovered}>
            <BannerImage banner={banner3} isHovered={isHovered} currentBanner={banner3}/>
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
          <Grid item lg={6} sm={6} xs={6} sx={{
            position: 'relative',
            overflow: 'hidden'
          }}
            onMouseEnter={handleHovered}
            onMouseLeave={handleHovered}>
            <BannerImage banner={banner4} isHovered={isHovered} currentBanner={banner4} />
            <Box sx={{
              position: 'absolute',
              top: { md: '80px', sm: '30px', xs: '30px' },
              left: 0,
              right: 0,
              // transform:'translateY(-50%)',
              textAlign: 'center'
            }}>
              <BannerSubHeading text="Nike Shoes" font={{ md: 20, sm: 16 }} />
              <BannerHeading text="Collection 2019" marginBottom={1} font={{ md: 50, sm: 30, xs: 30 }} />

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Banner
