import { Typography } from "@mui/material"

const BannerHeading = ({ text, color = '#fff', font, marginBottom }) => {
    return (
        <Typography variant='h2'
            sx={{
                fontSize: { ...font },
                color,
                fontWeight: 700,
                mt: marginBottom && marginBottom,


            }}>{text}</Typography>
    )
}
export default BannerHeading