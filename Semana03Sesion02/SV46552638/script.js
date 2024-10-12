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
//creando una funcion generica para agregar arreglos para cualquier ejercicio
let arrElementos=[];
function subproceso_arraglo(inputId){
    
    let elemento = document.getElementById(inputId).value;
    // console .log(elemento);
    arrElementos.push(elemento);
    document.getElementById(inputId).value = '';
    console.log(arrElementos)
}

function ejercicio10(){
    // 10. **Eliminar elementos duplicados de un array:**  
    // Escribe una función que elimine los elementos duplicados de un array.
    // document.getElementById("e10_input1").innerHTML=arrElementos;
    let arrNuevo = [...new Set(arrElementos)];
    document.getElementById("Resultado_ejercicio10").innerHTML=arrNuevo;
    arrElementos=[];
}

//creando una funcion generica para convertir texto -> arreglo
function subproceso_TextoArreglo(inputId) {
    
    let elemento = document.getElementById(inputId).value;
    console.log(elemento);
    let nuevoArr=elemento.split("");
    // const nuevoArr = Array.from(elemento);
    console.log(nuevoArr);
    return nuevoArr;
}

//funcio para procesar opciones seleccionadeas del radio button
function subproceso_RadioButton(nameRadio){
    //recepciono un arreglo con todas las opciones y verifico cual ha sido seleccionada
    let arrRadios = document.getElementsByName(nameRadio);
    for (let radio of arrRadios) {
      if (radio.checked) {
        // Retorna el valor del radio seleccionado
        return radio.value; 
      }
    }
}

function ejercicio11(inputId,nameRadio) {
    // 11. **Ordenar un array de objetos por propiedad:**  
    // Crea una función que reciba un array de objetos y ordene estos objetos según una propiedad específica.
    // opteniedo el arreglo
    let arrNuevo= subproceso_TextoArreglo(inputId);
    // console.log(arrNuevo);
    document.getElementById("Resultado1_ejercicio11").innerHTML=arrNuevo;
    //opteniedo seleccion del radio button
    let orden= subproceso_RadioButton(nameRadio);

    if (orden === "ascendente") {
        // Orden ascendente
        arrNuevo.sort(); 
      } else if (orden === "descendente") {
        // Orden descendente
        arrNuevo.sort().reverse(); 
    }
    document.getElementById("Resultado2_ejercicio11").innerHTML=arrNuevo;
}

function ejercicio12() {
    // 12. **Validar un email:**  
    // Escribe una función que valide si una cadena tiene el formato de un email válido.
    let correo = document.getElementById('e12_input1').value;
    console.log(correo);
    let expresion = /(@|\.com|\s)/gi;
    // let expresion = /(@|\.com)/gi;
    let conicidencias = correo.match(expresion);
    let bandera1=conicidencias.includes(' ');
    console.log("bandera 1",bandera1);
    let bandera2=false


    if ( (conicidencias.length <3)){
        let con1=0;
        let con2=0;
        
        for (let conicidencia of conicidencias){
            if(conicidencia === '@'){
                con1++;
            }
            if(conicidencia === '.com'){
                con2++;
            }
        }
        if((con1 === 1)&& (con2 === 1)){
            bandera2= true;
        }
        console.log("bandera 2",bandera2);
    }else{
        console.log("bandera 2",bandera2);
    }


    if (!bandera1 && bandera2){
        document.getElementById("Resultado_ejercicio12").innerHTML="Correo Válido";
    }else{
        document.getElementById("Resultado_ejercicio12").innerHTML="Correo Inválido";
    }   
    
}

function ejercicio13() {
    // 13. **Convertir un número en formato moneda:**  
    // Crea una función que formatee un número como una moneda, por ejemplo, "1,000.00".
    let strNumero= parseFloat(document.getElementById('e13_input1').value);
    const monedaSoles = strNumero.toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2
      });
    
      document.getElementById("Resultado_ejercicio13").innerHTML  = monedaSoles;
}

function ejercicio14(){
    // 14. **Verificar si todos los elementos de un array cumplen una condición:**  
    // Escribe una función que reciba un array y una condición, y verifique si todos los elementos del array cumplen con dicha condición.
}

function ejercicio15(){
    // 15. **Crear un temporizador (countdown):**  
    // Crea una función que reciba una cantidad de segundos y haga un temporizador que cuente hacia atrás.

}
function ejercicio16(){
    // 16. **Sumar matrices de dos dimensiones:**  
    // Escribe una función que reciba dos matrices de dos dimensiones (matrices de números) y devuelva la suma de ambas.
}
function ejercicio17(){
    // 17. **Comprobar si una cadena contiene otra cadena:**  
    // Crea una función que determine si una cadena contiene otra cadena, sin usar el método `includes`.
    let texto = document.getElementById("e17_input1").value;
    // console.log(texto);
    let subTexto = document.getElementById("e17_input2").value;
    // console.log(subTexto);
    let expresion = new RegExp(subTexto, 'gi');
    // console.log(expresion);
    let conicidencias = texto.match(expresion);
    //  console.log(conicidencias);
    if(conicidencias.length > 0){
        document.getElementById("Resultado_ejercicio17").innerHTML  = "Encontrado";
    }else{
        document.getElementById("Resultado_ejercicio17").innerHTML  = "No encontrado";
    }   
}
let arrElementos2=[];
function subproceso_arraglo_18(inputId){
    
    let elemento = parseInt(document.getElementById(inputId).value);
    // console .log(elemento);
    arrElementos2.push(elemento);
    document.getElementById(inputId).value = '';
    console.log(arrElementos2);
}

function ejercicio18(){
    // 18. **Buscar el número más grande en un array:**  
    // Escribe una función que encuentre el número más grande en un array sin usar el método `Math.max`.
    let mayor=-999;
    console.log(arrElementos2.length);
    for (let index = 0; index < arrElementos2.length; index++) {
        
        arrElementos[index]= parseInt( arrElementos2[index]);
        
        if(arrElementos2[index]>mayor){
            
            mayor = arrElementos[index];
        }
    }     
    document.getElementById("Resultado_ejercicio18").innerHTML  = mayor;   
    arrElementos2=[];
}

function ejercicio19(){
    // 19. **Convertir una cadena de snake_case a camelCase:**  
    // Crea una función que convierta una cadena en formato `snake_case` a `camelCase`.

    
}
function ejercicio20(){
    // 20. **Clonar un objeto sin referencias:**  
    // Escribe una función que clone un objeto sin referencias a la memoria original (deep copy).
    
}

