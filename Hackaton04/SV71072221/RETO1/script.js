// Ejercicio 1
function sumar(dato1, dato2) {
    let suma = dato1 + dato2;
    return suma;
}
document.getElementById("btn1").addEventListener('click', (e) => {
    e.preventDefault();
    n1 = parseInt(prompt("Ingrese el primer dato a sumar:"));
    n2 = parseInt(prompt("Ingrese el segundo dato a sumar:"));
    const i = sumar(n1, n2);
    console.log(i);
    contenedor1 = document.getElementById("respuesta1");
    contenedor1.innerHTML += `<p>La suma de los numeros ${n1} y ${n2} es ${i}</p>`;
});
// Ejercicio 2
document.getElementById("btn2").addEventListener('click', (e) => {
    e.preventDefault();
    n1 = parseInt(prompt("Ingrese el numero a calcular potencia:"));
    n2 = parseInt(prompt("Ingrese el exponente:"));
    const i = potencia(n1, n2);
    console.log(i);
    contenedor2 = document.getElementById("respuesta2");
    contenedor2.innerHTML += `<p>La potencia del numero ${n1} a la ${n2} es ${i}</p>`;
});
const potencia = (dato1, potencia) => {
    return Math.pow(dato1, potencia);
}
// Ejercicio 3
document.getElementById("btn3").addEventListener('click', (e) => {
    e.preventDefault();
    let lista3 = [];
    n = parseInt(prompt("Ingrese la cantidad de numeros a analizar:"));
    for (let index = 0; index < n; index++) {
        num = parseInt(prompt(`Ingrese el numero N${index+1} a evaluar:`));
        lista3.push(num);      
    };
    console.log(lista3);
    rpta3 = sumOfCubes(lista3);
    contenedor3 = document.getElementById("respuesta3");
    contenedor3.innerHTML += `<p>La suma de los cubos de los numeros ingresados es ${rpta3}</p>`;
});
const sumOfCubes = (lista) => {
    let suma = 0;
    for (let index = 0; index < lista.length; index++) {
        suma += Math.pow(lista[index], 3);
    };
    return suma;
};
// Ejercicio 4
document.getElementById("btn4").addEventListener('click', (e) => {
    e.preventDefault();
    b = parseInt(prompt("Ingrese la longitud de la base del triangulo"));
    a = parseInt(prompt("Ingrese la longitud de la altura del triangulo"));
    area = triArea(b,a);
    contenedor4 = document.getElementById("respuesta4");
    contenedor4.innerHTML += `<p>Para un triangulo con una longitud de la base de ${b}u y una altura de ${a}u, el area es de ${area}u2</p>`;
});
const triArea = (b, a) => {
    let area;
    area = (b * a) / 2;
    return area;
};
// Ejercicio 5
document.getElementById("btn5").addEventListener('click', (e) => {
    e.preventDefault();
    op1 = parseInt(prompt("Ingrese el primer numero a operar:"));
    operacion = prompt("Ingrese el operador a ejecutar\n + para sumar\n - para restar\n / para dividir\n x para multiplicar\n % para sacar porcentaje");
    operacion = operacion.toString();
    operacion = operacion.toLowerCase();
    console.log(operacion);
    if (operacion!="+" & operacion!="-" & operacion!="/" & operacion!="x" & operacion!="%") {
        while (operacion!="+" & operacion!="-" & operacion!="/" & operacion!="x" & operacion!="%") {
            operacion = prompt("Ingrese un operador correcto\n + para sumar\n - para restar\n / para dividir\n x para multiplicar\n % para sacar porcentaje");
        };
    };
    op2 = parseInt(prompt("Ingrese el segundo numero a operar:"));
    resultado = calculator(op1, op2, operacion);
    contenedor5 = document.getElementById("respuesta5");
    contenedor5.innerHTML += `<p>Para la operacion ${op1} ${operacion} ${op2}, el resultado es ${resultado}</p>`;
});
const calculator = (op1, op2, operacion) => {
    switch (operacion) {
        case "+":
            return (op1 + op2);
        case "-":
            return (op1 - op2);
        case "/":
            return (op1 / op2);
        case "x":
            return (op1 * op2);
        case "%":
            return (op1 * op2 / 100);
        default:
            break;
    }
}