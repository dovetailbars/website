import { Navigate, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import StandardHero from "../../components/StandardHero";
import { getBarData } from "../../../data";

export default function BarCocktailMenu() {
    const { barId } = useParams();
    const bar = getBarData(barId);
    
    if (!bar) {
        return <Navigate replace to="/" />
    }

    const hero = {
        image: bar.heroImage || "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading={`${bar.name} Cocktail Menu`} />
    };

    return (
        <Layout hero={hero}>
            <section className="secondary">
                <div className="centeredContent centerAligned">
                    {bar.menuImage ? (
                        <img src={bar.menuImage} alt={`${bar.name} Cocktail Menu`} className="menufullWidth" />
                    ) : (
                        <img src="/images/Dovetail-Menu.jpg" alt="Cocktail Menu" className="menufullWidth" />
                    )}
                </div>
            </section>
        </Layout>
    );
}