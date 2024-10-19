//Crea una función que retorne la suma de dos números.

function sumaDeValores(valor1, valor2) {
  const result = valor1 + valor2;
  return result;
}

const sumaDeValoresFecha = (valor1, valor2) => valor1 + valor2;

/**Crea una función que retorne la potencia de un número dado,
 *  esta función deberá recibir la potencia y el
 * número a potenciar. */

function potencia(numero, potencia) {
  if (!numero) return "numero invalido";
  if (!potencia) return "potencia invalida";
  const resultado = Math.pow(numero, potencia);

  return resultado;
}

// const dato1 = +prompt("ingrese el primer valor");

// const dato2 = +prompt("ingrese el segundo valor");

/**
 * Crea una función llamada calculator que recibe 3 parámetros,
 *  dos números y una operación matemática (+,-,/,x,%)
 * , y si la operación no es correcta que envié un mensaje
 * “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
 */




const calculator =(valor1,operacion,valor2)=>{
    if (!valor1) return "primer valor invalido";
    if (!valor2) return "segundo valor invalida";
    
    switch(operacion){
        case "+":
            return valor1+valor2;
        case "-":
            return valor1-valor2;
        //.
        //.
        //.
        default:
            return "El parámetro no es reconocido"

    }
}

const resultado = calculator(2, "+",null);

console.log(resultado);
