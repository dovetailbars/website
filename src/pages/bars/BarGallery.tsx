import { Navigate, useParams } from "react-router-dom";
import { getBarData } from "../../../data";
import BarPageLayout from "./BarPageLayout";
import GalleryBuilder from "../../components/GalleryBuilder";


export default function() {
    const params = useParams();
    const data = getBarData(params.barId);

    if (!data || !data.id) {
        return <Navigate replace to="/" />
    }

    return (
        <BarPageLayout barData={data}>
            {/* <GalleryBuilder sections={["general", "drinks", data.id]} /> */}
            <GalleryBuilder sections={[data.id]} />
        </BarPageLayout>
    );
}
