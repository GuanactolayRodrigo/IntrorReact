//Muestra los alumnos con un forEach
export const mostrarConForEach =(alumnos) => {
    alumnos.forEach(({ nombre, lu, materia, nota }) => {
        console.log(`
            Nombre: ${nombre} 
            LU: ${lu} 
            Materia: ${materia} 
            Nota: ${nota}`);
    })
}
//Filtar alumnos con nota mayor a 7.0
export const filtrarPorNota = (alumnos) =>{
    const alumnosPorNotas = alumnos.filter(alumno => alumno.nota > 7.0);
    //console.log(alumnosPorNotas);
    mostrarConForEach(alumnosPorNotas);
}
//Crear un array con los objeto alumno y su nota incrementada en 1
export const modificarNotas = (alumnos) => {
    const alumnosConNotasModificadas = alumnos.map(alumno =>({
        nombre: alumno.nombre,
        lu: alumno.lu,
        materia: alumno.materia,
        nota: (alumno.nota + 1)
    }));
    mostrarConForEach(alumnosConNotasModificadas);
}
