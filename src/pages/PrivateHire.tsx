import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import { useForm, ValidationError } from '@formspree/react';

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-055.png",
        content: (
            <StandardHero heading="Private Hire" subheading="Planning an event? We've got you covered!">
                <Link to="/bookings" className="buttonLink">Book Now</Link>
            </StandardHero>)
    };
}

export function Content() {

    const [state, handleSubmit] = useForm("mbjnzzgz");

    const formSubmission = (e: any) => {
        console.log(e);
        e.preventDefault();
        handleSubmit(e);
    };

    return (        
        <Layout hero={Hero}>
            <section className="secondary">                
                <div className="centeredContent split">
                    <div>
                        <h2>The Venue</h2>
                        <p>
                            Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs. In a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment. The ultimate hideaway from London’s busy streets, the West End’s best kept secret. 
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
                            <Link to="/private-hire" className="buttonLink">Hire the space</Link>
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
                <div className="centeredContent">
                    <ContactForm formSubmission={handleSubmit} state={state} />
                </div>
            </section>
        </Layout>
    );
}


function ContactForm({ formSubmission, state}) {
    if (state.succeeded) {
        return <p>Thanks - we'll get back to you as soon as we can.</p>;
    }

    return (<>
        <form onSubmit={formSubmission}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="phone">Mobile</label>
            <input id="phone" type="tel" name="phone" placeholder="Mobile" required />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="company">Company</label>
            <input id="company" type="text" name="company" placeholder="Company name" />
            <ValidationError prefix="Company" field="company" errors={state.errors} />

            <label htmlFor="date">Date</label>
            <input id="date" type="date" name="date" placeholder="Date" required />
            <ValidationError prefix="Date" field="date" errors={state.errors} />

            <label htmlFor="partySize">Party Size</label>
            <input id="partySize" type="number" name="partySize" placeholder="Party Size" required />
            <ValidationError prefix="Party Size" field="partySize" errors={state.errors} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Let us know details for your private hire..." required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
    </>)
}