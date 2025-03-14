import { AllVenueDesignMyNight } from "../components/DesignMyNight";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import { Link } from "react-router-dom";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.webp",
        content: (<StandardHero heading="Bookings"/>)
    };

    return (        
        <Layout hero={hero} bookNowMenuItem={false}>
            <section id="booking" className="secondary">
                <h2>Make a reservation</h2>

                <AllVenueDesignMyNight />

            </section>
        </Layout>
    );
}   
