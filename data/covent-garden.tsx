import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";
import SplitContent from "../src/components/SplitContent";
import { ContactForm } from "../src/components/ContactForm";

const id = "covent-garden";
const venueName = "Covent Garden";
const name = "Dovetail " + venueName;

export default {
    id, name, venueName,
    
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.047340592473!2d-0.12412972225924557!3d51.51234747181459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760544d0fcad43%3A0xc6b47b94aca920c8!2sDovetail%20Bar%20-%20Covent%20Garden!5e0!3m2!1sen!2suk!4v1713575022090!5m2!1sen!2suk",
    
    designMyNightConfig: {
        venueId: "64d62f0640e99c3d6732462e",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/bookings/confirmation"
    },

    openingHours: {
        "Monday to Friday": "5pm – 12.30am",
        "Saturday": "2pm – 12:30 am",
        "Sunday": "5pm – 11:30 pm"
    },

    location: "2nd Floor, 9 Russell St, London WC2B 5HZ",
    heroImage: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
    spotlightImage: "/images/Dovetail-X-Ferrand-58-Large.jpg",
    
    spotlightText: (
    <>
        <p>
            Nestled in the heart of London’s West End, Dovetail Bar awaits those seeking a cozy and clandestine
            escape. In collaboration with RedFarm, this intimate spot harmoniously blends creativity and cocktails,
            inviting patrons to unwind and savor the art of good company.
        </p>
        <p>
            Discover Dovetail Bar, where innovation meets charm in a welcoming setting. 
        </p>
    </>),

    overviewContent: (<>
        <IntroSection title={name}>
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
                <img src="/images/Dovetail-X-Ferrand-58-Large.jpg" alt="Private Hire" />
            </div>
        </SplitContent>
    </>),

    privateHireContent: (<>
        <SplitContent>
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
        </SplitContent>

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
