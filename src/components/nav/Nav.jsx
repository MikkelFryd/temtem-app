import { Link } from "react-router-dom"
import Style from "./nav.module.scss"

export const Nav = () => {

    return (
        <nav className={Style.nav}>
            <Link to="/home">Home</Link>
            <Link to="/temtems">TemTems</Link>
        </nav>
    )
}