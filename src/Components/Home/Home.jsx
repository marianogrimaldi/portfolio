import "./Home.scss"
import mariano from "../../assets/imgPrincipal.jpg"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import imgFondo from "../../assets/3.jpg"
import logo from "../../assets/logoMarian.png"
 
const Home = () => {

    let imagenes = [
       
        "/2.jpg",
        
        "/4.jpg",
        "/5.jpg",
        "/6.jpg",
    ]

    return(
        <div>
            <img src={imgFondo} className="imgFondo" alt="" />
            <div className="flexHome">
                <div className="flexLogo">
                    <img src={logo} className="logo" alt="Logo To The Top" />
                    <p>to.the.top</p>
                </div>
            <div className="flexImgPrin">
                <img src={mariano} className="imgAnimacion" alt="" />
            </div>
            <RViewer imageUrls={imagenes}>
                <div className="imgGal">
                    {imagenes.map((imagen, index)=> {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                     <img src={imagen} alt="" />
                                </div>
                            </RViewerTrigger>
                                )
                    }) }
                </div>
             </RViewer>
            </div>
        </div>
    )
}

export default Home