import "./Footer.scss"
import circuito from "../../assets/circuito.png"
import wpp from "../../assets/wppLogo.png"
import inst from "../../assets/instLogo.png"
import face from "../../assets/faceLogo.webp"
import { useTranslation } from "react-i18next"

const Footer = () => {

    const { t } = useTranslation() 

    return(
        <div id="footer">
            
            <div className="flexFooter">
                <div className="flexTituloFppter">
                    <h1>MARIANO GRIMALDI</h1>
                    <p>{t("Footer.desarrollador")}</p>
                </div>
                <div className="flexRedes">
                    <a href="https://api.whatsapp.com/send?phone=5493406421065" target="blank"><img src={wpp} alt="" /></a>
                    <a href="https://www.instagram.com/mariano.grimaldi1106/"target="blank"><img src={inst} alt="" /></a>
                    <a href="https://www.facebook.com/mariano.grimaldi.714/"target="blank"><img src={face} alt="" /></a>
                </div>
                <p>MAIL: marianodanielgrimaldi@gmail.com</p>
                <p>{t("Footer.celular")}: 54 3406 421065</p>
            </div>
            <div className="trapecio-foot"></div>
        </div>
    )
}

export default Footer