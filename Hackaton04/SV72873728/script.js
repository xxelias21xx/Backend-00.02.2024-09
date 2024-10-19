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