import { Nav } from "../../components/nav/Nav"
import Style from "./home.module.scss"
import Logo from "../../assets/images/Logo.png"
import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <section className={Style.homecontainer}>
        <Nav/>
        <div className={Style.homesection}>
            <img src={Logo} alt="" />
            <div className={Style.buttoncontainer}>
                <Link to="/temtems">See all temtems</Link>
                <p>Simulate TemTem battle</p>
                <p>Compare TemTems</p>
            </div>
        </div>
        </section>
    )
}