import { useContext, useEffect, useState } from "react"
import { ProjectContext } from "./myproyects";
import { GrPowerReset } from 'react-icons/gr'
import { MdDelete } from "react-icons/md";

export function Habilities() {
    const { habilities, setHabilities } = useContext(ProjectContext);
    const [show, setShow] = useState(false)
    const minhabilitiesToShow = 3;
    const handleClic = (i) => {
        setHabilities(prevhab => {
            let newhab = [...prevhab];
            newhab[i].showed = !newhab[i].showed;
            return newhab;
        })
    }
    const setAll = (showed) => {
        setHabilities(prevhab => prevhab.map(hability => { hability.showed = showed; return hability }))
    }
    return (
        <div>
            <div id="habilityContainer">
                {habilities.slice(0,show?habilities.length:minhabilitiesToShow).map((hability, i) => <Hability hability={hability} i={i} handleClic={handleClic} key={i+1000}/>)}
                <GrPowerReset onClick={() => setAll(true)} className="actionHabilityButton" />
                <MdDelete onClick={() => setAll(false)} className="actionHabilityButton" />
            </div>
            <p onClick={()=>setShow(prev=>!prev)} id="mostrarHabilidades">{!show?'Mostrar mas +':'Mostrar menos -'}</p>
        </div>
    )
}
function Hability({hability, i, handleClic}) {
    return(
        <div className="hability" style={{ boxShadow: `${hability.color} 0px 0px 5px 1px`, backgroundColor: hability.showed === true ? `${hability.color}` : '' }} onClick={() => handleClic(i)}>{hability.name}</div>
    )
}