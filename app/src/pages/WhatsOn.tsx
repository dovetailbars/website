import { Layout } from "../components/Layout";
import StandardHero from "../components/StandardHero";
import WhatsOnCommon from "../partials/WhatsOnCommon";

export function Hero(): HeroData {
    return {
        image: "/images/DTB-Initial-Cocktail-Shoot-LR-052.jpg",
        content: <StandardHero heading="What's On" />
    };
}


export function Content() {
    return (
        <Layout hero={Hero}>            
            <WhatsOnCommon />
        </Layout>
    );
}
