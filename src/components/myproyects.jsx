import { createContext, useEffect, useState } from "react"
import Proyect from "./proyect";
import { Habilities } from "./Habilities";

export const ProjectContext = createContext();
function MyProyects() {
    const [data, setData] = useState([])
    const [habilities, setHabilities] = useState([])
    const [filterHabilities, setFilterHabilities] = useState([])
    useEffect(() => {
        // Fetch the local JSON file
        fetch('/projects.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => { 
                for (let i = 0; i < data.length; i++) {
                    data[i].habilities = new Set(data[i].habilities);
                }
                setData(data);
            })
            .catch((error) => console.error('Error fetching the JSON data:', error));

        fetch('/habilities.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => { 
                for (let i = 0; i < data.length; i++) {
                    data[i].showed = true;
                }
                setHabilities(data);
                console.log(data); 
            })
            .catch((error) => console.error('Error fetching the JSON data:', error));
    }, []);
    useEffect(
        ()=>{
            setFilterHabilities(habilities.filter(hability=>hability.showed===true));
        }
        ,[habilities]
    )
    const mustShow = (project) => {
        for (let i = 0; i < filterHabilities.length; i++) {
            if (project.habilities.has(filterHabilities[i].name)) {
                return true;
            }
        }
        return false;
    }
    return (
        <main>
            <h2 id="proyectos" className="section">'My Proyects'</h2>
            <ProjectContext.Provider value={{habilities,setHabilities }}>
                <Habilities />
                <div id="projectContainer">
                    {data.map((project, i) => mustShow(project)?<Proyect key={i} project={project} posicion={i % 4} />:null)}
                </div>
            </ProjectContext.Provider>
        </main>
    )
}
export default MyProyects