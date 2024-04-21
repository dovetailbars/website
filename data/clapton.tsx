import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";
import SplitContent from "../src/components/SplitContent";

const name = "Dovetail Clapton";

export default {
    name: name,
    
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11467.132511129797!2d-0.0679031374399165!3d51.544295188452374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d26818538eb%3A0x169c5afe1389e1fa!2sDovetail%20Bar%20-%20Clapton!5e0!3m2!1sen!2suk!4v1713003089596!5m2!1sen!2suk",
    
    designMyNightConfig: {
        venueId: "660d42467122fe5177534b13",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/bookings/confirmation"
    },

    openingHours: {
        "Monday to Friday": "5pm – 12.30am",
        "Saturday": "2pm – 12:30 am",
        "Sunday": "5pm – 11:30 pm"
    },

    location: "11 Chatsworth Road, Clapton, London E5 0LH",

    heroContent: {
        image: "/images/clapton.jpg",
        content: (<>
            <img src="/images/logo-white.png" alt="Dovetail" className="heroLogo" />
            <h1 className="title">{name}</h1>
        </>),
    },

    overviewContent: (<>
        <IntroSection title={name}>
            <p>Nestled in the heart of Clapton, a stone’s throw away from Hackney’s vibrant nightlife scene, you’ll discover Dovetail Clapton – a spacious bar that beckons both locals and curious wanderers alike.</p>
            <p>Whether you’re seeking refuge from the city’s hustle or celebrating life’s moments, this bar invites you to savor the art of good conversation and exceptional drinks.</p>
            <p>Explore Dovetail Clapton, Clapton’s best-kept secret.</p>
        </IntroSection>

        <section className="primary">
            <Link to="bookings" className="buttonLink">Book Now</Link>
        </section>

        <SplitContent>
            <div>
                <h2>Come for Spritz Hour!</h2>
                <p>
                    A rotating selection of creative and rotating spritz specials that are priced at £8 every day until 7pm.
                </p>
                <p>
                    Dovetail is more than just a venue; it's an experience waiting to be tailored to your every need. Our creative cocktails, served with a flair for the unpretentious, promise to enchant your guests, while our refined yet cozy environment ensures a memorable occasion for all.
                </p>
            </div>
            <div>
                <img src="/images/clapton.jpg" alt="Private Hire" className="sideBySide" />
            </div>
        </SplitContent>
    </>)
    
} as BarData;
