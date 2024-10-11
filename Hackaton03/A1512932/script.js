// Función para mostrar los resultados en el div de salida
function showResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = result;
}

// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio1() {
    let numTresdigi = parseInt(prompt("Escribe un número de 3 dígitos, Alumnito:"));

    if (!isNaN(numTresdigi)) {
        // Verifica si el número tiene exactamente 3 dígitos, positivo o negativo
        if ((numTresdigi >= 100 && numTresdigi <= 999) || (numTresdigi >= -999 && numTresdigi <= -100)) {
            showResult(`Ejercicio 1: El número ${numTresdigi} tiene 3 dígitos.`);
        } else {
            showResult(`Ejercicio 1: El número ${numTresdigi} no tiene 3 dígitos.`);
        }
    } else {
        showResult("Ejercicio 1: Ups!.Alumnito, ingrese un número porfavor.");
    }
}


// Generar botones con sus respectivas funciones
const buttonsContainer = document.getElementById('buttons-container');
for (let i = 1; i <= 40; i++) {
    const button = document.createElement('button');
    button.innerText = `Ejercicio ${i}`;
    
    // Asignar funciones específicas a cada botón
    button.onclick = function() {
        switch (i) {
            case 1:
                ejercicio1();
                break;
            case 2:
                ejercicio2();
                break;
            case 6:
                ejercicio6();
                break;
            // Añade más casos para los demás ejercicios
            default:
                showResult(`Ejercicio ${i}: Sin función asignada`);
        }
    };

    buttonsContainer.appendChild(button);
}
