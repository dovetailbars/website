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
            <h2>
                <Link to="/bars/covent-garden">Covent Garden</Link> | <Link to="/bars/Clapton">Clapton</Link>
            </h2>
        </>)
    };
}

export function Content() {
    return (<>
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="intro">
                    <h2>Discover Dovetail</h2>
                    <p>
                        Discover Dovetail Bars, a collection of hidden gems that blend innovation with libations.
                        From the original Covent Garden spot, nestled in London’s West End, to its spirited sibling,
                        Dovetail Clapton, each venue invites patrons to unwind, savor the art of good company,
                        and explore unique experiences. 
                    </p>
                    <p> Whether seeking refuge from the city’s frenzy or celebrating life’s moments,
                        Dovetail Bars promise an oasis where creativity thrives and great drinks flourish.
                    </p>
                </div>
            </section>


            <section className="secondary">


            <div className="centeredContent">
                <h2 className="sectionTitle" >Our Bars</h2>

                <div className="whatsOnPanel split">
                    <div>
                        <h3>Dovetail Covent Garden</h3>
                        <p>
                        Nestled in the heart of London’s West End, Dovetail Bar awaits those seeking a cozy and clandestine
                        escape. In collaboration with RedFarm, this intimate spot harmoniously blends creativity and cocktails,
                        inviting patrons to unwind and savor the art of good company.
                        </p>
                        <p>
                        Discover Dovetail Bar, where innovation meets charm in a welcoming setting. 
                        </p>
                        <p className="paddedTop">
                            <Link to="/bars/covent-garden" className="buttonLink">Visit Covent Gaden</Link>
                        </p>
                    </div>
                    <div>
                        <img src="/images/DTB-Initial-Cocktail-Shoot-LR-067.jpg" alt="Private Hire" className="sideBySide" />
                    </div>
                </div>

                <div className="whatsOnPanel alternate split">
                    <div>
                        <img src="/images/Dovetail-X-Ferrand-67-Large.jpg" alt="Private Hire" />
                    </div>
                    <div>
                        <h3>Dovetail Clapton</h3>
                        <p>
                        Introducing Dovetail Clapton, a sister bar that echoes the soulful essence of the original Covent Garden hideaway.
                        </p>
                        <p>
                        In the heart of Clapton, this spacious venue embraces the same intimate charm, inviting patrons to revel in
                        creativity, camaraderie, and exceptional libations. Whether you seek refuge from the city’s frenzy or celebrate life’s
                        moments, Dovetail Clapton promises an expansive oasis where good company and great drinks flourish. 
                        </p>
                        <p className="paddedTop">
                            <Link to="/bars/Clapton" className="buttonLink">Visit Clapton</Link>
                        </p>
                    </div>
                </div>

            </div>
            </section>

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
