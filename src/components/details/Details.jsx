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
            <p>{item.stage + 1}</p>
            <p>{item.name}</p>
            <p>{item.level}</p>
          </div>
        );
      });
    }
  }
  console.log(images)
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
          <h5 className={Style.strongtext}>Strong against:</h5>
          <div className={Style.strongagainst}>
          {cleanedStrength.map((item) => handleIcon(item.key))}
          </div>
        </div>
      <div>
          <h5 className={Style.weaktext}>Weak against:</h5>
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
           <img src={images[`${item}.png`]} alt={`Type-${item}`} />
         </div>
       );
    }
  }

  function handleNumber() {
    if(props.number < 10) {
      return (
        <p>{`#00${props.number}`}</p>
      )
    } else if (props.number < 100 && props.number > 10) {
      return (
        <p>{`#0${props.number}`}</p>
      )
    } else {
      return <p>{`#${props.number}`}</p>
    }
  }

  return (
    <figure className={Style.backside}>
      <div className={Style.portraitcontainer}>
          {handleNumber()}
          <img src={props.lumaIcon} alt={`Luma-${props.name}`} />
      </div>
      <section>
        <div className={Style.statscontainer}>
        <h2>Stats</h2>
          <div>
            <h3>atk:</h3><p>{props.stats.atk}</p>
          </div>
          <div>
            <h3>def:</h3><p>{props.stats.def}</p>
          </div>
          <div>
            <h3>hp:</h3><p>{props.stats.hp}</p>
          </div>
          <div>
            <h3>spatk:</h3><p>{props.stats.spatk}</p>
          </div>
          <div>
            <h3>spd:</h3><p>{props.stats.spd}</p>
          </div>
          <div>
            <h3>spdef:</h3><p>{props.stats.spdef}</p>
          </div>
          <div>
            <h3>sta:</h3><p>{props.stats.sta}</p>
          </div>
          <div>
            <h3>Total:</h3><p>{props.stats.total}</p>
          </div>
        </div>
      <figcaption>
        <div className={Style.typecontainer}>
          {props.types &&
            props.types.map((item) => {
              return <div className={Style.typescontainer}><b>Type:</b>{handleIcon(item)}</div>;
            })}
        </div>
        <div className={Style.weaknesscontainer}>
          <div className={Style.againstcontainer}>
          {handleMatchups()}
          </div>
        </div>
        <div className={Style.locationscontainer}>
          {props.locations &&
            props.locations.map((item, index) => {
              return <p key={index}>Location: {item.island}</p>;
            })}
        </div>
        <div className={Style.evolutionHeader}>
          <h2>Evolutions: </h2>
          <div>
            <p>Stage:</p>
            <p>Name:</p>
            <p>Level:</p>
          </div>
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
            </section>
    </figure>
  );
};
