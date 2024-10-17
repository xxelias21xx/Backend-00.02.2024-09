function ejercicio3() {

    /**
     * 3. **Sumar elementos de un array:**  
   Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
     */

    let arrNum = []
    let bandera = true;
   
    while (bandera) {
        let valor = (prompt("Ingrese los datos; si desea el resultado presione ="));
        
        if (valor == "="){
            bandera = false
        } else {
            if (!isNaN(parseFloat(valor))) {
                arrNum.push(parseFloat(valor));
            }
        }
    }
    
    let respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
    alert(respuesta)

}