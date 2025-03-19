import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import { AllVenueDesignMyNight } from "../components/DesignMyNight";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-055.png",
        content: (<StandardHero heading="Private Hire" subheading="Planning an event? We've got you covered!" />),
        class: "half"
    };

    return (        
        <Layout hero={hero}>
            <section className="secondary">
                <div className="intro">
                    <h2>Private Hire</h2>
                    <p>
                        Looking for the perfect place to celebrate your birthday, host a private event, or master the art of cocktails?
                        Look no further! Our venues provide the ideal setting for an event that's as special as you.
                    </p>
                    <p>
                        Our venues are designed to accommodate events, ensuring your celebration is just the way you want it.
                        You can create a unique and personal experience for birthdays, private events, and cocktail masterclasses.
                    </p>
                    <p>
                        Perfect for birthdays, private events, and cocktail masterclasses.
                    </p>
                </div>
            </section>

            <section className="primary">
                <AllVenueDesignMyNight />
            </section>
        </Layout>
    );
}
