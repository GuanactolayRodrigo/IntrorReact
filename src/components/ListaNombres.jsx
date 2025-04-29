import React, { useState } from 'react';
import InputNombre from './InputNombre';

const ListaNombres = () => {
    const guardar = (nuevoNombre) => {
        console.log(nuevoNombre);
        setNombres([...nombres,nuevoNombre]);
    }

const [nombres, setNombres] =useState([]);
    return (
        <div>
            <InputNombre guardar={guardar}/>
            <ul>
                {nombres.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaNombres;