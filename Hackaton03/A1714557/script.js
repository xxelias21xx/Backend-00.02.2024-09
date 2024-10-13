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

function ejercicio11() {
    let nmayor;
    const num1=+prompt("Ingresar primer numero");
    const num2=+prompt("Ingresar segundo numero");
    const num3=+prompt("Ingresar tercer numero");
    nmayor = num1;
    if (num2>nmayor) {
        nmayor=num2;
    }
    if (num3>nmayor) {
        nmayor=num3;
    }
    console.log(`El numero mayor es: ${nmayor}`);

}

function ejercicio12() {
    let nmayor;
    const num1=+prompt("Ingresar primer numero:");
    const num2=+prompt("Ingresar segundo numero:");
    nmayor=num1;
    if (num2>nmayor) {
        nmayor=num2
    }
    console.log(`El numero mayor es: ${nmayor}`);
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

function ejercicio14() {
    let veriprimo;
    const numing=+prompt("Ingrese un numero entero positivo del 1 al 10:");
    if (numing>=1 && numing<=10) {
        veriprimo=true;
        if (numing==1) {
            veriprimo==false;
        } else {
            for (let cont = 2; cont <= numing-1; cont++) {
                if ((numing%cont)==0) {
                    veriprimo=false;
                }
                cont=cont+1
            }
        }
        if (veriprimo==true) {
            console.log(`El numero ${numing}, es primo`);
        } else {
            console.log(`El numero ${numing}, no es primo`);
        }
    } else {
        console.log("El numero ingresado debe estar entre 1 y 10");
    }
}

function ejercicio15() {
    let pulg,kilo;
    const cent=+prompt("Ingrese medida en centimetros");
    const libras=+prompt("Ingrese peso en libras");

    pulg=cent/2.54;
    kilo=libras*0.453592;

    console.log(`Los centimetros en pulgadas son: ${pulg}`);
    console.log(`Las libras en kilogramos son: ${kilo}`);
}

function ejercicio16(){
    let diasemana;
    const ndia=prompt("Ingrese numero del 1 al 7");
    switch (ndia) {
        case "1":
            console.log("Corresponde al dia Lunes");
            break;
        case "2":
            console.log("Corresponde al dia Martes");
            break;
        case "3":
            console.log("Corresponde al dia Miercoles");
            break;
        case "4":
            console.log("Corresponde al dia Jueves");
            break;
        case "5":
            console.log("Corresponde al dia Viernes");
            break;
        case "6":
            console.log("Corresponde al dia Sabado");
            break;
        case "7":
            console.log("Corresponde al dia Domingo");
            break;
        default:
            console.log("Numero ingresado no valido");
            break;
    }
}

function ejercicio17() {
    let horas,minutos,segundos;
    let hormar,minumar,segumar;
    horas=+prompt("Ingrese las horas(0-23)");
    minutos=+prompt("Ingrese los minutos (0-59)");
    segundos=+prompt("Ingrese los segundo (0-59)");

    segundos=segundos+1;
    if (segundos=60) {
        segundos=0;
        minutos=minutos+1;
    }
    if (minutos=60) {
        minutos=0;
        horas=horas+1;
    }
    if (horas=24) {
        horas=0;
    }

    segumar=segundos.toString();
    minumar=minutos.toString();
    hormar=horas.toString();

    if (segundos<10) {
        segumar='0'+segumar;
    }
    if (minutos<10) {
        minumar='0'+minumar;
    }
    if (horas<10) {
        hormar='0'+hormar;
    }
    console.log(`La hora dentro de un segundo sera: ${hormar}: ${minumar}: ${segumar}`);
}

function ejercicio18() {
    let precvta,totvta,ganvend;
    const cantvta=+prompt("Ingrese la cantidad a comprar:");
    if (cantvta<10) {
        precvta=10;
    }
    if (cantvta>=10 && cantvta<100) {
        precvta=8;
    }
    if (cantvta>=100 && cantvta<500) {
        precvta=7;
    }
    if (cantvta>=500) {
        precvta=6;
    }
    totvta=cantvta*precvta;
    ganvend=totvta*0.0825;
    console.log(`El precio de venta es: $${precvta}`);
    console.log(`El total de la venta es: $${totvta}`);
    alert(`La ganancia del vendedor es: $${ganvend}`);
}

function ejercicio19() {
    let tipoEmpleado,diasTrabajados,salarioDiario,salarioTotal;
    tipoEmpleado=prompt("Ingrese el ID del tipo de empleado:\n1: Cajero\n2: Servidor\n3: Preparador de mezclas\n4: Mantenimiento");
    diasTrabajados=prompt("Ingrese la cantidad de dias trabajados (Maximo 6 dias)");
    if (diasTrabajados<0 || diasTrabajados>6) {
        alert("Error: El numero de dias trabajado no es valido");
    }
    switch (tipoEmpleado) {
        case '1':
            salarioDiario=56
            break;
        case '2':
            salarioDiario=64;
            break;
        case '3':
            salarioDiario=80;
            break;
        case '4':
            salarioDiario=48;
            break;    
        default:
            alert("Error: El numero ingresado no corresponde a un ID de empleado valido.");
            break;
    }
    salarioTotal=salarioDiario*diasTrabajados;
    console.log(`El salario total a pagar al empleado es: $${salarioTotal}`);
}

function ejercicio20() {

}

function ejercicio21() {
    let facttotal;
    const num1=+prompt("Ingrese un numero:");
    if (num1<0) {
        alert("El numero no debe ser negativo.");
    } else {
        facttotal=1
        for (let i = 1; i <= num1;i++){ 
            facttotal=facttotal*i;
        }
        console.log(`El factorial de ${num1} es: ${facttotal}`);
    }
}

function ejercicio22() {
    let totsuma;
    const numsum=+prompt("Ingrese la cantidad de numeros a sumar:");
    if (numsum<=0) {
        alert("El numero ingresado debe ser mayor a '0'");
    } else {
        totsuma=0;
        for (let i = 1; i <=numsum; i++) {
            totsuma=totsuma+i;
        }
        console.log(`La suma de los numeros es: ${totsuma}`);
    }
}

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

function ejercicio24() {
    let suma;
    suma=0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 == 0){
            suma=suma+i;
        }        
    }
    alert(`La suma de todos los numeros pares hasta el 1000 es: ${suma}`);
}

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

function ejercicio26() {
    let nrococien,nroresto;
    const nrodividendo=+prompt("Ingrese el dividendo (numero a dividir).");
    const nrodivisor=+prompt("Ingrese el divisor (numero por el que se dividira)");
    if (nrodivisor==0) {
        alert("El divisor no puede ser 0.");
    }else{
        nrococien=0;
        nroresto=nrodividendo;
        while (nroresto>=nrodivisor) {
            nroresto=nroresto-nrodivisor;
            nrococien=nrococien+1;
        }
        console.log(`El cociente es: ${nrococien}`);
        console.log(`El resto es: ${nroresto}`);
    }
}

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

function ejercicio28() {
    let suma,contador;
    suma=0;
    contador=1;
    do {
        suma=suma+contador;
        contador=contador+1;
    } while (contador<=100);
    alert(`La suma de los primeros 100 numeros es: ${suma}`);
}

function ejercicio29() {
    let sumnum,conta;
    conta=0;
    sumnum=0;
    while (conta<100) {
        conta=conta+1;
        sumnum=sumnum+conta;
    }
    alert(`La suma de los numeros hasta 100 es: ${sumnum}`);
}

function ejercicio30() {
    let suma;
    suma=0;
    for (let i = 1; i <= 100; i++) {
        suma=suma+i;
    }
    alert(`La suma de los primeros 100 numeros es: ${suma}`);
}

function ejercicio31() {
    let cantpar,cantimp,sumpar,sumimp,medpar,medimp;
    cantpar=0;
    cantimp=0;
    sumpar=0;
    sumimp=0;
    for (let cont = 0; cont <= 10; cont++) {
        const nroing=+prompt("Ingresar el valor numerico.");
        if (nroing % 2 == 0) {
            cantpar=cantpar+1;
            sumpar=sumpar+nroing;
        }
        if (nroing % 2 != 0) {
            cantimp=cantimp+1;
            sumimp=sumimp+nroing;
        }
    }
    if (cantpar == 0) {
        console.log("No se han ingresado numeros pares");
    } else {
        console.log(`La media de los numeros pares es: ${sumpar}`);
    }
    if (cantimp==0) {
        console.log("No se han ingresado numeros impares.");
    } else {
        console.log(`La media de los numeros impares es: ${sumimp}`);
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
  