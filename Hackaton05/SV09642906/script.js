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
    }
}

class Tecnico {
    constructor(nombre, edad, sucursal, habilidades) {
        this.nombre = nombre;
        this.edad = edad;
        this.sucursal = sucursal;
        this.habilidades = habilidades;
        this.atencionesEnProceso = 0;
    }
}

let clientes = [];
let ordenes = [];
let tecnicos = [];

// Lista de IMEIs robados
const imeisRobados = [
    "123456789012345", "987654321012345", "123456789012346", "987654321012346",
    "123456789012347", "987654321012347", "123456789012348", "987654321012348",
    "123456789012349", "987654321012349", "123456789012350", "987654321012350",
    "123456789012351", "987654321012351", "123456789012352", "987654321012352",
    "123456789012353", "987654321012353", "123456789012354", "987654321012354"
];

// Simulación de verificación de IMEI robado
function verificarIMEI(imei) {
    return !imeisRobados.includes(imei); // Retorna true si no está en la lista de robados
}

function recepcionCliente(nombre, dni, telefono, imei, marca, modelo) {
    if (verificarIMEI(imei)) {
        const nuevoCliente = new Cliente(nombre, dni, telefono, imei, marca, modelo);
        clientes.push(nuevoCliente);
        const nuevaOrden = new Orden(nuevoCliente);
        ordenes.push(nuevaOrden);
        console.log(`Orden creada para el cliente: ${nombre}`);
    } else {
        console.log("El IMEI está reportado como robado.");
    }
}

function asignarTecnico(orden) {
    const marca = orden.cliente.marca;
    const sucursalTecnicos = tecnicos.filter(t => t.sucursal === "SucursalPrincipal" && t.habilidades.includes(marca));
    
    // Filtrar por atenciones en proceso
    sucursalTecnicos.sort((a, b) => {
        if (a.atencionesEnProceso === b.atencionesEnProceso) {
            return a.edad - b.edad; // Menor edad si tienen la misma atención
        }
        return a.atencionesEnProceso - b.atencionesEnProceso;
    });

    if (sucursalTecnicos.length > 0) {
        const tecnicoSeleccionado = sucursalTecnicos[0];
        tecnicoSeleccionado.atencionesEnProceso++;
        console.log(`Técnico asignado: ${tecnicoSeleccionado.nombre}`);
        return tecnicoSeleccionado;
    } else {
        console.log("No hay técnicos disponibles para esta marca.");
        return null;
    }
}

function emitirOrdenServicio(orden, costo) {
    orden.costo = costo;
    console.log(`Orden de servicio emitida con costo: S/${costo}`);
}

function aceptarOrden(orden, abono) {
    orden.abono = abono;
    orden.status = abono >= orden.costo ? "Finalizada" : "Parcial";
    console.log(`Orden de servicio ${orden.status} para el cliente: ${orden.cliente.nombre}`);
}

function reporteOrdenes() {
    console.log("Reporte de órdenes de servicio:");
    ordenes.forEach(orden => {
        console.log(`Cliente: ${orden.cliente.nombre}, Status: ${orden.status}, Monto: S/${orden.costo}, Abono: S/${orden.abono}`);
    });
}

// Agregar técnicos
tecnicos.push(new Tecnico("Juan", 30, "SucursalPrincipal", ["Samsung", "Xiaomi"]));
tecnicos.push(new Tecnico("Maria", 25, "SucursalPrincipal", ["Apple", "Xiaomi"]));
tecnicos.push(new Tecnico("Pedro", 28, "SucursalPrincipal", ["Samsung", "Apple"]));

// Ejemplo de uso
console.log("=== Recepción del Cliente ===");
recepcionCliente("Carlos", "12345678", "987654321", "123456789012345", "Samsung", "Galaxy S21"); // Este IMEI está robado

console.log("\n=== Asignación de Técnico ===");
const ordenActual = ordenes[0]; // Supongamos que esta es la última orden
const tecnicoAsignado = asignarTecnico(ordenActual);

console.log("\n=== Emisión de Orden de Servicio ===");
if (tecnicoAsignado) {
    emitirOrdenServicio(ordenActual, 200); // Costo de reparación
}

console.log("\n=== Aceptación de Orden ===");
aceptarOrden(ordenActual, 100); // El cliente hace un abono de 100

console.log("\n=== Reporte de Órdenes ===");
reporteOrdenes();
