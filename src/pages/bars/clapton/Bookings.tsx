import { useEffect, useRef } from "react";
import { Layout } from "../../../components/Layout";
import StandardHero from "../../../components/StandardHero";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };
}

export function Content() {
    return (        
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="intro">
                    <h2>Reservations Coming Soon</h2>                    
                </div>
            </section>

        </Layout>
    );
}   
