import { Navigate, useParams } from "react-router-dom";
import GoogleMaps from "../../components/GoogleMaps";
import GalleryBuilder from "../../components/GalleryBuilder";


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
                {/* <GalleryBuilder sections={["general", "drinks", data.id]} /> */}
                <GalleryBuilder sections={[data.id]} />
                <GoogleMaps title={data.name} embedUrl={data.googleMapsLink} />
            </>
        </BarPageLayout>
    );
}
