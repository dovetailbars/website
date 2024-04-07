import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };
}


export function Content() {

    const inputRef = useRef(null);

    useEffect(() => {
        // add design my night widget
        const script = document.createElement('script');
        script.src = "//widgets.designmynight.com/bookings-partner.min.js";
        script.async = true;
        script.setAttribute("dmn-booking-form", "true");
        script.setAttribute("venue", "64d62f0640e99c3d6732462e");
        script.setAttribute("hide-offers", "false");
        script.setAttribute("hide-powered-by", "false");
        script.setAttribute("search-venues", "false");
        script.setAttribute("monday-first", "true");
        script.setAttribute("locale", "undefined");
        script.setAttribute("google-tag-manager-code", "GTM-MQ6Z6QJ7");
        script.setAttribute("return-url", "https://dovetailbars.co.uk/bookings/confirmation");

        inputRef.current.innerHTML = "";
        inputRef.current.appendChild(script);
    }, []);


    return (        
        <Layout hero={Hero}>
            <section className="reservation">
                <h2>Make a reservation</h2>

                <link 
                    rel="stylesheet" 
                    type="text/css" 
                    href="https://onsass.designmynight.com/?background-color=%23FFFFFF&primary-color=%236DA8A6&body-text-color=%23000000&outer-border-color=gray"></link>
                
                <div className="designMyNightTarget" ref={inputRef}></div>
                		
            </section>
        </Layout>
    );
}   
