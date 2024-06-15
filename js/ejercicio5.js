// Uso de for...of con Objetos: Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto.


let notas = { Juan: 8, Maria: 9, Pedro: 4 };

function calcularNotas(listaNotas){
    let totalNotas =0;
    let totalAlumnos =0;
    for(let nota of Object.values(listaNotas)){
        totalNotas += nota;
        totalAlumnos++;
    }

    let promedio = totalNotas/totalAlumnos;
    return promedio;
}

let promedio = calcularNotas(notas);

console.log(`el promedio de notas es ${promedio}`);