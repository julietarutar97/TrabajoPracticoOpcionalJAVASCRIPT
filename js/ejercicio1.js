// Uso de for...of y Arrays: Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.

let numeros = [0,1,2,3,4,5,6,7,8,9] ;

function cuadrado(arrayDeNumeros){
    for(nuero of numeros){
        console.log(Math.pow(nuero,2))
    }
}


cuadrado(numeros);