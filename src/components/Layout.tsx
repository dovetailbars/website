import "./Layout.css";
import CarouselBackground from './CarouselBackground';

import { Link } from "react-router-dom";
import * as Home from '../pages/Home';

type Props = {
    children: React.ReactNode;
    hero?: () => HeroData;
};

export function Layout({ children, hero = null }: Props) {
    const noHero = () => {
        return { image: "", content: <></> };
    }

    hero = hero || noHero;
    const isOnHomePage = hero === Home.Hero;
    const isHomePageClassName = isOnHomePage ? "home" : "nav";
    const headerClassName = isOnHomePage ? "homeHeader" : "header";
    const heroContent = hero();

    const carouselItems = [
        heroContent?.image ? { src: heroContent.image, alt: "" } : { src: "/images/DTB-Initial-Cocktail-Shoot-LR-042.jpg", alt: "" }
    ];

    return (<>
        <header className={headerClassName}>
            <nav className={isHomePageClassName}>
                <Link to="/" className="logoLink">
                    <img src="/images/logo-notext.png" alt="Dovetail" className="navLogo" />
                </Link>
                <ul className="navList">
                    <li><Link to="/cocktail-menu">Cocktail Menu</Link></li>
                    <li><a href="/#whatson">What's On</a></li>
                    <li><Link to="/private-hire">Private Hire</Link></li>
                    <li><Link to="/cocktail-making-class">Masterclasses</Link></li>
                </ul>
                <Link to="/bookings" className="buttonLink">Book Now</Link>
            </nav>
            <CarouselBackground items={carouselItems}>
                <div className="hero">
                    {heroContent.content}
                </div>
            </CarouselBackground>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <img src="/images/logo-white.png" alt="Dovetail" width={160} /><br />
            <div className="footerDetails centeredContent">
                <section>
                    <h2>Opening Hours</h2>
                    <p>
                        5pm – 12.30am – Monday to Friday<br />
                        2pm – 12:30 am – Saturday<br />
                        5pm – 11:30 pm – Sunday
                    </p>
                </section>
                <section>
                    <h2>Location</h2>
                    <p>
                        <a href="#map">2nd Floor, <br />9 Russell St, <br />London WC2B 5HZ</a>
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        info@dovetailbars.co.uk<br />
                        +44 7544 523423
                    </p>
                </section>
            </div>
            <div className="copyright">
                © Dovetail Bar | Company No. 14991262
            </div>
        </footer>
    </>);
}
