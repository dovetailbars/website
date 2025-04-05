import drinks from "../../data/drinks";
import CocktailItem from "../components/CocktailItem";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading="Cocktail Menu" />
    };

    const menu = [...drinks.values()];

    return (
        <Layout hero={hero}>
            <section className="cocktailmenu">
                <h1>House Cocktails</h1>
                <p>Our drinks are playful reimaginings of London’s most popular drinks. We have taken the best of the familiar, reworking them into new and exciting concoctions, whilst respecting the flavours that made them beloved.</p>
                <div className="cocktailmenu_container">
                    {menu.map((cocktail) => (
                        <CocktailItem key={cocktail.name} cocktail={cocktail} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}
