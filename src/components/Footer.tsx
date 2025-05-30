import { Link } from "react-router-dom";
import DovetailInfo from "../../data/dovetail-info";
import { getAllBars } from "../../data";

type Props = {
    children?: React.ReactNode;
};

const allBars = getAllBars();
const allBarLinks = allBars.map(bar => <><Link key={'footer-link-' + bar.id} to={`/${bar.id}`}>London - {bar.venueName}</Link><br /></>);

export default function Footer({ children = null }: Props) {
    const defaultFooterContent = (<>
        <section>
            <h2>Locations</h2>
            <p>
                { allBarLinks }
            </p>
            <p>
                <Link to={{ pathname: "/", hash: "#bars" }} reloadDocument>Visit Our Bars</Link>
            </p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                <a href={`mailto:${DovetailInfo.email}`}>{DovetailInfo.email}</a><br />
                <a href={`tel:${DovetailInfo.phone.replace(/\s+/g, '')}`}>{DovetailInfo.phone}</a>
            </p>
            <p>
                <Link to="/work-with-us">Work With Us</Link>
            </p>
        </section>
    </>);

    const footerContent = children === null ? defaultFooterContent : children;

    const wrappedFooterContent = <div className="footerDetails centeredContent">{ footerContent }</div>;

    return (
        <footer>
            <img src="/images/logo-white.png" alt="Dovetail" width={160} /><br />
            { wrappedFooterContent }
            <div className="copyright">
                © Dovetail Bar | Company No. 14991262
            </div>

            <div className="copyright">
                Over 18s Only | Challenge 25 Policy in Operation.<br />
                Take Time To Think. Visit gambleaware.org | bedrinkaware.co.uk
            </div>
        </footer>
    );
}
