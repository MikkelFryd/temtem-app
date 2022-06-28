import Style from "./details.module.scss";

export const Details = (props) => {

  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  function isEvolvable(evolution) {
    if (evolution.evolves === true) {
      console.log(evolution.evolutionTree);
      return evolution.evolutionTree.map((item) => {
        return (
          <div className={Style.evolutioncontainer}>
            <b>Evolution:</b>
            <p>Name: {item.name}</p>
            <p>Stage: {item.stage + 1}</p>
            <p>Evolves at lvl: {item.level}</p>
          </div>
        );
      });
    }
  }

  function handleMatchups(){
    let counters = props.types.map((item) => handleCounters(item)).flatMap((i) => i)
    let cleanedStrength = []
    let cleanedWeakness = []

    if (counters.length > 1){
      cleanedStrength = counters[0].strengths.filter(item => !counters[1].weaknesses.includes(item.key))
      cleanedWeakness = counters[0].weaknesses.filter(item => !counters[1].strengths.includes(item.key))
    }
    else {
      cleanedStrength = counters[0].strengths
      cleanedWeakness = counters[0].weaknesses
    }
    console.log("counters: ", counters)
    console.log("CleanedWeakness: ", cleanedWeakness)
    console.log("CleanedStrength:", cleanedStrength)

    return (
      <>
      <div>
        <h5>Strong against:</h5>
        <div className={Style.strongagainst}>
        {cleanedStrength.map((item) => handleIcon(item.key))}
        </div>
        </div>
        <div>
        <h5>Weak against:</h5>
        <div className={Style.weakagainst}>
        {cleanedWeakness.map((item) => handleIcon(item.key))}
        </div>
      </div>
      </>
    )
  }

      
      function handleCounters(item) {
        let data = props.weaknessdata[item]
        let weakArr = []
        let strongArr = []

        for (const [key, value] of Object.entries(data)) {
          if (value === 0.5) {
            weakArr.push({key, value})
          }
          if (value === 2) {
            strongArr.push({key, value})
          }
        }
        
       return ({"weaknesses": weakArr, "strengths": strongArr})
      }

  
   function handleIcon(item) {
     if (item) {
       return (
         <div className={Style.iconcontainer}>
           <img src={images[`${item}.png`]} alt={`Type: ${item}`} />
         </div>
       );
    }
  }

  return (
    <figure className={Style.backside}>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
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
        <div className={Style.typecontainer}>
          {props.types &&
            props.types.map((item) => {
              return <div className={Style.typescontainer}><b>Type:</b>{handleIcon(item)}</div>;
            })}
        </div>
        <div className={Style.weaknesscontainer}>
          {handleMatchups()}
        </div>
        <div className={Style.locationscontainer}>
          {props.locations &&
            props.locations.map((item, index) => {
              return <p key={index}>Location: {item.island}</p>;
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
