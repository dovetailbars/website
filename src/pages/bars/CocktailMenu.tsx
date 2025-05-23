import { Navigate, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import StandardHero from "../../components/StandardHero";
import { getBarData } from "../../../data";
import CocktailItem from "../../components/CocktailItem";

export default function BarCocktailMenu() {
    const { barId } = useParams();
    const bar = getBarData(barId);

    if (!bar) {
        return <Navigate replace to="/" />
    }

    const hero = {
        image: bar.heroImage || "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading={bar.name} />
    };

    return (
        <Layout hero={hero}>
            <section className="cocktailmenu">
                <h1>House Cocktails</h1>
                <p>All house cocktails £{bar.cocktailPrice}, classics available on request</p>
                <p>Our drinks are playful reimaginings of London’s most popular drinks. We have taken the best of the familiar, reworking them into new and exciting concoctions, whilst respecting the flavours that made them beloved.</p>
                <div className="cocktailmenu_container">
                    {bar.menu.map((cocktail) => (
                        <CocktailItem key={cocktail.name} cocktail={cocktail} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}
