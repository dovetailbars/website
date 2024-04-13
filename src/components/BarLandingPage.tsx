import { Link } from "react-router-dom";
import { Layout } from "./Layout";
import GoogleMaps from "./GoogleMaps";

type Props = {
    children: React.ReactNode;
    hero?: () => HeroData;
    title: string;
    googleMapsEmbedUrl: string;
};

export default function Content({ children, hero, title, googleMapsEmbedUrl }: Props) {
    return (<>
        <Layout hero={hero}>
            { children }

            <GoogleMaps 
                title={title} 
                embedUrl={googleMapsEmbedUrl} 
            />

        </Layout>
    </>);
}
