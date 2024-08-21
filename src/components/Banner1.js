import React from 'react'
import { Grid, Box } from '@mui/material'
import BannerHeading from './BannerHeading'
import BannerSubHeading from './BannerSubHeading'
import BannerImage from './BannerImage'
import banner1 from './banner-1.webp'

const FirstBanner = () => {

    const [isHovered, setHovered] = React.useState(false);
    const handleHovered = () => {

        setHovered(!isHovered)
    }
    return (
        <Grid item lg={3.96} sm={3.96} xs={12}
        sx={{
            position: 'relative',
            overflow: 'hidden'
        }}
        onMouseEnter={handleHovered}
        onMouseLeave={handleHovered}>
        <BannerImage banner={banner1} isHovered={isHovered} />
        <Box sx={{
            position: 'absolute',
            bottom: '50px',
            left: 0,
            right: 0,
            textAlign: 'center'
        }}>
            <BannerHeading text="Run Don't Hide" marginBottom={1} font={{ lg:50,md: 40, sm: 30, xs: 30 }} />
            <BannerSubHeading text='Nike Flash Be Seen' font={{ md: 20, sm: 18, xs: 18 }} />
        </Box>
    </Grid>
    )
}

export default FirstBanner