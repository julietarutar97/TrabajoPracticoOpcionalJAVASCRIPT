// Uso de for y Arrays: Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays.

function sumarElemento(lista1, lista2) {
    let sumaArray = [];
    let tamanioArray = lista1.length;
    for (let i = 0; i < tamanioArray; i++) {
      sumaArray.push(lista1[i] + lista2[i]);
    }
    return sumaArray;
  }
  
  let priemeraLista = [1, 2, 3];
let segundaLista = [4, 5, 6];

let resultado = sumarElemento(priemeraLista, segundaLista);
console.log(resultado);
