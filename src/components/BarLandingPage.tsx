import { Link } from "react-router-dom";
import { Layout } from "./Layout";
import GoogleMaps from "./GoogleMaps";

type Props = {
    children: React.ReactNode;
    hero?: HeroData;
    title: string;
    googleMapsEmbedUrl: string;    
    footerContent? : React.ReactNode;
};

export default function Content({ children, hero, title, googleMapsEmbedUrl, footerContent }: Props) {
    return (<>
        <Layout hero={hero} footerContent={footerContent}>
            { children }

            <GoogleMaps 
                title={title} 
                embedUrl={googleMapsEmbedUrl} 
            />

        </Layout>
    </>);
}
