import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";
import SplitContent from "../src/components/SplitContent";
import { ContactForm } from "../src/components/ContactForm";
import ImageCarousel from "../src/components/ImageCarousel";
import type { BarData } from "../src/types";
import drinks from "./drinks";

const id = "leicester-square";
const venueName = "Leicester Square";
const name = "Dovetail " + venueName;

export default {
    id, name, venueName,

    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1239543567253!2d-0.13305262195072406!3d51.510941871814346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605ad4d2c62ef%3A0xfad514e573027f97!2sDovetail%20Bar%20at%20Empire%20Casino!5e0!3m2!1sen!2suk!4v1731952901311!5m2!1sen!2suk",

    designMyNightConfig: {
        venueId: "671909df81884a4d4032ffca",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/api/booking-created"
    },

    openingHours: {
        "Monday to Wednesday": "5pm – 2.00am",
        "Thursday": "1pm – 2.00am",
        "Friday to Sunday": "1pm – 4.00am",
    },

    location: "Balcony Bar, 5-6 Leicester Square, London WC2H 7NA",
    heroImage: "/images/DovetailLSVenue_24.jpg",
    spotlightImage: "/images/leicester-hero-2025-dec.jpg",

    spotlightText: (
        <>
            <p>
                Dovetail Bar - Leicester Square is the West End destination. A late-night balcony bar with views over the iconic Leicester Square, Dovetail offers the best of both worlds. Immaculate service, perfectly crafted cocktails, and no need end in sight.
            </p>
            <p>
                With views of the bustling crowds in Leicester Square, it's the perfect place to enjoy a spritz before coming inside for an evening of perfectly crafted cocktails.
            </p>
        </>),

    overviewContent: (<>
        <IntroSection title={name}>
            <p>
                Dovetail's flagship offering sits in the heart of London's famous Leicester Square. Spend an afternoon on the balcony, before heading inside to for a warm evening of beautiful cocktails and better company. 
            </p>
            <p>
            Open until 4am on weekends, the perfect place to spend an evening with great company and London's most creative mixologists.
            </p>
            <div className="bar_buttons">
                <a href="/menus/leicester-square.pdf" className="buttonLink">Drinks Menu</a>
                <Link to="bookings" className="buttonLink">Book Now</Link>
            </div>
        </IntroSection>

        <SplitContent>
            <div>
                <img src="/images/DovetailLSVenue_3.jpg" alt="Private Hire" />
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

        <ImageCarousel images={[
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_2.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_21.jpg",

            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_5.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_29.jpg",

            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_7.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_36.jpg",

            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_9.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_38.jpg",

            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_39.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_1.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_40.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_10.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_41.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_14.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue_25.jpg",
            "/images/gallery/venues/leicestersquare-2/DovetailLSVenue.jpg",
        ]} />
    </>),


    privateHireContent: (<>
        <SplitContent>
            <div>
                <h2>The Venue</h2>
                <p>
                    Dovetail Bar - Leicester Square offers a quietly distinguished setting
                    for gatherings that call for a touch of character. Inside, the room
                    settles into deep leather, soft lamplight and the calm presence of oil
                    paintings—an inviting contrast to the energy of the West End outside.
                    It’s a space designed for conversation, for lingering, and for those
                    who appreciate a well-made drink.
                </p>
                <p>
                    Our Parisian-style terrace offers a
                    bright, welcoming outlook throughout the day and long into the night.
                    It’s an ideal spot for relaxed al fresco drinking, moments away from
                    the square yet pleasantly removed from its bustle.
                </p>
                <p>
                    The venue is licensed late, until 5am, making it well suited to
                    celebrations that naturally stretch beyond the usual hours. For
                    cocktails and an atmosphere that remains inviting long after midnight,
                    we would be delighted to host your next occasion.
                </p>

                <p className="paddedTop">
                    <Link to="/private-hire#contact" className="buttonLink">Hire the space</Link>
                </p>
            </div>
            <div style={{ padding: "100px" }}>
                <div className="responsive-iframe-container">
                    <iframe 
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/VDzWKYF4Ncg?si=lb6XW8axz-wEkGgU" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>                    
                    </iframe>
                </div>
            </div>
        </SplitContent>

        
        <ImageCarousel images={[
            "/images/ls-private-hire/Dovetail Bar-02.jpg",
            "/images/ls-private-hire/Dovetail Bar-06.jpg",
            "/images/ls-private-hire/Dovetail Bar-11.jpg",
            "/images/ls-private-hire/Dovetail Bar-14.jpg",
            "/images/ls-private-hire/Dovetail Bar-15.jpg",
            "/images/ls-private-hire/Dovetail Bar-21.jpg",
            "/images/ls-private-hire/Dovetail Bar-39.jpg",
        ]} />
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
