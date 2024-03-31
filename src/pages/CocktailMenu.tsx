import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading="Cocktail Menu" />
    };
}


export function Content() {
    return (
        <Layout hero={Hero}>
            <section className="secondary">
                <div className="centeredContent">
                    <img src="/images/Dovetail-Menu.jpg" alt="Cocktail Menu" className="fullWidth" />
                </div>
            </section>
        </Layout>
    );
}
