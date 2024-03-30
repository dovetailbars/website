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
            <div className="logos">
                <img src="/images/white-logo-textless.png" alt="Dovetail" width={160} /><br/>
                <span>Dovetail</span>
            </div>
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
                        2nd Floor, 9 Russell St, London WC2B 5HZ
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        info@dovetailbars.co.uk<br/>
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
