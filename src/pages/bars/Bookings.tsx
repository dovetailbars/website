import { Layout } from "../../components/Layout";
import DesignMyNight from "../../components/DesignMyNight";
import { useParams } from "react-router-dom";
import { getBarData } from "../bar-data";

export default function() {   
    const params = useParams();
    const data = getBarData(params.barId);

    const { name, heroContent, designMyNightConfig, footerContent } = data;
    const { venueId, gtmCode, returnUrl } = designMyNightConfig;
    
    return (        
        <Layout hero={heroContent} footerContent={footerContent}>
            <section className="reservation">
                <h2>Make a reservation at {name}</h2>
                <DesignMyNight venueId={venueId} gtmCode={gtmCode} returnUrl={returnUrl} />                		
            </section>
        </Layout>
    );
}   
