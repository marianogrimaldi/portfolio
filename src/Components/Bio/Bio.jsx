import "./Bio.scss"
import imgFondo from "../../assets/3.jpg"
import imgMobile from "../../assets/imgMobile.jpg"
import salinas from "../../assets/salinas.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"


const Bio = () => {

    const { t } = useTranslation()

    return (
        <div className="animationgral">
           
            <Menu/>
            <img src={imgFondo} className="imgFondo" alt="" />
            <img src={imgMobile} className="imgMobile" alt="" />
            
            <div className="bio">
              
                <p >{t("Bio.frase1")}</p>
                <div className="flezBio">
                    <div>
                    <p>
                    {t("Bio.frase2")}
                    </p>
                    <p>
                    {t("Bio.frase3")}
                    </p>
                    <p>
                    {t("Bio.frase4")}
                    </p>
                    </div>
                    <img src={salinas} alt="Salinas Grandes" />
                </div>

                <p>
                {t("Bio.frase5")}
                </p>

            </div>
        </div>
    )
}

export default Bio 