document.getElementById("EJ01").addEventListener("click", suma2);
document.getElementById("EJ02").addEventListener("click", potencia);
document.getElementById("EJ03").addEventListener("click", sumOfCubes);
document.getElementById("EJ04").addEventListener("click", triArea);
document.getElementById("EJ05").addEventListener("click", calculator);

/*1. Crea una función que retorne la suma de dos números.*/

function suma2() {
  valor1 = +prompt("Ingrese el primer valor");
  valor2 = +prompt("Ingrese el segundo valor");
  const result = valor1 + valor2;
  console.log(result);
}


/*2. Crea una función que retorne la potencia de un número dado,esta función deberá recibir la potencia y el número a potenciar.*/

function potencia() {
    num = +prompt("Ingrese el numero a potenciar");
    pot = +prompt("Ingrese la potencia");
    const resultado=Math.pow(num, pot);
    console.log(resultado);
}

/* 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 */
function sumOfCubes() {
    num1=+prompt("Ingrese el primer numero");
    num2=+prompt("Ingrese el segundo numero");
    num3=+prompt("Ingrese el tercer numero");
    const resultado=Math.pow(num1,3)+Math.pow(num2,3)+Math.pow(num3,3);
    console.log(resultado);
}

/* 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.triArea(3, 2) ➞ 3 */

function triArea() {
    base=+prompt("Ingrese la medida de la base");
    alt=+prompt("Ingrese la medida de la altura");
    const triArea=(base*alt)/2;
    console.log(triArea);
}

/* 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */

function calculator() {
    num1=+prompt("Ingrese el primer numero");
    operador=prompt("Ingrese el operador: +, -, /, *, %.");
    num2=+prompt("Ingrese el segundo numero");
    let resultado;
    switch (operador) {
        case "+":
            resultado= num1+num2;
            break;
        case "-":
            resultado= num1-num2;
            break;
        case "*":
            resultado= num1*num2;
            break;
        case "/":
            resultado= num1/num2;
            break;
        case "%":
            resultado= num1*num2/100;
            break;
    
        default:
            resultado= "El parametro no es reconocido."
            break;
    }
    console.log(resultado);
}
