import { Typography } from "@mui/material"
const BannerSubHeading = ({ text, font, color = '#fff', mb }) => {
    mb = typeof mb === 'object' ? {...mb} :mb;
    return (
        <Typography variant='h5'
            sx={{
                fontSize: { ...font },
                color,
                lineHeight:{md:'32px',sm:'24px',xs:'24px'},
                fontWeight: 300,
                mb,
            }}>
            {text}
        </Typography>
    )
}

export default BannerSubHeading