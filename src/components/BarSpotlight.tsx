import { Link } from "react-router-dom";
import SplitContent from "./SplitContent";
import { getBarData } from "../../data";

export default function(props: { barId: string }) {
    const { homePageSpotlight } = getBarData(props.barId);
    return (
    <SplitContent>
        { homePageSpotlight }
    </SplitContent>
    );
}