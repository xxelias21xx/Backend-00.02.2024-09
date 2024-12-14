"use strict";
console.log("Hola desde typescript");
let firstName = "Roberto";
firstName = "David";
let lastName; // = "Pineda";
lastName = "Pineda";
let isActive = true;
let edad = 41;
let algo = {};
let arrNumeros = [4, 5, 6,];
arrNumeros.push(5);
arrNumeros.push(55);
let tupInfo = [33, "Hola", true];
tupInfo[1] = "dd";
let arrHobbies = ["Aeromodelismo", "Musica", "Natacion", "Fotografia"];
let objPersona = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41,
    isCasado: false
};
let objPersona2 = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41,
    isCasado: false
};
objPersona2.edad = 42;
function getTime() {
    return new Date().getTime();
}
function setConsola(nombre) {
    console.log("Hola " + nombre);
}
setConsola("Roberto");
function getObject(obj) {
    return obj;
}
getObject({ name: "Roberto", edad: 55 });
function add(a, b, c) {
    return a + b + (c || 0);
}
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
divide({ dividend: 88, divisor: 99 });
