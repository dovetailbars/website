import "./Layout.css";
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import CarouselBackground from './CarouselBackground';

import * as Home from '../pages/Home';

export function Layout({ children }) {
    return (<>
        <SiteHead>
            <Home.Hero />
        </SiteHead>

        <main>
            { children }
        </main>

        <Footer />
    </>);
}

export function SiteHead({ height = "78vh", children }) {
    return (<>
        <Navigation />
        <Header height={height}>
            <CarouselBackground items={[]}>
                <Hero>
                    { children }
                </Hero>
            </CarouselBackground>
        </Header>
    </>);
}