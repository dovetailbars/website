import { Link } from "react-router-dom";
import IntroSection from "../src/components/IntroSection";
import SplitContent from "../src/components/SplitContent";
import { ContactForm } from "../src/components/ContactForm";
import ImageCarousel from "../src/components/ImageCarousel";
import type { BarData } from "../src/types";
import drinks from "./drinks";

const id = "brass-dove";
// Display name is just "Brass Dove" (the "- Chancery Lane" suffix looked imbalanced in
// headings/footer). The Chancery Lane locality lives in the SEO metadata in index.html instead.
const venueName = "Brass Dove";
const name = venueName;

// TODO(brass-dove): still to confirm — menu PDF, cocktail line-up, and the
// Design My Night config below.

export default {
    id, name, venueName,

    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8138872332256!2d-0.11055192262609947!3d51.51663037181535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b74894ed5d1%3A0x8f94b9f0184700f0!2sBrass%20Dove%20-%20Chancery%20Lane!5e0!3m2!1sen!2suk!4v1782237920783!5m2!1sen!2suk",

    // TODO(brass-dove): replace with the real Design My Night venue + GTM ids once set up.
    designMyNightConfig: {
        venueId: "660d42467122fe5177534b13",
        gtmCode: "GTM-MQ6Z6QJ7",
        returnUrl: "https://dovetailbars.co.uk/api/booking-created"
    },

    openingHours: {
        "Tuesday": "5pm – 12am",
        "Wednesday to Saturday": "4pm – 12am",
        "Sunday & Monday": "Closed",
    },

    location: "Basement, Hotori, 1 New Fetter Ln, London EC4A 1AN",
    phone: "020 3011 4961",

    heroImage: "/images/DSC05067.webp",
    spotlightImage: "/images/DSC04973.webp",

    spotlightText: (
    <>
        <p>
            Tucked beneath Hotori on New Fetter Lane, Brass Dove is the newest addition to the
            Dovetail family — an intimate basement bar a short stroll from Chancery Lane. Come down
            for inventive cocktails, easy conversation and a warm welcome away from the bustle of the
            City above.
        </p>
        <p>
            Pull up a stool, settle in, and let us take care of the rest.
        </p>
    </>),

    overviewContent: (<>
        <IntroSection title={name}>
            <p>
                Brass Dove is an intimate cocktail bar specialising in classic serves, premium spirits
                and a carefully curated collection of rare whiskies and rum. Hidden beneath Hotori, a
                Japanese yakitori and Edomae sushi restaurant, the bar offers a refined yet relaxed
                setting for walk-ins, pre- and post-dinner drinks, private hire, brand events and
                cocktail masterclasses.
            </p>
            <p>
                Guests can enjoy Brass Dove as a standalone late-night bar, or pair the experience with
                Hotori's food offering, with Japanese yakitori and sushi available to cater on the night
                or as part of a bespoke private event.
            </p>
            <div className="bar_buttons">
                <a href="/menus/brass-dove.pdf" className="buttonLink">Drinks Menu</a>
                <Link to="bookings" className="buttonLink">Book Now</Link>
            </div>
        </IntroSection>

        <IntroSection title="A Spirits Library">
            <p>
                At the heart of Brass Dove is our spirits selection - a constantly rotating collection
                of rare, limited and hard-to-find rums and whiskies. Rather than a fixed back bar, our
                cabinets are curated like a living archive, with bottles selected for their provenance,
                character and story. Many are small releases, discontinued expressions or unusual cask
                finishes - and once they are gone, they are gone. This gives you the chance to explore
                something genuinely unique and intentionally selected on every visit, from sought-after
                single malts to exceptional aged rums and one-off discoveries.
            </p>
        </IntroSection>

        {/* TODO(brass-dove): re-enable the private hire teaser once we have real copy and imagery.
        <SplitContent>
            <div>
                <img src="/images/gallery/venues/coventgarden/DSC02066.jpg" alt="Private Hire" />
            </div>
            <div>
                <h2>Perfect for private hire</h2>
                <p>
                    Whether you're planning an intimate gathering, a celebration to remember, or a
                    corporate get-together, Brass Dove offers a unique setting that combines the charm
                    of a hidden basement bar with the warmth of genuine hospitality.
                </p>
                <p>
                    Our creative cocktails, served with a flair for the unpretentious, promise to enchant
                    your guests, while our refined yet cozy environment ensures a memorable occasion for all.
                </p>
                <Link to="/brass-dove/private-hire" className="buttonLink">See the space</Link>
            </div>
        </SplitContent>
        */}

        {/* Alternating venue-space and food/drink shots, per Tim's request. */}
        <ImageCarousel images={[
            "/images/gallery/venues/brassdove/DSC05067.webp",
            "/images/gallery/venues/brassdove/DSC05075.webp",
            "/images/gallery/venues/brassdove/DSC05028.webp",
            "/images/gallery/venues/brassdove/DSC05072.webp",
            "/images/gallery/venues/brassdove/DSC04861.webp",
            "/images/gallery/venues/brassdove/DSC05088.webp",
            "/images/gallery/venues/brassdove/DSC05057.webp",
            "/images/gallery/venues/brassdove/DSC04973.webp",
            "/images/gallery/venues/brassdove/DSC05054.webp",
            "/images/gallery/venues/brassdove/DSC05059.webp",
            "/images/gallery/venues/brassdove/DSC04870.webp",
            "/images/gallery/venues/brassdove/DSC05077.webp",
            "/images/gallery/venues/brassdove/DSC05070.webp",
            "/images/gallery/venues/brassdove/DSC04865.webp",
            "/images/gallery/venues/brassdove/DSC05050.webp",
            "/images/gallery/venues/brassdove/DSC05073.webp",
            "/images/gallery/venues/brassdove/DSC05083.webp",
            "/images/gallery/venues/brassdove/DSC04982.webp",
        ]} />
    </>),

    privateHireContent: (<>
        <SplitContent>
            <div>
                <h2>The Venue</h2>
                <p>
                    Tucked beneath Hotori on New Fetter Lane, Brass Dove is your hidden City escape.
                    In a snug basement room, we serve creative yet unpretentious cocktails in a refined,
                    intimate environment — the perfect retreat from the busy streets above.
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
                <h2>Get in touch</h2>
                <p>
                    {/* TODO(brass-dove): add a walkthrough video / photography once available. */}
                    We'd love to host your event at Brass Dove. Use the form below to enquire about
                    private hire and one of the team will be in touch.
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

    // TODO(brass-dove): confirm the venue's actual cocktail line-up.
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
