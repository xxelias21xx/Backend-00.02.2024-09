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

ejercicio32();
