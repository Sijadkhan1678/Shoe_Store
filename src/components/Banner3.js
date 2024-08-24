import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import BannerButton from "./BannerButton";
import BannerImage from "./BannerImage";
import banner3 from "./banner-3.webp";
import BannerHeading from "./BannerHeading";
import BannerSubHeading from "./BannerSubHeading";

const ThirdBanner = () => {
  const [isHovered, setHovered] = React.useState(false);

  const handleHovered = () => {
    setHovered(!isHovered);
  };
  return (
    <Grid
      item
      lg={6}
      sm={6}
      xs={12}
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}
    >
      <BannerImage banner={banner3} isHovered={isHovered} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          left: 0,
          textAlign: "center",
          px: { md: "20px", sm: "20px", xs: "28px" },
        }}
      >
        <BannerSubHeading
          text="Hello Summer 2019"
          color="#222"
          font={{ md: 20, sm: 18,xs:16 }}
        />
        <BannerHeading
          text="Extra 50%Off"
          mb={1}
          color="#222"
          font={{ lg: 50,md:30, xs: 30 }}
        />
        <BannerSubHeading 
          font={{ lg:18,md:14,sm: 14, xs: 14 }} color='#222' mb={2}
          text="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout." />
          

        <BannerButton text="More info" />
      </Box>
    </Grid>
  );
};

export default ThirdBanner;
