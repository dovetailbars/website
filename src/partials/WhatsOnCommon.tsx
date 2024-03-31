import { Link } from "react-router-dom";

export default function WhatsOnCommon() {
    return (
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
                    <img src="/images/DTB-Initial-Cocktail-Shoot-LR-067.jpg" alt="Private Hire" className="sideBySide" />
                </div>
            </div>

            <div className="whatsOnPanel alternate split">                     
                <div>
                    <img src="/images/Dovetail-X-Ferrand-67-Large.jpg" alt="Private Hire" />
                </div>
                <div>
                    <h3>Masterclasses</h3>
                    <span>FUN INTIMATE CLASSES & ACTIVITIES</span>
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
    );
}