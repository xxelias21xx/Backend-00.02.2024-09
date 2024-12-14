console.log("Hola desde typescript")

let firstName = "Roberto";
firstName = "David";

let lastName: string;// = "Pineda";
lastName = "Pineda";

let isActive: Boolean = true;
let edad: number = 41;

let algo: any = {}

let arrNumeros: number[] = [4, 5, 6,];
arrNumeros.push(5);
arrNumeros.push(55)

let tupInfo: [number, string, boolean] = [33, "Hola", true];

tupInfo[1] = "dd";

let arrHobbies: readonly string[] = ["Aeromodelismo", "Musica", "Natacion", "Fotografia"];

let objPersona: { nombre: string, apellido: string, edad: number, isCasado: boolean } = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41,
    isCasado: false
}

let objPersona2 = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41,
    isCasado: false
}
objPersona2.edad = 42;


function getTime():number{
    return new Date().getTime();
}

function setConsola(nombre:string):void{
    console.log("Hola "+ nombre)
}

setConsola("Roberto")

function getObject(obj:{name:string, edad: number}):object{
    return obj;
}

getObject({name:"Roberto", edad: 55});

function add(a:number, b:number , c?:number):number{
    return a + b + (c || 0);
}

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

divide({dividend:88, divisor:99})

let x: unknown = 'hello';
console.log((x as string).length);

let z: unknown = 'hello';
console.log((<string>z).length);


class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
        this.cumpleaños("")
      return this.name;
    }
    private cumpleaños(fechaNacimiento: string):string{
        return "Mi cumpleaõs es: "
    }
  }

  let rp = new Person("Roberto");

  
