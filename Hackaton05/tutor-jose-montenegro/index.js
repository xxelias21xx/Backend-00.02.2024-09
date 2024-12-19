class Telefono {
  estado = null;
  imei = "";
  modelo = "";
  esRobado = 0;
  constructor(imei, marca, modelo, estado = null) {
    this.imei = imei;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
  }

  actualizarEstado(estado) {
    this.estado = estado;
  }
  actualizarEstadoRobado(estado) {
    this.esRobado = estado;
  }
}

const estadoTicket = {
  inicializado: "inicializado",
  proceso: "en proceso",
  finalizado: "finalizado",
};
class Ticket {
  telefono;
  diagnostico;
  porcentaje;
  montoFinal;
  estado;
  cliente;
  autorizacion = 0;
  repuestos = [];

  constructor(telefono, diagnostico, porcentaje, montoFinal, cliente) {
    this.telefono = telefono;
    this.diagnostico = diagnostico;
    this.porcentaje = porcentaje;
    this.montoFinal = montoFinal;
    this.estado = estadoTicket.inicializado;
    this.cliente = cliente;
  }

  autorizar(estado) {
    this.autorizacion = estado;
  }
  agregarRepuesto(repuesto) {
    if (!repuesto) {
      throw new Error("repuesto invalido");
    }
    this.repuestos.push(repuesto);
  }
  //   cambiarEstado(estado) {
  //     this.estado = estado;
  //   }

  iniciarServicio() {
    if (this.autorizacion && this.porcentaje >= 50) {
      this.telefono.actualizarEstado("en reparacion");
      this.estado = estadoTicket.proceso;
      return "servicio iniciado";
    } else {
      return "No cumple con las condiciones basicas para iniciar la reparacion";
    }
  }
  finalizarServicio() {
    this.telefono.actualizarEstado("reparado");
    this.estado = estadoTicket.finalizado;
    return "Servicion finalizado";
  }
}

// TECNOIDAT-TUJILLO, TECNOIDAT-LIMA, TECNOIDAT-CHICLAYO
class Sucursal {
  tecnicos = [];
  clientes = [];
  tickets = [];
  contacto = "";
  nombre = "";
  direccion = "";
  central;

  constructor(nombre, direccion, contacto, central) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.contacto = contacto;
    this.central = central;
  }

  //agregar tecnico
  // agregar cliente
  //eliminar tecnico
  //eliminar cliente

  agregarTicket(ticket) {
    const existCelRobado = this.central.celularesRobados.find(
      (e) => e.imei == ticket.telefono.imei
    );
    if (existCelRobado) {
      console.error("El celular no puede ser reparado porque es robado!!!");
    } else {
      this.tickets.push(ticket);
    }
  }
}

// TECNOIDAT
class Central {
  celularesRobados = [];
  sucursales = [];

  agregarCelularRobado(celular) {
    this.celularesRobados.push(celular);
  }

  eliminarCelularRobado(imei) {
    // for (let i in this.celularesRobados) {
    //   if (this.celularesRobados[i].imei == imei) {
    //     console.log("lo encontre");
    //   }
    // }

    const newData = this.celularesRobados.filter(
      (celular) => celular.imei != imei
    );
    console.log(newData);
  }

  agregarSucursal(sucursal) {
    this.sucursales.push(sucursal);
  }
}

const tecnoIdat = new Central();

const tecnoIdatTrujillo = new Sucursal(
  "tecnoIdat-trujillo",
  "trujillo",
  "734892748",
  tecnoIdat
);

const tecnoIdatChiclayo = new Sucursal(
  "tecnoIdat-chiclayo",
  "chiclayo",
  "893465978"
);

const tecnoIdatLima = new Sucursal("tecnoIdat-lima", "Lima", "4985344354");

console.log(tecnoIdatLima);
console.log(tecnoIdatChiclayo);
console.log(tecnoIdatTrujillo);

console.log("-------------");

tecnoIdat.agregarSucursal(tecnoIdatLima);
tecnoIdat.agregarSucursal(tecnoIdatChiclayo);
console.log(tecnoIdat);

const s23Ultra = new Telefono("43747384", "Samsung", "s23 ultra");
const iphone = new Telefono("34353", "iphone", "16 pro");
const xiomi = new Telefono("3463456", "xiomi", "xxxxxx");

tecnoIdat.agregarCelularRobado(iphone);////////////////////

const ticketJose = new Ticket(
  s23Ultra,
  "pantalla rota",
  50,
  250,
  "Jose Montenegro"
);

ticketJose.autorizar(1);
tecnoIdatTrujillo.agregarTicket(ticketJose);

ticketJose.agregarRepuesto("pantalla");

console.log(ticketJose.iniciarServicio());
console.log(ticketJose);

// centrarPrincipal.agregarCelularRobado(s23Ultra);

// centrarPrincipal.eliminarCelularRobado("43747384");
// // console.log(centrarPrincipal);
