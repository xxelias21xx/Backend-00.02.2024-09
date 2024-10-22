//Ejercicio 1
let contador = 0

document.getElementById("contador-btn").addEventListener("click", () => {    
    contador++;
    document.getElementById("contador-display").textContent = "Contador: " + contador;

})

//Ejercicio 2

let convertirTemperatura = (valor, unidad) => (unidad === 'C') ? (valor * 9/5) + 32 : (valor - 32) * 5/9

document.getElementById("convertir-btn").addEventListener("click", () => {
    let valor = parseFloat(document.getElementById("valor").value)
    let unidad = document.getElementById("unidad").value
    
    if (isNaN(valor)) {
        document.getElementById("resultado-temp").textContent = "Por favor, ingresa un valor válido."
        return
    }

    let resultado = convertirTemperatura(valor, unidad)
    let unidadResultado = (unidad === 'C') ? 'Fahrenheit' : 'Celsius'
    document.getElementById("resultado-temp").textContent = `El resultado es: ${resultado.toFixed(2)}° ${unidadResultado}`
})

//Ejercicio 3

document.getElementById("suma-array").addEventListener("click", () => {
        
    let arrNumeros = []
    let pararSuma = false

    while (!pararSuma) {
        let valor = (prompt("Ingrese los datos; si desea el resultado presione ="));
        if (valor === "=") {
            pararSuma = true
    
        } else {
            if (!isNaN(parseFloat(valor))) {
                arrNumeros.push(parseFloat(valor));
            }
        }
    }
   let respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
   alert(respuesta)

})
