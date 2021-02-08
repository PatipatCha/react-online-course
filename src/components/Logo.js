import React from 'react'

import useHover from '../hooks/useHover'

const Logo = () =>{

    const [hover,attrs] = useHover()

    const logoImage = {
        url: './logo192.png'
    };

    return (
        <div>
            {
                hover ? <p>Yes</p> : null
            }
            <img onMouseOver={attrs.mouseOver} onMouseOut={attrs.mouseOut} src={logoImage.url} width="100" alt="logo"  />
        </div>
    )
}

export default Logo;