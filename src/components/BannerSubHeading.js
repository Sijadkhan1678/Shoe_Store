import { Typography } from "@mui/material"
const BannerSubHeading = ({ text, font, color = 'white', marginBottom }) => {
    return (
        <Typography variant='h5'
            sx={{
                fontSize: { ...font },
                color,
                fontWeight: 400,
                mb: marginBottom && { ...marginBottom },
            }}>
            {text}
        </Typography>
    )
}

export default BannerSubHeading