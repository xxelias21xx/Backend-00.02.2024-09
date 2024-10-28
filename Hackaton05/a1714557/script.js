/**class Sucursal {
    tecnico=[];
    clientes=[];
    tickets=[];
    central;
    
    constructor(nombre,direccion,contacto,central) {
        this.nombre=nombre;
        this.direccion=direccion;
        this.contacto=contacto;
        this.central=central;
    }
    addTicket(ticket){
        const existCelRobado=this.central.celularesRobados.find(
            (e) => e.imei == ticket.telefono.imei
        );
        if (existCelRobado) {
            console.error("El equipo no puede ser reparado porque es robado.");
        } else {
            this.tickets.push(ticket);
        }
    }
}

class Telefono {
    estado=null
    esRobado = 0
    constructor(nroSerie,imei,marca,modelo) {
        this.nroSerie=nroSerie;
        this.imei=imei;
        this.marca=marca;
        this.modelo=modelo;
    }
    addTicket(ticket){
        const existCelRobado=this.Central.celularesRobados.find(
            (e) => e.imei == ticket.telefono.imei
        );
        if (existCelRobado) {
            console.error("El equipo no se puede ingresar porque es robado."); 
        } else {
            this.ticket.push(ticket);
        }
    }
    refreshEstado(estado){
        this.estado=estado;
    }
    refreshEstadoRobado(estado){
        this.esRobado=estado;
    }

}

class Central {
    celularesRobados=[];
    sucursales=[];
    addCelularRobado(celular) {
        this.celularesRobados.push(celular);
    }
    delCelularRobado(imei){
        const newData=this.celularesRobados.filter(
            (celular)=>celular.imei != imei
        );
        console.log(newData);
    }
    addSucursal(sucursal){
        this.sucursales.push(sucursal);
    }
}
const estadoTicket={
    inicializado: "incializado",
    proceso: "en proceso",
    finalizado: "Finalizado",
}
class Ticket{
    autorizacion=0
    repuestos=[];
    constructor(telefono, diagnostico, porcentaje, montoFinal, cliente){
        this.telefono=telefono;
        this.diagnostico=diagnostico;
        this.porcentaje=porcentaje;
        this.montoFinal=montoFinal;
        this.cliente=cliente;
        this.estado=estadoTicket.inicializado;
    }
    autorizar(estado){
        this.autorizacion=estado;
    }
    addRepuesto(repuesto){
        if (!repuesto) {
            throw new Error("Respuesto invalido");
        }
        this.repuestos.push(repuesto);
    }
    iniciarServicio(){
        if (this.autorizacion && this.porcentaje >= 50) {
            this.telefono.refreshEstado("en reparacion");
            this.estado=estadoTicket.proceso;
            return "Servicio iniciado";
        } else {
            return "No cumple con las condiciones para iniciar servicio"
        }
    }
    finalizarServicio(){
        this.telefono.refreshEstado("Listo para entregar");
        this.estado=estadoTicket.finalizado;
        return "Servicio finalizado";
    }
}

class Tecnicos {
    skill=[];
    constructor(skill,nombre) {
        this.skill=skill;
        this.nombre=nombre;
    }
    reparar(telefono){
        this.skill.includes(telefono.marca);
    }
}


const Hackaton5 = new Central();

const POOSucursal01 = new Sucursal("Sucursal Lima","Lima,Lima","5214001",Hackaton5);
const POOSucursal02 = new Sucursal("Sucursal Callao","La Perla, Callao","5214002",Hackaton5);
const POOSucursal03 = new Sucursal("Sucursal Ica","Chincha, Ica","5214003",Hackaton5);

//console.log(POOSucursal01);
//console.log(POOSucursal02);
//console.log(POOSucursal03);

console.log("-----------");

Hackaton5.addSucursal(POOSucursal01);
Hackaton5.addSucursal(POOSucursal02);
Hackaton5.addSucursal(POOSucursal03);
console.log(Hackaton5);

const samsumg = new Telefono ("800140550", 85801, "Samsumg","S23+");
const iphone = new Telefono("800160885",78152,"Iphone","15 Pro Max");
const xiaomi = new Telefono("754170995",58746,"Xiaomi","Note 13");

Hackaton5.addCelularRobado(xiaomi);

const ticket1 = new Ticket(samsumg,"pantalla rota",50,250,"Primer Cliente");

ticket1.autorizar(1);
POOSucursal01.addTicket(ticket1)

ticket1.addRepuesto("pantalla");

console.log(ticket1.iniciarServicio());
console.log(ticket1);*/


class Telefono {
    constructor(nroSerie, imei, marca, modelo) {
      this.nroSerie = nroSerie;
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
    }
  
    validar() {
      return true;
    }
  }
  
  class Revision {
    constructor(telefono, diagnostico) {
      this.telefono = telefono;
      this.diagnostico = diagnostico;
      this.fecha = new Date();
    }
  }
  
  class Autorizacion {
    constructor(usuario, fecha, firma) {
      this.usuario = usuario;
      this.fecha = fecha;
      this.firma = firma;
    }
  
    validar() {
      return true;
    }
  }
  
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    puedeReparar(telefono) {
      return this.skills.includes(telefono.marca);
    }
  }
  
  class Repuesto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Reparacion {
    constructor(telefono, revision, autorizacion, tecnico) {
      this.telefono = telefono;
      this.revision = revision;
      this.autorizacion = autorizacion;
      this.tecnico = tecnico;
      this.repuestos = [];
      this.estado = "En revisión";
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    actualizarEstado(estado) {
      this.estado = estado;
    }
  }
  
  class Sucursal {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.reparaciones = [];
    }
  
    agregarReparacion(reparacion) {
      this.reparaciones.push(reparacion);
    }
  
    mostrarEstadoReparaciones() {
      console.log(`Estado de reparaciones en ${this.nombre}:`);
      this.reparaciones.forEach((reparacion) => {
        console.log(`Teléfono ${reparacion.telefono.numeroSerie}: ${reparacion.estado}`);
      });
    }
  }
  
  const telefono = new Telefono("SG145245", "18554892", "Samsung", "Galaxy S23");
  const revision = new Revision(telefono, "Pantalla dañada");
  const autorizacion = new Autorizacion("Juan Pérez", new Date(), "Firma digital");
  const tecnico = new Tecnico("Juan López", ["Samsung", "Apple"]);
  const repuesto = new Repuesto("Pantalla", 500);
  const reparacion = new Reparacion(telefono, revision, autorizacion, tecnico);
  reparacion.agregarRepuesto(repuesto);
  reparacion.actualizarEstado("En reparación");
  const sucursal = new Sucursal("Sucursal 1", "Calle 123");
  sucursal.agregarReparacion(reparacion);
  sucursal.mostrarEstadoReparaciones();
  console.log(reparacion);