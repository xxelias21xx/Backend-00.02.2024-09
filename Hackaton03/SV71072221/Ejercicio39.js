// 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//   Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
let pi2 = 0, termino = 0, n = 1, signo = 1, iteraciones = 0;
iteraciones = prompt("Ingrese el numero de replicaciones del estudio del numero PI");
for (let i = 1; i <= iteraciones; i++) {
    termino = 4 / n;
    pi2 += signo * termino;
    signo *= -1;
    n += 2;
}
console.log("La aproximacion de PI para ", iteraciones, " iteraciones es de ", pi2, ".");