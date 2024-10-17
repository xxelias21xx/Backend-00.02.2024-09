// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
let i = 1, numMayor = 0, numMenor = 0;
while (i <= 20) {
    num = prompt("Ingrese el valor "+ i + ":");
    if (i == 1) {
        numMayor = num;
        numMenor = num;
    } else {
        // Para numero mayor
        if (numMayor < num) {
            numMayor = num;
        };
        // Para numero menor
        if ( numMenor > num) {
            numMenor = num;
        };
    };
    i += 1;
};
console.log("Para todos los numeros ingresados, el mayor numero es el ", numMayor, " y el menor numero es ", numMenor, ".");