import { useEffect, useRef } from "react";
import "./DesignMyNight.css";

export default function DesignMyNight({ venueId, gtmCode}: DesignMyNightConfig) {
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
        // script.setAttribute("return-url", returnUrl);

        inputRef.current.innerHTML = "";
        inputRef.current.appendChild(script);
    }, []);

    return (<>
    <link 
        rel="stylesheet" 
        type="text/css" 
        href="https://onsass.designmynight.com/?theme=dark"></link>
    
    <div className="designMyNightTarget" ref={inputRef}></div>                		
    </>);
}

export function AllVenueDesignMyNight() {
    return (
        <DesignMyNight 
            venueId="660d42467122fe5177534b13,64d62f0640e99c3d6732462e,671909df81884a4d4032ffca" 
            gtmCode="GTM-MQ6Z6QJ7"
            // returnUrl="https://dovetailbars.co.uk/bookings/confirmation"
            // commented out because its a POST request
        />
    );
}