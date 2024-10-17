// Ejercicio 1

function ejercicio1(){
    const Num= prompt("Ingrese un numero");
    if(Num>=100 && Num<=999){
        console.log("El numero tiene 3 digitos");
    }
    else{
        console.log("El numero NO tiene 3 digitos");
    }
}

//Ejercicio 2

function ejercicio2(){
    const Num= prompt("Ingrese un numero");
    if(Num<0){
        console.log("El numero es negativo");
    }
    else{
        console.log("El numero no es negativo");
    }
}

//Ejercicio 3

function ejercicio3(){
    const Num= prompt("Ingrese un número")
    if(Num%10==4){
        console.log("El numero termina en 4");
    }
    else{
        console.log("El numero no termina en 4");
    }
}

//Ejercicio 4

function ejercicio4(){
    const Num1 = prompt("Ingrese el primer numero entero: ");
    const Num2 = prompt("Ingrese el segundo numero entero: ");
    const Num3 = prompt("Ingrese el tercer numero entero: ");
    if(Num1<Num2 && Num1<Num3){
        if(Num2<Num3){
            console.log("El orden de menor a mayor: ", Num1,", " ,Num2, ", ",Num3);
        }
        else{
            console.log("El orden de menor a mayor: ", Num1 ,", " ,Num3, ", ",Num2 );
        }
    }
    else{
        if(Num2<Num1 && Num2<Num3){
            if(Num1<Num3){
                console.log("El orden de menor a mayor: ", Num2,", " ,Num1, ", ",Num3);
            }
            else{
                console.log("El orden de menor a mayor: ", Num2,", " ,Num3, ", ",Num1);
            }
        }
        else{
            if(Num3<Num1 && Num3<Num2){
                if(Num1<Num2){
                    console.log("El orden de menor a mayor: ", Num3,", " ,Num1, ", ",Num1);
                }
                else{
                    console.log("El orden de menor a mayor: ", Num3,", " ,Num2, ", ",Num1);
                }
            }
        }
    }
}

//Ejercicio 5

function ejercicio5(){
    const precio=80
    let Total1, TotalOfer1, descuento1, Total2, TotalOfer2, descuento2, Total3, TotalOfer3, descuento3
    const NumZapa= prompt("Ingrese el numero de zapatos:")
    if(NumZapa>=10 && NumZapa<20 ){
        Total1=NumZapa*precio
		descuento1=10/100
		TotalOfer1=Total1-(Total1*descuento1)
        console.log("El precio total aplicando la oferta es:", TotalOfer1)
    }
    else{
        if(NumZapa>=20 && NumZapa<30){
            Total2=NumZapa*precio
			descuento2=20/100
			TotalOfer2=Total2-(Total2*descuento2)
            console.log("El precio total aplicando la oferta es:", TotalOfer2)
        }
        else{
            if(NumZapa>=30){
                Total3=NumZapa*precio
				descuento3=40/100
				TotalOfer3=Total3-(Total3*descuento3)
                console.log("El precio total aplicando la oferta es:", TotalOfer3)
            }
            else{
                console.log("No aplica el descuento")
            }
        }
    }

}

//Ejercicio 6 

function ejercicio6(){
    let pago, TotalPago1, pago2, TotalPago2, Total 
    const CantHora= prompt("Ingrese la cantidad de horas de trabajo: ")
    if(CantHora>0 && CantHora<40){
        pago=20
        TotalPago1=CantHora*pago
        console.log("El sueldo semanal es: ", TotalPago1)
    }
        if(CantHora>=40 && CantHora<168){
            pago2=25
			TotalPago2=CantHora*pago2
		    Total=TotalPago1+TotalPago2
            console.log("El sueldo semanal es: ",Total)
        }
}

//Ejercicio 7

function ejercicio7(){
    let Descuento, Descuento2, Descuento3
    const TipoMem= prompt("Ingrese tipo de membresia: ")
    if(TipoMem=='A' || TipoMem=='B' || TipoMem=='C'){
        if(TipoMem=='A'){
            Descuento=10
            console.log("El descuento por tipo ", TipoMem, " es: ", Descuento, "%")
        }
        else{
            if(TipoMem=='B'){
                Descuento2=15
                console.log("El descuento por tipo ", TipoMem, " es: ", Descuento2, "%")
            }
            else{
                Descuento3=20
                console.log("El descuento por tipo ", TipoMem, " es: ", Descuento3, "%")
            }
        }
    }
    else{
        console.log("No existe tipo de membresia.")
    }
}

//Ejercicio 8

function ejercicio8(){
    const nota1 = prompt("Ingrese la primera nota: ");
    const nota2 = prompt("Ingrese la segunda nota: ");
    const nota3 = prompt("Ingrese la tercera nota: ");
    let promedio=(nota1+nota2+nota3)/3;
    if(nota1>=0 && nota1<=20 && nota2>=0 && nota2<=20 && nota3>=0 && nota3<=20){
        if(promedio>=11 && promedio<=20){
            console.log("El promedio es: ", promedio.toFixed(2));
            console.log("El estudiante aprobo.");
        }
        else{
            console.log("El promedio es: ", promedio.toFixed(2));
            console.log("El estudiante NO aprobo.");
        }
    }
    else{
        console.log("Algun valor incorrecto");
    }
}

//Ejercicio 9

function ejercicio9(){
    let Poraumento, Poraumento2
    const ganancia = prompt("Ingrese la cantidad de ganancia: ");
    if(ganancia>=0 && ganancia<2000){
        Poraumento=5
        console.log("Para la ganancia de $",ganancia, " el aumento es ",Poraumento,"%")
    }
    else{
        Poraumento2=10
        console.log("Para la ganancia de $",ganancia, " el aumento es ",Poraumento2,"%")
    }
}

//Ejercicio 10

function ejercicio10(){
    const num = prompt("Ingrese un numero entero: ");
    if(num%2==0){
        console.log("El numero es par");
    }
    else{
        console.log("El numero es impar")
    }
}

//Ejercicio 11

function ejercicio11(){
    const num1 = prompt("Ingrese el primer numero entero: ");
    const num2 = prompt("Ingrese el segundo numero entero: ");
    const num3 = prompt("Ingrese el tercer numero entero: ");
    if(num1>=num2 && num1>=num3){
        console.log("El numero mayor es ", num1)
    }
    else{
        if(num2>=num1 && num2>=num3){
            console.log("El numero mayor es ", num2)
        }
        else{
            console.log("El numero mayor es ", num3)
        }
    }
}

//Ejercicio 12
function ejercicio12(){
    const Num1 = prompt("Ingrese el primer numero entero: ");
    const Num2 = prompt("Ingrese el segundo numero entero: ");
    if(Num1>=Num2){
       console.log("El numero mayor es ", Num1) 
    } 
    else{
        if(Num2>=Num1){
            console.log("El numero mayor es ", Num2)
        }
    }
}

//Ejercicio 13
function ejercicio13(){
    const letra=prompt("Ingrese una letra: ")
    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
        console.log("La letra ingresada es vocal.")
    }
    else{
        console.log("La letra ingresada NO es una vocal.")
    }
}

//Ejercicio 14

function ejercicio14(){
    let residuo, cantDivisores, divisor
    const num = prompt("Ingrese un numero del 1-10: ");
    divisor=1
    cantDivisores=0
    if(num>=1 && num<=10){
        while(divisor<=num){
            residuo = num % divisor
            if(residuo==0){
                cantDivisores= cantDivisores + 1
            }
            divisor = divisor + 1
        }
        if(cantDivisores=2){
            console.log("El numero ", num, " es primo")
        }
        else{
            console.log("El numero ", num, " NO es primo")
        }
    }
    else{
        console.log("El numero es incorrecto")
    }
}

//Ejercicio 15

function ejercicio15(){
    let NumP, NumK
    const NumC = prompt("Ingrese un numero en centimetros: ");
    NumP=NumC/2.54;
    console.log("El numero en pulgadas es: ",NumP);
    const NumL= prompt("Ingrese un numero en libras: ");
    NumK=NumL/2.2;
    console.log("El numero en kilogramos es: ",NumK)
}

//Ejercicio 16

function ejercicio16(){
    const NumS = prompt("Ingrese un numero del 1-7: ");
    if(NumS>=1 && NumS<=7){
        if(NumS==1 ){
            console.log("Lunes");
        }
        else{
            if(NumS==2 ){
                console.log("Martes");
            }
            else{
                if(NumS==3 ){
                    console.log("Miercoles");
                }
                else{
                    if(NumS==4 ){
                        console.log("Jueves");
                    }
                    else{
                        if(NumS==5 ){
                            console.log("Viernes");
                        }
                        else{
                            if(NumS==6 ){
                                console.log("Sabado");
                            }
                            else{
                                console.log("Domingo");
                            }
                        }
                    }
                }
            }
        }
    }
    else{
        console.log("Numero invalido. Debes ingresar un numero entre 1 y 7.");
    }
}

//Ejercicio 17

function ejercicio17(){
    const Hora = prompt("Ingrese las horas: ");
    const Min = prompt("Ingrese las minutos: ");
    const Seg = prompt("Ingrese las segundos: ");
    Seg=Seg + 1;
    if(Seg==60){
        Seg=0;
		Min=Min+1;
    }
    if(Min==60){
        Min=0;
		Hora=Hora+1;
    }
    if(Hora==24){
        Hora=0;
    }
    console.log("La hora dentro de un segundo sera: horas: ",Hora,", minutos: ",Min,", segundos: ",Seg)
}

//Ejercicio 18

function ejercicio18(){
    let GanTotal, PorGan, Precio, Total
    const CantCD= prompt("Ingrese la cantidad de CDs");
    PorGan=8.25/100
    if(CantCD>=0 && CantCD<=9){
        Precio=10
		Total=Precio*CantCD
		GanTotal=Total*PorGan
        console.log("El precio total a pagar es $", Total)
        console.log("La ganancia del vendedor es $", GanTotal)
    }
    else{
        if(CantCD>=10 && CantCD<=99){
            Precio=8
			Total=Precio*CantCD
			GanTotal=Total*PorGan
            console.log("El precio total a pagar es $", Total)
            console.log("La ganancia del vendedor es $", GanTotal)
        }
        else{
            if(CantCD>=100 && CantCD<=499){
                Precio=7
				Total=Precio*CantCD
				GanTotal=Total*PorGan
                console.log("El precio total a pagar es $", Total)
                console.log("La ganancia del vendedor es $", GanTotal)
            }
            else{
                Precio=6
				Total=Precio*CantCD
				GanTotal=Total*PorGan
                console.log("El precio total a pagar es $", Total)
                console.log("La ganancia del vendedor es $", GanTotal)
            }
        }
    }
}

//Ejercicio 19

function ejercicio19(){
    const ID1 = prompt("Ingrese el primer numero que identifica al empleado (Cajero: 1,Servidor: 3, Preparador: 5, Mantenimiento: 7): ");
    const ID2 = prompt("Ingrese el segundo numero que identifica al empleado (Cajero: 2,Servidor: 4, Preparador: 6, Mantenimiento: 8): ");
    const CantD = prompt("Cantidad de dias que trabajo: ");
	let SalarioCaj=56
	let SalarioSer=64
	let SalarioPre=80
	let SalarioMan=48
    if(CantD>=0 && CantD<7){
        if(ID1==1 && ID2==2 ){
            PagoCaj=SalarioCaj*CantD
            console.log("La cantidad de pago es $",PagoCaj)
        }
        else{
            if(ID1==3 && ID2==4){ 
                PagoSer=SalarioSer*CantD
                console.log("La cantidad de pago es $",PagoSer)
            }
            else{
                if(ID1==5 && ID2==6){
                    PagoPre=SalarioPre*CantD 
                    console.log("La cantidad de pago es $",PagoPre)
                }
                else{
                    if(ID1==7 && ID2==8){
                        PagoMan=SalarioMan*CantD
                        console.log("La cantidad de pago es $",PagoMan)
                    }
                    else{
                        console.log("ID de empleado incorrecto.")
                    }
                }
            }
        }
    }
    else{
        console.log("Cantidad de dias incorrecta")
    }
    }
    

//Ejercicio 20

function ejercicio20(){
    let cantPar, numMayor, suma, media, Cuadrado
    const num1 = prompt("Ingrese el primer numero");
    const num2 = prompt("Ingrese el seundo numero");
    const num3 = prompt("Ingrese el tercer numero");
    const num4 = prompt("Ingrese el cuarto numero");
    if(num1>=0 && num2>=0 && num3>=0 && num4>=0){
        cantPar=0
        if(num1 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num2 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num3 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num4 % 2 == 0){
            cantPar=cantPar+1
        }
        if(num1>num2){
            if(num1>num2){
                if(num1>num3){
                    if(num1>num4){
                        numMayor=num1
                    }
                    else{
                        numMayor=num4
                    }
                }
                else{
                    if(num3>num4){
                        numMayor=num3
                    }
                    else{
                        numMayor=num4
                    }
                }
            }
            else{
                if(num2>num3){
                    if(num2>num4){
                        numMayor =num2
                    }
                    else{
                        numMayor =num4
                    }
                }
                else{
                    if(num3>num4){
                        numMayor =num3
                    }
                    else{
                        numMayor =num4 
                    }
                }
            }
        }
        else{
            if(num2>num3){
                if(num2>num3){
                    numMayor=num2
                }
                else{
                    numMayor=num2
                }
            }
            else{
                if(num3>num4){
                    numMayor = num3
                }
                else{
                    numMayor = num4
                }
            }
        }
        console.log("La cantidad de numero pares es ",cantPar);
        console.log("El numero mayor es ", numMayor);
        if(num3 % 2 ==0){
            Cuadrado=num2^2
            console.log("El cuadrado del segundo es ", Cuadrado)
        }
        if(num1<num4){
            media=(num1+num2+num3+num4)/4
            console.log("La media de los 4 numeros es ", media)
        }
        if(num2>num3){
            if(num3>=50 && num3<=700){
                suma=num1+num2+num3+num4
                console.log("El numero mayor es ", numMayor)
                console.log("La suma de los 4 digitos es ", suma)
            }
            
        }
    }
    else{
        console.log("Los numeros no son positivos")
    }
}

//Ejercicio 21

function ejercicio21(){
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

//Ejercicio 22

function ejercicio22(){
    let sumatoria=0;
    const n = prompt("Ingrese el valor de n");

    for (let i=1; i<=n; i++){
        sumatoria=sumatoria+i;
    }
    alert(`La suma de los ${n} es: ${sumatoria}`);
}

//Ejercicio 23

function ejercicio23(){
    let suma=0;
    const n = prompt("Ingrese un numero" );
    for (let i=1; i<=n; i++){
        if(i%2 !=0){
            suma=suma+i;
        }
    }
    alert(`La suma de los numeros impares menores o iguales a ${n} es: ${suma}`);
}

//Ejercicio 24

function ejercicio24(){
    let suma=0;
    for (let i=1; i<=1000; i=i+1){
        if(i%2==0){
            suma=suma+1;
        }
    }
    alert(`La suma de todos los numeros pares hasta 1000 es: ${suma}`);
}

//Ejercicio 25

function ejercicio25(){
    let num, factorial, i;
    factorial=1;
    i=1;
    num= +prompt("Ingrese un numero:");
    while(i<=num){
        factorial=factorial*i;
        i=i+1;
    }
    alert(`El factorial de ${num} es ${factorial}`)
}

//Ejercicio 26

function ejercicio26(){
    let cociente, resto
    const div= prompt("Ingrese el dividendo: ");
    const divisor= prompt("Ingrese el divisor: ");
    cociente=0
    resto=div
    while(resto>=divisor){
        resto=resto-divisor
		cociente=cociente+1
    }
    if(divisor==0){
        console.log("No se puede dividir entre cero.")
    }
    console.log("El cociente es: ", cociente)
    console.log("El residuo es: ", resto)

}

//Ejercicio 27

function ejercicio27(){
    let num, suma, cont;
    cont=0;
    suma=0;
    do{
        num= +prompt("Ingrese un numero positivo: ");
        if(num>=0){
            suma=suma+num;
            cont++;
        }
    }
    while(num>0);
    if(cont>0){
        console.log("La media de los numeros ingresados es: ", suma/cont)
    }
    else{
        console.log("No se ingresaron numeros positivos")
    }
}

//Ejercicio 28

function ejercicio28(){
    let suma=0
    let i=1
    do{
        suma=suma+i;
        i++;
    }
    while(i<=100);
    alert(`La suma de todos los numeros pares hasta 100 es: ${suma}`);
}

//Ejercicio 29

function ejercicio29(){
    let suma=0
    let i=1
    while(i<=100){
        suma=suma+i;
        i++;
    }
    alert(`La suma de todos los numeros pares hasta 100 es: ${suma}`);
}

//Ejercicio 30

function ejercicio30(){
    let suma=0
    for(let i=1; i<=100; i++) {
        suma= suma + i;
    }
    alert(`La suma de todos los numeros pares hasta 100 es: ${suma}`);
}

//Ejercicio 31

function ejercicio31(){
    let  sumaPar, sumaImp, contI, contP, mediaImp, mediaPar, cont;
    sumaPar=0
	sumaImp=0
	contP=0
	contI=0
    cont=0
    while(cont<10){
        const num= prompt("Ingrese un numero positivo: ");
        if(num>0){
            if(num%2==0){
                sumaPar=sumaPar+num;
                contP++;
            }
            else{
                sumaImp=sumaImp+num;
                contI++;
            }
            cont++;
        }
        else{
            console.log("No se ingresaron numeros positivos")
        }
    }
    if(contP>0){
        mediaPar=sumaPar/contP
        console.log("La media de los pares es: ", mediaPar)
    }
    else{
        console.log("No hay numeros pares.")
    }
    if(contI>0){
        mediaImp=sumaImp/contI
        console.log("La media de los impares es: ", mediaImp)
    }
    else{
        console.log("No hay numeros impares.")
    }
}

//Ejercicio 32

function ejercicio32(){
    let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
    let poblacion, mayorPoblacion;
    let i;

    mayorPoblacion = 0;

    for (i = 1; i <= 3; i++) {
        nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}`);
        for (let j = 1; j <= 3; j++) {
            nombreCiudad = prompt(`Ingrese el nombre de la ciudad N: ${j} de la provincia ${nombreProvincia}`);

            poblacion = Math.floor(Math.random() * 1000) + 1;

            if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadMayorPoblacion = nombreCiudad;
            }
        }
    }
    console.log(`La ciudad con mayor poblacion es: ${ciudadMayorPoblacion} con una poblacion de ${mayorPoblacion}`);
}

//Ejercicio 33

function ejercicio33(){
    alert(`Ejecutando el programa...`);
    //continuar= alert(`¿Desea continuar? (s/n):?`);
    const continuar= prompt("¿Desea continuar? (s/n):?")
    while(continuar !== "s" && continuar!== "n"){
        continuar=prompt("Respuesta no valida. Por favor ingresa s para sí o n para no.")
    }
    if(continuar=='s'){
        alert(`Continuemos con nuestro recorrido...`);
    }
    else{
        alert(`Gracias por usar el programa. ¡Adiós!`)
    }
}

//Ejercicio 34

function ejercicio34(){
    let i, j, producto;
    for(i=1; i<=9; i++){
        console.log("Tabla del ", i)
        for(j=1; j<=10; j++){
            producto=i*j
            console.log(i, " x ",j," = ", producto)
        }

    }
}

//Ejercicio 35

function ejercicio35(){
    let mayor, menor;
    for(i=1; i<=20; i++){
        const num=prompt("Ingrese el numero ", i," : ")
        if(i==1){
            mayor=num;
            menor=num
        }
        else{
            if(num>mayor){
                mayor=num
            }
            if(num<menor){
                menor=num
            }
        }
    }
    console.log("El numero mayor es: ", mayor);
    console.log("El numero menor es: ", menor);
}

//Ejercicio 36

function ejercicio36(){
    let fib1=0
	let fib2=1
    let i, sig
    const n =prompt("Ingrese la cantidad de terminos de la serie de Fibonacci que desea calcular: ");
    if(n>0){
        console.log("Serie de Fibonacci: ")
        for(i=2; i<=n;i++){
            if(i==1){
                console.log(fib1)
            }
            else{
                if(i==2){
                    console.log(fib2)
                }
                else{
                    sig=fib1+fib2
					fib1=fib2
					fib2=sig
                    console.log(sig)
                }
            }
        }
    }
    else{
        console.log("Ingresar un numero mayor a cero.")
    }
}

//Ejercicio 37

function ejercicio37(){
    let num1 =prompt("Ingrese el primer numero: ")
    let num2 =prompt("Ingrese el segundo numero: ")
    
    while(num2!==0){
        let cop=num2;
        num2=num1 % num2;
        num1=cop;
    }
    console.log("El M.C.D es: " +num1)
}

//Ejercicio 38

function ejercicio38(){
    const num=prompt("Ingrese el numero entero positivo:")
    let suma= 0
    for(let i=1; i<=num/2; i++){
        if(num%1==0){
            suma=suma+i;
        }
    }
    if(suma==num){
        console.log("El numero ",num," es perfecto.")
    }
    else{
        console.log("El numero ",num, " NO es perfecto")
    }
}

//Ejercicio 39

function ejercicio39(){
    let pi, termino, n, signo, iteraciones
    pi=0
    n=1
    signo=1
    iteraciones=+prompt("Ingrese el numero de iteraciones")
    for(let i=1; i<=iteraciones; i++){
        termino=4/n;
        pi=pi+signo*termino;
        signo= signo*-1;
        n=n+2
    }
    alert(`La aproximacion de pi despues de  ${iteraciones} iteraciones es de: ${pi}`)
}

//Ejercicio 40

function ejercicio40(){
    let pi, termino, n, signo, iteraciones
    pi=3;
    n=2;
    signo=1;
    iteraciones=+prompt("Ingrese el numero de iteraciones");
    for (let i=1; i<=iteraciones; i++){
        termino=4/(n*(n+1)*(n+2));
        pi=pi+signo*termino;
        signo=signo*-1;
        n=n+2;
    }
    alert(`La aproximacion de pi despues de ${iteraciones} iteraciones es de: ${pi}`)
}



