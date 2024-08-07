function Proyect({ project, posicion }) {
    const sombras = ["sombraRosa", "sombraAzul", "sombraNaranja", "sombraVerde"]; //nombres de clases css
    const colores = ["#C678D2", "#61AFEF","#D19A66", "#98B755"]; //colores de fondo
    return (
        <div className={`item ${sombras[posicion]}`}>
            <div className="containerTextos">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.link?<a href={project.link} target="_blank" style={{color:colores[posicion]}}>More info</a>: <p></p>}
            </div>
            <img src={project.image} alt={project.name} />
        </div>
    )
}
export default Proyect;