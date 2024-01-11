import "./ToTheTop.scss"
import logo from "../../assets/logoMarian.png"
import { useTranslation } from "react-i18next"

const TO = () =>{

    const { t } = useTranslation()

    return(
        <div className="animationgral">
            <h1 className="titleSitio">to.the.top <img src={logo} className="logottt" alt="" /> <br />{t("TTT.sitio")}</h1>
        </div>
    )
}

export default TO