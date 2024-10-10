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
}

