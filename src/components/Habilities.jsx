import { useContext, useEffect, useState } from "react"
import { ProjectContext } from "./myproyects";
import {GrPowerReset} from 'react-icons/gr'
import { MdDelete } from "react-icons/md";

export function Habilities(){
    const {habilities, setHabilities} = useContext(ProjectContext);
    const handleClic = (i) =>{
        setHabilities(prevhab=>{
            let newhab = [...prevhab];
            newhab[i].showed = !newhab[i].showed;
            return newhab;
        })
    }
    return (
        <div id="habilityContainer" className="habilityContainerfull">
            {habilities.map((hability, i) => <div key={i+1000} className="hability" style={{boxShadow:`${hability.color} 0px 0px 5px 1px`,backgroundColor:hability.showed===true?`${hability.color}`:''}} onClick={()=>handleClic(i)}>{hability.name}</div>)}
            <GrPowerReset onClick={()=>setHabilities(prevhab=>prevhab.map(hability=>{hability.showed=true; return hability}))} style={{color:'gray',fontSize:'1.5rem',cursor:'pointer', alignSelf:'center'}}/>
            <MdDelete onClick={()=>setHabilities(prevhab=>prevhab.map(hability=>{hability.showed=false; return hability}))} style={{color:'gray',fontSize:'1.5rem',cursor:'pointer', alignSelf:'center'}}/>
        </div>
    )
}