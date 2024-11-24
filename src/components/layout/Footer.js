import React from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'



const Footer = () => {

    const navLinks = [{ link: 'Home', path: '/' }, { link: 'Shop', path: 'shop' }, { link: 'Shopping Cart', path: 'cart' }, { link: 'Contact Us', path: 'contact' }, { link: 'About us', path: 'about' }];
    const socialLinks = [{ link: 'Facebook', path: '/facebook' }, { link: 'twitter', path: '/twitter' }, { link: 'Linkdin', path: '/linkdin' }, { link: 'Instagram', path: '/instagram' }, { link: 'Tiktok', path: '/tiktok' }]
    const contactInfo = ['123 Street, New York, USA', 'info@example.com', '+012 345 67890']
    
    return (
        <Box mt="3rem" pt="3rem" px="0.9rem" bgcolor="#f5f5f5">
            <Stack pt="3rem" px={{ lg: "3rem", md: '1.5rem' }} direction={{ lg: 'row', md: "row", sm: 'column' }} justifyContent="space-between">
                <Box pl={{ lg: "15px", sm: '0px', xs: '15px' }} pr="3rem" ml={{ lg: '0rem', sm: '0rem' }} mb="3rem">
                    <Box width='50px' mb="1.5rem">
                        <Typography variant='h4' fontWeight={700}>Shoefy</Typography>
                    </Box>

                    <Box mt="1.5rem">
                        {contactInfo.map((info) => <Typography variant='body1'>{info}</Typography>)}

                    </Box>
                </Box>
                <Stack direction={{ lg: 'row', sm: 'row', sx: 'column' }} flex='0 0 66%' justifyContent={{ lg: 'space-between', md: 'space-between', sm: 'space-around' }}>
                    <Box pl={{ lg: '15px', md: "15px", sm: '70px', xs: '15px' }} pr="15px" mb="3rem" ml={{ lg: "-80px", md: '-80px', sm: '-80px', xs: '0px' }}>
                        <Typography variant='h5' fontSize="1.25rem" color="#2c2c2c" fontWeight={700} marginBottom="1.5rem">
                            Quick Shop
                        </Typography>

                        {navLinks.map((navLink, index) => <NavLink key={index} to={navLink.path} fontWeight={400} style={navLinkStyle}> {navLink.link}  </NavLink>)}

                    </Box>

                    <Box pl="15px" mb="3rem">
                        <Typography variant="h5" marginBottom="1.5rem" fontSize="1.25rem" fontWeight={700} color="#2c2c2c">
                            Social Links
                        </Typography>

                        {socialLinks.map((socialLink, index) => <Link key={index} to={socialLink.path} style={linkStyle} fontWeight={400}> {socialLink.link} </Link>)}

                    </Box>

                    <Box pl={{ lg: '30px', md: '30px', sm: "30px", xs: '15px' }} pr={{ xs: "1rem" }} mb="3rem">
                        <Typography variant="h5" fontSize="1.25rem" fontWeight={700} color="#2c2c2c" marginBottom="1.5rem">
                            Newsletter
                        </Typography>
                        <Box mb="1rem">
                            <TextField fullWidth label="Your Name" bgcolor="whitesmoke" />
                        </Box>
                        <Box mb="1rem">
                            <TextField fullWidth label="Your Email" bgcolor="whitesmoke" />
                        </Box>

                        <Button fullWidth variant="contained" size="large" sx={{
                            color: "white",
                            bgcolor: "#524938",
                            '&:hover': { bgcolor: '#ff7800' },
                            display: 'block',
                            borderRadius: '5px'
                        }}>Subscribe Now</Button>
                    </Box>

                </Stack>

            </Stack>

            <Stack direction="row" flexWrap='wrap' alignItems='center' mx={{ lg: '3rem', md: '3rem', sm: 'orem' }} py="1.3rem">
                ©  <Typography variant='body1' fontWeight={600} ml={1}> Your Site Name.</Typography>
                <Typography variant="body1" ml={1}>All Rights Reserved. Designed by</Typography>
                <Typography variant='body1' fontWeight={600} ml={1}>Sijad Khan</Typography>


            </Stack>
        </Box>
    )
}

const navLinkStyle = ({ isActive }) => {

    return {
        display: 'block',
        fontSize: '1rem',
        marginBottom: '0.8rem',
        textDecoration: 'none',
        color: isActive ? '#ff7800' : '#1c1c1c',
    }
}
const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    marginBottom: '0.8rem',
    color: '#1c1c1c',
}

export default Footer