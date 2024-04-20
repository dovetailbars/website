import { Link } from "react-router-dom";

type Props = {
    children?: React.ReactNode;
};

export default function Footer({ children = null }: Props) {
    const defaultFooterContent = (<>
        <section>
        <h2>Opening Hours</h2>
        <p>
            5pm – 12.30am – Monday to Friday<br />
            2pm – 12:30 am – Saturday<br />
            5pm – 11:30 pm – Sunday
        </p>
        </section>
        <section>
            <h2>Locations</h2>
            <p>
                London
            </p>
            <p>
                <Link to={{ pathname: "/", hash: "#bars" }} reloadDocument>Visit Our Bars</Link>
            </p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                info@dovetailbars.co.uk<br />
                +44 7544 523423
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