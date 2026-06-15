import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";
import SplitContent from "../src/components/SplitContent";
import { ContactForm } from "../src/components/ContactForm";
import ImageCarousel from "../src/components/ImageCarousel";
import type { BarData } from "../src/types";
import drinks from "./drinks";

const id = "covent-garden";
const venueName = "Covent Garden";
const name = "Dovetail " + venueName;

export default {
    id, name, venueName,
    
    googleMapsLink: "https://www.google.com/maps?q=3+Henrietta+St,+London+WC2E+8PS&output=embed",
    
    designMyNightConfig: {
        venueId: "64d62f0640e99c3d6732462e",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/api/booking-created"
    },

    openingHours: {
        "Monday to Thursday": "4pm – 11:30pm",
        "Friday": "4pm – 12am",
        "Saturday": "1pm – 12am",
        "Sunday": "4pm – 10:30pm",
    },

    location: "3 Henrietta St, London WC2E 8PS",
    phone: "020 3011 4960",
    heroImage: "/images/DSC02090.jpg",
    spotlightImage: "/images/DSC02090.jpg",
    
    spotlightText: (
    <>
        <p>
            Nestled just off the Covent Garden Piazza, in the heart of London’s West End, Dovetail Bar awaits those seeking a cozy and clandestine
            escape. In partnership with El Ta'koy, this intimate spot harmoniously blends creativity and cocktails,
            inviting patrons to unwind and savor the art of good company.
        </p>
        <p>
            Discover Dovetail Bar, where innovation meets charm in a welcoming setting. 
        </p>
    </>),

    overviewContent: (<>
        <IntroSection title={name}>
            <p>
                Tucked away, just off the Covent Garden Piazza, and right in the heart of the West End, you'll find Dovetail Bar - a cozy secret just waiting to be shared. It's your escape from the city's frenzy, a place where everyone is invited to enjoy the simplicity of good company and great drinks. This hidden spot is where creativity meets cocktails, offering a unique blend of innovation and charm in a welcoming, intimate setting.
            </p>
            <p>
                If we had the pleasure of serving you at our original Russell Street location, please be aware that we have moved 2 minutes around the corner to 3 Henrietta Street where we've partnered with El Ta'koy to offer their signature Hawaiian Street food alongside our signature cocktails.
            </p>
            <div className="bar_buttons">
                <a href="/menus/covent-garden.pdf" className="buttonLink">Drinks Menu</a>
                <Link to="bookings" className="buttonLink">Book Now</Link>
            </div>
        </IntroSection>

        <SplitContent>
            <div>
                <img src="/images/Dovetail-X-Ferrand-58-Large.jpg" alt="Private Hire" />
            </div>
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
        </SplitContent>

        <ImageCarousel images={[
            "/images/gallery/venues/coventgarden/DSC02090.jpg",
            "/images/gallery/venues/coventgarden/DSC01936.jpg",
            "/images/gallery/venues/coventgarden/DSC01937.jpg",
            "/images/gallery/venues/coventgarden/DSC01939.jpg",
            "/images/gallery/venues/coventgarden/DSC01946.jpg",
            "/images/gallery/venues/coventgarden/DSC01967.jpg",
            "/images/gallery/venues/coventgarden/DSC01968.jpg",
            "/images/gallery/venues/coventgarden/DSC02047.jpg",
            "/images/gallery/venues/coventgarden/DSC02061.jpg",
            "/images/gallery/venues/coventgarden/DSC02066.jpg",
            "/images/gallery/venues/coventgarden/DSC02074.jpg",
            "/images/gallery/venues/coventgarden/DSC02102.jpg",
            "/images/gallery/venues/coventgarden/DSC02111.jpg",
            "/images/gallery/venues/coventgarden/DSC02124.jpg",
            "/images/gallery/venues/coventgarden/DSC02135.jpg",
            "/images/gallery/venues/coventgarden/DSC02138.jpg",
        ]} />
    </>),

    privateHireContent: (<>
        <SplitContent>
            <div>
                <h2>The Venue</h2>
                <p>
                    Nestled discreetly just off the Covent Garden Piazza, in the heart of the West End, Dovetail Bar is your secret getaway. In a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment. The ultimate escape from London’s busy streets, the West End’s best kept secret.
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
                <div className="responsive-iframe-container portrait">
                    <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/FnHc4tHbDe0"
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
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
    </>),

    cocktailPrice: 13,

    menu: [
        drinks.get("Cuba Libra")!,
        drinks.get("Mojito")!,
        drinks.get("Pornstar Martini")!,
        drinks.get("Mimosa")!,
        drinks.get("Old Fashioned")!,
        drinks.get("Bramble")!,
        drinks.get("Bloody Mary")!,
        drinks.get("Margarita")!,
        drinks.get("Espresso Martini")!,
        drinks.get("Pina Colada")!,
        drinks.get("The Dirty Martini")!,
        drinks.get("The Hemingway Daiquiri")!,
    ],
} as BarData;
