import { Nav } from "../../components/nav/Nav"
import { Scrolltotop } from "../../components/scrolltotop/Scrolltotop"
import { ListTemTem } from "../listTemTem/ListTemTem"
import Style from "./temtems.module.scss"

export const Temtems = () => {


    return (
        <section className={Style.temtemscontainer}>
            <Nav/>
            <ListTemTem/>
            <Scrolltotop />
        </section>
    )
}