import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";
import SplitContent from "../src/components/SplitContent";
import { ContactForm } from "../src/components/ContactForm";
import ImageCarousel from "../src/components/ImageCarousel";

const id = "leicester-square";
const venueName = "Leicester Square";
const name = "Dovetail " + venueName;

const galleryImages = [
    "/images/gallery/venues/leicestersquare/DSC05743.webp",
    "/images/gallery/venues/leicestersquare/DSC05750.webp",
    "/images/gallery/venues/leicestersquare/DSC05751.webp",
    "/images/gallery/venues/leicestersquare/DSC05759.webp",
    "/images/gallery/venues/leicestersquare/DSC05771.webp",
    "/images/gallery/venues/leicestersquare/DSC05840.webp",
    "/images/gallery/venues/leicestersquare/leicester1.webp",
    "/images/gallery/venues/leicestersquare/leicester2.webp",
];

export default {
    id, name, venueName,
    
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1239543567253!2d-0.13305262195072406!3d51.510941871814346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605ad4d2c62ef%3A0xfad514e573027f97!2sDovetail%20Bar%20at%20Empire%20Casino!5e0!3m2!1sen!2suk!4v1731952901311!5m2!1sen!2suk",
    
    designMyNightConfig: {
        venueId: "671909df81884a4d4032ffca",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "http://dovetailbars.co.uk/bookings/confirmation"
    },

    openingHours: {
        "Sunday to Thursday": "5pm – 2.00am",
        "Friday and Saturday": "5pm – 3.00am",
    },

    location: "Balcony Bar, 5-6 Leicester Square, London WC2H 7NA",
    heroImage: "/images/leicester-hero2-sm.webp",
    spotlightImage: "/images/DSC05840.webp",
    
    spotlightText: (
    <>
        <p>
            Dovetail's newest offering is a joint venture with Empire Casino, that sees us rebranding their balcony bar in time for Summer.
        </p>
        <p>
            With views of the bustling crowds in Leicester Square, it's the perfect place to enjoy a spritz before coming inside for an evening of perfectly crafted cocktails.
        </p>
    </>),

    overviewContent: (<>
        <IntroSection title={name}>
            <p>
                Dovetail's newest offering is a joint venture with Empire Casino, that sees us rebranding their balcony bar in time for Summer.
            </p>
            <p>
                With views of the bustling crowds in Leicester Square, it's the perfect place to enjoy a spritz before coming inside for an evening of live DJs and perfectly crafted cocktails.
            </p>
        </IntroSection>

        <section className="primary">
            <Link to="bookings" className="buttonLink">Book Now</Link>
        </section>
        
        <SplitContent>
            <div>
                <img src="/images/DSC05743.webp" alt="Private Hire" />
            </div>
            <div>
                <h2>The Balcony</h2>
                <p>
                   The balcony overlooks the heart of Leicester Square, in what was once the The Empire Theatre. Reminiscent of a Parisian boulevard, this architecturally stunning space will elevate any event.
                </p>
            </div>
        </SplitContent>

        <SplitContent>
            <div>
                <img src="/images/DSC05717.webp" alt="Private Hire" />
            </div>
            <div>
                <h2>Perfect for private hire</h2>
                <p>
                    Whether you're planning an intimate gathering, a celebration to remember, or a corporate meeting, Dovetail offers a unique setting that combines the charm of a secret speakeasy with the warmth of hospitality.
                </p>
                <p>
                    Dovetail is more than just a venue; it's an experience waiting to be tailored to your every need. Our creative cocktails, served with a flair for the unpretentious, promise to enchant your guests, while our refined yet cozy environment ensures a memorable occasion for all.
                </p>
                <Link to="/leicester-square/private-hire" className="buttonLink">See the space</Link>
            </div>
        </SplitContent>
        
        <ImageCarousel images={galleryImages} />
    </>),


    privateHireContent: (<>
        <SplitContent>
            <div>
                <h2>The Venue</h2>
                <p>
                    Dovetail Bar - Leicester Square is the perfect venue for your West End visit, a Soho gem in the making. Enjoy a perfectly crafted cocktail in the sun on our balcony overlooking the bustling crowds below, then head inside for an evening of DJs, good drinks and great company.
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
                    <Link to="/private-hire#contact" className="buttonLink">Hire the space</Link>
                </p>
            </div>
            <div>
                <img src="/images/gallery/venues/leicestersquare/leicester2.webp" alt="Private Hire" />
            </div>
        </SplitContent>
    </>)

} as BarData;
