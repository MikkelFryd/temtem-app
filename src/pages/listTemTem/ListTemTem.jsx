import { useEffect, useState } from "react"
import { Card } from "../../components/card/Card"
import Style from "./listtemtem.module.scss"

export const ListTemTem = () => {
    const [temtemdata, setTemtemdata] = useState("")
    const [weaknessdata, setWeaknessdata] = useState()

    useEffect(() => {
        fetch('https://temtem-api.mael.tech/api/temtems')
        .then(res => res.json())
        .then((temtemdata) => setTemtemdata(temtemdata))

    }, [])

    useEffect(() => {
        fetch('https://temtem-api.mael.tech/api/weaknesses')
        .then(res => res.json())
        .then((weaknessdata) => setWeaknessdata(weaknessdata))
    }, [])
    

    console.log(temtemdata)
    console.log(weaknessdata)

    
    return (
        <section className={Style.gridcontainer}>
        {temtemdata && temtemdata.map((item, index) => {
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
                )
            })}
        </section>
    )
}