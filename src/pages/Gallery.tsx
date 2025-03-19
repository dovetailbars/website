import ImageCarousel from "../components/ImageCarousel";
import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";

export default function() {
    const hero = {
        image: "",
        content: <StandardHero heading="Gallery" />
    };

    const galleryImages = [
        "/images/gallery/general/image_4-min.webp",
        "/images/gallery/general/iceblock.webp",
        "/images/gallery/general/image_12-min.webp",
        "/images/gallery/drinks/armyandnavy.webp",
        "/images/gallery/drinks/bloodymary.webp",
        "/images/gallery/drinks/bramble.webp",
        "/images/gallery/drinks/bramble2.webp",
        "/images/gallery/drinks/cubalibre.webp",
        "/images/gallery/drinks/cubalibre2.webp",
        "/images/gallery/drinks/DSC04255.webp",
        "/images/gallery/drinks/DSC06366.webp",
        "/images/gallery/drinks/image_8-min.webp",
        "/images/gallery/drinks/image_11-min.webp",
        "/images/gallery/drinks/margarita.webp",
        "/images/gallery/drinks/margarita2.webp",
        "/images/gallery/drinks/oldfashioned.webp",
        "/images/gallery/drinks/oldfashioned2.webp",
        "/images/gallery/drinks/pinacolada.webp",
        "/images/gallery/drinks/pinklady.webp",
        "/images/gallery/drinks/pornstar.webp",
        "/images/gallery/drinks/redhook.webp"
    ];

    return (
        <Layout hero={hero}>
            <section id="galleryItems">
                <ImageCarousel images={galleryImages} />
            </section>
        </Layout>
    );
}
