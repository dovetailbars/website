import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading="Cocktail Menu" />
    };

    return (
        <Layout hero={hero}>
            <section className="secondary">
                <div className="centeredContent centerAligned">
                    <img src="/images/Dovetail-Menu.jpg" alt="Cocktail Menu" className="menufullWidth" />
                </div>
            </section>
        </Layout>
    );
}
