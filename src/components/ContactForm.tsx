import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

export function ContactForm() {
    const [state, handleSubmit] = useForm("mbjnzzgz");

    if (state.succeeded) {
        return <p>Thanks - we'll get back to you as soon as we can.</p>;
    }

    return (<>
        <form onSubmit={handleSubmit} className="formSpree">
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
                <select className="selectWrapper" name="venue" id="venue" required>
                    <option value="Covent Garden" selected>Covent Garden</option>
                    <option value="Clapton">Clapton</option>
                    <option value="Leicester Square">Leicester Square</option>
                </select>

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
            
            <label htmlFor="catering" className="invisible">Catering Requirements</label>
            <input id="catering" type="text" name="catering" placeholder="Catering Requirements?" />
            <ValidationError prefix="Catering" field="catering" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className="buttonLink">Send</button>
        </form>
    </>)
}