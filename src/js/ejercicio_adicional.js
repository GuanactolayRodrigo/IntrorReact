import { mostrarConForEach } from "./utilArray.js";
import { filtrarPorNota } from "./utilArray.js";
import { modificarNotas } from "./utilArray.js";
const alumnos = [
    {   nombre: "JUAN PEREZ",
        lu: "APU005643",
        materia: "Programacion Visual",
        nota: 8.5,
    },
    {   nombre: "MARIA LOPEZ",
        lu: "APU005644",
        materia: "Programacion Visual",
        nota: 9.0,
    },
    {   nombre: "CARLOS GARCIA",
        lu: "APU005645",
        materia: "Programacion Visual",
        nota: 7.0,
    },
    {   nombre: "ANA MARTINEZ",
        lu: "APU005646",
        materia: "Programacion Visual",
        nota: 8.0,
    },
    {   nombre: "LUIS FERNANDEZ",
        lu: "APU005647",
        materia: "Programacion Visual",
        nota: 4.5,
    },
]
//MUESTRA ALUMNOS CON UN FOR EACH
//mostrarConForEach(alumnos);
//FILTRA ALUMNOS CON NOTA MAYOR A 7.0
filtrarPorNota(alumnos);
//CREA UN ARRAY CON LOS OBJETOS ALUMNO Y SU NOTA INCREMENTADA EN 1
modificarNotas(alumnos);
