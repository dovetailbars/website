import "./Layout.css";
import CarouselBackground from './CarouselBackground';

import { Link } from "react-router-dom";
import * as Home from '../pages/Home';

export function Layout({ children, height = "78vh", hero = null }) {

    hero = hero || Home.Hero;

    return (<>
        <nav>            
            <Link to="/" className="logoLink">
                <img src="/images/white-logo.png" alt="Dovetail" width={100} height={80} />
            </Link>
            <ul>
                <li><Link to="/cocktail-menu">Cocktail Menu</Link></li>
                <li><Link to="/whats-on">What's On</Link></li>
                <li><Link to="/private-hire">Private Hire</Link></li>
                <li><Link to="/cocktail-making-class">Masterclasses</Link></li>
            </ul>
            <Link to="/bookings" className="buttonLink">Book Now</Link>
        </nav>

        <header style={{ height: height }}>
            <CarouselBackground items={[]}>
                <div className="hero">
                    { hero() }
                </div>
            </CarouselBackground>
        </header>

        <main>
            { children }
        </main>

        <footer>
            <span>
                © Dovetail Bar | Company No. 14991262
            </span>
        </footer>
    </>);
}
