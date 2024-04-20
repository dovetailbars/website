import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import { Link } from "react-router-dom";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };

    return (        
        <Layout hero={hero}>
            <section className="secondary">
                <h2>Make a reservation</h2>

                <p>
                    Select the location you would like to book:
                </p>
                <p>
                    <Link to="/covent-garden/bookings" className="buttonLink">Covent Garden</Link>
                    <Link to="/clapton/bookings" className="buttonLink">Clapton</Link>
                </p>

            </section>
        </Layout>
    );
}   
