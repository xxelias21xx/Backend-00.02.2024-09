//* RETO 1
//Ejercicio 1

document.getElementById("e1_btn1").addEventListener('click', (sumarNumeros) => {
    sumarNumeros.preventDefault();
    const a = parseInt(document.getElementById("e1_input1").value);
    const b = parseInt(document.getElementById("e1_input2").value);
    if (isNaN(a) || isNaN(b)) {
        alert("Ejercicio 1. Valores inválidos");
        return;
    }
    document.getElementById("e1_input1").value=``;
    document.getElementById("e1_input2").value=``;
    document.getElementById("e1_resultado").value=`${a+b}`;
})
//Ejercicio2
document.getElementById("e2_btn1").addEventListener('click', (potencia) => {
    potencia.preventDefault();
    const base = parseInt(document.getElementById("e2_input1").value);
    const exp = parseInt(document.getElementById("e2_input2").value);
    if (isNaN(base) || isNaN(exp)) {
        alert("Ejercicio 2. Valores inválidos");
        return;
    }
    document.getElementById("e2_input1").value=``;
    document.getElementById("e2_input2").value=``;
    document.getElementById("e2_resultado").value=`${base**exp}`;
})

//Ejercicio 3
document.getElementById("e3_btn1").addEventListener('click', (sumOfCubes) => {
    sumOfCubes.preventDefault();
    const a = parseInt(document.getElementById("e3_input1").value);
    const b = parseInt(document.getElementById("e3_input2").value);
    const c = parseInt(document.getElementById("e3_input3").value);
    if (isNaN(a) || isNaN(b)|| isNaN(c)) {
        alert("Ejercicio 3. Valores inválidos");
        return;
    }
    document.getElementById("e3_input1").value=``;
    document.getElementById("e3_input2").value=``;
    document.getElementById("e3_input3").value=``;
    document.getElementById("e3_resultado").value=`${(a**3)+(b**3)+(c**3)}`;
})
//Ejercicio 4
const triArea = (a, b) => { 
    return (a * b)/2 }
document.getElementById("e4_btn1").addEventListener('click', (area) => {
    area.preventDefault();
    const a = parseInt(document.getElementById("e4_input1").value);
    const b = parseInt(document.getElementById("e4_input2").value);
    if (isNaN(a) || isNaN(b)|| isNaN(c)) {
        alert("Ejercicio 3. Valores inválidos");
        return;
    }
    document.getElementById("e4_input1").value=``;
    document.getElementById("e4_input2").value=``;
    document.getElementById("e4_resultado").value=triArea(a,b);
})

let calculadora =(n1,n2,op) => {
    switch (op) {
        case '+':
            return n1+n2;
            break;

        case '-':
            return n1-n2;
            break;

        case '*':
            return n1*n2;
            break;

        case '/':
            return n1/n2;
            break;
        case '%':
            return n1%n2;
            break;
    
        default:
            alert("Ejercicio 5. El parámetro no es reconocido");
            break;
    }
} 
//Ejercicio 5


document.getElementById("e5_btn1").addEventListener('click', (calc) => {
    calc.preventDefault();
    let a = parseInt(document.getElementById("e5_input1").value);
    let b = parseInt(document.getElementById("e5_input2").value);
    let c = document.getElementById("e5_input3").value;

    console.log(a,b,c);
    if (isNaN(a) || isNaN(b) ) {
        alert("Ejercicio 5. Valores vacios");
        return;
    }
    document.getElementById("e5_input1").value=``;
    document.getElementById("e5_input2").value=``;
    document.getElementById("e5_input2").value=``;
    document.getElementById("e5_resultado").value=calculadora(a,b,c);
})

document.getElementById("span_respuesta1").innerText=`Las funciones en JavaScript son bloques de código que realizan tareas específicas 
y pueden ser reutilizadas a lo largo de un programa. Se consideran uno de los elementos fundamentales del lenguaje, permitiendo organizar y estructurar el código de manera eficiente.`;
document.getElementById("span_respuesta2").innerText=`No hay un límite estricto en el número de argumentos que puedes declarar en una función. 
Puedes definir funciones que acepten un número ilimitado de argumentos,depende de la memoria disponible del entorno en el que se ejecuta el código, la legibilidad y mantenibilidad del código. 
Si una función tiene demasiados parámetros, se vuelve difícil de entender y manejar.`;





