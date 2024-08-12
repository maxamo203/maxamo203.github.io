import { useState } from "react";
import { CgClose } from "react-icons/cg";
function Proyect({ project, posicion }) {
    const sombras = ["sombraRosa", "sombraAzul", "sombraNaranja", "sombraVerde"]; //nombres de clases css
    const colores = ["#C678D2", "#61AFEF","#D19A66", "#98B755"]; //colores de fondo
    const [isMaximized, setIsMaximized] = useState(false);
    const handleItemClick = () => {
        if (!isMaximized) {
            setIsMaximized(true);
        }
    }

    const handleMinimizeClick = () => {
        setIsMaximized(false);
    }

    return (
        <div 
            className={`item ${sombras[posicion]} ${isMaximized ? 'itemMaximizado' : ''}`} 
            onClick={handleItemClick}
        >
            <div className="containerTextos">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.link ? <a href={project.link} target="_blank" style={{ color: colores[posicion] }}>More info</a> : <p></p>}
            </div>
            <img src={project.image} alt={project.name} />
            {isMaximized && (
                <CgClose 
                    onClick={handleMinimizeClick} 
                    className="botonMinimizar" 
                />
            )}
        </div>
    );
}
export default Proyect;