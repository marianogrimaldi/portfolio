import "./Header.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flexTitle">
                    <h1>MARIANO GRIMALDI</h1>
                    <p>DESARROLLADOR WEB</p>
                </div>
                
            <div className="flexHeader">
                <div></div>
                <ul className="flexNavBar">
                <NavLink to="/"><li>INICIO</li></NavLink>
                <NavLink to="/bio"><li>BIO</li></NavLink>
                <NavLink to="/cv"><li>CV</li></NavLink>
                <NavLink to="/proyectos"><li>PROYECTOS</li></NavLink>
                    
                   
                    <li>CONTACTO</li>
                </ul> 
            </div>
            <div className="trapecio-top"></div>
        </div>
    )
}

export default Header