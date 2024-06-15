// Manipulación de Strings: Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays.

function OrdenInverso (cadena){
    let nuevaCadena="";
    let palabras= cadena.split(" ");

    let palabrasInvertidas = palabras.reverse();

    for(let palabra of palabrasInvertidas){
        nuevaCadena+= palabra+" ";
    }
    return nuevaCadena;
}

let cadena = "Hola buen día"
let cadenaInvertida = OrdenInverso(cadena)
console.log(cadenaInvertida);