import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CarouselBackground from './components/CarouselBackground';
import Home from './pages/Home';
import CocktailMenu from './pages/CocktailMenu';
import WhatsOn from './pages/WhatsOn';
import PrivateHire from './pages/PrivateHire';
import Bookings from './pages/Bookings';
import CocktailMakingClass from './pages/CocktailMakingClass';
import { Navigate, Routes, Route, Link } from "react-router-dom";

export default function App() {

    return (<>
        <Navigation />

        <Header>
            <CarouselBackground items={[]}>
                <img src="/images/white-logo.png" alt="Dovetail" height={205} />
                <br />
                <span>A PRIVATE AFFAIR</span>
                <br />
                <span>INTIMATE | REFINED | ELEVATED</span>                        
            </CarouselBackground>
        </Header>


        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktail-menu" element={<CocktailMenu />} />
                <Route path="/whats-on" element={<WhatsOn />} />
                <Route path="/private-hire" element={<PrivateHire />} />
                <Route path="/cocktail-making-class" element={<CocktailMakingClass />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>

        <Footer />
    </>);
}


