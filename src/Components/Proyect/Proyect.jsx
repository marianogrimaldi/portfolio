import "./Proyect.scss"
import logo from "../../assets/logoMarian.png"
import mon from "../../assets/mon.png"
import imgFondo from "../../assets/3.jpg"
import { NavLink } from "react-router-dom"

const Proyect = () => {
    return (
        <div>
             <img src={imgFondo} className="imgFondo" alt="Paisaje" />
            <div className="flexPro">
                    <NavLink to="/toTheTop"><button className="btmPro">to.the.top<img src={logo} className="logoPro" alt="Logo TTT" /></button></NavLink>
                    <NavLink to="/seis"><button className="btmPro"> <img src={mon} className="mon" alt="" />10x6000s</button></NavLink>
            </div>
        </div>
    )
}

export default Proyect