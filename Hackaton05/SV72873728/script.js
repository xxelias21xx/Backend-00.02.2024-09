class Sucursal {
    constructor(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tecnicos = [];
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }
}

class Tecnico {
    constructor(nombre, especialidades, sucursal) {
        this.nombre = nombre;
        this.especialidades = especialidades; //Se agregan las marcas en lo que son especialistas los tecnicos
        this.sucursal = sucursal;
    }
}

class SistemaReparaciones {
    constructor() {
        this.sucursales = [];
        this.telefonosRobados = new Set(); // Se guardan los IMEI que estan declarados como robados
    }

    agregarSucursal(nombre, ubicacion) {
        const nuevaSucursal = new Sucursal(nombre, ubicacion);
        this.sucursales.push(nuevaSucursal);
        console.log(`Sucursal creada: ${nombre}, Ubicación: ${ubicacion}`);
    }

    agregarTecnico(nombre, especialidades, sucursalNombre) {
        const sucursal = this.sucursales.find(s => s.nombre === sucursalNombre);
        if (sucursal) {
            const nuevoTecnico = new Tecnico(nombre, especialidades.split(',').map(s => s.trim()), sucursal);
            sucursal.agregarTecnico(nuevoTecnico);
            console.log(`Técnico agregado: ${nombre}, Especialidades: ${especialidades}, Sucursal: ${sucursalNombre}`);
        } else {
            console.log(`Sucursal ${sucursalNombre} no encontrada.`);
        }
    }

    reportarTelefonoRobado(imei) {
        this.telefonosRobados.add(imei);
        console.log(`Teléfono robado reportado: IMEI ${imei}`);
    }

    ingresarTicket(cliente, marca, modelo, imei, autorizacion, costo, montoPagado, diagnostico, repuestos, sucursalNombre) {
        const sucursal = this.sucursales.find(s => s.nombre === sucursalNombre);
        if (!sucursal) {
            console.log(`Sucursal ${sucursalNombre} no encontrada.`);
            return;
        }

        // Verificar si el IMEI está reportado
        if (this.telefonosRobados.has(imei)) {
            console.log(`Alerta: El IMEI ${imei} está reportado como robado.`);
            return;
        }

        // Verificar el pago
        if (montoPagado < costo * 0.5) {
            console.log(`Deuda: El cliente debe pagar al menos el 50% del costo total.`);
            return;
        }

         // Verificar la autorización
        if (autorizacion.toLowerCase()=="no") {
            console.log(`No hay autorización firmada`);
            return;
        }

        // Asignar servicio a un técnico especializado
        const tecnico = sucursal.tecnicos.find(t => t.especialidades.includes(marca));
        if (!tecnico) {
            console.log(`No hay técnico disponible para la marca ${marca} en la sucursal ${sucursalNombre}.`);
            return;
        }

        // Crear el ticket
        const nuevoTicket = {
            cliente,
            marca,
            modelo,
            imei,
            autorizacion,
            costo,
            montoPagado,
            diagnostico,
            repuestos,
            estado: "En Proceso",
            tecnico: tecnico.nombre
        };

        // Actualizar el estado del servicio
        console.log(`Reparación en proceso para el cliente ${cliente}. Técnico asignado: ${tecnico.nombre}. Estado: ${nuevoTicket.estado}`);
        
    }
}

// Crear una instancia del sistema
const sistema = new SistemaReparaciones();


document.getElementById('sucursalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = this[0].value;
    const ubicacion = this[1].value;
    sistema.agregarSucursal(nombre, ubicacion);
    this.reset();
});

document.getElementById('tecnicoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = this[0].value;
    const especialidades = this[1].value;
    const sucursalNombre = this[2].value;
    sistema.agregarTecnico(nombre, especialidades, sucursalNombre);
    this.reset();
});

document.getElementById('telefonoRobadoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const imei = this[0].value;
    sistema.reportarTelefonoRobado(imei);
    this.reset();
});

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cliente = this[0].value;
    const marca = this[1].value;
    const modelo = this[2].value;
    const imei = this[3].value;
    const autorizacion = this[4].value;
    const costo = parseFloat(this[5].value);
    const montoPagado = parseFloat(this[6].value);
    const diagnostico = this[7].value;
    const repuestos = this[8].value;
    const sucursalNombre = this[9].value;
    sistema.ingresarTicket(cliente, marca, modelo, imei, autorizacion, costo, montoPagado, diagnostico, repuestos, sucursalNombre);
    this.reset();
});