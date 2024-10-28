import { Link } from "react-router-dom";
import SplitContent from "./SplitContent";
import { getBarData } from "../../data";

export default function (props: {
  barId: string;
  imagePosition: "left" | "right";
}) {
  const { id, name, venueName, spotlightImage, spotlightText } = getBarData(props.barId);
  const url = `/${id}`;
  
  return (
    <SplitContent>
    {props.imagePosition === "left" && (
    <div>
        <img src={spotlightImage} />
    </div>
    )}

    <div>
        <h3><Link to={url} className="tightButtonLink">{venueName}</Link></h3>
        {spotlightText}
    </div>

    {props.imagePosition === "right" && (
    <div>
        <img src={spotlightImage} />
    </div>
    )}
    </SplitContent>
  );
}
