function ejercicio1() {
    /**
     1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
     */
    let intNum = parseInt(document.getElementById("e1_input1").value);
    
    if(intNum>99 && intNum<1000){
        document.getElementById("Resultado_ejercicio1").innerHTML = "Es un numero positivo de 3 cifras";
    }else{
        if (intNum < -99 && intNum > -1000) {
            document.getElementById("Resultado_ejercicio1").innerHTML = "Es un numero negativo de 3 cifras";
        }else{
            document.getElementById("Resultado_ejercicio1").innerHTML = " No es un numero de 3 cifras";
        }
    }	
	document.getElementById("e1_input1").innerHTML = "";
}

function ejercicio2(){
	//2. Hacer un JavaScript en Pseint que lea un número entero por el teclado y determinar si es negativo.
    let intNum = parseInt(document.getElementById("e2_input1").value);
    
   if (intNum >= 0) {
    document.getElementById("Resultado_ejercicio2").innerHTML = "Es positivo";
   } else {
    document.getElementById("Resultado_ejercicio2").innerHTML = "Es negativo";
   }
}

function ejercicio3(){
    // Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let intNum = parseFloat(document.getElementById("e3_input1").value);
    
    if (intNum % 10 == 4 ) {
        document.getElementById("Resultado_ejercicio3").innerHTML = "Ultimo digito es 4";
    } else {
        document.getElementById("Resultado_ejercicio3").innerHTML = "Ultimo digito no es 4";
    }
}

function ejercicio4(){
    // Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let elMayor = parseFloat(document.getElementById("e4_input1").value);
    let elMenor = parseFloat(document.getElementById("e4_input2").value);
    let elMediano = parseFloat(document.getElementById("e4_input3").value);
    let Auxiliar = 0.0;
   

    if (elMayor <= elMenor) {
        Auxiliar = elMayor;
		elMayor=elMenor;
		elMenor=Auxiliar;
    } else {
        if (elMayor <= elMediano) {
            Auxiliar = elMayor
		    elMayor=elMenor
		    elMenor=Auxiliar
        } else {
            if (elMayor <= elMediano) {
                Auxiliar = elMediano
			    elMayor=elMediano
			    elMediano=Auxiliar
            } else {
                Auxiliar = elMediano
				elMediano=elMenor
				elMenor=Auxiliar
            }  
        } 
    }
    document.getElementById("Resultado_ejercicio4").innerHTML = `El mayor: ${elMayor}, El mediano ${elMediano}, el menor ${elMenor}`;
}


function ejercicio5(){
    // Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
    //  esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
    //   si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos 
    //   se otorgará un 40% de descuento. El precio de cada zapato es de $80.

    let precio = 80.0;
	let porcentaje1 = 0.1;
	let porcentaje2 = 0.2;
	let porcentaje3 = 0.4;
	let descuento= 0.0;
	let total=0.0;
	

    let cantidad = parseFloat(document.getElementById("e5_input1").value);
    total = (cantidad * precio);
   
    if (30 < cantidad) {
        descuento= (total)*porcentaje3;
    } else {
        if (20 < cantidad ) {
            descuento= (total)*porcentaje2;
        } else {
            if (10 < cantidad) {
                descuento= (total)*porcentaje1;
            } else {
                descuento=0
            }
        }
    }
    document.getElementById("Resultado_ejercicio5").innerHTML = `El total es: ${total} Su descuento es: ${descuento} Monto a pagar: ${total-descuento}`;
}

function ejercicio6() {
    // Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
    // se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
    // pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

    let sueldo = 0.0;
	const costoHora = 20;
	const horaExtra = 25;
	
	let horas =parseFloat( document.getElementById("e6_input1").value);

    if (horas <= 40) {
        sueldo = horas * costoHora;
    } else {
        sueldo = 800 + ((horas - 40)*horaExtra);
    }
	document.getElementById("Resultado_ejercicio6").innerHTML = `Su sueldo es: ${sueldo} `;
    
}


function ejercicio7() {
    // Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes 
    // con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
    // Los descuentos son los siguientes:

    //    Tipo A 10% de descuento
    //    Tipo B 15% de descuento
    //    Tipo C 20% de descuento
    
    const descuentoA = 0.1
	const descuentoB = 0.15
	const descuentoC = 0.2

    let tipo= 0;
	
    let arrRadios = document.getElementsByName('ordenE7');
    for (let radio of arrRadios) {
      if (radio.checked) {
        // Retorna el valor del radio seleccionado
        tipo= parseInt(radio.value); 
      }
    }
	console.log(tipo);

	let monto  =parseFloat( document.getElementById("e7_input1").value);
	
    switch (tipo) {
        case 1:
            monto = monto*(1-descuentoA)
            break;
        case 2:
            monto = monto*(1-descuentoB)
            break;
        case 3:
            monto = monto*(1-descuentoC)
            break;
        default:
            monto = monto
            break;
    }
	document.getElementById("Resultado_ejercicio7").innerHTML = `Total a Pagar:  ${monto} `;
}

function ejercicio8() {
    // 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si 
    //el estudiante aprobó o no.
    let nota1  =parseFloat( document.getElementById("e8_input1").value);
    let nota2  =parseFloat( document.getElementById("e8_input2").value);
    let nota3  =parseFloat( document.getElementById("e8_input3").value);

    let promedio = (nota1+nota2+nota3)/3;
    let redondeadoNumero = parseFloat(promedio.toFixed(2));

    if (promedio>= 10.5) {
        document.getElementById("Resultado_ejercicio8").innerHTML = `Aprobado:  ${redondeadoNumero}`;
    } else {
        document.getElementById("Resultado_ejercicio8").innerHTML = `Desaprobado:  ${redondeadoNumero} `;
    }
}

function ejercicio9() {
    //9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    //se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    //si generaba menos de $2000 su aumento será de un 10%.
    const porcentaje1=0.05
	const porcentaje2=0.1
	let aumento=0.0
	
	let sueldo =parseFloat( document.getElementById("e9_input1").value);
    
	if (sueldo>2000) {
        aumento = sueldo*porcentaje1;
    } else {
        aumento = sueldo*porcentaje2;
    }
	document.getElementById("Resultado_ejercicio9").innerHTML = `Aumento optenido:  ${aumento} `;  
}

function ejercicio10() {
    //10. Hacer un algoritmo en Pseint que diga si un n�mero es par o impar.
    let num =parseFloat( document.getElementById("e10_input1").value);

    if (num % 2 === 0) {
        document.getElementById("Resultado_ejercicio10").innerHTML = ` ${num}  es par`;      
    } else {
        document.getElementById("Resultado_ejercicio10").innerHTML = ` ${num}  es impar`;  
    }
}