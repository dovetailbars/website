import DesignMyNight from "../components/DesignMyNight";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import { Link } from "react-router-dom";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };

    return (        
        <Layout hero={hero} bookNowMenuItem={false}>
            <section className="secondary">
                <h2>Make a reservation</h2>
                
                <DesignMyNight 
                    venueId="660d42467122fe5177534b13,64d62f0640e99c3d6732462e,671909df81884a4d4032ffca" 
                    gtmCode="GTM-MQ6Z6QJ7"
                    returnUrl="https://dovetailbars.co.uk/bookings/confirmation"
                />

            </section>
        </Layout>
    );
}   
