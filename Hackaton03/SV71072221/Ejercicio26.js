// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
let n1, n2, resto, cociente;
n1 = prompt("Ingrese el numerador");
n1 = Number(n1);
n2 = prompt("Ingrese el denominador");
n2 = Number(n2);
resto = 0;
cociente = 0;
while (n1 > n2) {
    n1 = n1 - n2;
    resto = n1;
    cociente = cociente + 1;
};
console.log("Para la operacion de division de ", n1, "/", n2, " es de ", n1/n2, " con un cociente de ", cociente, " y un residuo de ", resto, ".");