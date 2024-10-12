let contador = 0;
function ejercicio1() {
    /**
     *  1. **Crear un contador simple:**  
   Crea una función que incremente un contador cada vez que se haga clic en un botón. Usa closures para evitar variables globales.

     */
    contador++;
    document.getElementById("Rsultado_ejercicio1").innerHTML = contador;
}

function ejercicio2(){
    console.log("ejercicio 2")
       /**
     * 2. **Convertir grados Celsius a Fahrenheit:**  
     Escribe una función que convierta grados Celsius a Fahrenheit y viceversa.
    */   
    let celsius = document.getElementById("e2_input1").value;
    celsius=parseFloat(celsius);
    console.log(celsius)
    let fahrenheit = ( celsius * 9/5) + 32 ;
    console.log(fahrenheit)
    document.getElementById("Resultado_ejercicio2").innerHTML = fahrenheit;
}


let arrNumeros=[]
// let strInputHtml="e3_input1";
function subproceso_ejercicio3(){
    
    let elemento = document.getElementById("e3_input1").value;
    // console .log(elemento);
    arrNumeros.push(parseInt(elemento));
    document.getElementById("e3_input1").value = '';
    console.log (arrNumeros);
    // document.getElementById("e3_input1").innerHTML = null;
}
console.log (arrNumeros);
function ejercicio3(){
    //     3. **Sumar elementos de un array:**  
    //    Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
    if (arrNumeros.length > 0){
        let respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
        document.getElementById("Resultado_ejercicio3").innerHTML = respuesta;
    }else{
        document.getElementById("Resultado_ejercicio3").innerHTML = "Sin valores";
    }
    arrNumeros=[];
}


// let contadorVocales=0;
function ejercicio4(){
    /**
    4. **Contar las vocales en una cadena:**  
    Escribe una función que cuente cuántas vocales hay en una cadena de texto.
    */   
    // let contador =0;
    // let resultado="";
    // let vocales=['a','e','i','o','u']
    let palabra = document.getElementById("e4_input1").value;
    palabra = palabra.toLowerCase();
    console.log(palabra)
    let conteo = palabra.match(/[aeiou]/gi);
    // let conteo = palabra.match(/[aeiou]]/gi);
    console.log(conteo.length);
    
    document.getElementById("Resultado_ejercicio4").innerHTML = conteo.length;
}

function ejercicio5(){
//     5. **Invertir una cadena:**  
//    Crea una función que reciba una cadena y devuelva la misma cadena invertida.
    let strPalabra = document.getElementById("e5_input1").value;
    let resultado =""
    for (let index = 0; index < strPalabra.length; index++) {
        let charAux =strPalabra[strPalabra.length-(index+1)];
        resultado=resultado+charAux;
    }
    document.getElementById("Resultado_ejercicio5").innerHTML = resultado;
}

// strInputHtml = "Resultado_ejercicio6";
function subproceso_ejercicio6(){
    
    let elemento = document.getElementById("e6_input1").value;
    // console .log(elemento);
    arrNumeros.push(parseInt(elemento));
    document.getElementById("e6_input1").value = '';
    console.log (arrNumeros);
    // document.getElementById("e3_input1").innerHTML = null;
}
function ejercicio6(){
    //     **Filtrar números pares de un array:**  
    //    Escribe una función que reciba un array de números y devuelva un nuevo array con solo los números pares.
    // let aux = 0;
    console.log(arrNumeros);
    let arrPares =[];
    for (let index = 0; index < arrNumeros.length; index++) {
        if((arrNumeros[index] % 2) === 0 ){
            arrPares.push(parseInt(arrNumeros[index]));
        }
    }
    console.log(arrPares)
    if (arrPares.length > 0){
        document.getElementById("Resultado_ejercicio6").innerHTML = arrPares;
    }else{
        document.getElementById("Resultado_ejercicio6").innerHTML = "Sin valores";
    }
}

function ejercicio7() {
//     7. **Generar números aleatorios únicos:**  
//    Crea una función que genere un array de números aleatorios sin repetición dentro de un rango dado.
    let intRangoInferior=document.getElementById("e7_input1").value;
    let intRangoSuperior=document.getElementById("e7_input2").value;
    let intLongitud= document.getElementById("e7_input3").value;
    let arrRandom =[];
    for (let index = 0; index < intLongitud; index++) {
        arrRandom.push( Math.floor(Math.random()*(intRangoSuperior-intRangoInferior+1)+intRangoInferior));
    }
    document.getElementById("Resultado_ejercicio7").innerHTML=arrRandom;

}

function ejercicio8(){
//     8. **Contar palabras en una cadena:**  
//    Escribe una función que cuente cuántas palabras hay en una cadena.
    let strFrase=document.getElementById("e8_input1").value;
    console.log(strFrase);
    let contador=0;
    let charAux=' ';
    // let conteo = strFrase.match(/" "/gi);
    for (let index = 0; index < strFrase.length; index++) {
        if (strFrase[index] === charAux){
            contador ++;
        }
        // console.log(strFrase[index]);
    }
    console.log(contador);
    document.getElementById("Resultado_ejercicio8").innerHTML=contador;
}

function ejercicio9(){
//     9. **Comprobar si una cadena es un palíndromo:**  
//    Crea una función que determine si una cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
    
    let strTexto=document.getElementById("e9_input1").value;
    let strAuxiliar="";
    
    for (let index = 0; index < strTexto.length; index++) {
        let charAux =strTexto[strTexto.length-(index+1)];
        strAuxiliar=strAuxiliar+charAux;
    }

    strTexto === strAuxiliar 
    ?   document.getElementById("Resultado_ejercicio9").innerHTML= "El Texto es Palíndromo"
    : document.getElementById("Resultado_ejercicio9").innerHTML= "El Texto NO es Palíndromo";
}

let arrElementos=[];
function subproceso_ejercicio10(){
    
    let elemento = document.getElementById("e10_input1").value;
    // console .log(elemento);
    arrElementos.push(elemento);
    document.getElementById("e10_input1").value = '';
    console.log(arrElementos)
}

function ejercicio10(){
    // 10. **Eliminar elementos duplicados de un array:**  
    // Escribe una función que elimine los elementos duplicados de un array.
    let arrNuevo = [...new Set(arrElementos)];
    document.getElementById("Resultado_ejercicio10").innerHTML=arrNuevo;
}