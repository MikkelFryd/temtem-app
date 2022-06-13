import { Nav } from "../../components/nav/Nav"
import Style from "./home.module.scss"
import Logo from "../../assets/images/Logo.png"

export const Home = () => {
    return (
        <section className={Style.homecontainer}>
        <Nav/>
        <div className={Style.homesection}>
            <img src={Logo} alt="" />
            <div className={Style.buttoncontainer}>
                <a href="/temtems">See all TemTems</a>
                <a>Simulate TemTem battle</a>
                <a>Compare TemTems</a>
            </div>
        </div>
        </section>
    )
}