//Ejercicio 1 

const persona=(nombre, apellido, edad) => 
    `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;


//Ejercicio 2 

//Ejercicio 3

const tipoDeDato = (dato) => typeof dato;

//Ejercicio 4

function sumar(...numeros){
    let suma=0;
    for (let numero of numeros){
        suma=suma +numero
    }
    return suma;
}

//Ejercicio 5

function filtrarStrings(array) {
    return array.filter(elemento => typeof elemento === 'string');
}

//Ejercicio 6

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

//Ejercicio 7

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

//Ejercicio 8

function findLargestNums(matriz){
    return matriz.map(submatriz => Math.max(...submatriz));
}

//Ejercicio 9

const charIndex = (palabra = "", caracter = "") => {
    let primerCaracterIndex = palabra.indexOf(caracter);
    let ultimoCaracterIndex = palabra.lastIndexOf(caracter);
  
    return [primerCaracterIndex, ultimoCaracterIndex];
};

//Ejercicio 10

const toArray = (objeto = {}) => {
    return Object.entries(objeto);
};

//Ejercicio 11

const getBudgets = (datos) => {
    const sumaTotal = 0;
  
    for (let person of datos) {
      console.log(person);
    }
};
console.log(
    getBudgets([
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve", age: 32, budget: 40000 },
      { name: "Martin", age: 16, budget: 2700 },
    ])
);

//Ejercicio 12

function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

//Ejercicio 13

function objectToArray(obj) {
    return Object.entries(obj);
}

//Ejercicio 14

function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }
    return suma;
}

//Ejercicio 15

function multiplyByLength(arr) {
    let length = arr.length;
    return arr.map(num => num * length);
}

//Ejercicio 16

function countdown(n) {
    let resultado = [];
    for (let i = n; i >= 0; i--) {
        resultado.push(i);
    }
    return resultado;
}

//Ejercicio 17

function diffMaxMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}

//Ejercicio 18

function filterList(arr) {
    return arr.filter(elemento => typeof elemento === 'numero');
}

//Ejercicio 19

function repeat(elemento, veces) {
    let resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado
}

//Ejercicio 20

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
}

//Ejercicio 21

function findNemo(cadena) {
    const palabras = cadena.split(" ");
    const indice = palabras.indexOf("Nemo")
    if (indice !== -1) {
        return `¡Encontré a Nemo en ${indice + 1}!`
    } else {
        return "No encontré a Nemo."
    }
}

//Ejercicio 22

function capLast(cadena) {
    let palabras = cadena.split(" "); // Dividir la cadena en palabras
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) { // Verificar si la palabra no está vacía
            // Capitalizar la última letra y concatenar el resto de la palabra
            palabras[i] = palabra.slice(0, -1) + palabra[palabra.length - 1].toUpperCase();
        }
    }
    return palabras.join(" "); // Unir las palabras en una cadena
}