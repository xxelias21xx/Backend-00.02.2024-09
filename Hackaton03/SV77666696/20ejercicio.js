let num1 = parseInt(prompt("Introduce el primer número entero positivo:"));
let num2 = parseInt(prompt("Introduce el segundo número entero positivo:"));
let num3 = parseInt(prompt("Introduce el tercer número entero positivo:"));
let num4 = parseInt(prompt("Introduce el cuarto número entero positivo:"));

let numeros = [num1, num2, num3, num4];
let contadorPares = numeros.filter(n => n % 2 === 0).length;
console.log("Cantidad de números pares: " + contadorPares);

let mayorNumero = Math.max(num1, num2, num3, num4);
console.log("El número mayor es: " + mayorNumero);

if (num3 % 2 === 0) {
    let cuadradoSegundo = Math.pow(num2, 2);
    console.log("El tercer número es par. El cuadrado del segundo número es: " + cuadradoSegundo);
}

if (num1 < num4) {
    let media = (num1 + num2 + num3 + num4) / 4;
    console.log("El primero es menor que el cuarto. La media de los cuatro números es: " + media);
}

if (num2 > num3) {
    if (num3 >= 50 && num3 <= 700) {
        let suma = num1 + num2 + num3 + num4;
        console.log("El segundo es mayor que el tercero, y el tercero está entre 50 y 700. La suma de los cuatro números es: " + suma);
    }
}
