//Ejercicio 1.1 : Crea una una función que retorne la suma de dos números.
function suma (a, b) {
    var suma = a+b
    return suma
    }
console.log(suma(3,4));

//Ejercicio 1.2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function potencia (numero, potencia) {

    var resultado = Math.pow(numero,potencia)
    return resultado
}
console.log(potencia(2,4));

//Ejercicio 1.3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

function cubos (...numbers) {
    let sum = 0; // Inicializamos la suma en 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 3; // Sumamos el cubo de cada número
    }

    return sum; // Retornamos la suma total
}
console.log(cubos(1, 5, 9));

//Ejercicio 1.4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.


function Areatriangulo (base, altura) {
    return (base * altura) / 2;
}
console.log(Areatriangulo (3, 2)); 

//Ejercicio 1.5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
function calculadora(num1, operacion, num2) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido"; // Mensaje para operaciones no válidas
    }
}
console.log(calculadora(2, "+", 2));
console.log(calculadora(5, "-", 3)); 
console.log(calculadora(10, "/", 2));
console.log(calculadora(4, "x", 2));

//Ejercicio 2.1: Ccrear una función que reciba como parámetros un nombre, apellido y edad y 
//los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

function obtenerNombreCompleto(){

    let nombre=prompt("ingresa tu nombre por favor:");
    let Apellido=prompt("ingresa tu apellido por favor:");
    let edad =prompt("ingresa tu edad por favor:");

let DatosPersonales=[nombre,Apellido,edad]
let FraseDelEjerecicio ="Hola mi nombre es "+DatosPersonales[0]+" "+DatosPersonales[1]+" y mi edad "+DatosPersonales[2]
alert (FraseDelEjerecicio);}

obtenerNombreCompleto();
 
//Ejercicio 2.2: Cree una función que tome números y devuelva la suma de sus cubos.

function sumaDeCubos(a,b,c){

    var cuboa= Math.pow(a,3)
    var cubob= Math.pow(b,3)
    var cuboc= Math.pow(c,3)
    
    var suma =cuboa+cubob+cuboc
    console.log(suma);
}
sumaDeCubos(1,5,9);
//Ejercicio 2.3 :Crear una funcion que me retorne el tipo de valor entregado,
// invocar la función para los distintos tipos de js

function tipo(valor){
 return typeof valor;
   }
console.log(tipo("mi"));

//Ejercicio 2.4 Crear una función que reciba n cantidad de argumentos
// y los sume ( utilizar parametros rest)

function sumar(...numeros) {
return numeros.reduce((acumulado,actual) => acumulado + actual, 0);
}
const resultado = sumar(1,2,3,4,5)
console.log(resultado);

//Ejercicio 2.5	Crear una función que reciba un array de
// valores y filtre los valores que no son string

function filtrarcadena(arreglo) {
    var resultado= [];

    for (var i= 0; i< arreglo.length; i++) {
        if(typeof arreglo[i] ==='string') {
            resultado.push(arreglo[i]);
        }
    }
return resultado;
}
var valores= [1,'hola',true,'mundo',null,45,"javascrip"];
solostrings = filtrarcadena(valores);
console.log(solostrings);

//Ejercicio 2.6	Cree una función que tome una matriz de 
//números y devuelva los números mínimos y máximos,
// en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function maxymin (arreglo) {
if(arreglo.length === 0) {
    return [];
}
let min= arreglo[0]
let max= arreglo[0]

for(let i=1;i<arreglo.length;i++){
    if(arreglo[i]<min){
        min = arreglo[i];}
    else if (arreglo[i]>max) {
        max= arreglo[i];
      console.log(arreglo[i]); 
}
}
return [min,max]
}

minMax=[1,2,3,4,5];
resultad= maxymin(minMax);
console.log(resultad);

//Ejercicio 2.7: scriba una función que tome una matriz de 10 enteros (entre 0 y 9) y
 //devuelva una cadena en forma de un número de teléfono.
////formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

///otro tipo

function formatPhone(arreglo) {
    return "(" + arreglo[0] + arreglo[1] + arreglo[2] + ") " + 
           arreglo[3] + arreglo[4] + arreglo[5] + "-" + 
           arreglo[6] + arreglo[7] + arreglo[8] + arreglo[9];
}
var fuente= [1,2,3,4,5,6,7,8,9,10];
console.log(formatPhone(fuente));


//Ejercicio 2.8:	Cree una función que tome una matriz de matrices con números. 
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums (arreglo){
    const maximos=[];
   
    for (let i=0; i<arreglo.length;i++) {
    let max = arreglo[i][0];

    for(let j=1; j<arreglo[i].length; j++){

        if(arreglo[i][j]>max){
            
            max=arreglo[i][j];
        }
    }
    maximos.push(max);
    }

return maximos;
}
var prueba =[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
console.log(findLargestNums(prueba));
//Ejercicio 2.9: funcion de entrega de inidces9)	
//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.

function Indices(palabra, letra) {
    const resultado = [];
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            resultado.push(i);
        }
    }
    
    return resultado;
}
console.log(Indices("circumlocution", "c"));

//Ejercicio 2.10:Escriba una función que convierta un objeto en una matriz, donde 
//cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj) {
    var array = [];
    
    for (var clave in obj) {
        array.push([clave, obj[clave]]);
    }
    
    return array;
}
console.log(toArray({ a: 1, b: 2 }));
//Ejercicio 2.11: 11)	Cree la función que toma una matriz con objetos y
// devuelve la suma de los presupuestos de las personas

function getBudgets(personas) {
    let suma = 0;

    for (let i = 0; i < personas.length; i++) {
        suma += personas[i].budget;
    }

    return suma;
}

const totalPresupuesto = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]);

console.log(totalPresupuesto); 
//ejerccio 2.12: Cree una función que tome una matriz de estudiantes y devuelva
// una matriz de nombres de estudiantes.

function getStudentNames(estudiantes) {
    const nombres = [];
    
    for (let i = 0; i < estudiantes.length; i++) {
        nombres.push(estudiantes[i].name);
    }
    
    return nombres;
}

const nombresEstudiantes = getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
]);

console.log(nombresEstudiantes); 
//Ejercicio 2.13:Escriba una función que convierta un objeto en una matriz de claves y valores
function objectToArray(obj) {
    var array = [];
    
    for (var clave in obj) {
        array.push([clave, obj[clave]]);
    }
    
    return array;
}
var res = objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
});

console.log(res);
//Ejercicio 2.14: 14)	Cree una función donde, dado el número n, devuelva 
//la suma de todos los números cuadrados  incluyendo n.

function squaresSum(n) {
    let suma = 0;
    
    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }
    
    return suma;
}
console.log(squaresSum(3));
console.log(squaresSum(4));
//Ejercicio 2.15: Cree una función para multiplicar todos los valores en una matriz
// por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(array) {
    const longitud = array.length;
    const resultado = [];
    
    for (let i = 0; i < longitud; i++) {
        resultado.push(array[i] * longitud);
    }
    
    return resultado;
}

console.log(multiplyByLength([2, 3, 1, 0]));
//Ejercicio 2.16: 16)	Cree una función que tome un número como argumento y devuelva
// una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(n) {
    const result = [];
    for (let i = n; i >= 0; i--) {
        result.push(i);
    }
    return result;
}
const resul = countdown(5);
console.log(resul);

//Ejerccio 2.17: 17) Cree una función que tome una matriz y devuelva la diferencia entre
// los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82

function diffMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return max - min;
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//Ejercicio 2.18: Cree una función que filtre las cadenas de una matriz y devuelva una
// nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(arr) {
    var result = []; // Inicializamos una nueva matriz vacía

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && Number.isInteger(arr[i])) {
            result.push(arr[i]); // Agregamos el número entero a la nueva matriz
        }
    }

    return result; // Retornamos la nueva matriz
}

console.log(filterList([1, 2, 3, "x", "y", 10]));
//Ejerccio 2.19:Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function repeat(element, times) {
    var result = []; // Inicializamos una nueva matriz vacía

    for (var i = 0; i < times; i++) {
        result.push(element); // Agregamos el elemento a la nueva matriz
    }

    return result; // Retornamos la nueva matriz
}
console.log(repeat(13, 5));

//Ejerccicio 2.20:Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus

String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/gi, vowel); // Reemplazamos todas las vocales (mayúsculas y minúsculas)
};
console.log("apples and bananas".vreplace("u")); 

//Ejerccicio 2.21: 21)	Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" 
//y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function findNemo(sentence) {
    // Dividimos la cadena en palabras
    const words = sentence.split(" ");
    
    // Buscamos la posición de "Nemo"
    const index = words.indexOf("Nemo");
    
    // Comprobamos si encontramos "Nemo"
    if (index !== -1) {
        return `¡Encontré a Nemo en ${index + 1}!`; // +1 porque el índice empieza en 0
    } else {
        return "Nemo no encontrado.";
    }
}
console.log(findNemo("I am finding Nemo !"));

//Ejerccicio 2.22: Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"

function capLast(sentence) {
    var words = sentence.split(" "); // Dividimos la cadena en palabras
    var result = ""; // Inicializamos una cadena vacía

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 0) {
            // Capitalizamos la última letra y construimos la nueva palabra
            result += word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase() + " ";
        }
    }

    return result.trim(); // Retornamos la cadena resultante, eliminando el espacio extra
}
console.log(capLast("hello"));
console.log(capLast("this is a test"));
