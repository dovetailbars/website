import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import { useForm, ValidationError } from '@formspree/react';

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-055.png",
        content: (
            <StandardHero heading="Private Hire" subheading="Planning an event? We've got you covered!" />)
    };
}

export function Content() {

    const [state, handleSubmit] = useForm("mbjnzzgz");

    return (        
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="intro">
                    <h2>Private Hire</h2>
                    <p>
                        Looking for the perfect place to celebrate your birthday, host a private event, or master the art of cocktails?
                        Look no further! Our venues provide the ideal setting for an event that's as special as you.
                    </p>
                    <p>
                        Our venues are designed to accommodate events, ensuring your celebration is just the way you want it.
                        You can create a unique and personal experience for birthdays, private events, and cocktail masterclasses.
                    </p>
                    <p>
                        Perfect for:
                    </p>
                    <ul>
                        <li>Birthdays</li>
                        <li>Private Events</li>
                        <li>Cocktail Masterclasses</li>
                    </ul>
                </div>
            </section>

            <section className="primary">                
                <div id="contact" className="centeredContent centerAligned">
                    <p>
                        Please use the form below to inquire about private hire.
                    </p>
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
        <form onSubmit={formSubmission} className="formSpree">
            <div className="formGroup">
                <label htmlFor="name" className="invisible">Name</label>
                <input id="name" type="text" name="name" placeholder="Full Name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <label htmlFor="phone" className="invisible">Mobile</label>
                <input id="phone" type="tel" name="phone" placeholder="Mobile" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <label htmlFor="email" className="invisible">Email</label>
            <input id="email" type="email" name="email" placeholder="Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="company" className="invisible">Company</label>
            <input id="company" type="text" name="company" placeholder="Company name" />
            <ValidationError prefix="Company" field="company" errors={state.errors} />

            <div className="formGroup">
                <label htmlFor="date" className="invisible">Date</label>
                <input id="date" type="date" name="date" placeholder="Date" required />
                <ValidationError prefix="Date" field="date" errors={state.errors} />

                <label htmlFor="partySize" className="invisible">Party Size</label>
                <input id="partySize" type="number" name="partySize" placeholder="Party Size" required />
                <ValidationError prefix="Party Size" field="partySize" errors={state.errors} />
            </div>

            <label htmlFor="message" className="invisible">Message</label>
            <textarea id="message" name="message" placeholder="Let us know details for your private hire..." required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className="buttonLink">Send</button>
        </form>
    </>)
}
