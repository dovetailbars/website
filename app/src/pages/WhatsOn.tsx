import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import WhatsOnCommon from "../partials/WhatsOnCommon";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (
            <StandardHero heading="What's On" subheading="Our Upcoming Events">
                <Link to="/bookings" className="buttonLink">Book Now</Link>
            </StandardHero>)
    };
}


export function Content() {
    return (
        <Layout hero={Hero}>            
            <WhatsOnCommon />
        </Layout>
    );
}
