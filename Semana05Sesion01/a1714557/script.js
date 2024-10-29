class Electrodomesticos{
    #stock=0;
    constructor(marca, modelo, nroSerie, precio, stock, color, voltaje){
        this.marca=marca;
        this.modelo=modelo;
        this.nroSerie=nroSerie
        this.precio=precio;
        this.color=color;
        this.voltaje=voltaje;
    }
    getStock(){
        return this.#stock;
    }
    setStock(value){
        this.#stock=value;
    }
    comprar(cantidad){
        this.#stock =+cantidad;
    }
    encender(){
        if (this.voltaje == "220 V") {
            console.log(`Verifica tu suministro de energia, el de el dispositivo es de ${this.voltaje}.`);
        }else{
            console.log(`${this.marca} - ${this.modelo} se esta iniciando.`);
        }
    }
    apagar(){
        console.log(`${this.marca} - ${this.modelo} se esta apagando.`);
    }
}

const electro1 = new Electrodomesticos("LG","LGTV123","A35356",722.99,10,"black","220 V");

/** console.log(electro1.voltaje);
electro1.encender("220 V") */

const electro2 = new Electrodomesticos("Sony","HBC3434","SN1234",519.99,5,"Silver","110 V");
/** console.log(electro2.modelo);

electro2.encender("220 V")
console.log(electro1.getStock())

electro1.setStock(10)
console.log(electro1.getStock())

electro2.setStock(12)
console.log(electro2.getStock());

electro1.color="Silver"
console.log(electro1.color);

electro1.comprar(10);
console.log(electro1.getStock()); */

class LineaMarron extends Electrodomesticos {
    constructor(marca,modelo,nroSerie,precio,color,voltaje,entradas,conectividad) {
        super(marca,modelo,nroSerie,precio,color,voltaje);
        this.entradas=entradas;
        this.conectividad=conectividad;
    }
    conectarWifi(){
        const index=this.conectividad.indexOf("WIFI");
        console.log(index);
        if (index>-1) {
            console.log("Conectando al Wifi. ");
        } else {
            console.log("No se puede establecer conexion, revisa las opciones.");
        }
    }
    cambiarVolumen(nivel){
        console.log(`Cambiando el nivel de volumen a ${nivel}.`);
    }
}

class LineaBlanca extends Electrodomesticos{
    constructor(marca,modelo,nroSerie,precio,color,voltaje, inHouse){
        super(marca,modelo,nroSerie,precio,color,voltaje);
        this.inHouse=inHouse;
    }
}

class Televisor extends LineaMarron{
    constructor(marca,modelo,nroSerie,precio,color,voltaje,entradas,conectividad,tipo,tamaño){
        super(marca,modelo,nroSerie,precio,color,voltaje,entradas,conectividad)
        this.tipo=tipo;
        this.tamaño=tamaño;
    }
    abrirWeb(link){
        let arrWeb = ["WIFI","LAN"]
        const found=this.conectividad.some(r=> arrWeb.includes(r))
        if (found) {
            console.log(`Abriendo la pagina ${link} en la pantalla ${this.tipo} de ${this.tamaño} pulgadas`);
        }
    }
    apagar(){
        console.log(`${this.marca} - ${this.modelo} se esta apagando.`);
    }
    encender(){
        if (this.voltaje == "220V") {
            console.log(`Verifica tu suministro de energia, el de el dispositivo es de ${this.voltaje}.`);
        } else {
            this.entradas.forEach(element => {
                console.log(`Revisando estado ${element} => OK`);
            });
            this.conectividad.forEach(element => {
                console.log(`Revisando estado ${element} => OK`);
            });
            console.log(`${this.marca} - ${this.modelo} se esta iniciando.`);
        }
    }
}

let lineam =new Televisor("Samsung", "SGH123","QW13141212",800.99,"Negro","220 V",["HDMI1", "HDMI2", "CABLE", "RCA"], [ "LAN", "BLUETHOOTH"],"LED",55);

lineam.encender()
lineam.conectarWifi();
lineam.cambiarVolumen(5)
lineam.abrirWeb("www.google.com");
lineam.apagar()

const lineaB = new LineaBlanca("Mabe","MB90988","LF342342342", 400.99, "Blanco","220 V", true);

lineaB.encender();
lineaB.apagar();