import DesignMyNight from "../../components/DesignMyNight";
import { Navigate, useParams } from "react-router-dom";
import { getBarData } from "../../../data";
import BarPageLayout from "./BarPageLayout";

export default function() {   
    const params = useParams();
    const data = getBarData(params.barId);
    
    if (!data) {
        return <Navigate replace to="/" />
    }

    const { name, designMyNightConfig } = data;
    const { venueId, gtmCode, returnUrl } = designMyNightConfig;

    return (
        <BarPageLayout barData={data}>
            <section className="reservation">
                <h2>Make a reservation at {name}</h2>
                <DesignMyNight venueId={venueId} gtmCode={gtmCode} returnUrl={returnUrl} />                		
            </section>
        </BarPageLayout>
    );
}   
