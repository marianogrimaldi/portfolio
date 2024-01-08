import "./Proyect.scss"
import logo from "../../assets/logoMarian.png"
import mon from "../../assets/mon.png"
import imgFondo from "../../assets/3.jpg"
import { NavLink } from "react-router-dom"

const Proyect = () => {
    return (
        <div className="animationgral">
             <img src={imgFondo} className="imgFondo" alt="Paisaje" />
            <div className="flexPro">
                    <NavLink to="/toTheTop"><button className="btmPro">to.the.top</button></NavLink>
                    <NavLink to="/seis"><button className="btmPro">10x6000s</button></NavLink>
            </div>
        </div>
    )
}

export default Proyect