let contador = 0
function ejercicio1() {
    /**
     *  1. **Crear un contador simple:**  
   Crea una función que incremente un contador cada vez que se haga clic en un botón. Usa closures para evitar variables globales.

     */
   contador++;
document.getElementById("contador").innerHTML = contador;

}

function ejercicio3(){

    /**
     * 3. **Sumar elementos de un array:**  
   Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
     */
    let arrNumeros = []
    let bandera = true;

    while (bandera) {
        let valor = (prompt("Ingrese los datos; si desea el resultado presione ="));
        if (valor === "=") {
            bandera = false
    
        } else {
            if (!isNaN(parseFloat(valor))) {
                arrNumeros.push(parseFloat(valor));
            }
        
        }
    }
   let respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
   alert(respuesta)
}