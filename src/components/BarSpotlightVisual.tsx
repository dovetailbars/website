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
    <>
    <div className="pagewide" 
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.08)), url(${spotlightImage})` 
        }}
    >
      <div className="centerAligned">
      <div className="spotlightText">
      <h3><Link to={url} className="tightButtonLink">{venueName}</Link></h3>
      {spotlightText}
        </div>
      </div>
    </div>

    </>
  );
}
