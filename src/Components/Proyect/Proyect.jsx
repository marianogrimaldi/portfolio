import "./Proyect.scss"
import imgMobile from "../../assets/imgMobile.jpg"
import imgFondo from "../../assets/3.jpg"
import { NavLink } from "react-router-dom"
import Menu from "../Header/Menu"


const Proyect = () => {
    return (
        <div className="animationgral">
            <Menu/>
             <img src={imgFondo} className="imgFondo" alt="Paisaje" />
             <img src={imgMobile} className="imgMobile" alt="" />
            <div className="flexPro">
                    <NavLink to="/toTheTop"><button className="btmPro">to.the.top</button></NavLink>
                    <NavLink to="/seis"><button className="btmPro">10x6000s</button></NavLink>
            </div>
        </div>
    )
}

export default Proyect