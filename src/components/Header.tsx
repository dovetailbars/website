import Hamburger from './Hamburger';
import Hero from './Hero';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(hero: HeroData) {
    const isOnHomePage = window.location.pathname === "/";
    const logoLinkStyle = isOnHomePage ? "0" : "100";

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="logoLink" style={{ opacity: logoLinkStyle }}>Dovetail</Link>
                <h1 className="navTitle">Dovetail</h1>
                <Hamburger />
                <ul className="navList">
                    <li><Link className="navList-link" to={{ pathname: "/", hash: "#bars" }} reloadDocument>Bars</Link></li>
                    <li><Link className="navList-link" to="/cocktail-menu">Cocktail Menu</Link></li>
                    <li><Link className="navList-link" to="/gallery">Gallery</Link></li>
                    <li><Link className="navList-link" to="/private-hire">Private Hire</Link></li>
                    <li><Link className="navList-link" to="/cocktail-making-class">Masterclasses</Link></li>
                </ul>
                <Link to="/bookings" className="buttonLink bookingLink">Book Now</Link>
            </nav>
            <Hero {...hero}/>
        </header>
    );
}
