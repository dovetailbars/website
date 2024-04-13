import { Layout } from "../../../components/Layout";
import { Link } from "react-router-dom";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
        content: (<>
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail Covent Garden</h1>
        </>)
    };
}

export function Content() {
    return (<>
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="intro">
                    <h2>Dovetail Covent Garden</h2>
                    <p>
                        Tucked away above the lively Covent Garden Market, right in the heart of London's West End, you'll find The Dovetail Bar - a cozy secret just waiting to be shared.
                    </p>
                    <p>
                        In partnership with RedFarm, this hidden spot is where creativity meets cocktails, offering a unique blend of innovation and charm in a welcoming, intimate setting.
                        It's your escape from the city's frenzy, a place where everyone is invited to enjoy the simplicity of good company and great drinks.
                    </p>
                    <p>
                        Discover Dovetail Bar, the West End’s best kept secret.
                    </p>
                </div>
            </section>

            <section className="primary">
                <div className="centeredContent split">
                    <div>
                        <h2>Perfect for private hire</h2>
                        <p>
                            Whether you're planning an intimate gathering, a celebration to remember, or a corporate meeting, Dovetail offers a unique setting that combines the charm of a secret speakeasy with the warmth of hospitality.
                        </p>
                        <p>
                            Dovetail is more than just a venue; it's an experience waiting to be tailored to your every need. Our creative cocktails, served with a flair for the unpretentious, promise to enchant your guests, while our refined yet cozy environment ensures a memorable occasion for all.
                        </p>
                        <Link to="/bars/covent-garden/private-hire" className="buttonLink">See the space</Link>
                    </div>
                    <div>
                        <img src="/images/Dovetail-X-Ferrand-58-Large.jpg" alt="Private Hire" className="sideBySide" />
                    </div>
                </div>
            </section>


            <section className="secondary">

            <a id="whatson"></a>
            <div className="centeredContent">
                <h2 className="sectionTitle" >What’s On</h2>

                <div className="whatsOnPanel alternate split">
                    <div>
                        <img src="/images/Dovetail-X-Ferrand-67-Large.jpg" alt="Private Hire" />
                    </div>
                    <div>
                        <h3>Cocktail Master classes</h3>
                        <p>
                            Looking to elevate your cocktail-making prowess?
                        </p>
                        <p>
                            The Dovetail Bar invites you to immerse yourself in the art and science of mixology with our bespoke cocktail masterclasses. Tailored for enthusiasts of all expertise levels, these sessions offer a hands-on experience where you'll step behind the bar alongside our seasoned mixologists.
                        </p>
                        <p>
                            Embark on a captivating journey through the intricacies of cocktail creation, from mastering foundational techniques to exploring the rich history and theory that breathe life into your favorite concoctions.
                            Our masterclasses provide the perfect blend of education and entertainment for a memorable date night or an engaging corporate team-building activity.
                        </p>
                        <p>
                            Join us at The Dovetail Bar, where every sip tells a story, and discover the secrets to crafting the perfect drink.
                        </p>
                        <p className="paddedTop">
                            <Link to="/bookings" className="buttonLink">Book Now</Link>
                        </p>
                    </div>
                </div>

            </div>
            </section>


            <a id="map"></a>
            <iframe className="map" loading="lazy" src="https://maps.google.com/maps?q=Dovetail%20Bar%2C%20covent%20garden&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="Dovetail Bar, covent garden" aria-label="Dovetail Bar, covent garden"></iframe>

        </Layout>
    </>);
}
