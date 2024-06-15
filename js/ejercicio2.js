let letras = ["Julieta", "Rutar"];


function convertirVocalesMayusculas(cadena) {
    let nuevaCadena = '';
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let tamanioLetras = cadena.length;

    for (let i = 0; i < tamanioLetras; i++) {
        let palabra = cadena[i];
        let tamanioPalabra = palabra.length;
        for (let j = 0; j < tamanioPalabra; j++) {
            let char = palabra[j];
            
            if (vocales.includes(char)) {
                nuevaCadena += char.toUpperCase(); 
            } 
        }
    }

    return nuevaCadena;
}

let resultado = letras.map(convertirVocalesMayusculas);

console.log(resultado);