import "./Home.css";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Hero() {
    return (<>
        <img src="/images/white-logo-textless.png" alt="Dovetail" height={180} />
        <p>
            <span className="xx-large outline">Dovetail</span><br />
            <span className="x-wide">Covent Garden</span>
        </p>
        <p>
            <span className="xx-large x-wide">A PRIVATE AFFAIR</span><br />
            <span className="large wide">INTIMATE | REFINED | ELEVATED</span>
        </p> 
    </>);
}

export function Content() {

    return (<>
        <Layout hero={Hero}>
            <section className="primary">
                <div className="centeredContent">
                    <h2>BESPOKE PRIVACY</h2>
                    <p>
                        Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                        A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                        The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
                    </p>
                </div>
            </section>

            <section className="secondary">
                <div className="centeredContent split">
                    <div>
                        <h2>
                            <span>THE PERFECT SPACE FOR YOUR</span><br/>PRIVATE HIRE
                        </h2>
                        <p>
                            Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                            A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                            The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
                        </p>
                        <p className="paddedTop">
                            <Link to="/private-hire" className="buttonLink">See the space</Link>
                        </p>
                    </div>
                    <div>
                        <img src="/images/Dovetail-X-Ferrand-58-Large.jpg" alt="Private Hire" />
                    </div>
                </div>
            </section>
            
            <section className="secondary">                

                <div className="centeredContent">
                    <h2>What's On</h2>

                    <div className="whatsOnPanel split">
                        <div>
                            <h3>Monday Takeovers</h3>
                            <span>EVERY MONDAY FROM 5PM</span>
                            <p>
                                Join us on Mondays where some of the worlds best brands takeover our bar with speciality cocktails made to impress.                            
                                From Scotch brands to gin, agave and more, join us to discover new delights in our private bar.
                            </p>
                            <p className="paddedTop">
                                <Link to="/bookings" className="buttonLink">Book Mondays</Link>
                            </p>
                        </div>
                        <div>
                            <img src="/images/DTB-Initial-Cocktail-Shoot-LR-067.jpg" alt="Private Hire" />
                        </div>
                    </div>

                    <div className="whatsOnPanel">
                        <h3>Masterclasses</h3>
                        <span>FUN INTIMATE CLASSES & ACTIVITIES</span>
                        <p>
                            Join us on Mondays where some of the worlds best brands takeover our bar with speciality cocktails made to impress.                            
                            From Scotch brands to gin, agave and more, join us to discover new delights in our private bar.
                        </p>
                        <p className="paddedTop">
                            <Link to="/bookings" className="buttonLink">Book Mondays</Link>
                        </p>
                    </div>

                </div>
            </section>

            <iframe className="map" loading="lazy" src="https://maps.google.com/maps?q=Dovetail%20Bar%2C%20covent%20garden&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="Dovetail Bar, covent garden" aria-label="Dovetail Bar, covent garden"></iframe>

            <section className="primary">
                <div className="centeredContent">
                    <h2>@DOVETAILBARS</h2>
                    <iframe 
                        src="https://www.instagram.com/dovetailbars/embed"
                        className="instagramFeed"
                        title="Instagram Feed" 
                        aria-label="Instagram Feed"
                        frameBorder="0"
                        allowTransparency={true}
                    ></iframe>
                </div>
            </section>

        </Layout>
    </>);
}
