import "./Header.scss"

import { NavLink } from "react-router-dom"
import Traductor from "../TraductorSelect/Traductor"
import { useTranslation } from "react-i18next"
const Header = () => {

    const { t } = useTranslation()    

    return (
        <div>
            <div className="flexTitle">
                    <h1>MARIANO GRIMALDI</h1>
                    <p>{t("Titulo.desarrollador")}</p>
                </div>
                
            <div className="flexHeader">
                <div>
                </div>
                <Traductor />
                <ul className="navFlex">
                    
                    <NavLink to="/"><li>{t("Header.inicio")}</li></NavLink>
                    <NavLink to="/bio"><li>BIO</li></NavLink>
                    <NavLink to="/cv"><li>CV</li></NavLink>
                    <NavLink to="/proyectos"><li>{t("Header.proyectos")}</li></NavLink>
                    <a href="#footer"><li>{t("Header.contacto")}</li></a>
                </ul> 
            </div>
            <div className="trapecio-top"></div>
        </div>
    )
}

export default Header
