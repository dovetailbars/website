import { Navigate, useParams } from "react-router-dom";
import { getBarData } from "../../../data";
import BarPageLayout from "./BarPageLayout";

export default function() {
    const params = useParams();
    const data = getBarData(params.barId);

    if (!data || !data.privateHireContent) {
        return <Navigate replace to="/" />
    }

    return (
        <BarPageLayout barData={data}>
            { data.privateHireContent }
        </BarPageLayout>
    );
}
