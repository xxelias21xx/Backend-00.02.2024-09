// alert("Hola desde el archivo script")

// Swal.fire({
//     title: "<strong>HTML <u>example</u></strong>",
//     icon: "info",
//     html: `
//       You can use <b>bold text</b>,
//       <a href="#" autofocus>links</a>,
//       and other HTML tags
//     `,
//     showCloseButton: true,
//     showCancelButton: true,
//     focusConfirm: false,
//     confirmButtonText: `
//       <i class="fa fa-thumbs-up"></i> Great!
//     `,
//     confirmButtonAriaLabel: "Thumbs up, great!",
//     cancelButtonText: `
//       <i class="fa fa-thumbs-down"></i>
//     `,
//     cancelButtonAriaLabel: "Thumbs down"
//   });

var nombre = "Roberto";
var apellido = "Pineda";

console.log(nombre);


nombre = "David";

console.log(nombre);

nombre = 55;
console.log(nombre);

var strNombre = "Roberto";
let strApellido = "Pineda";

var strNombre = "Pepito";
{
    let strApellido = "Perez";
    console.log(strApellido)
}

const PI = 3.14159;

//number
//string

let camara = 'Nikon \n "DC" 3100';
let camara2 = "Nikon 'RP' 5100 de " + nombre;
let camara3 = `Go pro
back
v11 de ${strNombre}`;

//date
//boolean

let edad = 55;
console.log(( edad === "cincuentaycinco"));

let age = 21

let voteable = (age < 18) ? "Too young":"Old enough";

console.log(typeof( nombre))



//arrays
//objects