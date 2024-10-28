import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import IntroSection from "../components/IntroSection";
import SplitContent from "../components/SplitContent";
import InstagramEmbed from "../components/InstagramEmbed";
import BarSpotlight from "../components/BarSpotlight";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
        content: (<>
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail</h1>
            <h2>
                <Link to="/covent-garden">Covent Garden</Link> | <Link to="/clapton">Clapton</Link> | <Link to="/empire-casino">Empire Casino</Link>
            </h2>
        </>)
    };

    return (<>
        <Layout hero={hero}>
            <IntroSection title="Discover Dovetail">
                <p>
                    Discover Dovetail Bars, a collection of hidden gems that blend innovation with libations.
                    From the original Covent Garden spot, nestled in London’s West End, to its spirited sibling,
                    Dovetail Clapton, each venue invites patrons to unwind, savor the art of good company,
                    and explore unique experiences. 
                </p>
                <p> Whether seeking refuge from the city’s frenzy or celebrating life’s moments,
                    Dovetail Bars promise an oasis where creativity thrives and great drinks flourish.
                </p>
            </IntroSection>            

            <section className="secondary">

            <div className="centeredContent">
                <h2 id="bars" className="sectionTitle">Our Bars</h2>

                <BarSpotlight barId="covent-garden" />
                <BarSpotlight barId="clapton" />
                <BarSpotlight barId="empire-casino" />

            </div>
            </section>

            <section className="primary">
                <div className="centeredContent centerAligned">
                    <InstagramEmbed handle="dovetailbars" />
                </div>
            </section>

        </Layout>
    </>);
}
