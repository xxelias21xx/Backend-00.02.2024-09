class Cliente {
    constructor(nombre, dni, telefono, imei, marca, modelo) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Orden {
    constructor(cliente) {
        this.cliente = cliente;
        this.status = "Emitida"; // "Emitida", "Aceptada", "Parcial", "Finalizada"
        this.costo = 0;
        this.abono = 0;
        this.diagnostico = "";
        this.repuestos = [];
    }
}

class Tecnico {
    constructor(nombre, edad, sucursal, habilidades) {
        this.nombre = nombre;
        this.edad = edad;
        this.sucursal = sucursal;
        this.habilidades = habilidades; // Array de marcas que el técnico puede reparar
        this.atencionesEnProceso = 0;
    }
}

class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.tecnicos = [];
        this.ordenes = [];
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

    recibirOrden(orden) {
        this.ordenes.push(orden);
    }

    obtenerTecnicoDisponible(marca) {
        const disponibles = this.tecnicos
            .filter(t => t.habilidades.includes(marca))
            .sort((a, b) => {
                if (a.atencionesEnProceso === b.atencionesEnProceso) {
                    return a.edad - b.edad; // Menor edad si tienen la misma atención
                }
                return a.atencionesEnProceso - b.atencionesEnProceso;
            });
        return disponibles[0]; // Retorna el técnico más adecuado
    }

    reporteOrdenes() {
        console.log(`\nReporte de órdenes de servicio en la sucursal: ${this.nombre}`);
        this.ordenes.forEach(orden => {
            console.log(`Cliente: ${orden.cliente.nombre}, Status: ${orden.status}, Monto: S/${orden.costo}, Abono: S/${orden.abono}, Diagnóstico: ${orden.diagnostico}`);
            console.log(`Repuestos: ${orden.repuestos.join(', ')}`);
        });
    }
}

class OficinaPrincipal {
    constructor() {
        this.sucursales = [];
    }

    agregarSucursal(sucursal) {
        this.sucursales.push(sucursal);
    }

    reporteGeneral() {
        console.log("=== Reporte General de Todas las Sucursales ===");
        this.sucursales.forEach(sucursal => sucursal.reporteOrdenes());
    }
}

// Lista de IMEIs robados
const imeisRobados = [
    "123456789012345", "987654321012345", "123456789012346", "987654321012346",
    "123456789012347", "987654321012347", "123456789012348", "987654321012348",
    "123456789012349", "987654321012349", "123456789012350", "987654321012350",
    "123456789012351", "987654321012351", "123456789012352", "987654321012352",
    "123456789012353", "987654321012353", "123456789012354", "987654321012354"
];

// Funciones del sistema
function verificarIMEI(imei) {
    return !imeisRobados.includes(imei);
}

function recepcionCliente(sucursal, nombre, dni, telefono, imei, marca, modelo) {
    if (verificarIMEI(imei)) {
        const nuevoCliente = new Cliente(nombre, dni, telefono, imei, marca, modelo);
        const nuevaOrden = new Orden(nuevoCliente);
        sucursal.recibirOrden(nuevaOrden);
        console.log(`Orden creada para el cliente: ${nombre} en la sucursal ${sucursal.nombre}`);
        return nuevaOrden;
    } else {
        console.log("El IMEI está reportado como robado.");
        return null;
    }
}

function asignarTecnico(orden, sucursal) {
    const tecnico = sucursal.obtenerTecnicoDisponible(orden.cliente.marca);
    if (tecnico) {
        tecnico.atencionesEnProceso++;
        console.log(`Técnico asignado: ${tecnico.nombre}`);
        return tecnico;
    } else {
        console.log("No hay técnicos disponibles para esta marca.");
        return null;
    }
}

function emitirOrdenServicio(orden, costo, diagnostico) {
    orden.costo = costo;
    orden.diagnostico = diagnostico;
    console.log(`Orden de servicio emitida con costo: S/${costo}`);
}

function aceptarOrden(orden, abono) {
    if (abono >= orden.costo * 0.5) {
        orden.abono = abono;
        orden.status = abono >= orden.costo ? "Finalizada" : "Parcial";
        console.log(`Orden de servicio ${orden.status} para el cliente: ${orden.cliente.nombre}`);
    } else {
        console.log("El abono debe ser al menos el 50% del costo.");
    }
}

function agregarRepuesto(orden, repuesto) {
    orden.repuestos.push(repuesto);
    console.log(`Repuesto ${repuesto} agregado a la orden para el cliente: ${orden.cliente.nombre}`);
}

// Crear la oficina principal
const oficinaPrincipal = new OficinaPrincipal();

// Crear sucursales
const sucursalPrincipal = new Sucursal("Principal");
oficinaPrincipal.agregarSucursal(sucursalPrincipal);

// Agregar técnicos a la sucursal principal
sucursalPrincipal.agregarTecnico(new Tecnico("Juan", 30, "Principal", ["Samsung", "Xiaomi"]));
sucursalPrincipal.agregarTecnico(new Tecnico("Maria", 25, "Principal", ["Apple", "Xiaomi"]));
sucursalPrincipal.agregarTecnico(new Tecnico("Pedro", 28, "Principal", ["Samsung", "Apple"]));

// Ejemplo de uso
console.log("=== Recepción del Cliente ===");
const ordenActual = recepcionCliente(sucursalPrincipal, "Carlos", "12345678", "987654321", "123456789012346", "Samsung", "Galaxy S21"); // IMEI válido

if (ordenActual) {
    console.log("\n=== Asignación de Técnico ===");
    const tecnicoAsignado = asignarTecnico(ordenActual, sucursalPrincipal);

    console.log("\n=== Emisión de Orden de Servicio ===");
    if (tecnicoAsignado) {
        emitirOrdenServicio(ordenActual, 200, "Pantalla rota"); // Costo de reparación y diagnóstico
    }

    console.log("\n=== Aceptación de Orden ===");
    aceptarOrden(ordenActual, 100); // El cliente hace un abono de 100

    console.log("\n=== Agregar Repuesto ===");
    agregarRepuesto(ordenActual, "Pantalla nueva");

    console.log("\n=== Reporte de Órdenes ===");
    sucursalPrincipal.reporteOrdenes();
}

oficinaPrincipal.reporteGeneral();
