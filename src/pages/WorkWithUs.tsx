import { AllVenueDesignMyNight } from "../components/DesignMyNight";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.webp",
        content: (<StandardHero heading="Work With Us"/>)
    };

    return (        
        <Layout hero={hero} bookNowMenuItem={false}>
            <section className="secondary">                
                <h2>Work With Us</h2>
                <p>Are you looking to impress clients take your next office party to the next level?</p>
                <p>Make your wedding reception perfect with a bespoke cocktail menu, or even have a Dovetail Bar open within your own venue?</p>
                <p>We take on all projects from one-off menu developments, to bar consultancy, or even taking over the day to day operations of your venue.</p>
                <p>Reach out to <a href="mailto:info@dovetailbars.co.uk">info@dovetailbars.co.uk</a> to let us know how we can elevate your offering</p>
            </section>
        </Layout>
    );
}   
