import "./Home.scss"
import mariano from "../../assets/imgPrincipal.jpg"

import imgFondo from "../../assets/3.jpg"


 
const Home = () => {



    return(
        <div className="animationgral">
            
            <img src={imgFondo} className="imgFondo" alt="" />
            <div className="flexHome">
                
            <div className="flexImgPrin">
                <p className="imgAnimacion">"A la cima no se llega superando a los demás, <br />sino superandote a ti mismo."</p>
                <img src={mariano} className="imgAnimacion" alt="" />
            </div>
            
                
            </div>
        </div>
    )
}

export default Home