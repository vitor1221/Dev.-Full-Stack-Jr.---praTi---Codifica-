import { useState, useEffect, use } from "react";

function LifeCycleFunctionolComponente(){
    const [count, setCount] = useState(0)

    useEffect(() =>{
        console.log("Componente montado")
    
        
        return () =>{
            console.log("Componente desmontado")
        }
    },[])

    useEffect(() =>{
        console.log("Componente atualizado!")
    }, [count])
    
    const increment = () =>{
        setCount(count + 1)
    }

    return(
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar + 1</button>
        </div>
    )
}

export default LifeCycleFunctionolComponente