/* Hackaton 04 */

//RETO 1

// 1. Crea una función que retorne la suma de dos números.

/* function Suma_valores(valor1, valor2){
    const Suma = valor1 + valor2;
    return Suma
} */

const suma_valores_flecha = (numero1, numero2) => numero1 + numero2;

const suma1 = suma_valores_flecha(5, 5);
console.log(suma1);

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

const potencia = (numero, potencia) => {
    
    if(!numero) return "Número inválido";
    if(!potencia) return "Potencia inválida"

    return Math.pow(numero, potencia);
}

potencia1 = potencia(5, 5);
console.log(potencia1);

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

const sumOfCubes = (num1, num2, num3) =>{
    if(!num1) return "Número inválido";
    if(!num2) return "Número inválido";
    if(!num3) return "Número inválido";

    return Math.pow(num1, 3) + Math.pow(num2, 3)+ Math.pow(num3, 3);
}

cubos = sumOfCubes(1, 5, 9);
console.log(cubos);

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

const triArea = (base, altura) => {
    if(!base) return "Número inválido";
    if(!altura) return "Número inválido";

    area = (base * altura) / 2;

    return area;
}

triangulo = triArea(3,2);
console.log(triangulo);

/* 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */

const calculadora = (num1, operador, num2) =>{
    if(!num1) return "Número inválido";
    if(!num2 || num2 == 0) return "Número inválido";
    
    switch(operador){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

const respuesta = calculadora(5, 5, "+");
console.log(respuesta);

//RETO 2




