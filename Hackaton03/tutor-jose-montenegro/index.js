/**
 * Hacer un algoritmo en JavaScript que lea un número por el teclado
 * y determinar si tiene tres dígitos.
 */
function ejercicio1() {
  const num = prompt("ingrese un numero");

  //number
  //string
  //date
  //boolean
  //null
  //undefine

  if (num > 99 && num < 1000) {
    console.log("El numero tiene tres digitos");
  } else {
    console.log("El numero no tiene tres digitos");
  }
}

/*Hacer un algoritmo en JavaScript que lea 
un número y determinar si termina en 4.*/

function ejercicio3() {
  const num = prompt("ingrese un numero");

  if (num % 10 == 4) {
    console.log("El numero termina en 4");
  } else {
    console.log("El numero no termina en 4");
  }
}

// ejercicio3();

/**Hacer un algoritmo en JavaScript para una tienda de zapatos 
 * que tiene una promoción de descuento para vender al mayor, 
 * esta dependerá del número de zapatos que se compren. 
 * Si son más de diez, se les dará un 10% de descuento
 *  sobre el total de la compra; si el número de zapatos
 *  es mayor de veinte pero menor de treinta, se le otorga
 *  un 20% de descuento; y si son más treinta zapatos se 
 * otorgará un 40% de descuento. El precio de cada zapato es de $80.

 */

function ejercicio5() {
  const precio = 80;
  let totalPagar, totalOriginal, descuento;
  const cantidadZapatos = +prompt("ingrese cantidad de zapatos");
  totalOriginal = cantidadZapatos * precio;
  totalPagar = cantidadZapatos * precio;

  descuento = 0;
  if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
    descuento = totalOriginal * 0.1;
  } else {
    if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
      descuento = totalOriginal * 0.2;
    } else {
      if (cantidadZapatos >= 30) {
        descuento = totalOriginal * 0.4;
      }
    }
  }
  totalPagar = totalOriginal - descuento;
  console.log(
    "Cantidad comprada: ",
    cantidadZapatos,
    " Total original: ",
    totalOriginal
  );
  console.log("descuento: ", descuento, " Total a pagar: ", totalPagar);
}

// ejercicio5();
/**
 * Hacer un algoritmo en JavaScript para determinar el
 *  aumento de un trabajador, se debe tomar en cuenta
 * que si ganaba más de $2000 tendrá un aumento del 5%,
 * si generaba menos de $2000 su aumento será de un 10%.
 */

function ejercicio9() {
  let aumento, nuevoSalario;
  aumento = 0;
  nuevoSalario = 0;
  const salario = +prompt("ingrese su salario");
  if (salario > 2000) {
    aumento = salario * 0.05;
  } else {
    aumento = salario * 0.1;
  }

  nuevoSalario = salario + aumento;
  console.log("salario base: ", salario);
  console.log("El aumento es: ", aumento);
  console.log("El nuevo salario es: ", nuevoSalario);
}

// ejercicio9();
/**
 * Hacer un algoritmo en JavaScript
 *  que lea una letra y diga si es una vocal.

* */
function ejercicio13() {
  const letra = prompt("ingrese una letra");

  switch (letra) {
    case "a":
      console.log("La letra es una vocal");
      break;
    case "e":
      console.log("La letra es una vocal");
      break;
    case "i":
      console.log("La letra es una vocal");
      break;
    case "o":
      console.log("La letra es una vocal");
      break;
    case "u":
      console.log("La letra es una vocal");
      break;
    default:
      console.log("La letra no es una vocal");
  }
}

// ejercicio13();
/*Se quiere saber cuál es la ciudad con la población
 de más personas, son tres provincias y once ciudades, 
 hacer un algoritmo en Pseint que nos permita saber eso.
 */

function ejercicio32() {
  let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
  let poblacion, mayorPoblacion;
  let i;

  mayorPoblacion = 0;

  for (i = 1; i <= 3; i++) {
    nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}`);
    for (let j = 1; j <= 3; j++) {
      nombreCiudad = prompt(
        `Ingrese el nombre de la ciudad N:${j} de la provincia ${nombreProvincia}`
      );

      //   poblacion = prompt(`ingrese la poblacion de la ciudad ${nombreCiudad}`);
      poblacion = Math.floor(Math.random() * 1000) + 1;

      if (poblacion > mayorPoblacion) {
        mayorPoblacion = poblacion;
        ciudadMayorPoblacion = nombreCiudad;
      }
    }
  }
  console.log(
    `la ciudad con mayor poblacion es: ${ciudadMayorPoblacion}con una poblacion de ${mayorPoblacion}`
  );
}

// ejercicio32();

/**Hacer un algoritmo en JavaScript para calcular
 *  la suma de los números impares menores o iguales a n. */

function ejercicio23() {
  let suma = 0;

  const n = prompt("ingrese un numero entero positivo");

  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      suma = suma + i;
    }
  }

  alert(`la suma de los numeros impares menoes o iguales a ${n} es: ${suma}`);
}

// ejercicio23();

//Hacer un algoritmo en JavaScript para calcular el
//factorial de un número de una forma distinta.

function ejercicio25() {
  let n, factorial, contador;
  factorial = 1;
  contador = 1;

  n = +prompt("Ingrese un numero entero positivo para calcular el factorial");
  while (contador <= n) {
    factorial = factorial * contador;
    contador = contador + 1;
  }
  alert(`El factorial del numero: ${n} es: ${factorial}`);
}

// ejercicio25();

/**Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

 */
function ejercicio27() {
  let numero, suma, contador;

  contador = 0;
  suma = 0;

  do {
    numero = +prompt(
      "Ingrese un numero positivo(o un numero negativo apra culminar el programa)"
    );
    if (numero >= 0) {
      suma = suma + numero;
      contador++;
    }
  } while (numero > 0);

  if (contador > 0) {
    console.log("La media de los numeros ingresados es: ", suma / contador);
  } else {
    console.log("No se ingresaron numeros positivos");
  }
}

// ejercicio27();

/*
Hacer un algoritmo en JavaScript que cumpla con la 
aproximación del número pi con la serie de Gregory-Leibniz.
 La formula que se debe aplicar es:

Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

* */

function ejercicio39() {
  let pi, termino, n, signo, iteraciones;
  pi = 0;
  n = 1;
  signo = 1;

  iteraciones = +prompt("ingrese el numero de iteraciones");

  for (let i = 1; i <= iteraciones; i++) {
    termino = 4 / n;
    pi = pi + signo * termino;
    signo = signo * -1;
    n = n + 2;
  }

  alert(
    `La aproximacion de pi despues de ${iteraciones} iteraciones es de: ${pi}`
  );
}

// ejercicio39();

function ejercicio40() {
  let pi, termino, n, signo, iteraciones;
  pi = 3;
  n = 2;
  signo = 1;

  iteraciones = +prompt("ingrese el numero de iteraciones");

  for (let i = 1; i <= iteraciones; i++) {
    termino = 4 / (n * (n + 1) * (n + 2));
    pi = pi + signo * termino;
    signo = signo * -1;
    n = n + 2;
  }

  alert(
    `La aproximacion de pi despues de ${iteraciones} iteraciones es de: ${pi}`
  );
}

ejercicio40();
