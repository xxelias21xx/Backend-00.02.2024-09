/*
console.log("Hola desde el inicio de la aplicacion");


let arrFrutas = ["fresas","kiwi"];
console.log(arrFrutas)

console.log(arrFrutas[1])

arrFrutas.push("bananas")
console.log(arrFrutas)

arrFrutas.pop();
arrFrutas.push("bananas")
arrFrutas.push("peras")

arrFrutas.push(false)
arrFrutas.push(3.14159)

let arrHobies = ["Musica", "Natacion"]
arrFrutas.push(arrHobies)
arrFrutas.unshift("Lemon");
console.log(arrFrutas)

console.log(arrFrutas[6][1])

for (let index = 0; index < arrFrutas.length; index++) {
    const element = arrFrutas[index];
    console.log(element)
    
}

arrFrutas.forEach(element => {
    console.log(element)
});

document.getElementById("demo").innerHTML = arrFrutas.toString();
document.getElementById("demo").innerHTML = arrFrutas.join(' -- ');

console.log(arrFrutas.length)


let objPersona={
    nombre: "Roberto",
    apellido: "Pineda"
}

let objPersona2={
    nombre: "David",
    apellido: "Lopez"
}

console.log(objPersona)
console.log(objPersona.nombre)
console.log(objPersona["nombre"])



objPersona.edad = 41;
objPersona.hobbies = arrHobies;

console.log(objPersona)

console.log(JSON.stringify(objPersona))

let arrPersonas = []
arrPersonas.push(objPersona)
arrPersonas.push(objPersona2)

console.log(arrPersonas) */


// alert("Bienvenido a la Sumadora")
// let primerNumero = parseInt( prompt("Escribe el primer numero"));
// let segundoNumero =  parseInt(prompt("Escribe el segundo numero"));
// console.log(primerNumero, segundoNumero)

// alert(`El resultado de la suma es ${primerNumero + segundoNumero}`)



document.getElementById("calculadora").addEventListener("click",calculadora)

function calculadora(){
    let bandera = true;
    let numero = 0
    let arrNumeros = [];
    let respuesta = 0;
    while (bandera) {
        let valor = (prompt("Ingrese los datos; si desea el resultado presione ="));
        if (valor === "=") {
            bandera = false
    
        } else {
            if (!isNaN(parseFloat(valor))) {
                arrNumeros.push(parseFloat(valor));
            }
            else {
                switch (valor) {
                    case "+":
                        respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
                        break;
                    case "-":
                        respuesta = arrNumeros.reduce((anterior, actual) => anterior - actual, 0);
                        break;
                    case "*":
                        respuesta = arrNumeros[0]
                        for (let index = 1; index < arrNumeros.length; index++) {
                            respuesta *= arrNumeros[index];
                        }
                        // respuesta = arrNumeros.reduce((anterior, actual) => anterior *  actual, 0);
                        break;
                    case "/":
                        respuesta = arrNumeros[0]
                        for (let index = 1; index < arrNumeros.length; index++) {
                            respuesta /= arrNumeros[index];
                        }
                        break;
                }
            }
        }
        
    }
    alert(respuesta);

}

let contador = 0
function ejercicio1() {
    /**
     *  1. **Crear un contador simple:**  
   Crea una función que incremente un contador cada vez que se haga clic en un botón. Usa closures para evitar variables globales.

     */
   contador++;
document.getElementById("contador").innerHTML = contador;

}

function ejercicio3(){

    /**
     * 3. **Sumar elementos de un array:**  
   Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
     */
    let arrNumeros = []
    let bandera = true;

    while (bandera) {
        let valor = (prompt("Ingrese los datos; si desea el resultado presione ="));
        if (valor === "=") {
            bandera = false
    
        } else {
            if (!isNaN(parseFloat(valor))) {
                arrNumeros.push(parseFloat(valor));
            }
        
        }
    }
   let respuesta = arrNumeros.reduce((anterior, actual) => anterior + actual, 0);
   alert(respuesta)
}