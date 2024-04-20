import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Masterclass-LR-01.jpg",
        content: (<StandardHero heading="Cocktail Masterclass" subheading="Bespoke Cocktail Experiences" />)
    };

    return (        
        <Layout hero={hero}>
            <section className="secondary">                
                <div className="centeredContent split">
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/VpeiBDGdwuk?si=-gsjR95_FeE7N1E7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                    <div>
                        <h2>The Experience</h2>
                        <p>
                            Are you looking to level up your cocktail game? Our masterclasses cater to all levels of experience and interest.
                            It doesn’t matter if you want to bring your mixology game to the next level, or just bang out some Espresso Martinis for a celebration, we’ve got you covered.
                        </p>
                        <p>
                            Our senior bar staff will run you through the recipes, techniques and history behind some of London’s most iconic drinks.
                            Enjoy a welcome cocktail, followed by 3 drinks of your group’s choosing for just £45 per person.
                        </p>
                        <p className="paddedTop">
                            <Link to="/bookings" className="buttonLink">Enquire now</Link>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
