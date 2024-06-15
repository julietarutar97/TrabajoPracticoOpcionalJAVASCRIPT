// Clases y Métodos: Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo.

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
     calcularArea(){
        let area = this.width*this.height;
        return area;
     }

     calcularPerimetro(){
        let perimetro = this.width*2 + this.height*2;
        return perimetro;
     }
}

let rectangulo = new Rectangle(20,10);

let area= rectangulo.calcularArea();
let perimetro= rectangulo.calcularPerimetro();

console.log(`El rectángulo con 20cm de ancho y 10cm de alto tiene un área de ${area} y un perímetro de ${perimetro}.`);