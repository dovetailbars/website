import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";

const id = "empire-casino";
const venueName = "Empire Casino";
const name = "Dovetail " + venueName;

export default {
    id, name, venueName,
    
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1279768651034!2d-0.1329298219507423!3d51.51086807181415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d208c64f53%3A0x3be1912a868e5914!2sEmpire%20Casino!5e0!3m2!1sen!2suk!4v1730112526504!5m2!1sen!2suk",
    
    designMyNightConfig: {
        venueId: "671909df81884a4d4032ffca",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/bookings/confirmation"
    },

    openingHours: {
        "Sunday to Thursday": "5pm – 2.00am",
        "Friday and Saturday": "5pm – 3.00am",
    },

    location: "Balcony Bar, 5-6 Leicester Square, London WC2H 7NA",
    heroImage: "/images/DTB-Initial-Cocktail-Shoot-LR-012-sm.jpg",
    spotlightImage: "/images/empire-casino.png",
    
    spotlightText: (
    <>
        <p>
            Dovetail's newest offering is a joint venture with Empire Casino, that sees us rebranding their balcony bar in time for Summer.
        </p>
        <p>
            With views of the bustling crowds in Leicester Square, it's the perfect place to enjoy a spritz before coming inside for an evening of live DJs and perfectly crafted cocktails.
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
    </>)

} as BarData;
