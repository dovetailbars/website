import { Navigate, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import GoogleMaps from "../../components/GoogleMaps";

import { getBarData} from "../../../data";

export default function() {
    const params = useParams();
    const data = getBarData(params.barId);

    if (!data) {
        return <Navigate replace to="/" />
    }

    const { 
        name,
        heroContent,
        overviewContent,
        footerContent,
        googleMapsLink
    } = data;
    
    return (<>
        <Layout hero={heroContent} footerContent={footerContent}>
            { overviewContent }
            <GoogleMaps title={name} embedUrl={googleMapsLink} />
        </Layout>
    </>);
}
