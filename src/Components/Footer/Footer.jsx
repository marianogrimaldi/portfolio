import "./Footer.scss"
import circuito from "../../assets/circuito.png"
import wpp from "../../assets/wppLogo.png"
import inst from "../../assets/instLogo.png"
import face from "../../assets/faceLogo.webp"


const Footer = () => {
    return(
        <div>
            
            <div className="flexFooter">
                <div className="flexTituloFppter">
                    <h1>MARIANO GRIMALDI</h1>
                    <p>DESARROLLADOR WEB</p>
                </div>
                <div className="flexRedes">
                   <img src={wpp} alt="" />
                   <img src={inst} alt="" />
                   <img src={face} alt="" />
                </div>
                <p>MAIL: marianodanielgrimaldi@gmail.com</p>
                <p>CELULAR: 54 3406 421065</p>
            </div>
            <div className="trapecio-foot"></div>
        </div>
    )
}

export default Footer