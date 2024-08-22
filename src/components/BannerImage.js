import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';


const BannerImage = (props) => {

    const isMobile = useMediaQuery(`(max-width: ${600}px)`);

    const result = props.height ? props.height : ''

    return (
        <React.Fragment>
            <img
                src={props.banner}
                alt="banner"
                style={{
                    border: "none",
                    verticalAlign: "middle",
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    minHeight:isMobile && result, 
                    position: "relative",
                    transition: "transform 1s",
                    transform:
                        props.isHovered && props.currentBanner === props.banner
                            ? "scale(1.2)"
                            : "scale(1)",
                    ...props.style,
                }}
            />
        </React.Fragment>
    );
};

export default BannerImage;
