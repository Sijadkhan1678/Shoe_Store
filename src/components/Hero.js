import React from 'react';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material';
import hero from './hero.png'

const Hero = () => {

    const xs = 600;
    const sm = 900;
    const md = 1200;
    const lg = 1536;

    const isMobile = useMediaQuery(`(max-width: ${xs}px)`);
    const isSmall = useMediaQuery(`(max-width: ${sm}px)`);
    const isLarge = useMediaQuery(`(min-width: ${md}px)`);

    const imageStyle = {
        width: '100%',
        maxWidth: isLarge ? 700 : '100%',
        height: isLarge ? 500 : (isSmall ? (isMobile ? 235 : 360) : 450)
    };

    return (

        <Box bgcolor='#eeeeee' px={{ lg: '6rem', md: '2.5rem', sm: '2rem', xs: '2rem' }} pt="0rem" boxSizing="border-box"
            mb={{ lg: "4rem", md: '3rem', sm: '3rem', xs: '2rem' }}>
            <Stack direction='row'>
                <Box sx={{ width: '50%', marginTop: { md: '1.5rem', sm: '1.5rem', xs: '1.7rem' } }}>

                    <Typography variant='h1' color='black' fontSize={{ lg: "7rem", md: '5.64rem', sm: '3.82rem', xs: '2.43rem' }} fontWeight="bold" ml="-4px" p={{ sm: "32px 0 10px 0", md: '12px 0 10px' }}>  New Nike series</Typography>
                    <Typography variant='body2' width="80%" fontSize={{ lg: "14px", md: '14px', sm: '14', xs: '10px' }} color='black'>
                        purchase awesome shoes with high quality
                        original branded shoes with fastest delivery on your door step
                    </Typography>

                    <Button variant='contained' size="small"
                        sx={{
                            backgroundColor: '#524938',
                            padding: '8px 15px',
                            mt: { lg: '1.8rem', md: '1.8rem', sm: '1.8rem', xs: '1rem' },
                            fontSize: { lg: '0.8125rem', md: '0.8125rem', sm: "0.8125rem", xs: '0.4125rem' },
                            '&:hover': { bgcolor: '#ff7800' },
                            display: 'block',
                            borderRadius: '3px'
                        }}
                    >
                        explore now
                    </Button>

                </Box>

                <Box width='50%'>

                    <img src={hero} alt='hero' style={imageStyle} />

                </Box>
            </Stack>
        </Box>

    )

}
export default Hero
