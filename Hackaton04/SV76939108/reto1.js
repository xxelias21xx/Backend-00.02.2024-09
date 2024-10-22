console.log("Inicio de la aplicacion")

function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
    console.log("Estoy sumando, la respuesta es: " + resultado);
    return resultado;
 }
let respuesta = sumar(3, 4);
console.log(respuesta)

let suma = function (a, b) { return a + b; }


console.log(suma(5, 6));

const sumatoria = (a, b) => { return a + b }

console.log(sumatoria(55, 66));

// Ejercicio 2

function potencia(base, exponente){
    return Math.pow(base, exponente);
}
let resultado =potencia(2,3);
console.log("El resultado es: ", resultado);

//Ejercicio 3

function sumofcubes(num1, num2, num3){
    return (Math.pow(num1, 3))+(Math.pow(num2, 3))+(Math.pow(num3, 3));
}
let resultados= sumofcubes(1, 5, 9);
console.log("El resultado es: ", resultados);

//Ejercicio 4

function triArea(base, altura){
    return (base*altura)/2;
}
let area= triArea(3, 2);
console.log("El area es: ", area);

//Ejercicio 5

function calculator(num1, ope, num2){
    switch(ope){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num2 !== 0 ? num1/num2 : "No se puede dividir por cero";
        case '*':
            return num1*num2;
        case '%':
            return num1%num2;
        default:
            return "El parametro es desconocido";
    }
}

let respuestas= calculator(2, "+", 2);
console.log("El resultado es: ", respuestas);

//Ejercicio 1 docs

const persona=(nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;


//Ejercicio 2 docs


//Ejercicio 4 docs

function sumar(...numeros){
    let suma=0;
    for (let numero of numeros){
        suma=suma +numero
    }
    return suma;
}

//Ejercicio 5 docs

