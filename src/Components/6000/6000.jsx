import "./6000.scss"
import imgFondo from "../../assets/3.jpg"


const SEIS = () => {
    return (
        <div className="animationgral">
            <img src={imgFondo} className="imgFondo" alt="" />
            <p className="textSeis">6000 x 10 es un proyecto ambicioso que consiste en escalar las 10 montañas mas altas de Argentina. Todas ellas se encuentan en las provincias de Catamarca, Mendoza, Salta y La Rioja.</p>
            <ol className="seisMount"> 
                <a href="https://es.wikipedia.org/wiki/Aconcagua" target="blank_"><li>1 - 6962 Aconcagua</li></a>
                <a href="https://es.wikipedia.org/wiki/Nevado_Ojos_del_Salado"target="blank_"><li>2 - 6891 Nevado Ojos del Salado</li></a>
                <a href="https://es.wikipedia.org/wiki/Monte_Pissis"target="blank_"><li>3 - 6882 Monte Pissis</li></a>
                <a href="https://es.wikipedia.org/wiki/Cerro_Mercedario"target="blank_"><li>4 - 6770 Cerro Mercedario</li></a>
                <a href="https://es.wikipedia.org/wiki/Cerro_Bonete_Chico"target="blank_"><li>5 - 6759 Bonete Chico</li></a>
                <a href="https://es.wikipedia.org/wiki/Nevado_Tres_Cruces"target="blank_"><li>6 - 6758 Nevado Tres Cruces</li></a>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Llullaillaco"target="blank_"><li>7 - 6739 Llullaillaco</li></a>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Walther_Penck"target="blank_"><li>8 - 6658 Walther Penck</li></a>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Incahuasi"target="blank_"><li>9 - 6638 Incahuasi</li></a>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Tupungato"target="blank_"><li>10 - 6565 Tupungato</li></a>
            </ol>
        </div>
    )
}

export default SEIS