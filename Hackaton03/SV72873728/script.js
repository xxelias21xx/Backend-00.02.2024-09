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

function Ejercicio14(){
    /*
    *  14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.
    */
    let Num = parseInt(prompt("Ingrese número del 0 al 10"));
    while(Num > 10 || Num < 0){
        alert("Número no valido")
        Num = parseInt(prompt("Ingrese número del 0 al 10"));
    }
        
    var primo = 0

    if (Num < 2){
        primo = 1
    }

    for (let i = 2; i < Num - 1; i++){
        if (Num % i == 0){
            primo = 1
        }
    }

    if (primo == 1){
        alert("El número no es primo");
    } else{
        alert("El número es primo");
    }
}
        
function Ejercicio15(){
    /*
    *  15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    */
    let Oper = parseInt(prompt(`Ingrese operación que quiere realizar
        1: Centímetros a pulgadas
        2: Libras a kilogramos`));
    switch (Oper){
        case 1:
            let centimetro = parseFloat(prompt("Ingrese centimetros"));
            var pulgadas = centimetro / 2.54
            alert(`${centimetro} centimetros son: ${pulgadas} pulgadas`);
        break;
        case 2:
            let libras = parseFloat(prompt("Ingrese libras"));
            var kilogramos = libras / 2.20462
            alert(`${libras} libras son: ${kilogramos} kilogramos`);
        break;
        default:
            alert("No es operación válida");      
    }
}

function Ejercicio16(){
    /*
    *  16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.os.
    */
    let num = parseInt(prompt(`Ingrese número de día (1 al 7)`));
    switch (num){
        case 1:
            alert(`El día es lunes`);
        break;
        case 2:
            alert(`El día es martes`);
        break;
        case 3:
            alert(`El día es miercoles`);
        break;
        case 4:
            alert(`El día es jueves`);
        break;
        case 5:
            alert(`El día es viernes`);
        break;
        case 6:
            alert(`El día es sabado`);
        break;
        case 7:
            alert(`El día es domigo`);
        break;
        default:
            alert("No es dato válido");      
    }
}

function Ejercicio17(){
    /*
    *  17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    */
    var hora = parseInt(prompt(`Ingrese Horas (0 - 24)`));
    var min = parseInt(prompt(`Ingrese minutos (0 - 60)`));
    var seg = parseInt(prompt(`Ingrese segundos (0 - 60)`));

    seg = seg + 1

    if (seg == 60){
        seg = 0
        min = min + 1
    }

    if (min == 60){
        min = 0
        hora = hora + 1
    }

    if (hora == 24){
        hora = 0
    }

    alert(`La hora en un segundo será: ${hora}:${min}:${seg}`)
}

function Ejercicio18(){
    /*
    *  18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
        Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

        $10. Si se compran unidades separadas hasta 9.

        $8. Si se compran entre 10 unidades hasta 99.

        $7. Entre 100 y 499 unidades.

        $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender
     calcule el precio total para el cliente y la ganancia para el vendedor.
    */
    let cantidad = parseInt(prompt(`Ingrese cantidad de CDs que desea comprar`));

    if(cantidad < 0){
        alert("Cantidad equivocada")
    } else{
        if(cantidad <= 9){
            var precio = 10
        }
        if(cantidad > 9 && cantidad <= 99){
            var precio = 8
        }
        if(cantidad > 99 && cantidad <= 499){
            var precio = 7
        }
        if(cantidad > 499){
            var precio = 6
        }
        let precio_fin = cantidad * precio
        let ganancia = precio_fin * 0.0825

        alert(`El monto total a pagar es: ${precio_fin}
        Ganancia: ${ganancia}`)
        
    }
}

function Ejercicio19(){
    /*
    *  19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma
     con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador
    del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad
     de dinero que el dueño le debe pagar al empleado que ingresó
    */
     let codigo = parseInt(prompt("Ingrese código de trabajador"));
     let dias = parseInt(prompt("Ingrese dias trabajados"));
    while(dias > 6 || dias < 0){
        alert("Número no valido")
        dias = parseInt(prompt("Ingrese dias trabajados"));
    }
    switch (codigo){
        case 1:
            var sueldo = 56 * dias;
        break;
        case 2:
            var sueldo = 64 * dias;
        break;
        case 3:
            var sueldo = 80 * dias;
        break;
        case 4:
            var sueldo = 48 * dias;
        break;
        default:
            alert("No es código válido");      
    }
    alert(`El monto a pagar es de: ${sueldo}`)
}

function Ejercicio20(){
    /*
    20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
    Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    */
    
    let num1 = parseInt(prompt("Ingrese Primer Número entero positivo"));
    while(num1 < 0){
        alert("Número no valido")
        num1 = parseInt(prompt("Ingrese Primer Número entero positivo"));
    }
    let num2 = parseInt(prompt("Ingrese Segundo Número entero positivo"));
    while(num2 < 0){
        alert("Número no valido")
        num2 = parseInt(prompt("Ingrese Segundo Número entero positivo"));
    }
    let num3 = parseInt(prompt("Ingrese Tercer Número entero positivo"));
    while(num3 < 0){
        alert("Número no valido")
        num3 = parseInt(prompt("Ingrese Tercer Número entero positivo"));
    }
    let num4 = parseInt(prompt("Ingrese Cuarto Número entero positivo"));
    while(num4 < 0){
        alert("Número no valido")
        num4 = parseInt(prompt("Ingrese Cuarto Número entero positivo"));
    }

    // -----------------Cantidad de números pares-------------------------//

    let pares = 0;
    if (num1 % 2 == 0){
        pares = pares + 1;
    }

    if (num2 % 2 == 0){
        pares = pares + 1;
    }

    if (num3 % 2 == 0){
        pares = pares + 1;
    }

    if (num4 % 2 == 0){
        pares = pares + 1;
    }

    alert(`Hay ${pares} números pares`)

    // -----------------Mayor de todos-------------------------//

    let mayor = num1;
    if (mayor < num2){
        mayor = num2;
    }
    if (mayor < num3){
        mayor = num3;
    }
    if (mayor < num4){
        mayor = num4;
    }

    alert(`El número mayor es ${mayor}`)

    // -----------------Si el tercero es par, calcular el cuadrado del segundo-------------------------//

    if (num3 % 2 == 0){
        let cuadrado = num2 * num2;
        alert(`El tercero es par y el cuadrado del segundo es: ${cuadrado}`)
    } else{
        alert("El tercero no es par")
    }

    // -----------------Si el primero es menor que el cuarto, calcular la media de los 4 números-------------------------//

    if (num1 < num4){
        let media = (num1 + num2 + num3 + num4) / 4;
        alert(`El primero es menor que el cuarto número. La media es: ${media}`)
    } else{
        alert(`El primero no es menor que el cuarto`)
    }

    /* ---------Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700--------------
     -------------------   Si cumple se cumple la segunda condición, calcular la suma de los 4 números------------------------------*/
     
    if (num2 > num3){
        if(num3 <= 700 && num3 >=50){
            let suma = num1 + num2 + num3 + num4;
            alert(`El segundo es mayor que el tercero y el tercero se encuentra entre 50 y 700. La suma de los 4 nuemros es: "${suma}`)
        } else{
            alert(`El tercer número no esta entre 50 y 700`)
        }
    } else{
        alert(`El segundo número no es mayor que el tercero`)
    }
    
}

function Ejercicio21(){
    /*
    *  21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
    */
    let num = parseInt(prompt("Ingrese un número positivo"));
    while(num < 0){
        alert("Número no válido")
        num = parseInt(prompt("Ingrese un número positivo"));
    }
    
    if (num == 0){
        var factorial = 1
        alert(`El factorial de ${num} es ${factorial}`)
    } else {
        var factorial = 1
        for(let i = 1;i <= num; i++){
            var factorial = factorial * i;
        }
        alert(`El factorial de ${num} es ${factorial}`)
    }
}

function Ejercicio22(){
    /*
    *  22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
    */
    let num = parseInt(prompt("Ingrese un número positivo"));
    while(num < 0){
        alert("Número no válido")
        num = parseInt(prompt("Ingrese un número positivo"));
    }
    
    let suma = num * (num + 1) / 2

    alert(`La suma de los primeros ${num} números es ${suma}`)
}

function Ejercicio23(){
    /*
    *  23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
    */
    let num = parseInt(prompt("Ingrese un número positivo"));
    while(num < 0){
        alert("Número no válido")
        num = parseInt(prompt("Ingrese un número positivo"));
    }
    
    var suma = 0;

    for (let i = 1; i <= num; i++){
        if (i % 2 != 0){
            var suma = suma + i;
        }
    }

    alert(`La suma de los primeros ${num} números impares es ${suma}`)
}

function Ejercicio24(){
    /*
    *  24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
    */
    var suma = 0;
    for (let i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            var suma = suma + i;
        }
    }

    alert(`La suma de los primeros 1000 números pares es ${suma}`)
}

function Ejercicio25(){
    /*
    *  25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
    */
    let num = parseInt(prompt("Ingrese un número positivo"));
    while(num < 0){
        alert("Número no válido")
        num = parseInt(prompt("Ingrese un número positivo"));
    }
    
    if (num == 0){
        var factorial = 1
        alert(`El factorial de ${num} es ${factorial}`)
    } else {
        var factorial = 1
        let i = 1

        do {
            factorial= factorial * i;
            i = i + 1;
        }
        while (i <= num)

        alert(`El factorial de ${num} es ${factorial}`)
    }
}

function Ejercicio26(){
    /*
    *  26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
    */
    let dividendo = parseInt(prompt("Ingrese el dividendo: "));
    let divisor = parseInt(prompt("Ingrese el divisor: "));
    var i = 0
    if (divisor == 0){
        alert("No se puede dividir entre 0")
    } else {
        let resto = dividendo;

        while (resto >= divisor){
            resto = resto - divisor;
            var i = i + 1;
        }
        alert(`El cociente es: ${i}`)
        alert(`El resto es: ${resto}`)
    }
  }

  function Ejercicio27(){
    /*
    *  27. Hacer un algoritmo en JavaScript para determinar la media de una lista 
        indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
    */
   var num = 0
   var i = 0
   var suma = 0
   var bandera = 1

   while (bandera == 1){
    let num = parseInt(prompt("Ingrese un número positivo para sumar o un número negativo para terminar"));
    if (num < 0){
        bandera = 0;
    } else {
        suma = suma + num;
        i = i + 1;
    }
   }

   if (i == 0){
    alert("No ingresó datos")
   } else {
    let media = suma / i;
    alert(`La media es: ${media}`)
   }
}

function Ejercicio28(){
    /*
    *  28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
    */
    var suma = 0;
    var i = 1;

    do{
        suma = suma + i;
        i = i + 1;
    }
    while (i <= 100);
    alert(`La suma es: ${suma}`)
}

function Ejercicio29(){
    /*
    *  29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
    */
    var suma = 0;
    var i = 1;

    while (i <=100){
        suma = suma + i;
        i = i + 1
    }
    alert(`La suma es: ${suma}`)
}

function Ejercicio30(){
    /*
    *  30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
    */
    var suma = 0;
    var i = 1;

    for (i = 1; i <=100; i++){
        suma = suma + i;
    }
    alert(`La suma es: ${suma}`)
}

function Ejercicio31(){
    /*
    *  31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
    */
    var suma_par = 0;
    var suma_impar = 0;
    var contador_par = 0;
    var contador_impar = 0;
    var media_par = 0;
    var media_impar = 0;
    var i = 0;

    for (i = 1; i <=10; i++){
        let num = parseInt(prompt("Ingrese número"));
        if (num % 2 == 0){
            suma_par = suma_par + num;
            contador_par = contador_par + 1;
        } else {
            suma_impar = suma_impar + num;
            contador_impar = contador_impar + 1
        }
    }

    if (contador_par == 0){
        alert("No hay números pares")
    } else{
        media_par = suma_par / contador_par;
        alert(`La media de los números pares es: ${media_par}`)
    }
    
    if (contador_impar == 0){
        alert("No hay números pares")
    }else{
        media_impar = suma_impar / contador_impar;
        alert(`La media de los números impares es: ${media_impar}`)
    }
}

function Ejercicio32(){
    /*
    *  32. Se quiere saber cuál es la ciudad con la población de más personas, 
    son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.
    */

    let ciudad, poblacion, maxpoblacion, maxciudad, i;

    maxpoblacion = 0;


    for (i = 1; i <=14; i++){
        ciudad = toString(prompt(`Ingrese el nombre de la ciudad/provincia ${i}`));
        poblacion = toString(prompt(`Ingrese Población de la ciudad/provincia ${i}`));
    

        if (poblacion > maxpoblacion){
            maxpoblacion = poblacion;
            maxciudad = ciudad;
        }
    }
    alert(`La ciudad/Provincia con mayor población es: ${maxciudad}`)
}
