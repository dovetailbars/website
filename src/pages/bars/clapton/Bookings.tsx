import { Layout } from "../../../components/Layout";
import StandardHero from "../../../components/StandardHero";
import DesignMyNight from "../../../components/DesignMyNight";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };
}

export function Content() {    
    return (        
        <Layout hero={Hero}>
            <section className="reservation">
                <h2>Make a reservation</h2>

                <DesignMyNight venueId="660d42467122fe5177534b13" gtmCode="GTM-MQ6Z6QJ7" returnUrl="https://dovetailbars.co.uk/bookings/confirmation" />
                		
            </section>
        </Layout>
    );
}   
