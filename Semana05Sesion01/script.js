console.log("Inicio del Programa")

/**
 * Marca
 * Modelo
 * NroSerie
 * Precio
 * Stock
 * Color
 * Voltaje
 * 
 */

class Electrodomesticos{
    #stock = 0;
    constructor(marca, modelo,nroSerie,precio,color,voltage){
        this.marca = marca;
        this.modelo = modelo;
        this.nroSerie = nroSerie;
        this.precio = precio;
        this.color = color;
        this.voltage = voltage;
    }

    getStock(){
        return this.#stock;
    }
    setStock(value){
        //validaciones
        this.#stock = value;
    }

    comprar(cantidad){
        this.#stock +=cantidad;
    }

    encender(){
        if(this.voltage !== 220){
            console.log(`Por favor revisa tu suministro electrico porque el voltaje del electrodomistico es de ${this.voltage} voltios`)
        }else{
            console.log(`El electrodomestico ${this.marca} - ${this.modelo} se esta encendiendo`);
        }
    }
    apagar(){
        console.log(`El electrodomestico ${this.marca} - ${this.modelo} se esta apagando`);
    }
}

let electro1 = new Electrodomesticos("LG","XBC123","1122233",900.99,"Negro",110);

console.log(electro1.marca)
electro1.encender()

let electro2 = new Electrodomesticos("Sony", "HBC3434","A121416",1222.99, "Azul", 220)

console.log(electro2.modelo)
electro2.encender()
console.log(electro1.getStock())
//electro1.setStock(3);
console.log(electro1.getStock())

electro1.color = "Amarillo"
console.log(electro1.color)

electro1.comprar(10)
console.log(electro1.getStock())

class LineaMarron extends Electrodomesticos{
    constructor(marca, modelo,nroSerie,precio,color,voltage,entradas,conectividad){
        super(marca, modelo,nroSerie,precio,color,voltage);
        this.entradas = entradas;
        this.conectividad = conectividad;
    }
    conectarWifi(){
        const index = this.conectividad.indexOf("WIFI");
        console.log(index);
        if (index > -1) { // only splice array when item is found
            console.log("Conectando al WIFI ")
        }
        else{
            console.log("No se puede conectar al WIFI revisa las opciones de conectividad: "+this.conectividad.toString())
        }
    }
    cambiarVolumen(nivel){
        console.log("Cambiando el nivel del volumen a "+nivel)
    }
}

class LineaBlanca extends Electrodomesticos{
    constructor(marca, modelo,nroSerie,precio,color,voltage, inHouse){
        super(marca, modelo,nroSerie,precio,color,voltage);
        this.inHouse = inHouse;
    }
}

class Televisor extends LineaMarron{
    constructor(marca, modelo,nroSerie,precio,color,voltage,entradas,conectividad,tipo, tamaño){
        super(marca, modelo,nroSerie,precio,color,voltage,entradas,conectividad);
        this.tipo = tipo;
        this.tamaño = tamaño
    }

    abrirWeb(link){
        let arrWeb = ["WIFI", "LAN"]
        const found = this.conectividad.some(r=> arrWeb.includes(r))
        if(found){
            console.log(`Abriendo la pagina ${link} en la pantalla ${this.tipo} de ${this.tamaño} pulgadas`)
        }
    }

    apagar(){
        console.log(`La television ${this.marca} - ${this.modelo} se esta apagando`);
    }

    encender(){
        if(this.voltage !== 220){
            console.log(`Por favor revisa tu suministro electrico porque el voltaje de la televsion es de ${this.voltage} voltios`)
        }else{
            this.entradas.forEach(element => {
                console.log(`Revisando estado de ${element} => OK`)
            });
            this.conectividad.forEach(element=>{
                console.log(`Revisando estado de ${element} => OK`)
            })
            console.log(`La television ${this.marca} - ${this.modelo} se esta encendiendo`);
        }
    }

}

//let lineam =new LineaMarron("Samsung", "SGH123","QW13141212",800.99,"Negro",220,["HDMI1", "HDMI2", "CABLE", "RCA"], [ "LAN", "BLUETHOOTH"] );

let lineam =new Televisor("Samsung", "SGH123","QW13141212",800.99,"Negro",220,["HDMI1", "HDMI2", "CABLE", "RCA"], [ "LAN", "BLUETHOOTH"],"LED",55);

lineam.encender()
lineam.conectarWifi();
lineam.cambiarVolumen(5)
lineam.abrirWeb("www.google.com")
lineam.apagar()

let lineaB = new LineaBlanca("Mabe","MB90988","LF342342342", 400.99, "Blanco",220, true);

lineaB.encender();

lineam.apagar()
lineaB.apagar();

