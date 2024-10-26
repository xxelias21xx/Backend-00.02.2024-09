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