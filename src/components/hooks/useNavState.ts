import { useEffect, useState } from "react";

export function useNavState() {
    const [navState, setNavState] = useState("navhid");

    useEffect(() => {
        const handleScroll = () => {
            setNavState(window.scrollY > 150 ? "navvis" : "navhid");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return navState;
}
