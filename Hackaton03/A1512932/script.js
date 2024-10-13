// Función para mostrar los resultados en el div de salida
function showResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = result;
}

// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio1() {
    let numTresdigi = parseInt(prompt("Escribe un número de 3 dígitos, Alumnito:"));

    if (!isNaN(numTresdigi)) {
        // Verifica si el número tiene exactamente 3 dígitos, positivo o negativo
        if ((numTresdigi >= 100 && numTresdigi <= 999) || (numTresdigi >= -999 && numTresdigi <= -100)) {
            showResult(`Ejercicio 1: El número ${numTresdigi} tiene 3 dígitos.`);
        } else {
            showResult(`Ejercicio 1: El número ${numTresdigi} no tiene 3 dígitos.`);
        }
    } else {
        showResult("Ejercicio 1: Ups!.Alumnito, ingrese un número porfavor.");
    }
}

// 2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.
function ejercicio2() {
    let numNegativo = parseInt(prompt("Escriba un numero entero negativo, Alumnito:"));

    if (!isNaN(numNegativo) && Number.isInteger(numNegativo)) {
        // Verifica si el número es entero Y negativo
        if ((numNegativo < 0)) {
            showResult(`Excelente!, El ${numNegativo} es un numero entero y negativo.`);
        } else {
            showResult(`Ups, Alumnito El ${numNegativo} es un numero entero , pero no es negativo.`);
        }
    } else {
        showResult("Ups!, Alumnito no has escrito un numero entero.");
    }
}

//3.Hacer un algoritmo en Pseint que lea un numero y determinar si termina en 4.
function ejercicio3() {
    let verificNum = parseInt(prompt("Escriba un numero para saber si termina en 4, Alumnito:"));

    if (!isNaN(verificNum) && Number.isInteger(verificNum)) {
        //Math.abs(): Esto se utiliza para asegurarse de que, si el número es negativo, el último dígito sea tratado como positivo. 
        //Por ejemplo, si ingresas -1234, el resultado será 4 y no -4
        if (ultimoDig = Math.abs(verificNum % 10)){
            showResult(`Excelente!, El ${verificNum} , termina en ${ultimoDig}.`);
        } else {
            showResult(`Ups, Alumnito El ${verificNum} es no termina en ${ultimoDig}.`);
        }
    } else {
        showResult("Ups!, Alumnito no has escrito un numero .");
    }
}
    
//4.Hacer un algoritmo en Pseint que lea tres n�meros enteros y los muestre de menor a mayor.
function ejercicio4() {
    let num1 = parseInt(prompt("Alumnito, Escribe el Primer Numero"));
    let num2 = parseInt(prompt("Alumnito, Escribe el Segundo Numero"));
    let num3 = parseInt(prompt("Alumnito, Escribe el Tercer Numero"));

    //Resolviendo el problema expuesto
    if (!isNaN(num1 && num2 && num3) && Number.isInteger(num1 && num2 && num3)) {
        if(num1 <= num2 && num1 <= num3) {
            if (num2 <= num3){
                showResult (`Alumnito el orden es: ${num1},${num2},${num3}`);
            }else{
                showResult (`Alumnito el orden es: ${num1},${num3},${num2}`);
            }
        }
        else{
            if (num2 <= num1 && num2 <= num3){
                if (num1 <= num3){
                    showResult (`Alumnito el orden es: ${num2},${num1},${num3}`);
                }else{
                    showResult(`Alumnito el orden es: ${num2},${num3},${num1}`)
                }
            }else{
                if(num1 <= num2 ){
                    showResult (`Alumnito el orden es: ${num3},${num1},${num2}`)
                }else
                {
                    showResult(`Alumnito el orden es: ${num3},${num2},${num1}`)
                }
            }

        }
    } else {
        showResult("Ups!, Alumnito no has escrito un numero .");
    }
}

//5.Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoci�n de descuento para vender al mayor, 
//esta depender� del n�mero de zapatos que se compren. Si son m�s de diez, se les dar� un 10% de descuento sobre el total de la compra; 
//si el n�mero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son m�s treinta zapatos se otorgar� un 40% de descuento. 
//El precio de cada zapato es de $80
function ejercicio5() {
    let cantZapato = parseInt(prompt("Estimado, Cuantos zapatos ha comprado para poder realizar su descuento por la compra"));
    let precioZapato = 80;
    let subTotal = (precioZapato*cantZapato);
	let desc1 = subTotal*0.10;
	let desc2 = subTotal*0.20;
	let desc3 = subTotal*0.40;

    //Resolviendo el problema expuesto
   if (!isNaN(cantZapato) && Number.isInteger(cantZapato)) {
        if (cantZapato >= 10 && cantZapato <20){
            precioTotal = subTotal - desc1;
        }else{
            if( cantZapato >= 20 && cantZapato < 30){
            precioTotal = subTotal - desc2;
            }else{
                if (cantZapato >= 30) {
                precioTotal = subTotal - desc3;
                } 
            } 
        }              
    }else{
        showResult("Ups!, Escriba un numero estimado.");
    }
    
    showResult(`Estimado(a) el precio Total a pagar: S/${precioTotal}.¡Gracias por su compra!.`);
}

//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l ser� su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagar� $20 por hora, pero si trabaja m�s de 40 horas
//entonces las horas extras se le pagar�n a $25 por hora.
function ejercicio6() {
    let horTrabajadas = parseInt(prompt("Estimado, ingrese cuantas horas ha trabajado para calcular su pago"));
	let horaNormal = 20;
	let horaExtra = 25;
	let horSemanal = 40;
   
    //Calcular horas Extras
	let cantExtras = horTrabajadas - horSemanal;

    //Resolviendo el problema expuesto
   if (!isNaN(horTrabajadas) && Number.isInteger(horTrabajadas)) {
         if (horTrabajadas <= horSemanal) {
            pagoSemanal = horTrabajadas * horaNormal;
         }else{
            if (horTrabajadas > 40) {
                pagoSemanal = (horSemanal * horaNormal) + (cantExtras * horaExtra);
            }
         }       
    }else{
        showResult("Ups!, Escriba un numero estimado.");
    }
    // Mostrar el resultado
    showResult(`Estimado(a), su pago total es: S/${pagoSemanal}.¡Gracias por su esfuerzo!.`);
}

//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus 
//	clientes con membres�a dependiendo de su tipo, s�lo existen tres tipos de membres�a, 
//	tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	// Solicitar el tipo de membres�a y el monto de la compra
// Generar botones con sus respectivas funciones
function ejercicio7(){

    let menbresia = prompt("Estimado, para realizar el descuento de su compra indique menbresia tiene Ud, A:Bronce, B:Plata, C:Oroo");
    
    //Uso de parseFloat para precioCompra: Esto asegura que se pueda ingresar un valor decimal.
    let precioCompra = parseFloat(prompt("Estimado,ingrese el precio total de su compra : "));
	let Bronce = 0.10;
	let Plata = 0.15;
	let Oro = 0.20;
	
    //Resolviendo el problema expuesto
    //toUpperCase() para convertir cualquier entrada en mayúsculas, asegurando que se reconozca incluso si el usuario ingresa "a", "b" o "c".
    switch (menbresia.toUpperCase()){
        case "A":
            descuento = Bronce;
            showResult("La membres�a de tipo A (Bronce) tiene un 10% de descuento.");
            break;
        case "B":   
            descuento = Plata;
            showResult( "La membres�a de tipo B (Plata) tiene un 15% de descuento.");
            break;
        case "C":    
            descuento = Oro;
            showResult("La membres�a de tipo C (Oro) tiene un 20% de descuento.");
            break;
        default:s
            showResult("No ha elegido ninguna menbresia");
            return;
    }

    // Calcular el precio final aplicando el descuento
    let precioFinal = precioCompra - (precioCompra * descuento);

    // Mostrar el precio final a pagar
    showResult (`El precio final de su compra despues de aplicar el descuento es: S/${precioFinal} ,disfrute de su compra`);
}

//8.Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprob� o no.
function ejercicio8(){

    //alert ("Alumnito, para saber si ha aprobado escriba sus tres notas, suerte.");
    let nota1 = parseInt(prompt("Alumnito, escriba su primera nota"));
    let nota2 = parseInt(prompt("Alumnito, escriba su segunda nota"));
    let nota3 = parseInt(prompt("Alumnito, escriba su tercera nota"));

	
    let notaFinal=20
    let aprobado = 12

    // Calcular el promedio de las tres notas
    let promedio = (nota1+nota2+nota3)/3

    // Determinar si el estudiante aprob� o no
    if (promedio >= aprobado){
        showResult (`Alumnito, ¡Felicidades! Ha aprobado con un promedio de , ${promedio}`);
    }else{
        showResult (`Alumnito, siga estudiando, ha desaprobado con un promedio de, ${promedio}`);
    }
}

//9.Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba m�s de $2000 tendr� un aumento del 5%, 
//si generaba menos de $2000 su aumento ser� de un 10%.
function ejercicio9(){
    // Solicitar el ingreso mensual del trabajador
    let ingresoPago = parseInt(prompt("Estimado, ingrese cuanto es su ingreso mensual, ya que a partir de eso le realizara un aumento salarial"));

    let pagoNeutral = 2000;
	let aumento01= 0.05;
	let aumento02= 0.10;

    
    //Resolviendo el problema expuesto
    if (!isNaN(ingresoPago)) {
        if (ingresoPago <= pagoNeutral ) {
            aumentoPago = pagoNeutral + (pagoNeutral*aumento01);
		    nuevoAumento=aumento02 * 100;
        }else{
            if (ingresoPago > pagoNeutral) {
                aumentoPago = pagoNeutral + (pagoNeutral*aumento02);
                nuevoAumento= aumento01 *100;
            }
        }
        
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");
    }

	// Mostrar el resultado
	showResult( `Usted recibira un aumento del , ${nuevoAumento},"%" " Su nuevo salario sera: S/${aumentoPago}`);
}

//10.Hacer un algoritmo en Pseint que diga si un numero es par o impar.
function ejercicio10(){
    let num = parseInt(prompt("Alumnito, Escriba un numero para saber si es par o impar"));
   
    if (!isNaN(num)) {
        if ((num%2) == 0 ) {
            showResult ("Alumnito, es un numero Par");
        }else{
            showResult("Alumnito, es numero es impar");
        } 
    }else{
        showResult("Ups!.Alumnito, ingrese un número porfavor.");
    }

}  

//11.Hacer un algoritmo en Pseint que lea tres numeros y diga cual es el mayor.
function ejercicio11(){
    let num1 = parseInt(prompt("Alumnito, Escribe el primer Numero"));
    let num2 = parseInt(prompt("Alumnito, Escribe el segundo Numero"));
    let num3 = parseInt(prompt("Alumnito, Escribe el tercer Numero"));

      // Verificar si los tres números son válidos
    if (!isNaN(num1 && num2 && num3)) {
        let mayorNum=Math.max(num1, num2, num3);
        showResult(`Alumnito el numero mayor es: ${mayorNum}`);
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");
    }
}

//12.Hacer un algoritmo en Pseint que lea dos numeros y diga cual es el mayor.
function ejercicio12(){
    let num1 = parseInt(prompt("Alumnito, Escribe el primer Numero"));
    let num2 = parseInt(prompt("Alumnito, Escribe el segundo Numero"));
    

      // Verificar si los dos números son válidos
    if (!isNaN(num1 && num2)) {
        let mayorNum=Math.max(num1, num2);
        showResult(`Alumnito el numero mayor es: ${mayorNum}`);
    } else {
        showResult("Ups!.Alumnito, ingrese un número porfavor.");
    }
}

//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
function ejercicio13(){
    let letra = prompt("Alumnito, escribe una letra:");
    let vocales = ['a','e','i','o','u','A','B','E','I','O','U'];
    
    if (vocales.includes(letra)){
        showResult("Alumnito, has escrito una vocal");
    }else{
        showResult("Ups!, has escrito una consonante");
    }
    
}

//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al cien y determine si es un n�mero primo.
function ejercicio14() {
    let numPrimo = parseInt(prompt("Alumnito, Escribe un Numero"));

    if (!isNaN(numPrimo)) {
        if (numPrimo < 1 || numPrimo > 100) {
            showResult(`Alumnito, el número ${numPrimo} es inválido.`);
        } else if (numPrimo === 1) {
            showResult("Alumnito, el número 1 no es primo.");
        } else {
            let esPrimo = true; // Suponemos que es primo

            for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
                if (numPrimo % i === 0) {
                    esPrimo = false; // Encontramos un divisor, no es primo
                    break;
                }
            }

            if (esPrimo) {
                showResult(`Alumnito, el número ${numPrimo} es primo.`);
            } else {
                showResult(`Alumnito, el número ${numPrimo} no es primo.`);
            }
        }
    } else {
        showResult("Ups!. Alumnito, ingrese un número por favor.");
    }
}

//15. Hacer un algoritmo en Pseint que convierta centimetros a pulgadas y libras a kilogramos.
function ejercicio15() {
    let numLibra = parseFloat(prompt("Alumnito, ingrese el numero que quiere convertir a pulgadas"));
    let numCentim = parseFloat(prompt("Alumnito, ingrese el numero que quiere convertir a pulgadas"));
    //parseFloat = entero,decimal.
    
    let pulgadas = 2.54;
    let kilogramos = 0.453592;

    if (!isNaN(numLibra && numCentim)) {
      	// Conversi�n de cent�metros a pulgadas
	    let conversion1 = numLibra / pulgadas;
	
	    // Conversi�n de libras a kilogramos
	    let conversion2 = numCentim * kilogramos;

        showResult (`Estimado, la conversion a pulgadas es: ,${conversion1.toFixed(2)} <br> Estimado, la conversion a kilometros es: ,${conversion2.toFixed(2)}`);
        //Uso de toFixed(2): Esto se usa para mostrar el resultado con dos decimales para mayor precisión.
    } else {
        showResult("Ups!. Alumnito, ingrese un número por favor.");
    }


}

//16. Hacer un algoritmo en Pseint que lea un n�mero y seg�n ese n�mero, indique el d�a que corresponde.
function ejercicio16() {
    let num = parseInt(prompt(`Estimado por favor ingrese del (1) al (7) para conocer el dia de la semana`))

    switch (num){

        case 1 :
            showResult("Hoy es Lunes");
            break;
        case 2 :
            showResult("Hoy es Marte");
            break;
        case 3 :
            showResult("Hoy es Miercoles");
            break;
        case 4 :
            showResult("Hoy es Jueves");
            break;
        case 5 :
            showResult("Hoy es Viernes");
            break;
        case 6 :
            showResult("Hoy es Sabado");
            break;
        case 7 :
            showResult("Hoy es Domingo");
            break;
        default :
            showResult ("El numero digitado no corresponde a la lista")
            return;
    }
}

//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17(){
    let hor = parseInt(prompt("Por favor, ingrese la hora (0-23):"));
    let min = parseInt(prompt("Por favor, ingrese los minutos (0-23):"));
    let seg = parseInt(prompt("Por favor, ingrese los segundos (0-23):"));

    if (!isNaN(hor && min && seg)) {
        if ((hor < 0 || hor > 23) || (min < 0 || min > 59) || (seg < 0 || seg > 59)){ 
        showResult("Hora, minutos o segundos ingresados son invalidos.") ;
        return;  // Detener la ejecución si los valores son inválidos
        }
    } else {
        showResult("Ups!. Alumnito, ingrese un número por favor.");
        return;  // Detener la ejecución si la entrada no es un número
    }   
     
    // Incrementar los segund
	seg = seg + 1;
		
	// Verificar si los segund alcanzan 60
    if (seg === 60) {
        seg = 0;
        min = min + 1 ;
    } 
		
	// Verificar si los minutos alcanzan 60
    if (min === 60) {
        min = 0;
        hor = hor + 1 ;	
    }   

	// Verificar si la hora alcanza 24
    if (hor === 24) {
        hor = 0;
        min = 0;
        seg = 0;
    }
    
    // Mostrar la nueva hora
	showResult(`hora dentro de un segundo es: , ${hor}:${min}:${seg}`);        

}

//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribuci�n de CD v�rgenes. 
//Los clientes pueden adquirir los art�culos (supongamos un �nico producto de una �nica marca) por cantidad. Los precios son:
        //$10. Si se compran unidades separadas hasta 9.
        //$8. Si se compran entre 10 unidades hasta 99.
        //$7. Entre 100 y 499 unidades.
        //$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un n�mero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
function ejercicio18(){
    let unidadesCd = parseInt(prompt("Estimado, ingrese las unidades a comprar"));
    let porcenGanancia = 0.0825;
	let precio1 = 10;
	let precio2 = 8;
	let precio3 = 7;
	let precio4 = 6;
	
    if (!isNaN(unidadesCd)) {
        if (unidadesCd <= 9) {
            total = unidadesCd * precio1;
        } else if (unidadesCd >= 10 && unidadesCd <= 99) {
            total = unidadesCd * precio2;
        } else if (unidadesCd >= 100 && unidadesCd <= 499) {
            total = unidadesCd * precio3;
        } else if (unidadesCd >= 500) {
            total = unidadesCd * precio4;
        }

        ganancia = total * porcenGanancia;
    } else {

        showResult("Ups!. Alumnito, ingrese un número por favor.");
        return;  // Detener la ejecución si la entrada no es un número
    }   

    showResult(`El total a pagar es :s/ ${total.toFixed(2)} y la ganancia del vendedor :s/${ganancia.toFixed(2)}`);
}


//Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente
//		Cajero (56$/d�a).
//		Servidor (64$/d�a).
//		Preparador de mezclas (80$/d�a).
//		Mantenimiento (48$/d�a).
//	El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero identificador del empleado y la cantidad de d�as que 
//	trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�
function ejercicio19() {
       
        let codEmpleado = parseInt(prompt("Ingrese el Numero de Id del empleado que desea pagar ID:11 (Cajero) ID:12 (Sevidor) ID:13 (Preparador de mezclas) <br>ID:14 (Mantenimiento) "));
        let diasTrabajados = parseInt(prompt("Ingrese la cantidad de dias trabajados(maximo 6 dias)"));
        let C = 56 //CAJERO;
        let S = 64 //SERVIDOR.;
        let P = 80 //PREPARADOR DE MEZCLAS;
        let M = 48 //MANTENIMIENTO;
      
        // Validar que los d�as trabajados no sean m�s de 6
        if (!isNaN(codEmpleado) && !isNaN(diasTrabajados)) {
            if (diasTrabajados < 1 || diasTrabajados > 6 ) {
                showResult("Numero invalido. Debe estar entre 1 y 6");
            } else {
                switch(codEmpleado) {
                   case 11:
                       semaPagar = diasTrabajados * C;
                        showResult(`Ha escogido pagar al Cajero. Se le pagar� por los dias trabajados S/${semaPagar}`);
                        break;
                    case 12:
                       semaPagar = diasTrabajados * S;
                       showResult (`Ha escogido pagar al  Servidor. Se le pagar� por los dias trabajados S/${semaPagar}`);
                       break;
                   case 13:
                       semaPagar = diasTrabajados * P;
                       showResult (`Ha escogido pagar al  Preparador de mezclas. Se le pagar� por los dias trabajados S/${semaPagar}`);
                       break;
                   case 14:
                       semaPagar = diasTrabajados * M;
                       showResult (`Ha escogido pagar al  de Mantenimiento. Se le pagar� por los dias trabajadosS/${semaPagar}`);
                       break;
                   default:
                       showResult ("N�mero inv�lido, vuelva a intentarlo");
                       return;
                    }
                }
            
        } else {
            showResult("Ups!. Alumnito, ingrese un número por favor.");
        return;  // Detener la ejecución si la entrada no es un número     
        }
}

//20. Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
//�Cu�ntos n�meros son Pares?
//�Cu�l es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.
function ejercicio20() {
    let num1 = parseInt(prompt("Ingrese el primer entero positivo"));
    let num2 = parseInt(prompt("Ingrese el segundo entero positivo"));
    let num3 = parseInt(prompt("Ingrese el tercero entero positivo"));
    let num4 = parseInt(prompt("Ingrese el cuarto entero positivo"));

    //�Cu�ntos n�meros son Pares?
    let numeros =[ num1, num2, num3, num4];
    let pares = 0;

    numeros.forEach(num => {
    //forEach(ejecuta cada codigo del array)
        if(num % 2 === 0){
            pares = pares + 1;
        }
    });
    
    //�Cu�l es el mayor de todos?
    let mayorNum=Math.max(...numeros);//Usar spread operator  para descomponer el array en elementos individuales.

    //Si el tercero es par, calcular el cuadrado del segundo.
    if (num3 % 2 === 0) {
        let num3Par = num2 * num2;
        showResult(`El cuadrado del segundo numero es: ${num3Par}`);
    }

    //Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
    if (num1 < num4) {
        let media = (num1 + num2 + num3 + num4)/ 4;
        showResult (`La media de los 4 n�meros es: ${media}`) ;
    }

     //Si el segundo es mayor que el tercero,
     if (num2 > num3) {
        if (num3 >= 50 && num3 <= 700) {
            let suma = (num1 + num2 + num3 + num4) ;
            showResult(`La suma de los 4 numeros es ${suma}`)
        }
    }


	showResult(`Cantidad de numeros pares: ${pares} <br> Alumnito el numero mayor es: ${mayorNum} <br>  `);
}
//================================================================================
//              Crear botones de acuerdo al cantidad de ejercicios 
//================================================================================
const buttonsContainer = document.getElementById('buttons-container');
for (let i = 1; i <= 40; i++) {
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

    buttonsContainer.appendChild(button);
}

// const buttonsContainer = document.getElementById('buttons-container');
// for (let i = 1; i <= 40; i++) {
//     const button = document.createElement('button');
//     button.innerText = `Ejercicio ${i}`;
    
//     // Asignar funciones específicas a cada botón
//     button.onclick = function() {
//         switch (i) {
//             case 1:
//                 ejercicio1();
//                 break;
//             case 2:
//                 ejercicio2();
//                 break;
//             case 3:
//                 ejercicio3();
//                 break;
//             case 4:
//                 ejercicio4();
//                 break;
//             case 5:
//                 ejercicio5();
//                 break;
//             case 6:
//                 ejercicio6();
//                 break;
//             case 7:
//                 ejercicio7();
//                 break;
//             case 8:
//                 ejercicio8();
//                 break;
//             case 9:
//                 ejercicio9();
//                 break;
//             case 10:
//                 ejercicio10();
//                 break;
                
//             default:
//                 showResult(`Ejercicio ${i}: Sin función asignada`);
//         }
//     };

//     buttonsContainer.appendChild(button);
// }

