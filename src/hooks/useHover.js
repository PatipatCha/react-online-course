import React from "react";

const useHover = () => {

    const [hover,setHover] = React.useState(false);

    const mouseOver = () => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }

    const attrs = {
        mouseOver : mouseOver,
        mouseOut : mouseOut
    }

    return [ hover, attrs ]

}

export default useHover;