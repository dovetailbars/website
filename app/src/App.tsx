import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { Routes, Route, Link } from "react-router-dom";

export default function App() {

    return (<>

<nav>            
    <Link to="/">
        <img src="/images/white-logo.png" alt="Dovetail" width={100} height={80} />
    </Link>
    <ul>
        <li><Link to="/cocktail-menu">COCKTAIL MENU</Link></li>
        <li><Link to="/whats-on">WHAT'S ON</Link></li>
        <li><Link to="/private-hire">PRIVATE HIRE</Link></li>
        <li><Link to="/cocktail-making-class">MASTERCLASSES</Link></li>
    </ul>
</nav>

<Header>
    <Carousel items={[]}>
        <img src="/images/white-logo.png" alt="Dovetail" height={205} />
        <br />
        <span>A PRIVATE AFFAIR</span>
        <br />
        <span>INTIMATE | REFINED | ELEVATED</span>                        
    </Carousel>
</Header>


<main>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cocktail-menu" element={<CocktailMenu />} />
  <Route path="/whats-on" element={<WhatsOn />} />
  <Route path="/private-hire" element={<PrivateHire />} />
  <Route path="/cocktail-making-class" element={<CocktailMakingClass />} />
</Routes>


</main>

<Footer />
    
</>);
}


function Home() {
    return (
        <section className="flow">
            <h2>BESPOKE PRIVACY</h2>
            <p>
                Nestled discretely away above the bustling Covent Garden Market, by the West End, The Dovetail Bar is your hideaway for all private affairs.
                A joint venture with RedFarm, in a hidden room, we serve creative yet unpretentious cocktails in a refined intimate environment.
                The ultimate hideaway from London’s busy streets, the West End’s best kept secret.
            </p>
        </section>
    );
}

function CocktailMenu() {
    return (
        <section className="flow">
            <h2>COCKTAIL MENU</h2>
            <p>
                Our cocktail menu is a celebration of the best of British produce, with a nod to the classics.
                We have a selection of cocktails that are sure to delight and surprise, with a focus on quality ingredients and expertly crafted drinks.
            </p>
        </section>
    );
}

function WhatsOn() {
    return (
        <section className="flow">
            <h2>WHAT'S ON</h2>
            <p>
                We have a range of events throughout the year, from live music to cocktail masterclasses.
                Check out our events page to see what's coming up, and book your tickets now!
            </p>
        </section>
    );
}

function PrivateHire() {
    return (
        <section className="flow">
            <h2>PRIVATE HIRE</h2>
            <p>
                The Dovetail Bar is available for private hire, for events of all sizes.
                Whether you're looking for a space for a birthday party, a corporate event, or a wedding, we can help.
                Get in touch to find out more about our private hire options.
            </p>
        </section>
    );
}

function CocktailMakingClass() {
    return (
        <section className="flow">
            <h2>COCKTAIL MAKING CLASS</h2>
            <p>
                Our cocktail masterclasses are a fun and interactive way to learn how to make your favourite cocktails.
                Whether you're looking for a fun activity for a hen party, a team building event, or just a fun night out with friends, our cocktail masterclasses are the perfect choice.
                Get in touch to find out more about our cocktail making classes.
            </p>
        </section>
    );
}