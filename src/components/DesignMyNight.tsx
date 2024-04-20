import { useEffect, useRef } from "react";

export default function({ venueId, gtmCode, returnUrl}: DesignMyNightConfig) {
    const inputRef = useRef(null);

    useEffect(() => {
        // add design my night widget
        const script = document.createElement('script');
        script.src = "//widgets.designmynight.com/bookings-partner.min.js";
        script.async = true;
        script.setAttribute("dmn-booking-form", "true");
        script.setAttribute("venue", venueId);
        script.setAttribute("hide-offers", "false");
        script.setAttribute("hide-powered-by", "false");
        script.setAttribute("search-venues", "false");
        script.setAttribute("monday-first", "true");
        script.setAttribute("locale", "undefined");
        script.setAttribute("google-tag-manager-code", gtmCode);
        script.setAttribute("return-url", returnUrl);

        inputRef.current.innerHTML = "";
        inputRef.current.appendChild(script);
    }, []);

    return (<>
    <link 
        rel="stylesheet" 
        type="text/css" 
        href="https://onsass.designmynight.com/?background-color=%23FFFFFF&primary-color=%236DA8A6&body-text-color=%23000000&outer-border-color=gray"></link>
    
    <div className="designMyNightTarget" ref={inputRef}></div>                		
    </>);
}