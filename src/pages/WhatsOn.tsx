import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import WhatsOnCommon from "../partials/WhatsOnCommon";

export function Content() {
    const hero = {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: (<StandardHero heading="What's On" subheading="Our Upcoming Events" />)
    };

    return (
        <Layout hero={hero}>            
            <WhatsOnCommon />
        </Layout>
    );
}
