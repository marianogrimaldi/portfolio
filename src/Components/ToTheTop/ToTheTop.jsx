import "./ToTheTop.scss"
import logo from "../../assets/logoMarian.png"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"


const TO = () =>{

    const { t } = useTranslation()

    return(
        <div className="animationgral">
            <Menu/>
            <h1 className="titleSitio">to.the.top <img src={logo} className="logottt" alt="" /> <br />{t("TTT.sitio")}</h1>
        </div>
    )
}

export default TO