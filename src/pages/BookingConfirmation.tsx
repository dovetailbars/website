import IntroSection from "../components/IntroSection";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="Bookings"/>)
    };

    return (        
        <Layout hero={hero}>
             <IntroSection title="Booking Confirmation" className="">
                <p>
                    Thank you for booking with us at Dovetails Bar Covent Garden. Please keep an eye out for an email with further details on your booking.
                </p>
                <p>
                    Stay up to date by following us on social media <a href="https://www.instagram.com/dovetailbars/">@dovetailbars</a>.
                </p>            		
            </IntroSection>
        </Layout>
    );
}
