import React from 'react'

const BannerImage = (props) => {
    return (
        <React.Fragment>
            <img src={props.banner} alt='banner1' style={{ border: 'none', verticalAlign: 'middle', width: '100%', maxWidth: '100%', height: 'auto' }} />
        </React.Fragment>
    )
}

export default BannerImage