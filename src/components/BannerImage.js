import React from "react";

const BannerImage = (props) => {
    
    const result = props.height === undefined ? props.height : ''

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
                    minHeight:result, 
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
