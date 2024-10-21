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

/*-  ¿Cómo defines una función?
    R: Para definir una función en JavaScript, puedes utilizar la palabra clave function
-  ¿Hasta cuantos argumentos puedes declarar en una función?   
    R: No hay un límite en la cantidad de argumentos que se pueda declarar en la función.
*/

//RETO 2

/* 1) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y 
    los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */

const ejercicio1 = (nombre, apellido, edad) => {
   return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`
}

persona = ejercicio1("Martin", "Chavez", 32);
console.log(persona);

/* 2) Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855 
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 */

const sumOfCubes2 = (num1, num2, num3) =>{
    if(!num1) return "Número inválido";
    if(!num2) return "Número inválido";
    if(!num3) return "Número inválido";

    return Math.pow(num1, 3) + Math.pow(num2, 3)+ Math.pow(num3, 3);
}

cubos2 = sumOfCubes2(1, 5, 9);
console.log(cubos2);

/* 3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js */

const ejercicio3 = (dato) =>{
    return typeof(dato);
}

console.log(ejercicio3(1));
console.log(ejercicio3("hola"));
console.log(ejercicio3(false));
console.log(ejercicio3([1,2,3]));

/* 4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest) */

const ejercicio4 = (...args)=>{
    let sum = 0;
    for (let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(ejercicio4(5,6,7,8,10));

/* 5) Crear una función que reciba un array de valores y filtre los valores que no son string */

const ejercicio5 = (valores) =>{
    const filtro = [];
    let longitud = valores.length;

    for (let i = 0; i < longitud; i++){
        if (typeof valores[i] === 'string'){
            filtro.push(valores[i]);
        }
    }
    return filtro;
}

console.log(ejercicio5(["hola",2,5,true,"mundo"]));

/* 6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/

const minMax = (matriz) => {
    let max = 0;
    let min = matriz[0];

    for (let i = 0; i < matriz.length; i++){
        if (max < matriz[i]){
            max = matriz[i]
        }
        if (min > matriz[i]){
            min = matriz[i]
        }
    }

    return [max,min]
}

console.log(minMax([5,9,15,2]));

/* 7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
    formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890" */

const formatPhoneNumber = (matriz=[]) => {
    if (matriz.length != 10){
        return "Numero inválido";
    }

    let parte1 = matriz.slice(0,3).join("");
    let parte2 = matriz.slice(3,6).join("");
    let parte3 = matriz.slice(6,10).join("");
    return (`(${parte1}) ${parte2}-${parte3}`)
}

console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

/* 8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2] */

const findLargestNums = (arreglo) =>{
    const nuevo = [];
    for (arr of arreglo){
        let max = Math.max(...arr);
        nuevo.push(max);
    }
    return nuevo;
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


/* 9) Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
    charIndex("hello", "l") ➞ [2, 3] The first "l" has index 2, the last "l" has index 3.*/

const charIndex = (palabra="",caracter="") => {
    let primercaracter = palabra.indexOf(caracter);
    let ultimocaracter = palabra.lastIndexOf(caracter);

    return ([primercaracter,ultimocaracter]);
}

console.log(charIndex("circumlocution", "c"))

/* 10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
    toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]].*/

const toArray = (objeto={})=>{
    
   return Object.entries(objeto);
}

console.log(toArray({a: 1, b: 2}));

/* 11) Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas..
    getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
   ]) ➞ 65700
*/

const getBudgets = (datos) => {
    let suma = 0;

    for (let person of datos){
        suma = suma + person.budget
    }
    return suma;
}

console.log(
    getBudgets([
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve", age: 32, budget: 40000 },
      { name: "Martin", age: 16, budget: 2700 },
    ])
  );

  /* 12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
    getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
    ) ➞ ["Becky", "John", "Steve"]
*/

const getStudentNames = (objeto) =>{
    
    const matNombres = [];

    for (nombre of objeto){
        let nombres = nombre.name;
        matNombres.push(nombres)
    }
    return matNombres;
}

console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
       ]));

 /* 13) Escriba una función que convierta un objeto en una matriz de claves y valores.
    objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/

const objectToArray = (objeto) => {
    return Object.entries(objeto);
}

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }));

/* 14) Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
    squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/ 

const squaresSum = (numero) =>{
    let suma = 0;
    for (num = 1; num <=numero; num++){
        suma = suma + Math.pow(num,2);
    }

    return suma;
}

console.log(squaresSum(3));

/* 15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
    multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/ 

const multiplyByLength = (matriz) =>{
    const resultado =[];
    let longitud = matriz.length;
    for (num of matriz){
        resultado.push(num*longitud);
    }
    return resultado;
}
console.log(multiplyByLength([2, 3, 1, 0]));

/* 16) Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
    countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/ 

const countdown = (numero) =>{
    const matriz = [];
    let j = 0;

    for (i = numero; i>= 0; i--){
        matriz[j] = i;
        j=j+1;
    }

    return matriz;
}

console.log(countdown(5));

/* 17) Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
    diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
*/ 

const diffMaxMin = (matriz=[]) =>{
    let max = Math.max(...matriz);
    let min = Math.min(...matriz);
    
    return (`Smallest number is ${min}, biggest is ${max} and difference is ${max - min}`);
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))

/* 18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
    filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/ 

const filterList = (matriz = []) =>{
    const enteros = matriz.filter(dato => typeof dato === 'number')
    return enteros;
}

console.log(filterList([1, 2, 3, "x", "y", 10]))

/* 19) Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse,
     mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
    repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/ 

const repeat = (elemento, tiempos) =>{
    const matriz = [];
    for (i = 0; i < tiempos; i++){
        matriz.push(elemento);
    }
    return matriz
}

console.log(repeat(13, 5));

/* 20) Escriba una función, .vreplace () que extienda el prototipo 
    de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
    "apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/ 

String.prototype.vreplace = function (vocal){
    let cadena = "";

    for (i=0; i< this.length; i++){
        let letra = this[i];

        switch (letra.toLowerCase()){
            case "a":
                cadena = cadena + vocal;
                break;
            case "e":
                cadena = cadena + vocal;
                break;
            case "i":
                cadena = cadena + vocal;
                break;
            case "o":
                cadena = cadena + vocal;
                break;
            case "u":
                cadena = cadena + vocal;
                break;
            default:
                cadena = cadena + letra;
        }
    }

    return cadena
}

console.log("apples and bananas".vreplace("u"));

/* 21) Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta:
 "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
    findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/ 

const findNemo = (cadena) =>{
    const arr = cadena.split(" ");

    const nemo = arr.indexOf("Nemo");

    if (nemo == -1){
        return ("No hay la palabra Nemo");
    }else {
        return (`I found Nemo at ${nemo+1}!`);
    }
}
console.log(findNemo("I am finding Nemo !"));

/* 22) Cree una función que capitalice la última letra de cada palabra.
    capLast("hello") ➞ "hellO"
*/ 

const capLast = (palabra) =>{
    const arr = palabra.split("");
    const ultimo = arr.at(-1).toUpperCase();
    arr.pop();
    arr.push(ultimo);
    return arr;
}

console.log(capLast("hello"));

