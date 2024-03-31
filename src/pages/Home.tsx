import "./Home.css";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import WhatsOnCommon from "../partials/WhatsOnCommon";
import StandardHero from "../components/StandardHero";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
        content: (<>
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail</h1>
            <StandardHero heading="Covent Garden | Homerton">

            </StandardHero>
        </>)
    };
}

export function Content() {
    return (<>
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="centeredContent intro centerAligned">
                    <h2>Discover Dovetail Bar</h2>
                    <p>
                        Tucked away above the lively Covent Garden Market, right in the heart of London's West End, you'll find The Dovetail Bar - a cozy secret just waiting to be shared.
                    </p>
                    <p>
                        In partnership with RedFarm, this hidden spot is where creativity meets cocktails, offering a unique blend of innovation and charm in a welcoming, intimate setting.
                        It's your escape from the city's frenzy, a place where everyone is invited to enjoy the simplicity of good company and great drinks.
                    </p>
                    <p>
                        Discover The Dovetail Bar, the West End’s best kept secret.
                    </p>
                </div>
            </section>

            <section className="primary">
                <div className="centeredContent split">
                    <div>
                        <h2>The perfect space for your private hire</h2>
                        <p>
                            Whether you're planning an intimate gathering, a celebration to remember, or a discreet corporate meeting, our hidden gem offers a unique setting that combines the charm of secrecy with the warmth of hospitality.
                        </p>
                        <p>
                            In collaboration with RedFarm, The Dovetail Bar is more than just a venue; it's an experience waiting to be tailored to your every need. Our creative cocktails, served with a flair for the unpretentious, promise to enchant your guests, while our refined yet cozy environment ensures a memorable occasion for all.
                        </p>
                        <p className="paddedTop">
                            <Link to="/private-hire" className="buttonLink">See the space</Link>
                        </p>
                    </div>
                    <div>
                        <img src="/images/Dovetail-X-Ferrand-58-Large.jpg" alt="Private Hire" className="sideBySide" />
                    </div>
                </div>
            </section>

            <WhatsOnCommon />

            <iframe className="map" loading="lazy" src="https://maps.google.com/maps?q=Dovetail%20Bar%2C%20covent%20garden&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="Dovetail Bar, covent garden" aria-label="Dovetail Bar, covent garden"></iframe>

            <section className="primary">
                <div className="centeredContent centerAligned">
                    <iframe
                        src="https://www.instagram.com/dovetailbars/embed"
                        className="instagramFeed"
                        title="Instagram Feed"
                        aria-label="Instagram Feed"
                        frameBorder="0"
                    ></iframe>
                </div>
            </section>

        </Layout>
    </>);
}
