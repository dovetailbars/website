import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import GalleryBuilder from "../components/GalleryBuilder";

export default function() {
    const hero = {
        image: "/images/webpDTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading="Gallery" />
    };

    return (
        // <Layout hero={hero}>
        <Layout >
            <section className="secondary fullHeight">
                <div className="centeredContent centerAligned">
                  <GalleryBuilder sections={["general", "drinks"]} />
                </div>
            </section>
        </Layout>
    );
}
