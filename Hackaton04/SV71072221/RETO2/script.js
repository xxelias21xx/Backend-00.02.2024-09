// Ejercicio 1: Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const presentacion = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido}, y mi edad es de ${edad} años.`;
console.log(presentacion("Bruno", "Buttgenbach", "23"));

// Ejercicio 2: Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumOfCubes(n1, n2, n3) {
    return Math.pow(n1,3)+Math.pow(n2,3)+Math.pow(n3,3);
};
console.log(sumOfCubes(1,5,8));

// Ejercicio 3: Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const tipoDato = (dato) => typeof dato;
console.log(tipoDato(3));

// Ejercicio 4: Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumaNum = (...rest) => {
    const sum = (acumulador, currentvalue) => acumulador + currentvalue;
    return rest.reduce(sum, 0);
};
console.log(sumaNum(1,3,5,6,4,8,21,12,45,45,45,57));

// Ejercicio 5: Crear una función que reciba un array de valores y filtre los valores que no son string
const filtroArray = (array) => {
    return array.filter(valor => typeof valor !== 'string');
};
console.log(filtroArray(["Hola",2, true, "Bruno"]));

// Ejercicio 6: Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const MinMax = (matriz) => {
    return [Math.min(...matriz), Math.max(...matriz)];
};
console.log(MinMax([5,8,6,4,3,1,4,3,4,554,47,2,1,0]));

// Ejercicio 7: Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const formatPhoneNumer = (array) => {
    return `(+51) ${array[0]} ${array[1]}${array[2]}${array[3]} ${array[4]}${array[5]}${array[6]} ${array[7]}${array[8]}${array[9]} `;
}
console.log(formatPhoneNumer([9,8,7,8,1,2,1,5,7]));

// Ejercicio 8: Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const findLargestNums = (matriz) => {
    // map crea un array de acuerdo a la condicion generada
    return matriz.map( array => Math.max(...array));
};
console.log(findLargestNums([[1,2,3], [2,3,4], [0,1,3]]));

// Ejercicio 9: Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
const charIndex = ( word , character) =>{
    const first = word.indexOf(character);
    const last = word.lastIndexOf(character);
    return [first, last];
};
console.log(charIndex("elefante", "e"));

// Ejercicio 10: Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const toArray = (object) => {
    // Object.entries convierte el objeto en una matriz de pares clave
    return Object.entries(object);
}
console.log(toArray({Nombre: "Bruno", Telefono: 987812157}));

// Ejercicio 11: Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
//getBudgets([
// { name: "John", age: 21, budget: 23000 },
// { name: "Steve",  age: 32, budget: 40000 },
//{ name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700
const getBudgets = (lista) => {
    return lista.reduce((suma, persona) => suma + persona.Presupuesto, 0);
}
console.log(getBudgets([{Nombre: "Bruno", Presupuesto: 5000}, {Nombre: "Greta", Presupuesto: 6000}]));

//Ejercicio 12: Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//    { name: "Steve" },
//    { name: "Mike" },
//    { name: "John" }
//  ]) ➞ ["Becky", "John", "Steve"]
const getStudentNames = (matriz) => {
    // se crea un nuevo array con los datos invocados
    return matriz.map( estudiante => estudiante.nombre);
};
console.log(getStudentNames([{nombre: "Bruno", edad: 25}, {nombre: "Juan", edad: 25}]));

// Ejercicio 13: Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//    likes: 2,
//    dislikes: 3,
//    followers: 10
//  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
const objectToArray = (object) => {
    return Object.entries(object);
}
console.log(objectToArray({nombre: "Bruno", edad: 22, peso: 65}));

// Ejercicio 14: Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
const squareSum = (n) => {
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum += index * index;
    };
    return sum;
};
console.log(squareSum(10));

// Ejercicio 15: Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
const multiplyByLength = (matriz) => {
    const res =[];
    let long = matriz.length;
    for (num of matriz){
        res.push(num*long);
    }
    return res;
}
console.log(multiplyByLength([1,2,3,4,5]));

// Ejercicio 16: Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
const countdown = (num1) =>{
    const matriz = [];
    let j = 0;
    for (index = num1; index>= 0; index--){
        matriz[j] = index;
        j+=1;
    };
    return matriz;
};
console.log(countdown(10));

// Ejercicio 17: Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
const diffMaxMin = (...matriz) => {
    let max = Math.max(...matriz);
    let min = Math.min(...matriz);
    // se estructura el array y se identifican maximos y minimos
    return (`El numero menor es ${min} y el mayor es ${max}, dando una diferencia de ${max - min}.`);
};
console.log(diffMaxMin(0,1,5,-45,5));

// Ejercicio 18: Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
const filterList = (matriz) =>{
    const int = matriz.filter(Number.isInteger);
    return int;
};
console.log(filterList(["hello", 18, true, 2025.23]));

// Ejercicio 19: Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]
const repeat = (elemento, tiempos) =>{
    const matriz = [];
    for (index = 0; index < tiempos; index++){
        matriz.push(elemento);
    };
    return matriz;
};
console.log(repeat(12,4));

// Ejercicio 20: Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
const vreplace  = (palabra, vocal) =>{
    const nuevapalabra = palabra.replaceAll(/[aeiou]/g, vocal);
    return nuevapalabra;
}
console.log(vreplace("hola que tal", "e"));

// Ejercicio 21: Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
const findNemo = (texto, palabra) => {
    const  i = texto.indexOf(palabra);
    return `¡Encontré a Nemo en ${i}!`;
};
console.log(findNemo("Hola me llamo Bruno Buttgenbach", "Bruno"));

// Ejercicio 22: Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"
const capLast = (palabra) =>{
    return palabra.split('').map(palabra => {
        return palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
    }).join(' ');
};
console.log(capLast("Bruno"));