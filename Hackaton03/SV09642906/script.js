function calculadora() {
    // Pedir al usuario que ingrese dos números y un operador
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const operador = prompt("Ingresa el operador ('+' para sumar, '-' para restar):");

    let resultado;

    // Realizar la operación según el operador
    if (operador === '+') {
        resultado = num1 + num2; // Suma
    } else if (operador === '-') {
        resultado = num1 - num2; // Resta
    } else {
        resultado = "Operador no válido. Usa '+' para sumar o '-' para restar.";
    }

    // Mostrar el resultado
    alert("El resultado es: " + resultado);
}

// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("calcularBoton");
    boton.addEventListener("click", calculadora);
});

function Ejercicio1() {
        //Hacer un algoritmo en Javascript que lea un numero por el teclado y determinar 
        //si tiene tres digitos.

        var numero = prompt("Ingresar número para verificar si es de tres dígitos");
    
        // Convertir el input a un número entero
        numero = parseInt(numero);
    
        // Verificar si el número tiene tres dígitos
        if (numero > 99) {
            if (numero < 1000) {
                alert("Este número es de tres dígitos");
            } else {
                alert("Este número no es de tres dígitos");
            }
        } else {
            alert("Este número no es de tres dígitos");
        }
    }

// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej1");
    boton.addEventListener("click", Ejercicio1);
});

function Ejercicio2() {
        //Hacer un algoritmo en Javascript que lea un numero entero por el teclado y determinar si es negativo.
   
        var numero = parseInt(prompt("Ingresar número para verificar si es negativo"));

    // Verificar si el número es negativo
    if (numero >= 0) {
        alert("Este número no es negativo");
    } else {
        alert("Este número es negativo");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej2");
    boton.addEventListener("click", Ejercicio2);
});

function Ejercicio3() {
    // Solicitar al usuario que ingrese un número
    var numero = parseInt(prompt("Ingrese un número:"));

    // Verificar si el número termina en 4
    if (numero % 10 === 4) {
        alert("El número termina en 4.");
    } else {
        alert("El número no termina en 4.");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej3");
    boton.addEventListener("click", Ejercicio3);
});

function Ejercicio4() {
    //Hacer un algoritmo en JavaScript que lea tres numeros enteros y los muestre de menor a mayor

    var num1 = parseInt(prompt("Ingrese el primer número:"));
    var num2 = parseInt(prompt("Ingrese el segundo número:"));
    var num3 = parseInt(prompt("Ingrese el tercer número:"));

    var menor, medio, mayor;

    if (num1 < num2) {
        if (num1 < num3) {
            menor = num1;
            if (num2 < num3) {
                medio = num2;
                mayor = num3;
            } else {
                medio = num3;
                mayor = num2;
            }
        } else {
            menor = num3;
            medio = num1;
            mayor = num2;
        }
    } else {
        if (num2 < num3) {
            menor = num2;
            if (num1 < num3) {
                medio = num1;
                mayor = num3;
            } else {
                medio = num3;
                mayor = num1;
            }
        } else {
            menor = num3;
            medio = num2;
            mayor = num1;
        }
    }

    alert("Los números en orden son:\n" + menor + "\n" + medio + "\n" + mayor);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej4");
    boton.addEventListener("click", Ejercicio4);
});

function Ejercicio5() {
    // Definir variables
    var precioZapato = 80;
    var cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar:"));
    var totalCompra = cantidadZapatos * precioZapato;
    var descuento;

    // Determinar el descuento según la cantidad de zapatos
    if (cantidadZapatos > 30) {
        descuento = 0.40; // 40% de descuento
    } else if (cantidadZapatos > 20) {
        descuento = 0.20; // 20% de descuento
    } else if (cantidadZapatos > 10) {
        descuento = 0.10; // 10% de descuento
    } else {
        descuento = 0; // Sin descuento
    }

    // Calcular el total con descuento
    var totalConDescuento = totalCompra * (1 - descuento);

    // Mostrar el total a pagar
    alert("Total a pagar: $" + totalConDescuento.toFixed(2));
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej5");
    boton.addEventListener("click", Ejercicio5);
});


function Ejercicio6 () {
    // Definir variables
    //Hacer un algoritmo en JavaScript para ayudar a un trabajador 
	//a saber cual sera su sueldo semanal, se sabe que si trabaja
	//40 horas o menos, se le pagara $20 por hora, pero si trabaja
	//mas de 40 horas entonces las horas extras se le pagaran a $25 por hora.

    var horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana:"));
    var sueldoSemanal;

    // Calcular el sueldo semanal
    if (horasTrabajadas <= 40) {
        sueldoSemanal = horasTrabajadas * 20; // Pago por hora
    } else {
        sueldoSemanal = (40 * 20) + ((horasTrabajadas - 40) * 25); // Pago por horas extras
    }

    // Mostrar el sueldo semanal
    alert("El sueldo semanal es: $" + sueldoSemanal.toFixed(2));
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej6");
    boton.addEventListener("click", Ejercicio6);
});


function Ejercicio7() {
    //Hacer un algoritmo en Pseint para una tienda de helado que da un descuento
    //por compra a sus clientes con membresia dependiendo de su tipo, solo existen
    //tres tipos de membresia, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

    var totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
    var tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();
    var descuento = 0;
    var precioFinal;

    // Determinar el descuento según el tipo de membresía
    switch (tipoMembresia) {
        case "A":
            descuento = totalCompra * 0.10; // 10% de descuento
            break;
        case "B":
            descuento = totalCompra * 0.15; // 15% de descuento
            break;
        case "C":
            descuento = totalCompra * 0.20; // 20% de descuento
            break;
        default:
            alert("Tipo de membresía no válido.");
    }

    // Calcular el precio final
    precioFinal = totalCompra - descuento;

    // Mostrar los resultados
    alert("El total de la compra es: $" + totalCompra.toFixed(2) + 
          "\nDescuento aplicado: $" + descuento.toFixed(2) + 
          "\nEl precio final a pagar es: $" + precioFinal.toFixed(2));
}

// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej7");
    boton.addEventListener("click", Ejercicio7);
});

function Ejercicio8() {
    var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    var promedio = (nota1 + nota2 + nota3) / 3;
    var aprobado;

    if (promedio >= 10.5) {
        aprobado = "Aprobado";
    } else {
        aprobado = "Reprobado";
    }

    alert("El promedio es: " + promedio.toFixed(2) + 
          "\nEl estudiante está: " + aprobado);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej8");
    boton.addEventListener("click", Ejercicio8);
});

       
function Ejercicio9() {
    //Hacer un algoritmo en Pseint para determinar el aumento
	//de un trabajador, se debe tomar en cuenta que si ganaba mas de $2000 
	//tendra un aumento del 5%, si generaba menos de $2000 su aumento sera de un 10%.
	//Definir salario, aumento, nuevoSalario Como Real

    var salario = parseFloat(prompt("Ingrese el salario del trabajador:"));
    var aumento;
    var nuevoSalario;

    // Calcular el aumento según el salario
    if (salario > 2000) {
        aumento = salario * 0.05; // 5% de aumento
    } else {
        aumento = salario * 0.10; // 10% de aumento
    }

    // Calcular el nuevo salario
    nuevoSalario = salario + aumento;

    // Mostrar resultados
    alert("El aumento es: $" + aumento.toFixed(2) + 
          "\nEl nuevo salario es: $" + nuevoSalario.toFixed(2));
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej9");
    boton.addEventListener("click", Ejercicio9);
});

function Ejercicio10() {
    
    //Hacer un algoritmo en Javascript que diga si un n�mero es par o impar.
	
    var numero = parseInt(prompt("Ingresa un número:"));

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej10");
    boton.addEventListener("click", Ejercicio10);
});

function Ejercicio11() {
  //Hacer un algoritmo en JavaScrip que lea tres n�meros y diga cu�l es el mayor.

    var num1 = parseInt(prompt("Ingresa el primer número:"));
    var num2 = parseInt(prompt("Ingresa el segundo número:"));
    var num3 = parseInt(prompt("Ingresa el tercer número:"));
    var mayor;

    mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    alert("El número mayor es: " + mayor);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej11");
    boton.addEventListener("click", Ejercicio11);
});

function Ejercicio12() {
    // Definir variables
    var num1 = parseInt(prompt("Ingresa el primer número:"));
    var num2 = parseInt(prompt("Ingresa el segundo número:"));

    // Comparar los dos números
    if (num1 > num2) {
        alert("El número mayor es: " + num1);
    } else if (num2 > num1) {
        alert("El número mayor es: " + num2);
    } else {
        alert("Ambos números son iguales.");

    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej12");
    boton.addEventListener("click", Ejercicio12);
});

function Ejercicio13() {

//Hacer un algoritmo en Pseint que lea una letra y diga si es una voca
    var letra = prompt("Ingresa una letra:").toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        alert(letra + " es una vocal.");
    } else {
        alert(letra + " no es una vocal.");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej13");
    boton.addEventListener("click", Ejercicio13);
});


function Ejercicio14() {
    // Hacer un algoritmo en Pseint que lea un entero
    // positivo del 1 al diez y determine si es un n�mero primo.

    var numero = parseInt(prompt("Ingresa un número entero positivo del 1 al 10:"));

    // Verificar si el número está en el rango permitido
    if (numero < 1 || numero > 10) {
        alert("El número debe estar entre 1 y 10.");
    } else {
        // Comprobar si es un número primo
        if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            alert(numero + " es un número primo.");
        } else {
            alert(numero + " no es un número primo.");
        }
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej14");
    boton.addEventListener("click", Ejercicio14);
});

function Ejercicio15() {
    // Definir variables
    var operacion = prompt("¿Qué unidad desea convertir?\nInserte C si desea convertir centímetros a pulgadas:\nInserte L si desea convertir libras a kilogramos:");
    var input;

    // Convertir operación a minúsculas
    operacion = operacion.toLowerCase();

    switch (operacion) {
        case 'c':
            input = parseFloat(prompt("Inserte la cantidad de centímetros a convertir a pulgadas:"));
            alert(input + " centímetros equivalen a " + (input * 0.393701).toFixed(2) + " pulgadas.");
            break;
        case 'l':
            input = parseFloat(prompt("Inserte la cantidad de libras a convertir a kilogramos:"));
            alert(input + " libras equivalen a " + (input * 0.453592).toFixed(2) + " kilogramos.");
            break;
        default:
            alert("Opción no válida. Por favor, ingrese 'C' o 'L'.");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej15");
    boton.addEventListener("click", Ejercicio15);
});

function Ejercicio16() {
    // Definir variable
    var num = parseInt(prompt("Ingrese un número a evaluar para obtener el día de la semana:"));

    // Estructura de control para determinar el día
    switch (num) {
        case 7:
            alert("El número " + num + " corresponde al día domingo.");
            break;
        case 1:
            alert("El número " + num + " corresponde al día lunes.");
            break;
        case 2:
            alert("El número " + num + " corresponde al día martes.");
            break;
        case 3:
            alert("El número " + num + " corresponde al día miércoles.");
            break;
        case 4:
            alert("El número " + num + " corresponde al día jueves.");
            break;
        case 5:
            alert("El número " + num + " corresponde al día viernes.");
            break;
        case 6:
            alert("El número " + num + " corresponde al día sábado.");
            break;
        default:
            alert("Inserte un número dentro del rango de días de la semana (1-7).");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej16");
    boton.addEventListener("click", Ejercicio16);
});

function Ejercicio17() {
    // Definir variables
    var hora = parseInt(prompt("Ingrese la hora a evaluar (HH) Del 0 al 23 :"));
    var minuto = parseInt(prompt("Ingrese los minutos (MM) de 0 a 60 :"));
    var seg = parseInt(prompt("Ingrese los segundos (SS) de 0 a 60 :"));
    
    var nhora, nminuto, nseg;

    // Lógica para calcular la hora dentro de un segundo
    if (hora === 23 && minuto === 59 && seg === 59) {
        nhora = 0;
        nminuto = 0;
        nseg = 0;
    } else if (hora !== 23 && minuto === 59 && seg === 59) {
        nhora = hora + 1;
        nminuto = 0;
        nseg = 0;
    } else if (hora !== 23 && minuto !== 59 && seg === 59) {
        nhora = hora;
        nminuto = minuto + 1;
        nseg = 0;
    } else {
        nhora = hora;
        nminuto = minuto;
        nseg = seg + 1;
    }
    alert("La hora dentro de un segundo será " + nhora + ":" + (nminuto < 10 ? "0" : "") + nminuto + ":" + (nseg < 10 ? "0" : "") + nseg + ".");
}

// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej17");
    boton.addEventListener("click", Ejercicio17);
});

function Ejercicio18() {
    // Definir variables
    var cantCD = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));
    var precio, ingreso, utilidad;

    // Calcular el precio según la cantidad de CDs
    if (cantCD <= 9) {
        precio = 10;
    } else if (cantCD <= 99) {
        precio = 8;
    } else if (cantCD <= 499) {
        precio = 7;
    } else {
        precio = 6;
    }

    // Calcular ingreso y utilidad
    ingreso = precio * cantCD;
    utilidad = ingreso * 0.0825;

    // Mostrar los resultados
    alert("Para una cantidad de venta de " + cantCD + " CDs, el precio de venta es de $" + precio + ", y la ganancia del vendedor es de $" + utilidad.toFixed(2) + ".");
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej18");
    boton.addEventListener("click", Ejercicio18);
});

function Ejercicio19() {
    // Definir variables
    var id = prompt("** Identificadores de tipo de Empleado **\n" +
                    "51 para CAJEROS\n" +
                    "52 para SERVIDOR\n" +
                    "53 para PREPARADOR DE MEZCLAS\n" +
                    "54 para MANTENIMIENTO\n" +
                    "-----------------------------------------------\n" +
                    "Ingrese un identificador de empleado a evaluar:");
    
    var empleado = "";
    var salario = 0;
    var cantDias = parseInt(prompt("Ingrese la cantidad de días trabajados por el empleado:"));
    
    // Determinar el salario según el identificador
    switch (id) {
        case "51":
            empleado = "cajero";
            salario = 56;
            break;
        case "52":
            empleado = "servidor";
            salario = 64;
            break;
        case "53":
            empleado = "preparador de mezclas";
            salario = 80;
            break;
        case "54":
            empleado = "de mantenimiento";
            salario = 48;
            break;
        default:
            alert("Ingrese un identificador válido.");
            return; // Termina la función si el ID no es válido
    }

    // Calcular y mostrar el pago total
    var totalPago = cantDias * salario;
    alert("Para una cantidad trabajada de " + cantDias + " días,\n" +
          "el empleado " + empleado + " debe recibir\n" +
          "$" + totalPago + " en total.");
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej19");
    boton.addEventListener("click", Ejercicio19);
});

function Ejercicio20() {
    let datos = [];
    let pares = 0;
    let mayorNum = 0;

    // Solicitar 4 números al usuario
    for (let i = 0; i < 4; i++) {
        datos[i] = parseInt(prompt(`Ingrese el ${i + 1}° número:`));
    }

    // Contar pares y encontrar el mayor número
    for (let i = 0; i < 4; i++) {
        if (datos[i] % 2 === 0) {
            pares++;
        }
        if (i === 0 || datos[i] > mayorNum) {
            mayorNum = datos[i];
        }
    }

    // Mostrar resultados
    alert(`Pares: ${pares}`);
    alert(`Mayor número: ${mayorNum}`);

    // Si el tercero es par, cuadrado del segundo
    if (datos[2] % 2 === 0) {
        alert(`Cuadrado del segundo número: ${datos[1] ** 2}`);
    }

    // Si el primero es menor que el cuarto, calcular la media
    if (datos[0] < datos[3]) {
        let promedio = (datos[0] + datos[1] + datos[2] + datos[3]) / 4;
        alert(`Media de los 4 números: ${promedio}`);
    }

    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700
    if (datos[1] > datos[2] && datos[2] >= 50 && datos[2] <= 700) {
        alert(`Suma de los 4 números: ${datos.reduce((a, b) => a + b)}`);
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej20");
    boton.addEventListener("click", Ejercicio20);
});

function Ejercicio21() {
    let num = parseInt(prompt("Ingrese el número al que desea calcular el factorial:"));
    let contador = 1;
    let factorial = 1;

    while (contador <= num) {
        factorial *= contador;
        contador++;
    }

    alert(`El factorial de ${num} es ${factorial}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej21");
    boton.addEventListener("click", Ejercicio21);
});

function Ejercicio22() {
    let n = parseInt(prompt("Ingrese la cantidad de números a sumar:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let numero = parseInt(prompt(`Ingrese el número N${i}:`));
        suma += numero;
    }

    alert(`La suma de los primeros ${n} números es ${suma}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej22");
    boton.addEventListener("click", Ejercicio22);
});

function Ejercicio23() {
    let n = parseInt(prompt("Ingrese un número para evaluar:"));
    let sumaImpar = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sumaImpar += i;
        }
    }

    alert(`La suma de los números impares menores o iguales a ${n} es ${sumaImpar}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej23");
    boton.addEventListener("click", Ejercicio23);
});

function Ejercicio24() {
    let sumaPar = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sumaPar += i;
        }
    }

    alert(`La suma de todos los números pares hasta 1000 es ${sumaPar}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej24");
    boton.addEventListener("click", Ejercicio24);
});

function Ejercicio25() {
    let num = parseInt(prompt("Ingrese el número al que desea calcular el factorial:"));
    let contador = 1;
    let factorial = 1;

    while (contador <= num) {
        factorial *= contador;
        contador++;
    }

    alert(`El factorial de ${num} es ${factorial}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej25");
    boton.addEventListener("click", Ejercicio25);
});

function Ejercicio26() {
    let n1 = parseInt(prompt("Ingrese el Numerador:"));
    let n2 = parseInt(prompt("Ingrese el Denominador:"));
    let resto = 0;
    let cociente = 0;

    // Asegurarse de que el denominador no sea cero
    if (n2 === 0) {
        alert("El denominador no puede ser cero.");
        return;
    }

    while (n1 >= n2) {
        n1 -= n2;
        cociente++;
    }

    resto = n1;

    alert(`Para la operación de división, el cociente es ${cociente} y el resto es ${resto}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej26");
    boton.addEventListener("click", Ejercicio26);
});

function Ejercicio27() {
    let i = 0;
    let num = 0;
    let suma = 0;
    let prom = 0;
    // Hacer un algoritmo en JavaScript para determinar la media de 
    // una lista indefinida de numeros positivos, se debe acabar el 
    // programa al ingresar un numero negativo.

    while (true) {
        num = parseFloat(prompt("Ingrese un número positivo a evaluar (número negativo para terminar):"));
        
        if (num < 0) {
            break; // Termina el ciclo si el número es negativo
        }
        
        suma += num;
        i++;
    }

    if (i > 0) {
        prom = suma / i;
        alert(`Se ingresó un valor negativo, fin de cálculo. Para los ${i} números ingresados, el promedio calculado es ${prom}.`);
    } else {
        alert("No se ingresaron números positivos.");
    }
}

// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej27");
    boton.addEventListener("click", Ejercicio27);
});


function Ejercicio28() {
    //Hacer un algoritmo en Pseint para calcular la suma de los 
    // primeros cien numeros con un ciclo repetir.
    let n = 0;
    let suma = 0;

    do {
        n += 1;
        suma += n;
    } while (n < 100);

    alert(`La suma de los primeros 100 números es ${suma}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej28");
    boton.addEventListener("click", Ejercicio28);
});

function Ejercicio29() {
    let n = 0;
    let suma = 0;

    while (n < 100) {
        n++;
        suma += n;
    }

    alert(`La suma de los primeros 100 números es ${suma}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej29");
    boton.addEventListener("click", Ejercicio29);
});

function Ejercicio30() {
    let suma = 0;

    for (let n = 1; n <= 100; n++) {
        suma += n;
    }

    alert(`La suma de los primeros 100 números es ${suma}.`);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej30");
    boton.addEventListener("click", Ejercicio30);
});

function Ejercicio31() {
    let sumaPar = 0;
    let sumaImpar = 0;
    let contPar = 0;
    let contImpar = 0;
    alert("Ingrese 10 numeros");
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt("Ingrese el N" + i + ":"));

        if (numero % 2 === 0) {
            sumaPar += numero;
            contPar++;
        } else {
            sumaImpar += numero;
            contImpar++;
        }
    }

    let mediaPar = contPar > 0 ? sumaPar / contPar : 0;
    let mediaImpar = contImpar > 0 ? sumaImpar / contImpar : 0;

    alert("Media pares: " + mediaPar);
    alert("Media impares: " + mediaImpar);
}
// Llamar a la función cuando se haga clic en el botón
 document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej31");
    boton.addEventListener("click", Ejercicio31);
});

function Ejercicio32() {
    let ciudadMayorPoblacion = "";
    let provinciaMayorPoblacion = "";
    let mayorPoblacion = 0;

    for (let i = 1; i <= 11; i++) {
        let ciudad = prompt("Ingrese el nombre de la ciudad " + i + ":");
        let provincia = prompt("Ingrese la provincia de " + ciudad + ":");
        let poblacion = parseInt(prompt("Ingrese la población de " + ciudad + ":"));

        if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadMayorPoblacion = ciudad;
            provinciaMayorPoblacion = provincia;
        }
    }

    alert("La ciudad más poblada es: " + ciudadMayorPoblacion + " de la provincia " + provinciaMayorPoblacion + " con una población de " + mayorPoblacion);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej32");
    boton.addEventListener("click", Ejercicio32);
});

function Ejercicio33() {
    let continuar;

    do {
        continuar = prompt("¿Desea continuar?\nIngrese S <- para SI\nIngrese N <- para NO").toLowerCase();
    } while (continuar !== 'n');

    alert("Programa terminado.");
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej33");
    boton.addEventListener("click", Ejercicio33);
});

function Ejercicio34() {
    for (let numero = 1; numero <= 9; numero++) {
        let tabla = `Tabla de multiplicar del ${numero}:\n`;
        for (let i = 1; i <= 10; i++) {
            tabla += `${numero} x ${i} = ${numero * i}\n`;
        }
        alert(tabla);
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej34");
    boton.addEventListener("click", Ejercicio34);
});

function Ejercicio35() {
    let numMayor, numMenor;

    alert("Para analizar los 20 números, primero ingrese cada valor.");

    for (let i = 1; i <= 20; i++) {
        let num = parseInt(prompt("Ingrese el valor " + i + ":"));

        if (i === 1) {
            numMayor = num;
            numMenor = num;
        } else {
            // Para número mayor
            if (num > numMayor) {
                numMayor = num;
            }
            // Para número menor
            if (num < numMenor) {
                numMenor = num;
            }
        }
    }

    alert("Para todos los números ingresados, el mayor número es " + numMayor + " y el menor número es " + numMenor + ".");
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej35");
    boton.addEventListener("click", Ejercicio35);
});
function Ejercicio36() {
    let n = parseInt(prompt("Algoritmo para cálculo de serie de Fibonacci.\nIngrese el valor de n para el cálculo:"));
    let primero = 0;
    let segund = 1;

    alert(primero); // Mostrar el primer número de la serie
    alert(segund);  // Mostrar el segundo número de la serie

    for (let i = 1; i <= n - 2; i++) {
        let nuevo = primero + segund;
        alert(nuevo); // Mostrar el nuevo número de la serie
        primero = segund;
        segund = nuevo;
    }
}

// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej36");
    boton.addEventListener("click", Ejercicio36);
});

function Ejercicio37() {
    let num1 = parseInt(prompt("Ingrese un número A para calcular el MCD:"));
    let num2 = parseInt(prompt("Ingrese un número B para calcular el MCD:"));

    while (num2 !== 0) {
        let ficticio = num2;
        num2 = num1 % num2;
        num1 = ficticio;
    }

    alert("El MCD es: " + num1 + ".");
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej37");
    boton.addEventListener("click", Ejercicio37);
});

function Ejercicio38() {
    let num = parseInt(prompt("Ingrese un número para evaluar si es perfecto:"));
    let sumaDivisor = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumaDivisor += i;
        }
    }

    if (sumaDivisor === num) {
        alert("El número " + num + " es perfecto.");
    } else {
        alert("El número " + num + " no es perfecto.");
    }
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej38");
    boton.addEventListener("click", Ejercicio38);
});

function Ejercicio39() {
    let pi = 0;
    let n = 1;
    let signo = 1;
    let iteraciones = parseInt(prompt("Ingrese el número de iteraciones para calcular la aproximación de pi:"));

    for (let i = 1; i <= iteraciones; i++) {
        let termino = 4 / n;
        pi += signo * termino;
        signo *= -1; // Cambiar el signo
        n += 2; // Incrementar n para el siguiente término
    }

    alert("La aproximación de pi después de " + iteraciones + " iteraciones es: " + pi);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej39");
    boton.addEventListener("click", Ejercicio39);
});

function Ejercicio40() {
    let pi = 3; // Valor inicial de pi
    let n = 2; // Primer valor para el cálculo
    let signo = 1; // Controlador de signo
    let iteraciones = parseInt(prompt("Ingrese el número de iteraciones para calcular la aproximación de pi:"));

    for (let i = 1; i <= iteraciones; i++) {
        let termino = 4 / (n * (n + 1) * (n + 2)); // Cálculo del término
        pi += signo * termino; // Sumar o restar el término a pi

        signo *= -1; // Cambiar el signo
        n += 2; // Incrementar n para el siguiente término
    }

    alert("La aproximación de pi después de " + iteraciones + " iteraciones es: " + pi);
}
// Llamar a la función cuando se haga clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("Ej40");
    boton.addEventListener("click", Ejercicio40);
});