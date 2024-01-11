import "./Cv.scss"
import desarrollo from "../../assets/desarrollo.png"
import java from "../../assets/java.png"
import react from "../../assets/react.png"
import turismo from "../../assets/turismo.jpg"
import polimodal from "../../assets/polimodal.jpg"
import mariano from "../../assets/imgPrincipal.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"


const Cv = () => {

    const { t } = useTranslation()

    return (
        <div className="animationgral">
            <Menu/>
        <div className="bgc" > 

            <h1 className="titleCv">MARIANO GRIMALDI </h1>

            <div className="flexImgCv">
                <img src={mariano} className="imgCv" alt="" />
                <div>
                    <p>{t("CV.nac")} 11/06/1986</p>
                    <p>{t("CV.arg")}</p>
                    <p>{t("CV.dni")} 32.191.484</p>
                </div>
            </div>
            <div className="datosFlex">
                <div className="datos1">
                    <p>{t("CV.calle")}</p>
                    <p>{t("CV.ciudad")}</p>
                    <p>Santa Fe</p>
                </div>
                <div className="datos3">
                    <p>MAIL</p>
                    <p>marianodanielgrimaldi@gmail.com</p>
                </div>
                <div className="datos2">
                    <p>{t("CV.celular")}</p>
                    <p>54 3406 421065</p>
                </div>
            </div>
            <div>
                <h2 className="titleExp">{t("CV.experiencia")}</h2>
            </div>

            <div className="griDatos">
                <div>
                    <h3>TO.THE.TOP</h3>
                    <p>2023 - {t("CV.actualidad")}</p>
                </div>
                <div>
                    <h4>{t("CV.desarrollo")}</h4>
                    <p>{t("CV.frase1")} </p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>IMPULSO TELEVISORA SRL</h3>
                    <p>2008 - 2023</p>
                </div>
                <div>
                    <h4>{t("CV.administrativo")}</h4>
                    <p>{t("CV.frase2")} </p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>CRAZY LITTLE</h3>
                    <p>2021 - 2022</p>
                </div>
                <div>
                    <h4>{t("CV.taller")}</h4>
                    <p>{t("CV.frase3")} </p>
                    <a href="https://www.instagram.com/crazy.little.mesas/" target="blank_"> - CRAZY LITTLE -</a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>{t("CV.amistades")}</h3>
                    <p>2016 - 2018</p>
                </div>
                <div>
                    <h4>RADIO</h4>
                    <p>{t("CV.frase4")}</p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>ELIMA TOUR</h3>
                    <p>2007 - 2008</p>
                </div>
                <div>
                    <h4>{t("CV.ventas")}</h4>
                    <p>{t("CV.frase5")}</p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>SETUR</h3>
                    <p>2005 - 2007</p>
                </div>
                <div>
                    <h4>{t("CV.ventas")}</h4>
                    <p>{t("CV.frase6")}</p>
                </div>
            </div>

            <div>
                <h2 className="titleEst">{t("CV.estudios")}</h2>
            </div>
            <div className="griDatos">
                <div>
                    <h3>{t("CV.desarrollo")}</h3>
                    <p>2023</p>
                </div>
                <div>
                    <h4>{t("CV.coder")}</h4>
                    <a href={desarrollo} target="_blank"><button>{t("CV.certificado")}</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>JAVASCRIPT</h3>
                    <p>2023</p>
                </div>
                <div>
                    <h4>{t("CV.coder")}</h4>
                    <a href={java} target="_blank"><button>{t("CV.certificado")}</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>REACT JS</h3>
                    <p>2023</p>
                </div>
                <div>
                    <h4>{t("CV.coder")}</h4>
                    <a href={react} target="_blank"><button>{t("CV.certificado")}</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>{t("CV.tecnico")}</h3>
                    <p>2007</p>
                </div>
                <div>
                    <h4>{t("CV.instituto")}</h4>
                    <a href={turismo} target="_blank"><button>{t("CV.certificado")}</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>{t("CV.economia")}</h3>
                    <p>2003</p>
                </div>
                <div>
                    <h4>{t("CV.colegio")} </h4>
                    <a href={polimodal} target="_blank"><button>{t("CV.certificado")}</button></a>
                </div>
            </div>
            <div>
                <h2 className="titlehab">{t("CV.habilidades")}</h2>
            </div>
            <div className="griDatos">
                <div>
                    <h3>HTML</h3>
                </div>
                <div>
                    <h4>{t("CV.avanzado")}</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>CSS</h3>
                </div>
                <div>
                    <h4>{t("CV.avanzado")}</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>JAVASCRIPT</h3>
                </div>
                <div>
                    <h4>{t("CV.basico")}</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>REACT JS</h3>
                </div>
                <div>
                    <h4>{t("CV.intermedio")}</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>OFFICE</h3>
                </div>
                <div>
                    <h4>{t("CV.intermedio")}</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>{t("CV.idioma")}</h3>
                </div>
                <div>
                    <h4>{t("CV.intermedio")}</h4>
                </div>
            </div>
            <div>
                <h2 className="titlehab">{t("CV.otras")}</h2>
            </div>
            <div>
                <div>
                    <h3 className="habilidades">
                    {t("CV.frase7")}</h3>
                </div>
            <div>
                <h2 className="titlehob">HOBBIES</h2> 
                <h3 className="habilidades">{t("CV.frase8")}</h3>    
            </div>
            <div>
               <a download="CV Mariano Grimaldi" className="descarga" href="CV.PNG">DESCARGAR CV</a>  
               <a download="CV Mariano Grimaldi" className="descarga" href="CVI.PNG">DOWNLOAD CV</a>  
            </div>
           
            </div>
            <div className="ultimoDiv"></div>
           
        </div>
</div>
    )
}

export default Cv