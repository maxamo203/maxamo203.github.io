import { useEffect, useState } from "react";

function Home() {
    const [name, setName] = useState("_");
    //const [ticks, setTicks] = useState(0);
    const nombreCompleto = 'Máximo Bosch'
    const ticksHastaBorrar = 20
    useEffect(() => {
        let ticks = 0;
        const int = setInterval(() => {
            ticks++
            setName(prevName => {
                if (ticks === ticksHastaBorrar) {
                    ticks = 0;
                    
                }
                if (prevName.length - 1 < nombreCompleto.length) {
                    return nombreCompleto.substring(0, prevName.length) + "_";
                } else {
                    return (ticks % 2 === 0) 
                        ? prevName.substring(0, prevName.length - 1) + "_" 
                        : prevName.substring(0, prevName.length - 1) + " ";
                }
            });
        }, 400);

        return () => clearInterval(int); // Limpia el intervalo al desmontar
    }, []);
    return (
        <header>
            <div className="image-container">
                <img src="mainimg.jpg" alt="Background Image" />
            </div>
            <div id="titulos">
                <h1><pre>{name}</pre></h1>
                <h2><span style={{color:'#C678D2'}}>Software</span> <span style={{color:"#61AFEF"}}>Engineering</span> <span style={{color:'#D19A66'}}>Student</span></h2>
            </div>
            <p id="descripcionCorta" className="section">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor doloribus iste nihil minima quia </p>
        </header>
    )
}
export default Home;