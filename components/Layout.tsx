import CarouselBackground from './CarouselBackground.tsx';

type Props = { children: any, height: string, hero: any };

export function Layout({ children, height = "78vh", hero = null }: Props) {

    return (<>
        <nav>            
            <a href="/" className="logoLink">
                <img src="/images/white-logo.png" alt="Dovetail" width={100} height={80} />
            </a>
            <ul>
                <li><a href="/cocktail-menu">Cocktail Menu</a></li>
                <li><a href="/whats-on">What's On</a></li>
                <li><a href="/private-hire">Private Hire</a></li>
                <li><a href="/cocktail-making-class">Masterclasses</a></li>
            </ul>
            <a href="/bookings" className="buttonLink">Book Now</a>
        </nav>

        <header style={{ height: height }}>
            <CarouselBackground items={[]}>
                <div className="hero">
                    {/* { hero() } */}
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
