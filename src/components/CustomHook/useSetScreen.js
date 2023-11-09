import React, { useEffect, useState } from "react";

export default function useSetScreen() {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        checkScreenSize();
        console.log("hjh")
        window.addEventListener("resize", checkScreenSize);

        return () => {
            console.log("closed")
            window.removeEventListener("resize", checkScreenSize);
        }
    },[])

    const checkScreenSize = () => {
        if (window.innerWidth > 992) return setScreenSize("Large");
        if (window.innerWidth > 600 && window.innerWidth < 992) return setScreenSize("Medium");
        if (window.innerWidth < 600) return setScreenSize("Small");
    }

    return screenSize;
}
