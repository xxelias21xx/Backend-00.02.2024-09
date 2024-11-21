// Global scope variables
let oficinas = JSON.parse(localStorage.getItem("oficinas")) || {
    principal: { nombre: 'Oficina Principal', sucursales: ['Chimbote', 'Arequipa'] },
};

// Función que se ejecuta en index.html para cargar las sucursales
function cargarSucursales() {
    const select = document.getElementById("officeSelect");
    select.innerHTML = ""; // Limpiar las opciones previas
    Object.keys(oficinas).forEach(oficina => {
        oficinas[oficina].sucursales.forEach(sucursal => {
            const option = document.createElement("option");
            option.value = sucursal.toLowerCase();
            option.textContent = sucursal;
            select.appendChild(option);
        });
    });
}

// Función para crear nuevas sucursales en index.html
function crearSucursal() {
    const nuevaSucursal = prompt("Ingrese el nombre de la nueva sucursal:");
    if (nuevaSucursal) {
        oficinas.principal.sucursales.push(nuevaSucursal);
        localStorage.setItem("oficinas", JSON.stringify(oficinas));
        cargarSucursales();
    }
}

// Función para verificar IMEI (index.html)
function verificarImei() {
    const imei = document.getElementById("imeiInput").value;
    const imeisRobados = ["123456789012345", "987654321098765"]; // Lista de IMEIs robados

    if (imei && imeisRobados.includes(imei)) {
        alert("Este IMEI ha sido reportado como robado.");
    } else {
        localStorage.setItem("imei", imei);
        window.location.href = "orden.html"; // Redirigir a la página de orden
    }
}

// Función para gestionar la creación de la orden en orden.html
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("ordenForm")) {
        const imei = localStorage.getItem("imei");
        document.getElementById("imeiCliente").value = imei;

        document.getElementById("ordenForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const orden = {
                id: Date.now(), // ID único basado en el timestamp
                nombreCliente: document.getElementById("nombreCliente").value,
                dniCliente: document.getElementById("dniCliente").value,
                telefonoCliente: document.getElementById("telefonoCliente").value,
                imei: imei,
                status: "Iniciado",
            };

            // Guardar la orden en localStorage
            let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
            ordenes.push(orden);
            localStorage.setItem("ordenes", JSON.stringify(ordenes));

            // Redirigir a la página del técnico
            window.location.href = "tecnico.html";
        });
    }
});

// Función para gestionar la reparación en tecnico.html
if (document.getElementById("ordenesSelect")) {
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

    function cargarOrdenes() {
        const select = document.getElementById("ordenesSelect");
        ordenes.forEach(orden => {
            const option = document.createElement("option");
            option.value = orden.id;
            option.textContent = `Orden ID: ${orden.id} - Cliente: ${orden.nombreCliente}`;
            select.appendChild(option);
        });
    }

    // Procesar la reparación y actualizar el estado de la orden
    document.querySelector("button").addEventListener("click", function() {
        const ordenId = document.getElementById("ordenesSelect").value;
        const costo = document.getElementById("costoReparacion").value;

        const orden = ordenes.find(o => o.id == ordenId);
        if (orden) {
            orden.costo = costo;
            orden.status = "En Proceso";
            
            // Guardar nuevamente las órdenes en localStorage
            localStorage.setItem("ordenes", JSON.stringify(ordenes));

            window.location.href = "pago.html";
        }
    });

    cargarOrdenes();
}

// Función para procesar el pago en pago.html
if (document.getElementById("ordenesPagoSelect")) {
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

    function cargarOrdenes() {
        const select = document.getElementById("ordenesPagoSelect");
        ordenes.forEach(orden => {
            const option = document.createElement("option");
            option.value = orden.id;
            option.textContent = `Orden ID: ${orden.id} - Cliente: ${orden.nombreCliente}`;
            select.appendChild(option);
        });
    }

    // Procesar el pago
    document.querySelector("button").addEventListener("click", function() {
        const ordenId = document.getElementById("ordenesPagoSelect").value;
        const pago = document.getElementById("pagoSelect").value;

        const orden = ordenes.find(o => o.id == ordenId);
        if (orden) {
            orden.status = "En Proceso"; // Cambiar status
            orden.pago = `${pago}%`;

            // Guardar las órdenes actualizadas
            localStorage.setItem("ordenes", JSON.stringify(ordenes));

            // Redirigir a la página de órdenes
            window.location.href = "ordenes.html";
        }
    });

    cargarOrdenes();
}

// Función para mostrar las órdenes en ordenes.html
if (document.getElementById("ordenesTable")) {
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

    function cargarOrdenes() {
        const tableBody = document.getElementById("ordenesTable").getElementsByTagName('tbody')[0];
        
        ordenes.forEach(orden => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${orden.id}</td>
                <td>${orden.nombreCliente}</td>
                <td>${orden.imei}</td>
                <td>${orden.costo || "Pendiente"}</td>
                <td>${orden.status}</td>
            `;
        });
    }

    cargarOrdenes();
}
