import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-020.jpg",
        content: <StandardHero heading="Gallery" />
    };

    const numberRange = (start: number, end: number) => Array.from({length: (end - start)}, (v, k) => k + start);
    const rangeArray = numberRange(1, 16);
    const images = rangeArray.map(i => `/images/gallery/image_${i}-min.jpg`);

    const ordered = images.sort(() => Math.random() - 0.5);

    return (
        <Layout hero={hero}>
            <section className="secondary">
                <div className="centeredContent centerAligned">
                            
                    <div className="gallery">
                        {ordered.map((image, index) => (
                            <img key={index} src={image} alt={`Gallery image ${index}`} />
                        ))}
                    </div>


                </div>
            </section>


        </Layout>
    );
}
