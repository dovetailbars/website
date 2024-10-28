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
                
                <h2>New Year's Eve at Dovetail</h2>
                <p>Celebrate New Year's Eve at our bar and experience an unforgettable night of revelry!</p>
                <p>Our special champagne menu will add a touch of elegance to your evening, and with live DJs spinning an eclectic mix of music, you’ll be dancing your way into the new year.</p>
                <p>Step out onto our exclusive balcony bar for a refreshing drink and enjoy a stunning view of Leicester Square, and enjoy the fireworks lighting up the night sky. Whether you're with friends or meeting new ones, there's no better place to ring in the New Year!</p>
                
                <h2>Make a reservation</h2>

                <AllVenueDesignMyNight />

            </section>
        </Layout>
    );
}   
