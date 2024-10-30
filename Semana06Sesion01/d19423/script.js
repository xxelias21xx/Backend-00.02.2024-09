console.log("Inicio del programa")

let objPersona={
    nombre:"Roberto",
    apellido: "Pineda",
    edad:41,
    hobbies:["aeromodelismo","gunpla"],
    padre:{
        nombre: "Rene",
        apellido: "Pineda"
    }
};

console.log(JSON.stringify(objPersona))


class Persona{
    constructor(nombre, apellido , edad){
        this.nombre=nombre
        this.apellido = apellido
        this.edad=edad
    }
}
let arrPersonas =[];
let objPersona1 = new Persona("Roberto","Pineda",41);
let objPersona2 = new Persona("David","Lopez",35);

arrPersonas.push(objPersona1);
arrPersonas.push(objPersona2);

console.log(JSON.stringify(arrPersonas))

let strSuperHero =`{
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

objSup3rHeros = JSON.parse(strSuperHero);

console.log(objSup3rHeros.members[0].secretIdentity);
console.log(strSuperHero);
console.log(objSup3rHeros);



  async function getData() {
    const url = "https://randomuser.me/api/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  getData();


  if( typeof(Storage) !== undefined){
    console.log("Si hay WebStorage")
  }else{
    console.log("No hay WebStorage")
  }

  //localStorage.setItem("Nombre", "Roberto")
  //console.log(localStorage.getItem("Nombre"))

  //localStorage.removeItem("Nombre")

  //sessionStorage.setItem("contraseña","1234567890");
  console.log(sessionStorage.getItem("contraseña"))
  sessionStorage.removeItem("contraseña")