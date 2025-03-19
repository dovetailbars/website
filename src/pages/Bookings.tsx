import { AllVenueDesignMyNight } from "../components/DesignMyNight";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };

    return (        
        <Layout hero={hero} bookNowMenuItem={false}>
            <section className="secondary">
                <h2>Make a reservation</h2>

                <AllVenueDesignMyNight />

            </section>
        </Layout>
    );
}   
