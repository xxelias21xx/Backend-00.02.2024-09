/**
 * Utilizando función arrow, crear una función que reciba
 *  como parámetros un nombre, apellido y edad y los retorne
 * en un string concatenado
 *  “Hola mi nombre es sebastián yabiku y mi edad 33”
 */

const miEdad = (nombre, apellido, edad) =>
  `Hola mi nombre es ${nombre} ${apellido} mi edad ${edad}`;
//   "Hola mi nombre es " + nombre + " "+apellido + " mi edad " + edad;

/**Crear una funcion que me retorne el tipo de valor entregado,
 * *  invocar la función para los distintos tipos de js */

const tipoDeDato = (dato) => typeof dato;

//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const sumaNumeros = (...rest) => {
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  return rest.reduce(sum, 0);
};

//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = (matriz) => {
  let max = 0;
  let min = 9999999;

  for (let i = 0; i < matriz.length; i++) {
    if (max < matriz[i]) {
      max = matriz[i];
    }
    if (min > matriz[i]) {
      min = matriz[i];
    }
  }
  return [max, min];
};

const minMaxSimple = (matriz) => {
  let max = Math.min(matriz);
  let min = Math.max(matriz);
  return [max, min];
};

/**
 * Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) 
 * y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

 */

const formartPhoneNumber = (numero = []) => {
  if (numero.length != 10) {
    return "numero invalido";
  }

  let part1 = numero.slice(0, 3);
  part1 = part1.join("");

  let part2 = numero.slice(3, 6).join("");
  let part3 = numero.slice(6, 10).join("");

  return `(${part1}) ${part2}-${part3}`;
};

/**9
 * Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.



 */

const charIndex = (palabra = "", caracter = "") => {
  let primerCaracterIndex = palabra.indexOf(caracter);
  let ultimoCaracterIndex = palabra.lastIndexOf(caracter);

  return [primerCaracterIndex, ultimoCaracterIndex];
};

/**10
 * Escriba una función que convierta un objeto en una matriz, 
 * donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]].

 */

const toArray = (objeto = {}) => {
  return Object.entries(objeto);
};

/**
 * 
Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

 */

const getBudgets = (datos) => {
  const sumaTotal = 0;

  for (let person of datos) {
    console.log(person);

    ///sumar valores
  }
};

console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

/**
 * Cree una función que filtre las cadenas de una matriz y
 *  devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

VALIDAR CON TYPEOF

 */


/**Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"


    SWITCH --> VALIDAR SI ES UNA VOCAL

    usar un for de [a,e,i,o,i]
*/

//Mayuscula
"data".toUpperCase()
//Minuscula
"data".toLowerCase()
