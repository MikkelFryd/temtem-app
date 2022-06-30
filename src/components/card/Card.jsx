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
  console.log(props)
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
          lumaIcon={props.lumaIcon}
          number={props.number}
        />
      ) : (
        <Frontcard
          name={props.name}
          description={props.description}
          image={props.image}
          number={props.number}
        />
      )}
      <button name="see more" onClick={toggleDetails}>See more</button>
    </figure>
  );
};
