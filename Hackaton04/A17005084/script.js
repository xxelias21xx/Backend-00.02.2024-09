
function Ejercicio01(NroSuma01,NroSuma02) {
    return NroSuma01+NroSuma02;
}

document.getElementById("BtnSumar01").addEventListener('click',(e)=>{
    e.preventDefault();
    let suma1,suma2;
    suma1=parseInt($("#TxtNro01").val());
    suma2=parseInt($("#TxtNro02").val());
    let Resultado=Ejercicio01(suma1,suma2);
    $("#TxtResultado").val(Resultado);
})

function Ejercicio02(NroPotencia,NroPotenciador){
    ResulPoten=Math.pow(NroPotencia,NroPotenciador);
    return ResulPoten;
}

function IngreNroEjer03(CantNro){
    Cont=0;
    ResulPoten=0
    $("#LblResul03").val("");
    while (Cont<CantNro) {
        NroIngre=parseInt(prompt("Ingrese Numero"));
        ResulPoten=ResulPoten + Math.pow(NroIngre,3)
        Cont++;
    }
    return " = La suma de sus potencias cubos es: " +ResulPoten;
}

const AreaTriang04=(Base,Altura)=>{
    if (!Base) return "Medida de base invalido";
    if (!Altura) return "Medida de altura invalido";
    Area=(Base * Altura)/2;
    return Area;
}

const calculator05 =(valor1,operacion,valor2)=>{
    if (!valor1) return "primer valor invalido";
    if (!valor2) return "segundo valor invalida";
    
    switch(operacion){
        case "+":
            return valor1+valor2;
        case "-":
            return valor1-valor2;
        case "*":
            return valor1 * valor2; 
        case "/":
            return valor1 / valor2; 
        case "%":
            return valor1 % valor2;   
        default:
            return "El parámetro no es reconocido"

    }
}

const Concatenar06=(Nombre,Apellido,Edad)=>{
    if (!Nombre) return "Nombre no valido";
    if (!Apellido) return "Apellido no valido";
    if (!Edad) return "Edad no valido";

    DatCon="Hola mi nombre es "+ Nombre+" " +  Apellido+" y mi edad " + Edad;
    return DatCon;
}

const SumaPotenciaCubo07=(CantNro07)=>{
    Cont7=0;
    ResulPoten07=0
    while (Cont7<CantNro07) {
        NroIngre07=parseInt(prompt("Ingrese Numero"));
        ResulPoten07=ResulPoten07 + Math.pow(NroIngre07,3)
        Cont7++;
    }
    return ResulPoten07;
}


const TipoDatoEjerc08=()=>{
    DatoIng=(prompt("Ingrese dato"))
    return typeof DatoIng;}



const SumatoNumero09 = (...rest) => {
    return rest.reduce((acumulador, numero) => acumulador + numero, 0);
}

const CadenaString10=(CadeArray) => {
    return CadeArray.filter(valor =>{
        const VerNum = Number(valor);
        return isNaN(VerNum) && valor.trim() != '';
    });
}

const minMaxSimple11 = (matriz) => {
    
    let max = 0;
    let min = 9999999;
  
    for (let i = 0; i < matriz.length; i++) {
      if (max < matriz[i]) {
        max = matriz[i];
      }
      if (min > matriz[i]) {
        min = matriz[i];
      }
    }
    return [max, min];
  };


  const formartPhoneNumber12 = (numero = []) => {
    if (numero.length != 10) {
      return "numero invalido";
    }
  
    let part1 = numero.slice(0, 3);
    part1 = part1.join("");
  
    let part2 = numero.slice(3, 6).join("");
    let part3 = numero.slice(6, 10).join("");
  
    return `(${part1}) ${part2}-${part3}`;
  };


  const NumeroMatri13=(MatrizMay) => {
    return MatrizMay.map(submatriz => Math.max(...submatriz));
  }



  const charIndex14 = (palabra = "", caracter = "") => {
    let primerCaracterIndex = palabra.indexOf(caracter);
    let ultimoCaracterIndex = palabra.lastIndexOf(caracter);
  
    return [primerCaracterIndex, ultimoCaracterIndex];
  };

  const MatrArray15=()=>{
    const Dato15={
        a:1,
        b:2
    }
    console.log(Dato15);
    return Object.entries(Dato15);
  }

  let ArraPresu16=[];

  function AddArraPresi16(Nombre16,Edad16,Presupuesto16){
    let ArraPresu={
        name : Nombre16,
        age : Edad16,
        budget : Presupuesto16
    }
    ArraPresu16.push(ArraPresu)
    $("#TxtNombre16").val('');
    $("#TxtEdad16").val('');
    $("#TxtPresu16").val('');
  }

  const SumaPresupues16 = (ArrPresu16) => {
    return ArrPresu16.reduce((acumulador, presupues16) => acumulador + presupues16.budget, 0);
}

let NomStudent=[];

const DatNombreArr17=(NomEst17) => {
    NomStudent.push({name : NomEst17});
    console.log(NomStudent);
    return NomStudent.map(Alumno => Alumno.name);
}

const ConverObjet=()=>{
    let objectToArray={
        likes: 2,
        dislikes: 3,
        followers: 10
    }

    return Object.entries(objectToArray);
}


const SumaPotenciCuadrad19=(NroLimi)=>{
    let Cont19=1
    let Result19=0
    while (Cont19<=NroLimi) {
        Result19=Result19 + Math.pow(Cont19,2);
        Cont19++;
    }
    return Result19;
}

const MultiObjet20=(ArraMul)=>{
    console.log(ArraMul);
    let CantArr=ArraMul.length;
    return ArraMul.map(M => M * CantArr);
}

const ObjDesc21=(NroDesc)=>{
    let ArrObjDesc=[];
    let NroDesc21=NroDesc;
    while (NroDesc21>0) {
        ArrObjDesc.push(NroDesc21)
        NroDesc21--;
    }
    return ArrObjDesc;
}



const diffMaxMin = (matriz21) => {
    
    let max = 0;
    let min = 9999999;
  
    for (let i = 0; i < matriz21.length; i++) {
      if (max < matriz21[i]) {
        max = matriz21[i];
      }
      if (min > matriz21[i]) {
        min = matriz21[i];
      }
    }

    let difere21=max-min;
    return difere21;
  };


  const CadenaNumerica23=(CadeArray23) => {
    return CadeArray23.filter(valor =>{
        const VerNum = Number(valor);
        return !isNaN(VerNum) && valor.trim() !== '';
    });
}


const NroRepetir24=(Elemento,Tiempo)=>{
    let Repeti24=[];
    let NroDesc24=Tiempo;

    while (NroDesc24>0) {
        Repeti24.push(Elemento)
        NroDesc24--;
    }
    return Repeti24;
}

const vreplace=(Cadena,Caracter)=>{
    return Cadena.replaceAll(/[aeiou]/gi,Caracter);
}

const FilCadena=(Cadena,CadenaFilt)=>{
    let NroPal= Cadena.split(' ');

    let UbiCad=NroPal.indexOf(CadenaFilt);

    if (UbiCad != -1) {
        return `¡Encontré a ${CadenaFilt} en ${UbiCad + 1}!`
    }else{
        return `No se encontro ${CadenaFilt}`;
    }

}


const ConverUlti=(Cadena27)=> {
    return Cadena27.split(' ').map(word => {
        if (word.length === 0) return word; 
        const UltCara = word.charAt(word.length - 1).toUpperCase();
        return word.slice(0, -1) + UltCara; 
    }).join(' '); 
}

$(document).ready(function(){
    $("#BtnPotencia01").click(function(){
        var Potencia=parseFloat($("#TxtPotencia01").val());
        var Potenciador=parseFloat($("#TxtPotenciador02").val());
        Result=Ejercicio02(Potencia,Potenciador);

        $("#TxtResultPot").val(Result);
    })

    $("#BtnAgrega03").click(function(){
        var CantIngre03=parseFloat($("#TxtCantNumero").val());
        PotenEje03=IngreNroEjer03(CantIngre03)
        console.log(PotenEje03);
        $("#LblResul03").text(PotenEje03);
    })


    $("#BtnArea04").click(function(){
        var TxtBase=parseFloat($("#TxtBase").val());
        var TxtAltura=parseFloat($("#TxtAltura").val());
        var CalArea=AreaTriang04(TxtBase,TxtAltura);
        $("#TxtArea").val(CalArea);

    })


    $("#BtnCalcular05").click(function(){
        var PrimerNro=parseFloat($("#TxtPrimNro05").val());
        var SegundoNro=parseFloat($("#TxtSegunNro05").val());
        var Operacion=$("#TxtOpera05").val();
        var Calcu= calculator05(PrimerNro,Operacion,SegundoNro);

        $("#LblResul05").text( " = " + Calcu);

    })


    $("#BtnConcatenar06").click(function(){
        var DatNom=$("#TxtNombre06").val();
        var DatApe=$("#TxtApellido06").val();
        var DatEdad=$("#TxtEdad06").val();
        var DatosIng= Concatenar06(DatNom,DatApe,DatEdad);

        $("#LblResul06").text(DatosIng);

    })



    $("#BtnAgrega07").click(function(){
        var CantIngre07=parseInt($("#TxtCantNumero07").val());
        PotenEje07=SumaPotenciaCubo07(CantIngre07)
        $("#LblResul07").text(PotenEje07);
    })


    $("#BtnAgrega8").click(function(){
        var DatIng08=$("#TxtTipoDato08").val();
        TipDatResult=TipoDatoEjerc08();
        $("#LblResul08").text(TipDatResult);
    })


    $("#BtnAgrega9").click(function(){
        var DatIng09=$("#TxtIngrNumero09").val().split(',').map(Number);
        TipDatResult09=SumatoNumero09(...DatIng09);
        $("#LblResul09").text(TipDatResult09);
    })


    $("#BtnAgrega10").click(function(){
        const DatIng10=$("#TxtIngrCadena10").val().split(',').map(valor => valor.trim());
        TipDatResult10=CadenaString10(DatIng10);
        $("#LblResul10").text(TipDatResult10);
    })



    $("#BtnAgrega11").click(function(){
        var DatIng11=$("#TxtIngrCadena11").val().split(',').map(Number);
        TipDatResult11=minMaxSimple11(DatIng11);
        $("#LblResul11").text(TipDatResult11);
    })


    $("#BtnAgrega12").click(function(){
        var DatIng12=$("#TxtIngrCadena12").val().split(',').map(Number);
        TipDatResult12=formartPhoneNumber12(DatIng12);
        $("#LblResul12").text(TipDatResult12);
    })


    $("#BtnAgrega13").click(function(){
        var DatIng13=$("#TxtIngrCadena13").val().split(';').map(SecunMatri => SecunMatri.split(",").map(Number));
        TipDatResult13=NumeroMatri13(DatIng13);
        $("#LblResul13").text(TipDatResult13);
    })

    $("#BtnAgrega14").click(function(){
        var Cadena=$("#TxtIngrCadena14").val();
        var Caracter=$("#TxtIngrCaracter14").val();
        DatIndex=charIndex14(Cadena,Caracter);
        $("#LblResul14").text(DatIndex);
    })



    $("#BtnAgrega15").click(function(){
        DatIndex=MatrArray15();
        console.log(DatIndex);
        $("#LblResul15").text(DatIndex);
    })

    $("#BtnAgrega16").click(function(){
        var Vnombre16=$("#TxtNombre16").val();
        var Vedad16=parseInt($("#TxtEdad16").val());
        var Vpresupuesto16=parseFloat($("#TxtPresu16").val());
        AddArraPresi16(Vnombre16,Vedad16,Vpresupuesto16);
        console.log(ArraPresu16);
    })

    $("#BtnCalcPresu16").click(function(){
        let SumPresu16 = SumaPresupues16(ArraPresu16);
        console.log(SumPresu16);
        $("#LblResul16").text( "= La suma del presupuesto es: " + SumPresu16);
    })


    $("#BtnAgrega17").click(function(){
        var NomAlum17 = $("#TxtIngrCadena17").val();
        let InfoAlumn17=DatNombreArr17(NomAlum17);
        console.log(InfoAlumn17);
        $("#LblResul17").text(InfoAlumn17);
    })


    $("#BtnConvert18").click(function(){
        var ObjeConver = ConverObjet();
        console.log(ObjeConver);
        $("#TxtIngrCadena18").val(ObjeConver);
    })


    $("#BtnCalcular19").click(function(){
        var NroLimit19 = $("#TxtIngrCadena19").val();
        let SumPot19=SumaPotenciCuadrad19(NroLimit19);
        console.log(SumPot19);
        $("#LblResul19").text(SumPot19);
    })



    $("#BtnCalcular20").click(function(){
        let ArrNroMul20 = $("#TxtNroObj20").val().split(',').map(Number);
        let SumPot20=MultiObjet20(ArrNroMul20);
        console.log(SumPot20);
        $("#LblResul20").text(SumPot20);
    })



    $("#BtnCalcular21").click(function(){
        let NroIniDesc21 = $("#TxtNumeDesc21").val();
        let DescObj21=ObjDesc21(NroIniDesc21);
        console.log(DescObj21);
        $("#LblResul21").text(DescObj21);
    })



    $("#BtnCalcular22").click(function(){
        let ArrNroDif22 = $("#TxtNroObj22").val().split(',').map(Number);
        let SumaDife=diffMaxMin(ArrNroDif22);
        console.log(SumaDife);
        $("#LblResul22").text(SumaDife);
    })


    $("#BtnCalcular23").click(function(){
        const DatIng23=$("#TxtNroObj23").val().split(',').map(valor => valor.trim());
        console.log(DatIng23);
        TipDatResult23=CadenaNumerica23(DatIng23);
        console.log(TipDatResult23);
        $("#LblResul23").text(TipDatResult23);
    })


    $("#BtnRepeti24").click(function(){
        let NroElemento24=$("#TxtElementoj24").val();
        let NroTiempo24=$("#TxtTiempo24").val();
        
        var NroEleRep=NroRepetir24(NroElemento24,NroTiempo24);
        console.log(NroEleRep);
        $("#LblResul24").text(NroEleRep);
    })


    $("#BtnRepeti25").click(function(){
        let Cadena25=$("#TxtCadena25").val();
        let Caracter25=$("#TxtCaracter25").val();
        
        var CadeRepla=vreplace(Cadena25,Caracter25);
        console.log(CadeRepla);
        $("#LblResul25").text(CadeRepla);
    })


    $("#BtnRepeti26").click(function(){
        let Cadena26=$("#TxtCadena26").val();
        let Caracter26=$("#TxtCaracter26").val();
        
        var CadeRepla26=FilCadena(Cadena26,Caracter26);
        console.log(CadeRepla26);
        $("#LblResul26").text(CadeRepla26);
    })




    $("#BtnRepeti27").click(function(){
        let Cadena27=$("#TxtCadena27").val();
        
        var CadeRepla27=ConverUlti(Cadena27);
        console.log(CadeRepla27);
        $("#LblResul27").text(CadeRepla27);
    })
})

