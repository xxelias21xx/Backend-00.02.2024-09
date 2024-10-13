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

//10.Hacer un algoritmo en Pseint que diga si un n�mero es par o impar.
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


const buttonsContainer = document.getElementById('buttons-container');
for (let i = 1; i <= 40; i++) {
    const button = document.createElement('button');
    button.innerText = `Ejercicio ${i}`;
    
    // Asignar funciones específicas a cada botón
    button.onclick = function() {
        switch (i) {
            case 1:
                ejercicio1();
                break;
            case 2:
                ejercicio2();
                break;
            case 3:
                ejercicio3();
                break;
            case 4:
                ejercicio4();
                break;
            case 5:
                ejercicio5();
                break;
            case 6:
                ejercicio6();
                break;
            case 7:
                ejercicio7();
                break;
            case 8:
                ejercicio8();
                break;
            case 9:
                ejercicio9();
                break;
            case 10:
                ejercicio10();
                break;
            default:
                showResult(`Ejercicio ${i}: Sin función asignada`);
        }
    };

    buttonsContainer.appendChild(button);
}
