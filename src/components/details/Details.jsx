import Style from "./details.module.scss";

export const Details = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(images);

  function isEvolvable(evolution) {
    if (evolution.evolves === true) {
      console.log(evolution.evolutionTree);
      return evolution.evolutionTree.map((item, index) => {
        return (
          <div key={index} className={Style.evolutioncontainer}>
            <b>Evolution:</b>
            <p>Name: {item.name}</p>
            <p>Stage: {item.stage + 1}</p>
            <p>Evolves at lvl: {item.level}</p>
          </div>
        );
      });
    }
  }

  function handleIcon(item) {
    if (item) {
      return (
        <div className={Style.typescontainer}>
          <b>Type:</b>
          <img src={images[`${item}.png`]} alt={`Type: ${item}`} />
        </div>
      );
    }
  }
  return (
    <figure className={Style.backside}>
      <ul>
        <h4>Stats</h4>
        <li>atk: {props.stats.atk}</li>
        <li>def: {props.stats.def}</li>
        <li>hp: {props.stats.hp}</li>
        <li>spatk: {props.stats.spatk}</li>
        <li>spd: {props.stats.spd}</li>
        <li>spdef: {props.stats.spdef}</li>
        <li>sta: {props.stats.sta}</li>
        <b>Total: {props.stats.total}</b>
      </ul>
      <figcaption>
        <div>
          {props.types &&
            props.types.map((item, index) => {
              return <>{handleIcon(item, index)}</>;
            })}
        </div>
        <div>{isEvolvable(props.evolution)}</div>
        <div className={Style.traitscontainer}>
          {props.traits &&
            props.traits.map((item, index) => {
              return <p key={index}>Traits: {item}</p>;
            })}
        </div>
        <div>
          {props.techniques &&
            props.techniques.slice(0, 5).map((item, index) => {
              return (
                <div key={index} className={Style.techniquecontainer}>
                  <p>Technique: {item.name}</p>
                  <p>Level: {item.levels}</p>
                </div>
              );
            })}
        </div>
      </figcaption>
    </figure>
  );
};
