import { Details } from "../details/Details";
import Style from "./card.module.scss";
import { useState } from "react";
import { Frontcard } from "../frontcard/Frontcard";

export const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    if (showDetails === true) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
    }
  }
  return (
    <figure className={Style.listfigure}>
      {showDetails ? (
        <Details
          stats={props.stats}
          evolution={props.evolution}
          types={props.types}
          techniques={props.techniques}
          traits={props.traits}
          locations={props.locations}
          weaknessdata={props.weaknessdata}
        />
      ) : (
        <Frontcard
          name={props.name}
          description={props.description}
          image={props.image}
        />
      )}
      <button name="see more" onClick={toggleDetails}>See more</button>
    </figure>
  );
};
