function Ejercicio1(){
    /*
    *  1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    */

    let NumEva = (prompt("Ingrese número a evaluar"));
    if (parseInt(NumEva) > 99 && parseInt(NumEva) < 1000){
       alert("Si tiene 3 dígitos")
    } else{
       alert("No tiene 3 dígitos")
    }
}

function Ejercicio2(){
    /*
    *  2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    */
    let NumEva = (prompt("Ingrese número a evaluar"));
    if (parseInt(NumEva) < 0){
       alert("Si es negativo")
    } else{
       alert("No es negativo")
    }
}

function Ejercicio3(){
    /*
    *  3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    */
    let NumEva = (prompt("Ingrese número a evaluar"));
    let residuo = parseInt(NumEva) % 10
    if (residuo == 4 || residuo == -4 ){
        alert("Si termina en 4")
    }  else{
        alert("No termina en 4")
    }
}

function Ejercicio4(){
    /*
    *  4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    */  
    let num1 = parseInt(prompt("Ingrese primer número"));
    let num2 = parseInt(prompt("Ingrese segundo número")); 
    let num3 = parseInt(prompt("Ingrese tercer número")); 
    let may = 0

    if (num1 > num2){
        may = num1
        num1 = num2
        num2 = may   
    }

    if (num1 > num3){
        may = num1
        num1 = num3
        num3 = may   
    }  

    if (num2 > num3){
        may = num2
        num2 = num3
        num3 = may   
    }    

    alert(`Los números de menor a mayor son ${num1} - ${num2} - ${num3}`)
}

function Ejercicio5(){
    /*
    *  5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
    esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de 
    la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más 
    treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    */
    const precio = 80
    let Cantidad = parseFloat(prompt("Ingrese número de zapatos que desa comprar"));

    if (Cantidad < 0){
        alert("Cantidad equivocada")
    } else {
        if (Cantidad <= 10){
            Descuento = 0
        }
        if (Cantidad > 10 && Cantidad <= 20){
            Descuento = 0.1
        }
        if (Cantidad > 20 && Cantidad <= 30){
            Descuento = 0.2
        }
        if (Cantidad > 30){
            Descuento = 0.4
        }
    }
    PrecioFin = Cantidad * precio * (1 - Descuento)
    alert(`El precio por zapato es de: ${precio * (1 - Descuento)}
El descuento dado es de: ${Descuento * 100}
El monto total a pagar es: ${PrecioFin}
Cantidad de zapatos comprados: ${Cantidad}`)
}

function Ejercicio6(){
    /*
    *  6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
    se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces 
    las horas extras se le pagarán a $25 por hora.
    */
    let Horas = parseInt(prompt("Ingrese cantidad de horas trabajadas"));
    if (Horas < 0){
        alert("Cantidad de horas equivocadas")
    } else{
        if (Horas <= 40){
            Sueldo = Horas * 20
        }
        if (Horas > 40){
            Sueldo = 40 * 20 + 25 * (Horas - 40)
            alert(`Las horas extras trabajadas son ${Horas - 40}`)
        }
        alert(`El sueldo es:  ${Sueldo} dolares`)
    }
}

function Ejercicio7(){
    /*
    *  7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía 
        dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

        Tipo A 10% de descuento
        Tipo B 15% de descuento
        Tipo C 20% de descuento
    */
    let Precio = parseFloat(prompt("Ingrese precio del helado"));
    let Cantidad = parseInt(prompt("Ingrese cantidad de helados"));
    let Tipo = (prompt("Ingrese Membresía")).toUpperCase();
        
    if (Tipo == "A"){
        Descuento = 0.1
    } else if (Tipo == "B"){
        Descuento = 0.15
    } else if (Tipo == "C"){
        Descuento = 0.2
    } else {
        alert("Sin membresía")
        Descuento = 0
    }
    
    let PrecioFin = Cantidad * Precio * (1 - Descuento)

    alert(`
    El precio por helado es:  ${Precio * (1 - Descuento)}
    El descuento dado es de: ${Descuento * 100}%
    El monto total a pagar es: ${PrecioFin}`)
}

function Ejercicio8(){
    /*
    *  8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
    */
    let nota1 = parseFloat(prompt("Ingrese nota 1"));
    while (nota1 > 20 || nota1 < 0){
        alert("Nota no válida")
        nota1 = parseFloat(prompt("Ingrese nota 1"));
    }
    let nota2 = parseFloat(prompt("Ingrese nota 2"));
    while (nota2 > 20 || nota2 < 0){
        alert("Nota no válida")
        nota2 = parseFloat(prompt("Ingrese nota 2"));
    }
    let nota3 = parseFloat(prompt("Ingrese nota 3"));
    while (nota3 > 20 || nota3 < 0){
        alert("Nota no válida")
        nota3 = parseFloat(prompt("Ingrese nota 3"));
    }

    let promedio = (nota1 + nota2+ nota3) / 3

    if (promedio < 10.5){
        alert(`
            La nota final es: ${promedio}
            El alumno reprobó`)
    } else {
        alert(`
            La nota final es: ${promedio}
            El alumno aprobó`)       
    }
}

function Ejercicio9(){
    /*
    *  9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba 
        más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    */
    let Sueldo_actual = parseFloat(prompt("Ingrese sueldo del trabajador"));
    while(Sueldo_actual < 0){
        alert("Dato no valido")
        Sueldo_actual = parseFloat(prompt("Ingrese sueldo del trabajador"));
    }
    
    if (Sueldo_actual > 2000){
        aumento = 0.05
    } else {
        aumento = 0.1
    }

    let Sueldo_nuevo = Sueldo_actual * (1 + aumento)

    alert(`El nuevo sueldo es: ${Sueldo_nuevo}`)
}

function Ejercicio10(){
    /*
    *  10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    */
    let Dato = parseInt(prompt("Ingrese número"));

    if(Dato == 0){
        alert("El número es 0")
    } else if(Dato % 2 == 0){
        alert("El número es par")
    } else{
        alert("El número es impar")
    }
}

function Ejercicio11(){
    /*
    *  11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
    */  
    let num1 = parseInt(prompt("Ingrese primer número"));
    let num2 = parseInt(prompt("Ingrese segundo número")); 
    let num3 = parseInt(prompt("Ingrese tercer número")); 
    let may = 0

    if (num1 > num2){
        may = num1
        num1 = num2
        num2 = may   
    }

    if (num1 > num3){
        may = num1
        num1 = num3
        num3 = may   
    }  

    if (num2 > num3){
        may = num2
        num2 = num3
        num3 = may   
    }    

    alert(`El número mayor es: ${num3}`)
}

function Ejercicio12(){
    /*
    *  12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    */      
    let num1 = parseFloat(prompt("Ingrese primer número"));
    let num2 = parseFloat(prompt("Ingrese segundo número")); 

    if(num1 > num2){
        alert(`El número mayor es: ${num1}`)
    } else if (num2 > num1){
        alert(`El número mayor es: ${num2}`)
    } else if(num2 == num1){
        alert(`${num1} es igual a ${num2}`)
    } else {
        alert("No válido")
    }
    }

    function Ejercicio13(){
        /*
        *  13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
        */
        let Letra = (prompt("Ingrese Letra")).toUpperCase();
            
        if (Letra == "A" || Letra == "E" || Letra == "I" || Letra == "O" || Letra == "U"){
            alert("La letra es vocal")
        } else{
            alert("La letra no es vocal")
        }
    }
