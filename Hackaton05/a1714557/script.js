class Telefono {
    constructor(nroSerie,Imei,marca,modelo) {
        this.nroSerie=nroSerie;
        this.Imei=Imei;
        this.marca=marca;
        this.modelo=modelo;
    }
    validar(){
        if (Imei=true) {
            console.log(`El telefono ${this.marca} - ${this.modelo} esta habilitado.`);
        } else {
            console.log(`El telefono ${this.marca} - ${this.modelo} esta reportado.`);
        }
    }
}

class Revision {
    constructor(telefono,fallas) {
        this.telefono=telefono;
        this.fallas=fallas;
        this.fecha=new Date();
    }
}

class Autorizacion{
    constructor(cliente,fecha,firma){
    this.cliente=cliente;
    this.fecha=fecha;
    this.firma=firma;
    }
    validacion(){
        return true;
    }
}


const telefono1 = new Revision ("Samsumg",["Pantalla rota", "cargador"]);

console.log(telefono1.fallas);
