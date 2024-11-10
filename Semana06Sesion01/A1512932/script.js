// Inicio del programa
console.log("Inicio del programa");

// Definición de un objeto llamado `objPersona` con propiedades de una persona, 
//incluyendo un objeto anidado para el padre
let objPersona = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41,
    hobbies: ["aeromodelismo", "gunpla"],
    padre: {
        nombre: "Rene",
        apellido: "Pineda"
    }
};

// Imprimir el objeto `objPersona` en formato JSON (JavaScript Object Notation)
console.log(JSON.stringify(objPersona));

// Definición de la clase `Persona` para crear objetos con las propiedades
// `nombre`, `apellido` y `edad`
class Persona {
    constructor(nombre, apellido, edad) {  // `constructor` es una palabra reservada para inicializar un objeto
        this.nombre = nombre;  // `this` hace referencia a la instancia actual de la clase
        this.apellido = apellido;
        this.edad = edad;
    }
}

// Creación de un arreglo `arrPersonas` para almacenar objetos `Persona`
let arrPersonas = [];
// Creación de dos objetos `Persona` usando la clase `Persona`
let objPersona1 = new Persona("Roberto", "Pineda", 41);
let objPersona2 = new Persona("David", "Lopez", 35);

// Agregar los objetos `objPersona1` y `objPersona2` al arreglo `arrPersonas`
arrPersonas.push(objPersona1);
arrPersonas.push(objPersona2);

// Imprimir el arreglo `arrPersonas` en formato JSON
console.log(JSON.stringify(arrPersonas));

// Definición de una cadena de texto en formato JSON que representa un grupo de superhéroes
let strSuperHero = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`;

// Convertir la cadena JSON `strSuperHero` a un objeto JavaScript usando `JSON.parse`
objSup3rHeros = JSON.parse(strSuperHero);

// Acceder y mostrar la identidad secreta del primer miembro de `objSup3rHeros`
console.log(objSup3rHeros.members[0].secretIdentity);
console.log(strSuperHero); // Muestra la cadena JSON original
console.log(objSup3rHeros); // Muestra el objeto convertido

// Función asincrónica que obtiene datos de una API usando `fetch`
async function getData() {  // `async` permite el uso de `await` para manejar promesas de forma asíncrona
    const url = "https://randomuser.me/api/";
    try {
        const response = await fetch(url); // `await` espera la respuesta de la API
        if (!response.ok) {  // Verifica si la respuesta es correcta (status 200)
            throw new Error(`Response status: ${response.status}`); // `throw` lanza una excepción si hay un error
        }

        const json = await response.json(); // Convierte la respuesta en formato JSON
        console.log(json); // Imprime el objeto JSON obtenido
    } catch (error) {  // `catch` captura cualquier error en el bloque `try`
        console.error(error.message); // Imprime el mensaje de error
    }
}

// Llamada a la función `getData`
getData();

// Verifica si el navegador soporta `Web Storage`
if (typeof(Storage) !== undefined) { // `typeof` devuelve el tipo de dato
    console.log("Si hay WebStorage");
} else {
    console.log("No hay WebStorage");
}

// `sessionStorage` y `localStorage` son objetos que permiten almacenar datos en el navegador
// `sessionStorage` almacena datos para la sesión actual y se elimina al cerrar el navegador
// `localStorage` almacena datos de forma persistente

// sessionStorage.setItem("contraseña","1234567890");
console.log(sessionStorage.getItem("contraseña")); // Imprime la contraseña guardada en `sessionStorage`
sessionStorage.removeItem("contraseña"); // Elimina la contraseña del `sessionStorage`
