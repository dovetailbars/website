import "./Layout.css";
import CarouselBackground from './CarouselBackground';
import Footer from './Footer';

import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
    hero?: HeroData;
    footerContent? : React.ReactNode;
    bookNowMenuItem?: boolean;
};

export function Layout({ children, hero = null, footerContent, bookNowMenuItem = true }: Props) {
    const isOnHomePage = window.location.pathname === "/";
    const isHomePageClassName = isOnHomePage ? "home" : "nav";
    const headerClassName = isOnHomePage ? "homeHeader" : "header";
    const heroContent = hero;

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
                    <li><Link to={{ pathname: "/", hash: "#bars" }} reloadDocument>Bars</Link></li>
                    <li><Link to="/cocktail-menu">Cocktail Menu</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/private-hire">Private Hire</Link></li>
                    <li><Link to="/cocktail-making-class">Masterclasses</Link></li>
                </ul>
                { bookNowMenuItem && <Link to="/bookings" className="buttonLink">Book Now</Link>}
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

        <Footer>
            { footerContent || null }
        </Footer>
    </>);
}
