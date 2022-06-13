import Style from "./scrolltotop.module.scss"

export const Scrolltotop = () => {

    return (
        <button name="to top" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}} className={Style.scrollcomponent}></button>
    )
}