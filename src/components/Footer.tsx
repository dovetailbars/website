import { Link } from "react-router-dom";
import DovetailInfo from "../../data/dovetail-info";

type Props = {
    children?: React.ReactNode;
};

export default function Footer({ children = null }: Props) {
    const defaultFooterContent = (<>
        <section>
            <h2>Locations</h2>
            <p>
                <Link to="/covent-garden">London - Covent Garden</Link><br />
                <Link to="/clapton">London - Clapton</Link>
            </p>
            <p>
                <Link to={{ pathname: "/", hash: "#bars" }} reloadDocument>Visit Our Bars</Link>
            </p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                {DovetailInfo.email}<br />
                {DovetailInfo.phone}
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
        </footer>
    );
}
