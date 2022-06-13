import { useEffect, useState } from "react"
import { Card } from "../../components/card/Card"
import { Details } from "../../components/details/Details"
import Style from "./listtemtem.module.scss"

export const ListTemTem = () => {
    const [temtemdata, setTemtemdata] = useState("")

    useEffect(() => {
        fetch('https://temtem-api.mael.tech/api/temtems')
        .then(res => res.json())
        .then((temtemdata) => setTemtemdata(temtemdata))

    }, [])

    console.log(temtemdata)

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
                    />          
            )
        })}
        </section>
    )
}