import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
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
    );
}