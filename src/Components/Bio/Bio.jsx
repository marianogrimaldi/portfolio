import "./Bio.scss"
import imgFondo from "../../assets/3.jpg"
import salinas from "../../assets/salinas.jpg"

const Bio = () => {
    return (
        <div>
            <img src={imgFondo} className="imgFondo" alt="" />
            <div className="bio">
              
                <p >Mi nombre es Mariano Daniel Grimaldi Bonin. Nacido en San Jorge, Santa Fe, Argentina. Mis inicios como estudiantes fueron en el colegio Sagrado Corazón de Jesús de San Jorge, Santa Fe, recibiéndome en la modalidad de Gestión de las Organizaciones. En cuanto a mis estudios terciarios, curse la carrera de Turismo en San Francisco, Córdoba y la carrera de Desarrollo Web, con metodología online mediante la plataforma CODER HOUSE.</p>
                <div className="flezBio">
                    <div>
                    <p>
                        Amante de la naturaleza, la tecnología y la música, teniendo en cuenta lo moderno y lo clásico, una poderosa combinación para poder llevar a cabo prácticamente cualquier tarea de manera óptima. El estudio de dos carreras tan diferentes, Desarrollo Web y Turismo, me han permitido integrar lo mejor de cada una para poder así brindar un servicio diferente. La pasión por el montañismo y mi cercanía con el deporte en general combinado con las últimas técnicas creativas vinculadas al desarrollo de aplicaciones web hacen que entienda perfectamente el punto de vista de cada deportista, plasmando en diseño y códigos, cualquier exigencia o pedido de mis clientes.
                    </p>
                    <p>
                        Gracias a la carrera de Turismo, conseguí herramientas que me brindan un buen desempeño a nivel grupal, organización, planeación y optimización de tareas. Sumando también conocimientos geográficos y demográficos, no solo de nuestro país, sino del resto del mundo.
                    </p>
                    <p>
                        El Desarrollo Web permite a cada persona acercarse al mundo de manera distinta, mostrando sus habilidades tanto grupales como personales, haciendo de cada sitio una excelente carta de presentación, superando en gran medida a cualquier tipo de publicidad.
                        Desde viajes en motocicletas por América del Sur hasta expediciones en las montañas más altas de la cordillera de los Andes, son algunas de mis experiencias más valiosas, que, al mezclarse con las últimas técnicas de Desarrollo Web, logran crear un producto maravilloso, intuitivo y de gran calidad…
                    </p>
                    </div>
                    <img src={salinas} alt="Salinas Grandes" />
                </div>

                <p>
                    Cada sitio demanda dedicación y personalización, cada sitio desde mi concepción, como una pieza musical, debe ser una obra de arte.

                    Mariano Grimaldi
                </p>

            </div>
        </div>
    )
}

export default Bio 