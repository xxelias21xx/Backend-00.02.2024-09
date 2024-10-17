// 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//      Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
let pi2 = 3, termino = 0, n = 2; signo = 1, iteraciones = 0;
iteraciones = prompt("Ingrese el numero de replicaciones del estudio del numero PI");
for ( let i = 1; i <= iteraciones; i++) {
    termino = 4 / (n * (n + 1) * (n + 2));
    pi2 = pi2 + (signo * termino);
    signo *= -1;
    n = n + 2;
}
console.log("La aproximacion de pi despues de ",iteraciones, " replicaciones es de: ", pi2);