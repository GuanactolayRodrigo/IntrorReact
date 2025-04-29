import React, { useState } from 'react'
const InputNombre =({guardar})=>{
    const [nombre, setNombre] = useState("");

    const manejarEnvio = () =>{
        guardar(nombre);
        setNombre("");
    }

    return(
        <div>
            <label htmlFor="">Ingresar nombre</label>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <button onClick={manejarEnvio}>Enviar</button>
        </div>
    )
}
export default InputNombre;
