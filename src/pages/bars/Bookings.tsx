import { Layout } from "../../components/Layout";
import DesignMyNight from "../../components/DesignMyNight";
import { Navigate, useParams } from "react-router-dom";
import { getBarData } from "../../../data";

export default function() {   
    const params = useParams();
    const data = getBarData(params.barId);
    
    if (!data) {
        return <Navigate replace to="/" />
    }

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
