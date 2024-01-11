import "./Home.scss"
import mariano from "../../assets/imgPrincipal.jpg"
import { useTranslation } from "react-i18next"
import imgFondo from "../../assets/3.jpg"
import imgMobile from "../../assets/imgMobile.jpg"
import Menu from "../Header/Menu"

 
const Home = () => {

    const { t } = useTranslation()

    return(
        <div className="animationgral">
            <Menu/>
            <img src={imgFondo} className="imgFondo" alt="" />
            <img src={imgMobile} className="imgMobile" alt="" />
            <div className="flexHome">
                
            <div className="flexImgPrin">
                <p className="imgAnimacion">{t("Inicio.frase1")} <br />{t("Inicio.frase2")}</p>
                <img src={mariano} className="imgAnimacion" alt="" />
            </div>
            
                
            </div>
        </div>
    )
}

export default Home