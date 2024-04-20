import { Link } from "react-router-dom";
import IntroSection from "../../components/IntroSection";
import SplitContent from "../../components/SplitContent";
import { ContactForm } from "../../components/ContactForm";

export default {
    name: "Dovetail Covent Garden",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.047340592473!2d-0.12412972225924557!3d51.51234747181459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760544d0fcad43%3A0xc6b47b94aca920c8!2sDovetail%20Bar%20-%20Covent%20Garden!5e0!3m2!1sen!2suk!4v1713575022090!5m2!1sen!2suk",
    designMyNightConfig: {
        venueId: "64d62f0640e99c3d6732462e",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/bookings/confirmation"
    },

    heroContent: {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
        content: (<>
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">Dovetail Covent Garden</h1>
        </>)
    },

    overviewContent: (<>
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
            <Link to="bookings" className="buttonLink">Book Now</Link>
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
                <Link to="/covent-garden/private-hire" className="buttonLink">See the space</Link>
            </div>
            <div>
                <img src="/images/Dovetail-X-Ferrand-58-Large.jpg" alt="Private Hire" className="sideBySide" />
            </div>
        </SplitContent>
    </>),

    footerContent: (<>
        <section>
        <h2>Opening Hours</h2>
        <p>
            5pm – 12.30am – Monday to Friday<br />
            2pm – 12:30 am – Saturday<br />
            5pm – 11:30 pm – Sunday
        </p>
        </section>
        <section>
            <h2>Location</h2>
            <p>
                <a href="#map">2nd Floor<br />9 Russell St<br />London WC2B 5HZ</a>
            </p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                info@dovetailbars.co.uk<br />
                +44 7544 523423
            </p>
        </section>
    </>),

    privateHireContent: (<>
        <section className="secondary">                
            <div className="centeredContent split">
                <div>
                    <h2>The Venue</h2>
                    <p>
                        Nestled comfortably above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs. In a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment. The ultimate hideaway from London’s busy streets, the West End’s best kept secret. 
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
                        <Link to="/private-hire#contact" className="buttonLink alternate">Hire the space</Link>
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
            <div id="contact" className="centeredContent centerAligned">
                <p>
                    Please use the form below to inquire about private hire.
                </p>
                <ContactForm />
            </div>
        </section>
    </>)
} as BarData;
