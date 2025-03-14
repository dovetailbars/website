import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import IntroSection from "../components/IntroSection";
import InstagramEmbed from "../components/InstagramEmbed";
import BarSpotlight from "../components/BarSpotlight";
import { getAllBars } from "../../data";
import BarSpotlightVisual from "../components/BarSpotlightVisual";

export default function() {
    const allBars = getAllBars();

    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.webp",
        content: (<>
            <img src="/images/logo-notext.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail</h1>
            <h2>
                <Link to="/covent-garden">Covent Garden</Link> | <Link to="/clapton">Clapton</Link> | <Link to="/leicester-square">Leicester Square</Link>
            </h2>
        </>)
    };

    const barSpotlightList = allBars.map((barData, index) => {
        const position = index % 2 === 0 ? "right" : "left";
        return (<BarSpotlightVisual key={barData.id} barId={barData.id} imagePosition={position} />);
    });

    return (<>
        <Layout hero={hero}>
            <div className="introHomeContainer">
                <IntroSection title="Discover Dovetail">
                    <p>
                        A collection of hidden gems that blend innovation with libations.
                        From the original Covent Garden spot, nestled in London’s West End, to its spirited siblings
                        in Clapton and Leicester Square, each venue invites patrons to unwind, savor the art of good company,
                        and explore unique experiences. 
                    </p>
                    <p> Whether seeking refuge from the city’s frenzy or celebrating life’s moments,
                        Dovetail Bars promise an oasis where creativity thrives and great drinks flourish.
                    </p>
                </IntroSection> 
            </div>               

            <section className="secondary" id="bars">
                { barSpotlightList }                
            </section>

            {/* <section className="primary">
                <div className="centeredContent centerAligned">
                    <InstagramEmbed handle="dovetailbars" />
                </div>
            </section> */}

        </Layout>
    </>);
}
