function Ejercicio1() {
    var Numero=document.getElementById("TxtNro").value;
    let Estado="";
    if (Numero>99 && Numero<1000) {
        Estado="El número ingresado tiene 3 digitos";
    }else{
        Estado="El número ingresado no tiene 3 digitos";
    }
    document.getElementById("LblEjercicio1").innerText=Estado;
}

function Ejercicio2(){

    var num=document.getElementById("TxtNro02").value;
    let Estado="";
    if (num<0) {
        Estado="El número es negativo";
    }else{
        Estado="El número no es negativo";
    }
    document.getElementById("LblEjercicio2").innerText=Estado
}

function Ejercicio3(){

    var num=document.getElementById("TxtNro03").value;
    let Estado="";
    if (num % 10 == 4) {
        Estado="El número termina en 4";
    }else{
        Estado="El número no termina en 4";
    }
    document.getElementById("LblEjercicio3").innerText=Estado
}

function Ejercicio4() {
    let num1,num2,num3,aux;
    num1=parseInt(document.getElementById("TxtNroEjer041").value);
    num2=parseInt(document.getElementById("TxtNroEjer042").value);
    num3=parseInt(document.getElementById("TxtNroEjer043").value);
    if (num1>num2) {
        aux = num1
		num1 = num2
		num2 = aux
    }
    if (num1>num3) {
        aux = num1
        num1 = num3
        num3 = aux
    }
    if (num2>num3) {
        aux = num2
        num2 = num3
        num3 = aux
    }
    var DescOrd="Números ordenados de menor a mayor: " + num1+", " + num2+", " + num3;
    document.getElementById("LblEjercicio4").innerText=DescOrd;
}

function Ejercicio5() {
    
    let precio,cantZapa;
    let porcDsct,dscto;
    let totBru,total;
    precio=80
    porcDsct=0
    dscto=0
    cantZapa=parseInt(document.getElementById("TxtCantZapa").value);
    
    if (cantZapa>=10 && cantZapa<20) {
        porcDsct=0.10
    }else{
        if (cantZapa>=20 && cantZapa<30) {
            porcDsct=0.20
        } else{
            if (cantZapa>=30) {
               porcDsct=0.40 
            }
        }
    }
    totBru=precio*cantZapa;
    if (porcDsct>0) {
        dscto=totBru*porcDsct
    }else{
        dscto=0
    }

    total=totBru-dscto;

    document.getElementById("LblRptEje0501").innerText="Total Bruto: "+totBru;
    document.getElementById("LblRptEje0502").innerText="Descuento: "+dscto;
    document.getElementById("LblRptEje0503").innerText="Total Pagar: "+total;
}


function Ejercicio6() {
    
    let Horas=parseInt(document.getElementById("TxtCantHora").value);
    let HrExtras;
	let TotHr,TotHrExt,TotPg;

    HrExtras=Horas-40;

    if (HrExtras<=0) {
        TotHr=Horas*20
        TotHrExt=0
    }else{
        TotHr=(Horas-HrExtras)*20
        TotHrExt=HrExtras*25
    }

    TotPg=TotHr+TotHrExt;

    document.getElementById("LblRptEje0601").innerText="Total pago horas laborables * $20: "+TotHr;
    document.getElementById("LblRptEje0602").innerText="Total pago horas extras * $25: "+TotHrExt;
    document.getElementById("LblRptEje0603").innerText="Total pago final a la semana: "+TotPg;
}

function Ejercicio7() {

    PrecHelado=parseFloat(document.getElementById("TxtPrecioEje0701").value);
    CantHelado=parseInt(document.getElementById("TxCantEje0702").value);
	TipMembre=document.getElementById("TxtTipoMembre").value;
    TipMembre=TipMembre.toUpperCase();
    Est="A";
    TotDesc=0;

    switch (TipMembre) {
        case "A":
            TotDesc=(PrecHelado*CantHelado)*0.10
            break;
        case "B":
            TotDesc=(PrecHelado*CantHelado)*0.15
            break;
        case "C":
            TotDesc=(PrecHelado*CantHelado)*0.20
            break;
        default:
            Est="C"
            break;
    }
    if (Est =="C" ) {
        alert("Tipo de membresia incorrecto")
    }else{
        TotPagar=(PrecHelado*CantHelado)-TotDesc
        document.getElementById("LblRptEje07").innerText="Total a pagar del cliente: "+TotPagar;
    }
}


function Ejercicio8() {

    not01=parseInt(document.getElementById("TxtNroEjer081").value);
    not02=parseInt(document.getElementById("TxtNroEjer082").value);
    not03=parseInt(document.getElementById("TxtNroEjer083").value);

    TotNota=not01+not02+not03;
    Promedio=TotNota/3;
    EstAlum="";
    if (Promedio<=11) {
        EstAlum="El alumno esta desaprobado"
    }else{
        EstAlum="El alumno esta aprobado"
    }

    document.getElementById("LblEjercicio8").innerText="Promedio del alumno: " + Promedio + ", " +EstAlum;
}

function Ejercicio9() {
    Suel=parseInt(document.getElementById("TxtEjer09").value);
    Aumento=0;
    TotAumen=0;
    if (Suel>2000) {
        Aumento=5
    }else{
        Aumento=10
    }

    TotAumen=Suel+(Suel*(Aumento/100))

    document.getElementById("LblEjercicio9").innerText="El aumento del empleado sera %: " + Aumento + ", El nuevo sueldo seria: " + TotAumen; 
}

function Ejercicio10(){
    Numer=parseInt(document.getElementById("TxtEjer10").value);
    Dif=0

    Dif=Numer % 2 

    if (Dif != 0) {
        document.getElementById("LblEjercicio10").innerText="El número es impar";
    }else{
        document.getElementById("LblEjercicio10").innerText="El número es par";
    }

}

function Ejercicio11() {
    let NroMayor;

    NumPrime=parseInt(document.getElementById("TxtNroEjer0111").value);
    NumSegun=parseInt(document.getElementById("TxtNroEjer0112").value);
    NumTerce=parseInt(document.getElementById("TxtNroEjer0113").value);

    NroMayor=NumPrime;

    if (NumSegun>NroMayor) {
        NroMayor=NumSegun;
    }

    if (NumTerce>NroMayor) {
        NroMayor=NumTerce;
    }

    document.getElementById("LblEjercicio11").innerText="El numero mayor es: " + NroMayor;
}



function Ejercicio12() {
    let NroMayor;

    NumPrime=parseInt(document.getElementById("TxtNroEjer0121").value);
    NumSegun=parseInt(document.getElementById("TxtNroEjer0122").value);
   
    NroMayor=NumPrime;

    if (NumSegun>NroMayor) {
        NroMayor=NumSegun;
    }
    document.getElementById("LblEjercicio12").innerText="El numero mayor es: " + NroMayor;
}


function Ejercicio13() {

    Letra=document.getElementById("TxtNroEjer013").value;
    Letra=Letra.toUpperCase();
    Esta="";
    switch (Letra) {
        case "A":
            Esta="La letra ingresada es una vocal";
            break;
        case "E":
            Esta="La letra ingresada es una vocal";
            break;
        case "I":
            Esta="La letra ingresada es una vocal";
            break; 
        case "O":
            Esta="La letra ingresada es una vocal";
            break;
        case "U":
            Esta="La letra ingresada es una vocal";
            break;           
        default:
            Esta="La letra ingresada no es una vocal";
            break;
    }

    document.getElementById("LblEjercicio13").innerText=Esta;
}

function Ejercicio14(){

    NroIngr=parseInt(document.getElementById("TxtNroEjer014").value);
    if (NroIngr>=1 && NroIngr<=10) {
        var VeriPrimo=true;

        if (NroIngr==1) {
            VeriPrimo=false
        }else{
            for (let index = 2; index < NroIngr-1; index++) {
                if (NroIngr % index == 0) {
                    VeriPrimo=false
                }
            }
        }

        if (VeriPrimo == true) {
            document.getElementById("LblEjercicio14").innerText="El número es primo";
        }else{
            document.getElementById("LblEjercicio14").innerText="El número no es primo";
        }
    }else{
        document.getElementById("LblEjercicio14").innerText="El número ingresado debe estar entre 1 y 10";
    }
}

function Ejercicio15() {
    Centimetros=parseInt(document.getElementById("TxtCentEjer15").value);
    Libras=parseInt(document.getElementById("TxtLibraEjer15").value);
    
    pulgada=Centimetros/2.54;
    kilogra=Libras*0.453592

    document.getElementById("LblCentEjer15").innerText=pulgada.toFixed(2);
    document.getElementById("LblLibraEjer15").innerText=kilogra.toFixed(2);

}

function Ejercicio16() {
    
    NroDia=parseInt(document.getElementById("TxtCentEjer16").value);
    DiaSema=""
    switch (NroDia) {
        case 1:
            DiaSema="Corresponde al día lunes"
            break;
        case 2:
            DiaSema="Corresponde al día martes"
            break;
        case 3:
            DiaSema="Corresponde al día miercoles"
            break;
        case 4:
            DiaSema="Corresponde al día jueves"
            break;
        case 5:
            DiaSema="Corresponde al día viernes"
            break;
        case 6:
            DiaSema="Corresponde al día sabado"
            break;
        case 7:
            DiaSema="Corresponde al día domingo"
            break;      
        default:
            DiaSema="Número ingresado no valido"
            break;
    }

    document.getElementById("LblCentEjer16").innerText=DiaSema;

}

function Ejercicio17() {
    let Horas,Minutos,Segundos;
    let hormar,minumar,segumar;
    Horas=parseInt(document.getElementById("TxtHoraEjer17").value);
    Minutos=parseInt(document.getElementById("TxtMinuEjer17").value);
    Segundos=parseInt(document.getElementById("TxtSegunEjer17").value);

    Segundos=Segundos+1

    if (Segundos==60) {
        Segundos=0
        Minutos=Minutos+1
    }

    if (Minutos==60) {
        Minutos=0
        Horas=Horas+1
    }

    if (Horas==24) {
        Horas=0
    }

    segumar=Segundos.toString();
    minumar=Minutos.toString();
    hormar=Horas.toString();

    if (segumar.length==1) {
        segumar="0"+segumar
    }
    if (minumar.length==1) {
        minumar="0"+minumar
    }
    if (hormar.length==1) {
        hormar="0"+hormar
    }

    document.getElementById("LblHoraEjer17").innerText="La hora dentro de un segundo sera: "+hormar+":"+minumar+":"+ segumar

}

function Ejercicio18() {  
    CantVta=parseInt(document.getElementById("TxtCompraEjerc18").value)
    PrecVta=0
    if (CantVta<10) {
        PrecVta=10
    }

    if (CantVta>=10 && CantVta<100) {
        PrecVta=8
    }

    if (CantVta>=100 && CantVta<500) {
        PrecVta=7
    }  

    if (CantVta>=500) {
        PrecVta=6
    }  
    
    TotVta=CantVta*PrecVta;
    GanVend=TotVta*0.0825

    document.getElementById("LblEjercicio1801").innerText="El precio de venta es $: " + PrecVta;
    document.getElementById("LblEjercicio1802").innerText="El total de la venta es $: " + TotVta;
    document.getElementById("LblEjercicio1803").innerText="La ganancia del vendedor es $: " + GanVend;
}

function Ejercicio19() {
    
    CodEmple=document.getElementById("TxtCodiEmple19").value
    CantDia=parseInt(document.getElementById("TxtDiaTrabajado").value)
    VeriEst=true
    SuelxDia=0
    switch (CodEmple) {
        case "10":
            SuelxDia=56
            break;
        case "11":
            SuelxDia=64
            break;
        case "12":
            SuelxDia=80
            break;
        case "13":
            SuelxDia=48
            break; 
        default:
            VeriEst=false
            break;
    }

    if (VeriEst==true) {
        if (CantDia<=6) {
             document.getElementById("LblEjercicio19").innerText="El pago semanal del empleado es: "+ (SuelxDia * CantDia)	
        }else{
            document.getElementById("LblEjercicio19").innerText="El numero de dias trabajados debe ser menor a 7"
        }
    }else{
        document.getElementById("LblEjercicio19").innerText="El codigo del empleado es incorrecto"
    
    }

}

function Ejercicio20() {
    
    NumPrime=parseInt(document.getElementById("TxtNroEjer0201").value);
    NumSegun=parseInt(document.getElementById("TxtNroEjer0202").value);
    NumTerce=parseInt(document.getElementById("TxtNroEjer0203").value);
    NumCuart=parseInt(document.getElementById("TxtNroEjer0204").value);

    VeriPosi=true;
    Respt="";

    if (NumPrime<0) {
        VeriPosi=false
    }
    if (NumSegun<0) {
        VeriPosi=false
    }
    if (NumTerce<0) {
        VeriPosi=false
    }
    if (NumCuart<0) {
        VeriPosi=false
    }

    if (VeriPosi==true) {
        NroPares=0

        if (NumPrime % 2 == 0 ) {
            NroPares= NroPares+1
        }
        if (NumSegun % 2 == 0 ) {
            NroPares= NroPares+1
        }
        if (NumTerce % 2 == 0 ) {
            NroPares= NroPares+1
        }
        if (NumCuart % 2 == 0 ) {
            NroPares= NroPares+1
        }

        NumMay=NumPrime

        if (NumMay<NumSegun) {
            NumMay=NumSegun
        }
        if (NumMay<NumTerce) {
            NumMay=NumTerce
        }
        if (NumMay<NumCuart) {
            NumMay=NumCuart
        }
    
        document.getElementById("LblEjercicio201").innerText="La cantidad de numeros pares es: " + NroPares ;
        document.getElementById("LblEjercicio202").innerText="El número mayor es: " + NumMay;
        if (NumTerce % 2 == 0) {
            CuadSegun = NumSegun * NumSegun
            document.getElementById("LblEjercicio203").innerText="El cuadrado del segundo número es: " + CuadSegun
        }

        if (NumPrime<NumCuart) {
            MediNume=(NumPrime + NumSegun + NumTerce + NumCuart)/4
            document.getElementById("LblEjercicio204").innerText="La media de los 4 números es: " + MediNume
        }

        if (NumSegun>NumTerce) {
            if (NumTerce>=50 && NumTerce<=700) {
                SumNumer=(NumPrime + NumSegun + NumTerce + NumCuart);
                document.getElementById("LblEjercicio205").innerText="La suma de los 4 números es: " + SumNumer;
            }
        }

    }else{
        alert("Ejercicio 20: Todos los numeros deben ser positivos")
    } 
}

function Ejercicio21() {
    
    NumIngre=parseInt(document.getElementById("TxtNroEjer021").value);
    Respt="";

    if (NumIngre<0) {
        Respt="El numero debe ser no negativo."
    }else{
        FactTotal=1

        for (let index = 1; index <= NumIngre ; index++){
            FactTotal=FactTotal * index
        }
        Respt="El factorial de "+ NumIngre+ " es: "+ FactTotal
        document.getElementById("LblEjercicio21").innerText=Respt;

    }
}



function Ejercicio22() {
    
    NumeReco=parseInt(document.getElementById("TxtNroEjer022").value);
    Respt="";

    if (NumeReco<0) {
        Respt="Numero ingresado debe ser mayor a 0"
    }else{
        TotSuma=0

        for (let index = 0; index <= NumeReco ; index++){
            TotSuma=TotSuma + index
        }
        Respt="La suma de los numero es: "+ TotSuma
        document.getElementById("LblEjercicio22").innerText=Respt;

    }
}



function Ejercicio23() {
    
    NumeReco=parseInt(document.getElementById("TxtNroEjer023").value);
    Respt="";

    if (NumeReco<0) {
        Respt="Numero ingresado debe ser mayor a 0"
    }else{
        TotSuma=0

        for (let index = 1; index <= NumeReco ; index++){
            if (index % 2 != 0) {
                TotSuma=TotSuma+index
            }
        }
        Respt="La suma de los numero impares es: "+ TotSuma
        document.getElementById("LblEjercicio23").innerText=Respt;

    }
}


function Ejercicio24() {
    SumPar=0
    for (let index = 0; index <= 1000 ; index++){
        if (index % 2 == 0) {
            SumPar=SumPar+index
        }
    }
    document.getElementById("LblEjercicio24").innerText="Sumar numeros pares hasta 1000: "+SumPar;
}


function Ejercicio25(){
    NumIngre=parseInt(document.getElementById("TxtNroEjer025").value);
    Respt="";

    if (NumIngre<0) {
        Respt="El numero debe ser no negativo."
    }else{
        FactTotal=1
        cont=1

        while (cont<=NumIngre) {
            FactTotal=FactTotal*cont
            cont++;
        }

        Respt="El factorial de "+ NumIngre+ " es: "+ FactTotal
        document.getElementById("LblEjercicio25").innerText=Respt;

    }
}

function Ejercicio26() {

    NroDividendo=parseInt(document.getElementById("TxtNroEjer0261").value);
    NroDivisor=parseInt(document.getElementById("TxtNroEjer0262").value);

    if (NroDivisor==0) {
        alert("Ejercicio 26: El divisor no puede ser cero");
    }else{
        NroCocien=0
        NroResto=NroDividendo

        while (NroResto>=NroDivisor) {
            NroResto=NroResto - NroDivisor
            NroCocien++;
        }

        document.getElementById("LblEjercicio261").innerText="El cociente es: "+ NroCocien;
        document.getElementById("LblEjercicio262").innerText="El Resto es: "+ NroResto;
    }
}


function Ejercicio27() {
    
    let NroIngre,SumNro;
    Conta=0
    SumNro=0
    do {
        NroIngre=parseInt((prompt("Ingrese numeros, para terminar el ingreso, coloque un numero negativo")));
        if (NroIngre>0) {
            Conta++;
            SumNro=SumNro+NroIngre
        }

    } while (NroIngre>=0);
    if (Conta<=0) {
        document.getElementById("LblEjercicio27").innerText="No se han ingresado numeros positivos"
    }else{
        MedSum=SumNro/Conta
        document.getElementById("LblEjercicio27").innerText= "La media de los numeros ingresados es: " + MedSum
    }

}

function Ejercicio28() {
    Conta=0
    SumNume=0

    do {
        Conta++
        SumNume=SumNume+Conta
    } while (Conta<100);

    document.getElementById("LblEjercicio28").innerText= "La suma de los numeros hasta 100 es: "+ SumNume

}


function Ejercicio29() {
    Conta=0
    SumNume=0

    while (Conta<100) {
        Conta++
        SumNume=SumNume+Conta
    }

    document.getElementById("LblEjercicio29").innerText= "La suma de los numeros hasta 100 es: "+ SumNume
}


function Ejercicio30() {
    SumNume=0

    for (let index = 1; index <= 100; index++) {
        SumNume=SumNume+index
        
    }
    document.getElementById("LblEjercicio30").innerText= "La suma de los numeros hasta 100 es: "+ SumNume
}

function Ejercicio31(){
    let CantPart,CantImp,SumPar,SumImp;
    CantPart=0
    CantImp=0
    SumPar=0
    SumImp=0
    for (let index = 0; index < 10; index++) {
        NroIng=parseInt(prompt("Ingrese valor de Nro "+ index));
        
        if (NroIng % 2 ==0) {
            CantPart=CantPart+1
			SumPar=SumPar+NroIng
        }
        if (NroIng % 2 != 0) {
            CantImp=CantImp+1
			SumImp=SumImp+NroIng
        }  
    }

    if (CantPart==0) {
        document.getElementById("LblEjercicio311").innerText= "No se han ingresado numeros pares"
    }else{
        document.getElementById("LblEjercicio311").innerText= "La media de los numero pares es: " + SumPar/CantPart
    }

    if (CantImp==0) {
        document.getElementById("LblEjercicio312").innerText= "No se han ingresado numeros impares"
    }else{
        document.getElementById("LblEjercicio312").innerText= "La media de los numero impares es: " + SumImp/CantImp
    }
}

function Ejercicio32() {
    let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
    let poblacion, mayorPoblacion = 0;
    
    for (let i = 1; i <= 3; i++) {
        nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}:`);
        
        for (let j = 1; j <= 4; j++) {
            nombreCiudad = prompt(`Ingrese el nombre de la ciudad ${j} de la provincia ${nombreProvincia}:`);
            poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${nombreCiudad}:`), 10);
            
            if (poblacion > mayorPoblacion) {
                mayorPoblacion = poblacion;
                ciudadMayorPoblacion = nombreCiudad;
            }
        }
    }
    
    document.getElementById("LblEjercicio32").innerText=`La ciudad con mayor población es: ${ciudadMayorPoblacion} con una población de ${mayorPoblacion}`;
}

function Ejercicio33(){
    
    UsuActi=true
    document.getElementById("LblEjercicio33").innerText="";
    while (UsuActi==true) {
        Resp=prompt("Desea continuar en el programa? S/N:");
        Resp=Resp.toString().toUpperCase();

        if (Resp != "S" && Resp != "N") {
            alert("Opcion ingresada es incorrecta");
        }else{
            if (Resp == "N") {
                document.getElementById("LblEjercicio33").innerText="Programa cerrado"
                UsuActi=false;
            }            
        }
        
    }

}

function Ejercicio34(){

    PrimNro=1;
    SegunNro=1;
    Resp="";
    do {
        do {
            Resp += PrimNro + " x " + SegunNro + " = " + PrimNro*SegunNro + "\n";
            SegunNro++;
        } while (SegunNro<=12);
        SegunNro=1;
        PrimNro++;
        Resp += "\n";
    } while (PrimNro<=9);


    document.getElementById("LblEjercicio34").innerText=Resp;
}

function Ejercicio35() {
    
    MayorIng=-999999;
    MenorIng=999999;
    
    for (let index = 1; index <= 20; index++) {
        Numer=parseInt(prompt("Ingrese valor Nro: " + index));

        if (Numer>MayorIng) {
            MayorIng=Numer;
        }

        if (Numer<MenorIng) {
            MenorIng=Numer;
        }
    }
    document.getElementById("LblEjercicio35").innerText="El numero mayor es " + MayorIng + "\n" + "El numero menor es: " + MenorIng;
}

function Ejercicio36() {

    n=document.getElementById("TxtNroEjer36").value;

    if (n <= 0 ) {
        document.getElementById("LblEjercicio36").innerText="El numero de terminos debe ser mayor que 0.";
    }else{

       fib1=0
       fib2=1
       Resp="Serie Fibonacci: \n";
       if (n >=1) {
        Resp += fib1 + "\n";
       }

       if (n >=2) {
        Resp += fib2 + "\n";
       }


       for (let index = 3; index < n ; index++) {
        fibSiguiente=fib1+fib2;
        Resp += fibSiguiente + "\n";
        fib1=fib2;
        fib2=fibSiguiente;
       }

       document.getElementById("LblEjercicio36").innerText=Resp;
    }
}

function Ejercicio37() {
    
    a=parseInt(document.getElementById("TxtNroEjer371").value);
    b=parseInt(document.getElementById("TxtNroEjer371").value);

    residuo=1;

    if (a>b) {
        while (residuo != 0) {
            residuo= a % b
            a = b
            b = residuo
        }
        document.getElementById("LblEjercicio37").innerText="El maximo comun divisor es:" + a;

    }else{
        if (b > a) {
            while (residuo != 0) {
                residuo = b % a
                b = a
                a = residuo
            }

            document.getElementById("LblEjercicio37").innerText="El maximo comun divisor es:" + b;
        }else{
            document.getElementById("LblEjercicio37").innerText="El maximo comun divisor es:" + a;
        }
    }
}

function Ejercicio38() {

    num=parseInt(document.getElementById("TxtNroEjer38").value);
    sum=0

    for (let index = 1; index < num-1; index++) {
        if (num % index == 0) {
            sum=sum+index
        }
    }

    if (num == sum) {
        document.getElementById("LblEjercicio38").innerText=num + " es un numero perfecto";
    }else{
        document.getElementById("LblEjercicio38").innerText=num + " no es un numero perfecto";
    }
}


function Ejercicio39() {
    
    iter=parseInt(document.getElementById("TxtNroEjer39").value);
    pi_value=0

    for (let index = 0; index < iter; index++) {
        pi_value += Math.pow(-1, index) * (4 / (2 * index + 1));
    }

    document.getElementById("LblEjercicio39").innerText="El valor aproximado de pi es: "+ pi_value
}


function Ejercicio40() {
    
    iter=parseInt(document.getElementById("TxtNroEjer40").value);
    parcial_pi=0

    for (let index = 1; index <= iter; index++) {
        parcial_pi += Math.pow(-1, index + 1) * (4 / ((2 * index) * (2 * index + 1) * (2 * index + 2)));
    }

    pi_value=3 + parcial_pi;
    document.getElementById("LblEjercicio40").innerText="El valor aproximado de pi es: "+ pi_value;
}

