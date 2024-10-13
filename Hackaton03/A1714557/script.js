/**
 * Hacer un algoritmo en JavaScript que lea un número por el teclado
 * y determinar si tiene tres dígitos.
 */
document.getElementById("EJ01").addEventListener("click",ejercicio01)
document.getElementById("EJ02").addEventListener("click",ejercicio02)
document.getElementById("EJ03").addEventListener("click",ejercicio03)
document.getElementById("EJ04").addEventListener("click",ejercicio04)
document.getElementById("EJ05").addEventListener("click",ejercicio05)
document.getElementById("EJ06").addEventListener("click",ejercicio06)
document.getElementById("EJ07").addEventListener("click",ejercicio07)
document.getElementById("EJ08").addEventListener("click",ejercicio08)
document.getElementById("EJ09").addEventListener("click",ejercicio09)
document.getElementById("EJ10").addEventListener("click",ejercicio10)
document.getElementById("EJ11").addEventListener("click",ejercicio11)
document.getElementById("EJ12").addEventListener("click",ejercicio12)
document.getElementById("EJ13").addEventListener("click",ejercicio13)
document.getElementById("EJ14").addEventListener("click",ejercicio14)
document.getElementById("EJ15").addEventListener("click",ejercicio15)
document.getElementById("EJ16").addEventListener("click",ejercicio16)
document.getElementById("EJ17").addEventListener("click",ejercicio17)
document.getElementById("EJ18").addEventListener("click",ejercicio18)
document.getElementById("EJ19").addEventListener("click",ejercicio19)
document.getElementById("EJ20").addEventListener("click",ejercicio20)
document.getElementById("EJ21").addEventListener("click",ejercicio21)
document.getElementById("EJ22").addEventListener("click",ejercicio22)
document.getElementById("EJ23").addEventListener("click",ejercicio23)
document.getElementById("EJ24").addEventListener("click",ejercicio24)
document.getElementById("EJ25").addEventListener("click",ejercicio25)
document.getElementById("EJ26").addEventListener("click",ejercicio26)
document.getElementById("EJ27").addEventListener("click",ejercicio27)
document.getElementById("EJ28").addEventListener("click",ejercicio28)
document.getElementById("EJ29").addEventListener("click",ejercicio29)
document.getElementById("EJ30").addEventListener("click",ejercicio30)
document.getElementById("EJ31").addEventListener("click",ejercicio31)
document.getElementById("EJ32").addEventListener("click",ejercicio32)
document.getElementById("EJ33").addEventListener("click",ejercicio33)
document.getElementById("EJ34").addEventListener("click",ejercicio34)
document.getElementById("EJ35").addEventListener("click",ejercicio35)
document.getElementById("EJ36").addEventListener("click",ejercicio36)
document.getElementById("EJ37").addEventListener("click",ejercicio37)
document.getElementById("EJ38").addEventListener("click",ejercicio38)
document.getElementById("EJ39").addEventListener("click",ejercicio39)
document.getElementById("EJ40").addEventListener("click",ejercicio40)
function ejercicio01() {
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

function ejercicio02() {
    const num = prompt("Ingrese numero a determinar");

    if (num<0) {
        console.log("El numero ingresado es negativo");
    } else {
        console.log("El numero ingresado no es negativo");
    }
    
}  

function ejercicio03() {
    const num = prompt("ingrese un numero");
  
    if (num % 10 == 4) {
      console.log("El numero termina en 4");
    } else {
      console.log("El numero no termina en 4");
    }
}

function ejercicio04() {
    let men,medio,mayor;
    const num1 = +prompt("Ingrese el primer numero: ");
    const num2 = +prompt("Ingrese el segundo numero: ");
    const num3 = +prompt("Ingrese el tercer numero: ");

    men=num1;
    medio=num1;
    mayor=num1;
    if (num2<men) {
        mayor=medio;
        medio=men;
        men=num2;
    } else {
        if (num2>mayor) {
            mayor=num2;
        } else {
            medio=num2;
        }
    }
    if (num3<men) {
        mayor=medio;
        medio=men;
        men=num3;
    } else {
        if (num3>mayor) {
            medio=mayor;
            mayor=num3;
        } else {
            medio=num3;
        }
    }
    console.log(`los numeros en orden de menor a mayor son: ${men},${medio},${mayor}`); 
}

function ejercicio05() {
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

function ejercicio06() {
    let hrextras,tothrext,totpg,tothr;
    const horas=+prompt("Ingresar el total de horas laboradas en la semana:");
    hrextras=horas-40;

    if (hrextras<=0) {
        tothr=horas*20;
        tothrext=0;
    } else {
        tothr=(horas-hrextras)*20;
        tothrext=hrextras*25;
    }
    totpg=tothr+tothrext;

    console.log(`Total pago horas laboradas * $20: ${tothr}`);
    console.log(`Total pago horas extras * $25: ${tothrext}`);
    console.log(`Pago total por semana laborada: ${totpg}`);
}

function ejercicio07() {
    let totdesc,totpagar,est;
    const prechelado=+prompt("Ingrese Precio de Helado: ");
    const canthelado=+prompt("Ingrese cantidad de helados: ");
    const tipmembre=prompt("Tipo de membresia: ");

    est="A";
    totdesc=0;
    switch (tipmembre) {
        case "A":
            totdesc=(prechelado*canthelado)*0.1;
            break;
        case "B":
            totdesc=(prechelado*canthelado)*0.15;
            break;
        case "C":
            totdesc=(prechelado*canthelado)*0.2;
            break;
        default:
            est="C";
            break;
    }
    if (est=="C") {
        console.log("Tipo de membresia incorrecto.");
    } else {
        totpagar=(prechelado*canthelado)-totdesc;
        console.log(`Total a pagar por el cliente: ${totpagar}`);
    }
    
}

function ejercicio08() {
    let totnota,promedio,estalum;
    const not1=+prompt("Ingrese primera nota: ");
    const not2=+prompt("Ingrese segunda nota: ");
    const not3=+prompt("Ingrese tercera nota: ");

    totnota=not1+not2+not3;
    promedio=totnota/3;
    if (promedio<=10) {
        estalum="El alumno esta desaprobado";
    } else {
        estalum="El alumno esta aprobado";
    }
    console.log(`Promedio del alumno: ${promedio}`);
    console.log(estalum);

}

function ejercicio09() {
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

function ejercicio10() {
    let dif;
    const numer=+prompt("Ingrese numero a determinar: ")
    dif=numer%2
    if (dif!=0) {
        console.log(`El numero: ${numer}, es impar`);
    } else {
        console.log(`El numero: ${numer}, es par`);
    }

}  

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
  