import { Link } from "react-router-dom";
import SplitContent from "./SplitContent";
import { getBarData } from "../../data";

import "./BarSpotlightVisual.css";


export default function (props: {
  barId: string;
  imagePosition: "left" | "right";
}) {
  const { id, name, venueName, spotlightImage, spotlightText } = getBarData(props.barId);
  const url = `/${id}`;
  
  return (
    <div className="barSpotlightContainer fullHeight">
      <div className="barSpotlight fullHeight" 
          style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${spotlightImage})` 
          }}
          >
        </div>
        <div className="centerAligned">
        <Link to={url}>
          <div className="spotlightText">
            <h3>{venueName}</h3>
            {spotlightText}
          </div>
        </Link>
      </div>  
    </div>
  );
}
