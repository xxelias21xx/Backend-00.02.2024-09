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
  const resultado = Math.pow(num, pot);
  console.log(resultado);
}
/* 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 */
function sumOfCubes() {
  num1 = +prompt("Ingrese el primer numero");
  num2 = +prompt("Ingrese el segundo numero");
  num3 = +prompt("Ingrese el tercer numero");
  const resultado = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
  console.log(resultado);
}
/* 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.triArea(3, 2) ➞ 3 */
function triArea() {
  base = +prompt("Ingrese la medida de la base");
  alt = +prompt("Ingrese la medida de la altura");
  const triArea = (base * alt) / 2;
  console.log(triArea);
}
/* 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */
function calculator() {
  num1 = +prompt("Ingrese el primer numero");
  operador = prompt("Ingrese el operador: +, -, /, *, %.");
  num2 = +prompt("Ingrese el segundo numero");
  let resultado;
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "%":
      resultado = (num1 * num2) / 100;
      break;

    default:
      resultado = "El parametro no es reconocido.";
      break;
  }
  console.log(resultado);
}
/**Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */
document.getElementById("EJR1").addEventListener("click", ejercicio1);
function ejercicio1() {
    nombre = prompt("Ingresa tu nombre");
    apellido = prompt("Ingresa tu apellido");
    edad = prompt("Ingresa tu edad");

    const miNombre = () =>
        `Mi nombre es ${nombre} ${apellido} y mi edad es: ${edad}`;
    console.log(miNombre());
}
/**Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */
document.getElementById("EJR2").addEventListener("click", ejercicio2);
function ejercicio2() {
    num1=+prompt("Ingrese el primer valor.")
    num2=+prompt("Ingrese el segundo valor.")
    num3=+prompt("Ingrese el tercer valor.")
    let resultado=Math.pow(num1, 3)+Math.pow(num2, 3)+Math.pow(num3, 3);
    console.log(resultado);
}
/**Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js */
document.getElementById("EJR3").addEventListener("click", ejercicio3);
function ejercicio3() {
    const tipoDeDato = (dato) => typeof dato;
    console.log(tipoDeDato(true));
    console.log(tipoDeDato(1));
    console.log(tipoDeDato("Alvaro"));
    console.log(tipoDeDato(tipoDeDato));
    console.log(tipoDeDato({}));
}
/**Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest) */
document.getElementById("EJR4").addEventListener("click", ejercicio4);
function ejercicio4() {
    const sumaNumeros = (...rest) => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        return rest.reduce(sum, 0);
      };
    console.log(sumaNumeros(80,70,60,50,40,30,20,10));
}
/**Crear una función que reciba un array de valores y filtre los valores que no son string */
document.getElementById("EJR5").addEventListener("click", ejercicio5);
function ejercicio5() {
    function filtrarNoStrings(array) {
        return array.filter(valor => typeof valor === 'string');
      }
      const arrayOriginal = [1, 'hola', true, 'tengo', 3.14,'que dormir', 'Hola mundo!'];
      const arrayFiltrado = filtrarNoStrings(arrayOriginal);
      console.log(arrayFiltrado);            
}
/**Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5] */
document.getElementById("EJR6").addEventListener("click", ejercicio6);
function ejercicio6() {
    function minMax(matriz) {
        return [Math.min(...matriz), Math.max(...matriz)];
      }           
      console.log(minMax([1, 2, 3, 4, 5])); 
}
/**Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"  */
document.getElementById("EJR7").addEventListener("click", ejercicio7);
function ejercicio7() {
    const formartPhoneNumber = (numero = []) => {
        if (numero.length != 10) {
          return "numero invalido";
        }
      
        let part1 = numero.slice(0, 3);
        part1 = part1.join("");
      
        let part2 = numero.slice(3, 6).join("");
        let part3 = numero.slice(6, 10).join("");
      
        return `(${part1}) ${part2}-${part3}`;
}
console.log(formartPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
}
/**Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 */
document.getElementById("EJR8").addEventListener("click", ejercicio8);
function ejercicio8() {
    function findLargestNums(matriz) {
            return matriz.map(submatriz => Math.max(...submatriz));    
    }
    console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
}
/**Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
 */
document.getElementById("EJR9").addEventListener("click",ejercicio9);
function ejercicio9() {
    const charIndex = (palabra = "", caracter = "") => {
        let primerCaracterIndex = palabra.indexOf(caracter);
        let ultimoCaracterIndex = palabra.lastIndexOf(caracter);
      
        return [primerCaracterIndex, ultimoCaracterIndex];
      };
    console.log(charIndex("hello","l"));
    console.log(charIndex("circumlocution", "c"));
}
/**Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 */
document.getElementById("EJR10").addEventListener("click",ejercicio10);
function ejercicio10(){
function toArray(objeto) {
    return Object.entries(objeto);
  }
  console.log(toArray({ a: 1, b: 2 }));
}
/**Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700
 */
document.getElementById("EJR11").addEventListener("click",ejercicio11);
function ejercicio11(){
function getBudgets(personas) {
  return personas.reduce((suma, persona) => suma + persona.budget, 0);
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  ]));
}
/**Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
 */
document.getElementById("EJR12").addEventListener("click",ejercicio12);
function ejercicio12() {
    function getStudentNames(estudiantes) {
        return estudiantes.map(estudiante => estudiante.name);
      }
      console.log(getStudentNames([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ]));
}      
/** Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
document.getElementById("EJR13").addEventListener("click",ejercicio13);
function ejercicio13() {
    function objectToArray(objeto) {
        return Object.entries(objeto);
      }
      console.log(objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
      }));      
}
/** Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/
document.getElementById("EJR14").addEventListener("click",ejercicio14);
function ejercicio14() {
    function squaresSum(n) {
        return (n * (n + 1) * (2 * n + 1)) / 6;
      }
      console.log(squaresSum(10));      
}
/** Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/
document.getElementById("EJR15").addEventListener("click",ejercicio15);
function ejercicio15() {
    function multiplyByLength(arr) {
        const resultado = [];
        for (let i = 0; i < arr.length; i++) {
          resultado.push(arr[i] * arr.length);
        }
        return resultado;
      }
      console.log(multiplyByLength([2, 3, 1, 0]));      
}
/** Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/
document.getElementById("EJR16").addEventListener("click",ejercicio16);
function ejercicio16() {
    function countdown(n) {
        return Array.from({length: n + 1}, (_, i) => n - i);
      }
      console.log(countdown(5));      
}
/** Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
*/
document.getElementById("EJR17").addEventListener("click",ejercicio17);
function ejercicio17() {
    function diffMaxMin(arr) {
        return Math.max(...arr) - Math.min(...arr);
      }
      console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));      
}
/** Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/
document.getElementById("EJR18").addEventListener("click",ejercicio18);
function ejercicio18() {
    function filterList(arr) {
        return arr.filter(Number.isInteger);
      }
      console.log(filterList([1, 2, 3, "x", "y", 10]));      
}
/**Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
 */
document.getElementById("EJR19").addEventListener("click",ejercicio19);
function ejercicio19() {
    function repeat(elemento, veces) {
        return new Array(veces).fill(elemento);
      }
      console.log(repeat(13, 5));  
}
/** Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus" 
*/
document.getElementById("EJR20").addEventListener("click",ejercicio20);
function ejercicio20() {
    String.prototype.vreplace = function(vocal) {
        return this.replace(/[aeiou]/gi, vocal);
      }
      console.log("apples and bananas".vreplace("u"));      
}
/** Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/
document.getElementById("EJR21").addEventListener("click",ejercicio21);
function ejercicio21() {
    function findNemo(frase) {
        const palabras = frase.split(' ');
        const indice = palabras.indexOf('Nemo');
        if (indice !== -1) {
          return `I found Nemo at ${indice + 1}!`;
        } else {
          return 'Nemo no encontrado';
        }
      }
      console.log(findNemo("I am finding Nemo !"));      
}
/** Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"
*/
document.getElementById("EJR22").addEventListener("click",ejercicio22);
function ejercicio22() {
    function capLast(palabra) {
        return palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
      }
      console.log(capLast("hello"));
}