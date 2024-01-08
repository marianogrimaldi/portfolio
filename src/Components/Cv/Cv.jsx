import "./Cv.scss"
import desarrollo from "../../assets/desarrollo.png"
import java from "../../assets/java.png"
import react from "../../assets/react.png"
import turismo from "../../assets/turismo.jpg"
import polimodal from "../../assets/polimodal.jpg"
import mariano from "../../assets/imgPrincipal.jpg"

const Cv = () => {
    return (
        <div className="animationgral">
        <div className="bgc" > 

            <h1 className="titleCv">MARIANO GRIMALDI </h1>

            <div className="flexImgCv">
                <img src={mariano} className="imgCv" alt="" />
                <div>
                    <p>NAC 11/06/1986</p>
                    <p>ARGENTINO</p>
                    <p>DNI 32.191.484</p>
                </div>
            </div>
            <div className="datosFlex">
                <div className="datos1">
                    <p>Av. Pellegrini 1434</p>
                    <p>San Jorge</p>
                    <p>Santa Fe</p>
                </div>
                <div className="datos3">
                    <p>MAIL</p>
                    <p>marianodanielgrimaldi@gmail.com</p>
                </div>
                <div className="datos2">
                    <p>CELULAR</p>
                    <p>54 3406 421065</p>
                </div>
            </div>
            <div>
                <h2 className="titleExp">EXPERIENCIA LABORAL</h2>
            </div>

            <div className="griDatos">
                <div>
                    <h3>TO.THE.TOP</h3>
                    <p>2023 - ACTUALIDAD</p>
                </div>
                <div>
                    <h4>DESARROLLO WEB</h4>
                    <p>Trabajo de desarrollo web de manera particular, adaptando los sitios a todas los dispositivos. Utilizando una herramienta muy poderosa como lo es React Js. </p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>IMPULSO TELEVISORA SRL</h3>
                    <p>2008 - 2023</p>
                </div>
                <div>
                    <h4>ADMINISTRATIVO</h4>
                    <p>Trabajé en la oficina de Impulso Televisora durante 15 años, desarrollando varias herramientas. Desde atención al público, hasta tareas administrativas vinculadas a: confeccion de cajas administrativas, facturación nensual, diagramación de reparto de boletas, pago de sueldos, pago de servicios vinculados a ENACOM, utilización de herramientas básicas como WORD, EXCELL y sistemas varios. </p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>CRAZY LITTLE</h3>
                    <p>2021 - 2022</p>
                </div>
                <div>
                    <h4>TALLER DE CARPINTERIA</h4>
                    <p>Durante la época de la pandemia nació Crazy Little, un proyecto personal dedicado a la confeccion de mesas ratonas personalizadas. Las mismas se realizaban a gusto del cliente, manteniendo un estilo unico. Los diseños no se pintan, si no que se pirograban para garantizar mayor perdurabilidad en el tiempo. Además posee un revistero de cadenas confeccionado a mano. </p>
                    <a href="https://www.instagram.com/crazy.little.mesas/" target="blank_"> - CRAZY LITTLE -</a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>AMISTADES PELIGROSAS</h3>
                    <p>2016 - 2018</p>
                </div>
                <div>
                    <h4>RADIO</h4>
                    <p>Amistades Peligrosas era un programa de Radio que salia al aire por la noche, dos veces por semana, despues de las 22 hs. Junto a un amigo tocabamos temas sensibles vinculados a las relaciones entre las personas y tambien realizabamos especiales de bandas, tanto nacionales como internacionales. El programa se emitia por frec 99.1 de la localidad de San Jorge</p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>ELIMA TOUR</h3>
                    <p>2007 - 2008</p>
                </div>
                <div>
                    <h4>VENTAS Y COORDINACION</h4>
                    <p>Durante un año trabajé en la venta de viajes nacionales e internaciones y en la cordinacion de viajes para estudiantes a la localidad de Carlos Paz, y cordinacion de viajes para jubilados a la ciudad de Buenos Aires.</p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>SETUR</h3>
                    <p>2005 - 2007</p>
                </div>
                <div>
                    <h4>VENTAS Y COORDINACION</h4>
                    <p>Paralelo al estudio de la carrera de Turismo, trabajé para SETUR vendiendo y coordinando viajes de egresados a la localidad de Bariloche.</p>
                </div>
            </div>

            <div>
                <h2 className="titleEst">ESTUDIOS</h2>
            </div>
            <div className="griDatos">
                <div>
                    <h3>DESARROLLO WEB</h3>
                    <p>2023</p>
                </div>
                <div>
                    <h4>PLATAFORMA CODER HOUSE</h4>
                    <a href={desarrollo} target="_blank"><button>Certificado</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>JAVASCRIPT</h3>
                    <p>2023</p>
                </div>
                <div>
                    <h4>PLATAFORMA CODER HOUSE</h4>
                    <a href={java} target="_blank"><button>Certificado</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>REACT JS</h3>
                    <p>2023</p>
                </div>
                <div>
                    <h4>PLATAFORMA CODER HOUSE</h4>
                    <a href={react} target="_blank"><button>Certificado</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>TECNICO SUP. EN TURISMO - GUIA NACIONAL</h3>
                    <p>2007</p>
                </div>
                <div>
                    <h4>INSTITUTO F.A.S.T.A. SAN FRANCISCO - CORDOBA</h4>
                    <a href={turismo} target="_blank"><button>Certificado</button></a>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>ECONOMIA Y GESTION DE LAS ORGANIZACIONES</h3>
                    <p>2003</p>
                </div>
                <div>
                    <h4>COLEGIO SAGRADO CORAZON DE JESUS SAN JORGE SANTA FE </h4>
                    <a href={polimodal} target="_blank"><button>Certificado</button></a>
                </div>
            </div>
            <div>
                <h2 className="titlehab">HABILIDADES</h2>
            </div>
            <div className="griDatos">
                <div>
                    <h3>HTML</h3>
                </div>
                <div>
                    <h4>AVANZADO</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>CSS</h3>
                </div>
                <div>
                    <h4>AVANZADO</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>JAVASCRIPT</h3>
                </div>
                <div>
                    <h4>BASICO</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>REACT JS</h3>
                </div>
                <div>
                    <h4>INTERMEDIO</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>OFFICE</h3>
                </div>
                <div>
                    <h4>INTERMEDIO</h4>
                </div>
            </div>
            <div className="sep"></div>
            <div className="griDatos">
                <div>
                    <h3>IDIOMA: INGLES</h3>
                </div>
                <div>
                    <h4>INTERMEDIO</h4>
                </div>
            </div>
            <div>
                <h2 className="titlehab">OTRAS HABILIDADES</h2>
            </div>
            <div>
                <div>
                    <h3 className="habilidades">
                        Comunicación efectiva.
                        Resolución de problemas.
                        Delegación de tareas.
                        Coordinación.
                        Reacción rápida.
                        Autonomía.
                        Autocrítica.
                        Perseverancia.</h3>
                </div>
            <div>
                <h2 className="titlehob">HOBBIES</h2> 
                <h3 className="habilidades">Montañismo - Música - Carpinteria en madera.</h3>    
            </div>
            <a download="CV Mariano Grimaldi" className="descarga" href="CV.png">DESCARGAR CV</a>
            </div>
            <div className="ultimoDiv"></div>
           
        </div>
</div>
    )
}

export default Cv