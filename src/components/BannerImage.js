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
                    transition: "opacity .8s ease,transform 4s cubic-bezier(0,0,.44,1.18)",
                    transform:
                        props.isHovered 
                            ? "scale(1.2)"
                            : "scale(1)",
                    ...props.style,
                }}
            />
        </React.Fragment>
    );
};

export default BannerImage;
