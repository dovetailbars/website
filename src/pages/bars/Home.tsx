import { Navigate, useParams } from "react-router-dom";
import GoogleMaps from "../../components/GoogleMaps";

import { getBarData} from "../../../data";
import BarPageLayout from "./BarPageLayout";

export default function() {
    const params = useParams();
    const data = getBarData(params.barId);

    if (!data) {
        return <Navigate replace to="/" />
    }
    
    return (
        <BarPageLayout barData={data}>
            <>
                { data.overviewContent }
                <GoogleMaps title={data.name} embedUrl={data.googleMapsLink} />
            </>
        </BarPageLayout>
    );
}
