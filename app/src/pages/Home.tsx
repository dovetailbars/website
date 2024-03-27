import "./Home.css";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

export function Hero() {
    return (<>
        <img src="/images/white-logo-textless.png" alt="Dovetail" height={180} />
        <p>
            <span className="xx-large outline">Dovetail</span><br />
            <span className="x-wide">Covent Garden</span>
        </p>
        <p>
            <span className="xx-large x-wide">A PRIVATE AFFAIR</span><br />
            <span className="large wide">INTIMATE | REFINED | ELEVATED</span>
        </p> 
    </>);
}

export function Content() {
    return (<>
        <Layout hero={Hero}>
            <section>
                <h2>BESPOKE PRIVACY</h2>
                <p>
                    Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                    A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                    The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
                </p>
            </section>

            <section>
                <h2>THE PERFECT SPACE FOR YOUR<br/>PRIVATE HIRE</h2>
                <p>
                    Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                    A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                    The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
                </p>
                <Link to="/private-hire">See the space</Link>
            </section>
        </Layout>
    </>);
}
