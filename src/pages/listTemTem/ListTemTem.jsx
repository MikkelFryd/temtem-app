import { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import Style from "./listtemtem.module.scss";

export const ListTemTem = () => {
  const [temtemdata, setTemtemdata] = useState([]);
  const [weaknessdata, setWeaknessdata] = useState();
  const [searchdata, setSearchdata] = useState();
  const [activesearch, setActivesearch] = useState(false);
  const [searchstring, setSearchstring] = useState()

  useEffect(() => {
    fetch("https://temtem-api.mael.tech/api/temtems")
      .then((res) => res.json())
      .then((temtemdata) => setTemtemdata(temtemdata));
  }, []);

  useEffect(() => {
    fetch("https://temtem-api.mael.tech/api/weaknesses")
      .then((res) => res.json())
      .then((weaknessdata) => setWeaknessdata(weaknessdata));
  }, []);

  console.log(temtemdata);
  //console.log(weaknessdata);

  function handleSearch(e) {
      let keyword = e.target.value;
      setSearchstring(keyword)
    let newArr = temtemdata.filter((item) => {
      if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
        return item;
      } else return null;
    });

    if (newArr.length > 0) {
      setActivesearch(true);
    } 
    else {
      setActivesearch(false);
    }

    setSearchdata(newArr);
  }

  function clear() {
    setSearchstring("")
    setActivesearch(false)
  }

  return (
    <section className={Style.gridcontainer}>
      <form>
        <input placeholder="Search..." value={searchstring} onChange={(e) => handleSearch(e)} />
        <button onClick={() => {clear()}} id="clear">Reset</button>
      </form>
      {activesearch
        ? searchdata.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                image={`https://temtem-api.mael.tech${item.icon}`}
                description={item.gameDescription}
                stats={item.stats}
                types={item.types}
                evolution={item.evolution}
                techniques={item.techniques}
                traits={item.traits}
                locations={item.locations}
                weaknessdata={weaknessdata}
              />
            );
          })
        : temtemdata &&
          temtemdata.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                image={`https://temtem-api.mael.tech${item.icon}`}
                description={item.gameDescription}
                stats={item.stats}
                types={item.types}
                evolution={item.evolution}
                techniques={item.techniques}
                traits={item.traits}
                locations={item.locations}
                weaknessdata={weaknessdata}
              />
            );
          })}
    </section>
  );
};
