import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-055.png",
        content: (
            <StandardHero heading="Private Hire" subheading="Planning an event? We've got you covered!">
                <Link to="/bookings" className="buttonLink">Book Now</Link>
            </StandardHero>)
    };
}

export function Content() {
    return (        
        <Layout hero={Hero}>
            <section className="secondary">                
                <div className="centeredContent split">
                    <div>
                        <h2>The Venue</h2>
                        <p>
                            Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs. In a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment. The ultimate hideaway from London’s busy streets, the West End’s best kept secret. 
                        </p>
                        <p>
                            Perfect for:
                        </p>
                        <ul>
                            <li>Birthdays</li>
                            <li>Private Events</li>
                            <li>Cocktail Masterclasses</li>
                        </ul>
                        <p className="paddedTop">
                            <Link to="/private-hire" className="buttonLink">Hire the space</Link>
                        </p>
                    </div>
                    <div>
                        <h2>Walkthrough</h2>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/jjHQq6TpoUo?si=TLL7W-orQ4OxbyHx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                        <p>
                            Watch the short video above that gives you an idea of the unique intimate space.
                        </p>
                    </div>
                </div>
            </section>

            <section className="primary">                
                <div className="centeredContent">
                    <h2>Contact Us</h2>
                    <p>
                        Please use the form below to inquire about private hire at Dovetail.
                    </p>
                    <p>
                        ...
                    </p>
                </div>
            </section>
        </Layout>
    );
}
