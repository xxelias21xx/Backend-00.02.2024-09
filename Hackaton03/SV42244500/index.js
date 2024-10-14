

    document.getElementById("Ejercicio01").addEventListener("click", Ejercicio01)

    function Ejercicio01(){
    /**
    * 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    */
    const num = prompt("Escribir un numero por el teclado")

        if (num > 99 && num < 1000){
            console.log("El numero tiene tres digitos")
        } else {
            console.log("El numero no tiene tres digitos")    
        }
    }

    function Ejercicio02(){
    /**
     *2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    */
     const numero = prompt("Escribir un numero: ")
     
     if (numero < 0 ){
         console.log("El numero es negativo")
     } else {
         console.log("El numero no es negativo") 
      }
    }

    function Ejercicio03(){
        /**
         *3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
        */
         const num = prompt("Ingrese un numero: ")

         if (num %10 == 4){
             console.log("El numero termina en 4")
        }else{
             console.log("El numero no termina en 4")
        }
    }

    function Ejercicio04(){
        /**
         *4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
        */
         const num1 = prompt("Escriba el primer numero")
         const num2 = prompt("Escriba el segundo numero")
         const num3 = prompt("Escriba el tercer numero")
         
         let menor, intermedio, mayor;

         if (num1 <= num2 && num1 <= num3) {
            menor = num1
            if (num2 <= num3) {
            intermedio = num2
            mayor = num3
            }else{
            intermedio = num3
            mayor = num2
            }
         } else if (num2 <= num1 && num2 <= num3) {
            menor = num2

         if (num1 <= num3) {
            intermedio = num1
            mayor = num3
         }else{
            intermedio = num3
            mayor = num1
         }
         }else{
            menor = num3
         if (num1 <= num2) {
            intermedio = num1
            mayor = num2
         }else{
            intermedio = num2
            mayor = num1
            }
         }

    console.log("Los números de menor a mayor son: " + menor + ", " + intermedio + ", " + mayor)

    }

    function Ejercicio05(){
        /**
         *5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
         esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
         si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará
         un 40% de descuento. El precio de cada zapato es de $80.
        */
         const precio = 80       
         let totalPagar, totalOriginal, descuento
         const cantidadZapatos= prompt("Ingresar la cantidad de zapatos comprados")
         totalOriginal = cantidadZapatos * precio

         descuento = 0
         
         if (cantidadZapatos >= 10 && cantidadZapatos < 20){
             descuento = totalOriginal * 0.1
         } else {
             if (cantidadZapatos >= 20 && cantidadZapatos < 30){
                 descuento = totalOriginal * 0.2
            } else {    
             if (cantidadZapatos >= 30){
                 descuento = totalOriginal * 0.4
             }
            }
           }
            totalPagar = totalOriginal - descuento
            console.log("Cantidad comprada: ",
                cantidadZapatos,
                "Total original: ",
                totalOriginal
            )
         console.log("descuento: ", descuento, "Total a pagar: ", totalPagar)
    }

    function Ejercicio06(){
    /**
    *6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja
    40 horaso menos,se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
    */
    let sueldoSemanal, cantidadHoras
	
	cantidadHoras = prompt ("Escribir la cantidad de horas trabajadas: ")
	
	if (cantidadHoras > 0 && cantidadHoras <= 40){
		sueldoSemanal = cantidadHoras * 20
    } else {
			if (cantidadHoras > 40)
			sueldoSemanal = cantidadHoras * 25
        }

    console.log("El sueldo semanal sera de: ", sueldoSemanal)

    }

    function Ejercicio07(){
    /**
    *7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
    sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    Tipo A 10% de descuento
    Tipo B 15% de descuento
    Tipo C 20% de descuento
    */

    let descuento
	
	precioHelado = prompt ("Escribir precio del helado")
	membresia = prompt ("Escriba el tipo de membresia A, B o C: ").toUpperCase()
	
	switch (membresia){

		case 'A':
			descuento = 0.1
            break
		case 'B':
			descuento = 0.15
            break
        case 'C':
			descuento = 0.2
            break
		default:
			console.log("Por favor ingresar un tipo de membresia valida, A, B o C")
			descuento = 0
    }
	
    const precioFinal = precioHelado * ( 1 - descuento )
	
	console.log ("El precio del helado con descuento es: ", + precioFinal)

    }

    function Ejercicio08(){
        /**
        *8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
        */

	    const primeraNota = parseFloat(prompt("Introduce la primera nota:"))
        const segundaNota = parseFloat(prompt("Introduce la segunda nota:"))
        const terceraNota = parseFloat(prompt("Introduce la tercera nota:"))

        const promedio = (primeraNota + segundaNota + terceraNota) / 3

        console.log("El promedio es: " + promedio)

        if (promedio > 10) {
        console.log("El estudiante aprobo")
        } else {
        console.log("El estudiante desaprobo")
        }
     }

    function Ejercicio09(){
    /**
    *9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba
    más de $2000tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    */

    let aumento, nuevoSalario
    aumento = 0;
    nuevoSalario = 0;
	const salario = +prompt ("Ingrese el salario del trabajador: ")

	if (salario > 2000){
		aumento = salario * 0.05
    } else {
		aumento = salario * 0.1
	}
	
	nuevoSalario = salario + aumento
	console.log("Salario base: ", salario)
	console.log("El aumento es de: " , aumento)
	console.log("El nuevo salario es de: ", nuevoSalario)

     }

    function Ejercicio10(){
    /**
    *10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    */

	const numero = prompt ("Escriba cualquier numero positivo")
    
    if (numero % 2 == 0){
		console.log("El numero " + numero + " es par")
        } else {
		console.log("El numero " + numero + " es impar")
    }
    }