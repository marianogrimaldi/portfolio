
import "./Header.scss"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "../../assets/menu.png"
const Menu = () => {

    const { t } = useTranslation()

    return (
        <header>
            <label htmlFor="menu" className="nav__label">
                    <img src={logo} alt="" className="nav__img" />
                </label>
                <input type="checkbox" id="menu" className="nav__imput" />
            <ul className="ulFlex">
                <NavLink to="/"><li>{t("Header.inicio")}</li></NavLink>
                <NavLink to="/bio"><li>BIO</li></NavLink>
                <NavLink to="/cv"><li>CV</li></NavLink>
                <NavLink to="/proyectos"><li>{t("Header.proyectos")}</li></NavLink>
                <a href="#footer"><li>{t("Header.contacto")}</li></a>
            </ul> 

  </header>
    )
}

export default Menu