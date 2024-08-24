import { Typography } from "@mui/material"

const BannerHeading = ({ text, color = '#fff', font, mb }) => {
    return (
        <Typography variant='h2'
            sx={{
                fontSize: { ...font },
                color,
                fontWeight: 700,
                mb: mb,


            }}>{text}</Typography>
    )
}
export default BannerHeading