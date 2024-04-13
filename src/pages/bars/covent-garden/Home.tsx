import BarLandingPage from "../../../components/BarLandingPage";
import GoogleMaps from "../../../components/GoogleMaps";
import IntroSection from "../../../components/IntroSection";
import { Layout } from "../../../components/Layout";
import { Link } from "react-router-dom";
import SplitContent from "../../../components/SplitContent";

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
        <BarLandingPage 
            hero={Hero}
            title="Dovetail Covent Garden"
            googleMapsEmbedUrl="https://maps.google.com/maps?q=Dovetail%20Bar%2C%20covent%20garden&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
        >
            <IntroSection title="Dovetail Covent Garden">
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
            </IntroSection>

            <section className="primary">
                <Link to="/bookings" className="buttonLink">Book Now</Link>
            </section>

            <SplitContent>
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
            </SplitContent>

        </BarLandingPage>
    </>);
}
