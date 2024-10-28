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
        <h3>{ name }</h3>
        {spotlightText}
        <p className="paddedTop">
            <Link to={url} className="buttonLink">Visit {venueName}</Link>
        </p>
    </div>

    {props.imagePosition === "right" && (
    <div>
        <img src={spotlightImage} />
    </div>
    )}
    </SplitContent>
  );
}
