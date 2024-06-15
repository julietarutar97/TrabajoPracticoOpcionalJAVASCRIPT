// Uso de Math para Cálculos: Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. Utiliza métodos de Math.

let numero =2;
let propiedades = [];

function calculos(numero){

    let cuadrado = Math.pow(numero,2);
    let raiz = Math.sqrt(numero);
    let valorAbs = Math.abs(numero);
    propiedades.push(cuadrado);
    propiedades.push(raiz);
    propiedades.push(valorAbs);
    return propiedades;
}
calculos(numero)

console.log(`El número es:`, numero, `su cuadrado es: `,propiedades[0],` su raíz es: `, propiedades[1],` y su valor absoluto es: ` ,propiedades[2]);