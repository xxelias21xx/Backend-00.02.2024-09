//================================================================================
//                                     RETO 01 
//================================================================================
// 1.Crea una función que retorne la suma de dos números.
function ejercicio1() {
    let num1 = parseFloat(prompt("Escribe Dos numeros para realizar la suma de ambos ; Ingrese el primer Numero"));
    let num2 = parseFloat(prompt(" Ingrese el segundo Numero"));

    if (!isNaN(num1) && !isNaN(num2) ) {
        let suma = num1 + num2;
            showResult(`Ejercicio 1: La suma de los numer ${num1} y ${num2} es : ${suma}.`);
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");
    }
}

// 2.Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function ejercicio2() {
    let num = parseFloat(prompt("Alumnito, ingrese el numero que desea potenciar"));
    let potencia = parseInt(prompt(" Ahora, ingrese el numero potenciador"));

    if (!isNaN(num) && !isNaN(potencia) ) {
        let result = Math.pow(num , potencia);
            showResult(`Ejercicio 2: El numero ingresado es ${num} ala ${potencia} es : ${result}.`);
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");
    }
}

// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
function ejercicio3() {
    let num1 = parseFloat(prompt("Escribe tres numeros para retornar la suma de sus cubos ; Ingrese el primer Numero"));
    let num2 = parseFloat(prompt(" Ingrese el segundo Numero"));
    let num3 = parseFloat(prompt(" Ingrese el tercer Numero"));

    numeros = [num1,num2,num3];
    // Verifica que todos los números sean válidos
    if (numeros.every(num => !isNaN(num))) {
        //let numCubo = reduce(numeros.map(num => Math.pow(num, 3)));
        let numCubo = numeros.reduce((sum, num) => sum + Math.pow(num, 3), 0)

            showResult(`Ejercicio 3: La suma de los numeros ${num1},${num2},${num3}, al 3 es : ${numCubo}`);
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");

    }
}

// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.triArea(3, 2) ➞ 3
function ejercicio4() {
    let base = parseFloat(prompt("Alumnito para hallar el Area de un triangulo ; Ingrese su base"));
    let altura = parseFloat(prompt(" Ingrese la altura"));

    if (!isNaN(base) && !isNaN(altura)) {
        let area = base * altura / 2;
       showResult(`Ejercicio 4: El Area del triangulo es : ${area}`);
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");

    }
}

// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
function ejercicio5() {
    let calculadora = prompt(`Estimado, si desea realizar alguna operación digite: suma(+), resta(-), dividir(/), multiplicar(*), residuo(%)`);

    let num1 = parseFloat(prompt("Alumnito, ingrese el primer número"));
    let num2 = parseFloat(prompt("Alumnito, ingrese el segundo número"));

    if (isNaN(num1) || isNaN(num2)) {
        showResult("Ups! Alumnito, ingrese solo números válidos.");
        return;
    }

    switch (calculadora) {
        case "+":
            let suma = num1 + num2;
            showResult(`La suma de los números ingresados: ${num1} y ${num2} es: ${suma}`);
            break;
        case "-":
            let resta = num1 - num2;
            showResult(`La resta de los números ingresados: ${num1} y ${num2} es: ${resta}`);
            break;
        case "/":
            if (num2 === 0) {
                showResult("Ups! No se puede dividir entre 0.");
            } else {
                let dividir = num1 / num2;
                showResult(`La división de los números ingresados: ${num1} y ${num2} es: ${dividir}`);
            }
            break;
        case "*":
            let multi = num1 * num2;
            showResult(`La multiplicación de los números ingresados: ${num1} y ${num2} es: ${multi}`);
            break;
        case "%":
            if (num2 === 0) {
                showResult("Ups! No se puede obtener el residuo con 0.");
            } else {
                let residuo = num1 % num2;
                showResult(`El residuo de los números ingresados: ${num1} y ${num2} es: ${residuo}`);
            }
            break;
        default:
            showResult("Ups, Alumnito, el parámetro no es reconocido.");
            return;
    }
}

//================================================================================
//                                     RETO 02 
//================================================================================

//1.Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y 
//los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
function ejercicios1(){
    let nombre = prompt(`Alumnito, ingrese sus Nombres`);
    let apellido = prompt("Alumnito, ingrese sus Apellidos");
    let edad = parseInt(prompt("Alumnito, ingrese su Edad."));

    const datos = (nombre,apellido,edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

    showResultReto02(datos(nombre,apellido,edad));
}   

//2.Cree una función que tome números y devuelva la suma de sus cubos.
function ejercicios2() {
    let num1 = parseFloat(prompt("Escribe tres numeros para retornar la suma de sus cubos ; Ingrese el primer Numero"));
    let num2 = parseFloat(prompt(" Ingrese el segundo Numero"));
    let num3 = parseFloat(prompt(" Ingrese el tercer Numero"));

    numeros = [num1,num2,num3];
    // Verifica que todos los números sean válidos
    if (numeros.every(num => !isNaN(num))) {
        //let numCubo = reduce(numeros.map(num => Math.pow(num, 3)));
        let numCubo = numeros.reduce((sum, num) => sum + Math.pow(num, 3), 0)

            showResultReto02(`Ejercicio 2: La suma de los numeros ${num1},${num2},${num3}, al 3 es : ${numCubo}`);
    } else {
        showResultReto02("Ups!.Alumnito, ingrese un número porfavor.");

    }
}

//3.Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
function ejercicios3() {
    let dato = prompt("Digite el valor y se retornara el tipo de valor escrito");

    let tipoDato;

    if (!isNaN(dato) && dato.trim() !== "") {
        tipoDato = 'number'; 
    } else {
        tipoDato = typeof dato; 
    }

    showResultReto02(`El tipo de valor escrito es: ${tipoDato}`);
}

//4.Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
//5
//6
//7
//8
//9
//10
//11
//12
//13
//14
//15
//16
//17
//18
//19
//20


//================================================================================
//              Crear botones de acuerdo al cantidad de ejercicios - Reto 01
//================================================================================
const reto01 = document.getElementById('buttons-container-reto01');
for (let i = 1; i <= 5; i++) {
    const button = document.createElement('button');
    button.innerText = `Ejercicio ${i}`;
    
    // Asignar funciones específicas a cada botón
    button.onclick = function() {
        // Verifica si la función del ejercicio existe
        let ejercicioFunction = window[`ejercicio${i}`];
        if (typeof ejercicioFunction === "function") {
            ejercicioFunction(); // Ejecuta la función correspondiente al ejercicio
        } else {
            showResult(`Ejercicio ${i}: Sin función asignada`);
        }
    };

    reto01.appendChild(button);
}

// Función para mostrar los resultados en el div de salida
function showResult(result) {
    const output = document.getElementById('output-reto01');
    output.innerHTML = result;
}

//================================================================================
//              Crear botones de acuerdo al cantidad de ejercicios - Reto 02
//================================================================================
const reto02 = document.getElementById('buttons-container-reto02');
for (let i = 1; i <= 22; i++) {
    const button = document.createElement('button');
    button.innerText = `Ejercicio ${i}`;
    
    // Asignar funciones específicas a cada botón
    button.onclick = function() {
        // Verifica si la función del ejercicio existe
        let ejercicioFunction = window[`ejercicios${i}`];
        if (typeof ejercicioFunction === "function") {
            ejercicioFunction(); // Ejecuta la función correspondiente al ejercicio
        } else {
            showResultReto02(`Ejercicio ${i}: Sin función asignada`);
        }
    };

    reto02.appendChild(button);
}

// Función para mostrar los resultados en el div de salida
function showResultReto02(result) {
    const output = document.getElementById('output-reto02');
    output.innerHTML = result;
}