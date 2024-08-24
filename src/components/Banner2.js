import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import BannerHeading from "./BannerHeading";
import BannerSubHeading from "./BannerSubHeading";
import BannerButton from "./BannerButton";
import BannerImage from "./BannerImage";
import banner2 from "./banner-2.webp";

const SecondBanner = () => {
  const [isHovered, setHovered] = React.useState(false);

  const handleHovered = () => {
    setHovered(!isHovered);
  };
  return (
    <Grid item onMouseEnter={handleHovered} onMouseLeave={handleHovered}>
      <BannerImage
        banner={banner2}
        height="250px"
        style={{ objectFit: "cover", objectPosition: "70%" }}
        isHovered={isHovered}
      />
      <Box
        sx={{
          position: "absolute",
          top: { sm: "25%", xs: "12%" },
          right: { sm: "20px", xs: "15px" },
          transform: "translateY(-50%)",
        }}
      >
        <BannerSubHeading
          text="Women's Training"
          font={{ md: 22, sm: 20, xs: 16 }}
          mb={{ sm: 1, xs: 0.5 }}
        />
        <BannerHeading
          text="Don't Rest Bra"
          font={{ lg: 50, md: 30, xs: 26 }}
          mb={0.5}
        />
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { lg: 24, md: 22, sm: 20, xs: 18 },
            fontWeight: 700,
            color: "white",
            mb:2,
          }}
        >
          Best Sellers
        </Typography>
        <BannerButton text="More Info" fontSize={16} />
      </Box>
    </Grid>
  );
};

export default SecondBanner;
