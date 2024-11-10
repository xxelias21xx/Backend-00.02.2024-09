// Clase principal del sistema de reservas
class SistemaReserva {
    constructor() {
        this.vuelos = [];
        this.reservas = [];
        this.pasajeros = [];
        this.vueloSeleccionado = null; // Nueva propiedad para el vuelo seleccionado

    }

    inicializarVuelos() {
        this.vuelos = [
            new Vuelo('VL001', 'Madrid', 'Barcelona', '2024-10-24 10:00', '2024-10-24 11:30', 150.00, 180, 180),
            new Vuelo('VL002', 'Barcelona', 'Madrid', '2024-10-24 12:00', '2024-10-24 13:30', 160.00, 180, 180),
            new Vuelo('VL003', 'Madrid', 'Sevilla', '2024-10-24 15:00', '2024-10-24 16:15', 120.00, 150, 150),
        ];
    }

    buscarVuelos(origen, destino, fecha) {
        return this.vuelos.filter(vuelo => 
            vuelo.origen === origen && 
            vuelo.destino === destino && 
            vuelo.fechaSalida.startsWith(fecha) &&
            vuelo.asientosDisponibles > 0
        );
    }

    crearReserva(vuelo, pasajero, asiento) {
        if (vuelo.asientosDisponibles <= 0) {
            throw new Error('No hay asientos disponibles en este vuelo');
        }
        
        const reserva = new Reserva(vuelo, pasajero, asiento);
        this.reservas.push(reserva);
        vuelo.asientosDisponibles--;
        return reserva;
    }

    confirmarPago(reserva, datosPago) {
        const pago = new Pago(reserva, datosPago);
        if (pago.procesarPago()) {
            reserva.estado = 'CONFIRMADA';
            return true;
        }
        return false;
    }
}

// Clase para manejar vuelos
class Vuelo {
    constructor(numeroVuelo, origen, destino, fechaSalida, fechaLlegada, precio, capacidadTotal, asientosDisponibles) {
        this.numeroVuelo = numeroVuelo;
        this.origen = origen;
        this.destino = destino;
        this.fechaSalida = fechaSalida;
        this.fechaLlegada = fechaLlegada;
        this.precio = precio;
        this.capacidadTotal = capacidadTotal;
        this.asientosDisponibles = asientosDisponibles;
        this.asientosOcupados = new Set();
    }

    verificarDisponibilidadAsiento(numeroAsiento) {
        return !this.asientosOcupados.has(numeroAsiento);
    }

    reservarAsiento(numeroAsiento) {
        if (this.verificarDisponibilidadAsiento(numeroAsiento)) {
            this.asientosOcupados.add(numeroAsiento);
            return true;
        }
        return false;
    }

    obtenerPrecioTotal(serviciosAdicionales = []) {
        let precioTotal = this.precio;
        serviciosAdicionales.forEach(servicio => {
            precioTotal += servicio.precio;
        });
        return precioTotal;
    }

   // get asientosDisponibles() {
       // return this.capacidadTotal - this.asientosOcupados.size;
   // }    
}

// Clase para manejar pasajeros
class Pasajero {
    constructor(nombre, apellido, email, documento, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.documento = documento;
        this.telefono = telefono;
        this.historialReservas = [];
    }

    agregarReserva(reserva) {
        this.historialReservas.push(reserva);
    }

    obtenerReservasActivas() {
        return this.historialReservas.filter(reserva => 
            reserva.estado === 'CONFIRMADA' || reserva.estado === 'PENDIENTE'
        );
    }
}


// Clase para manejar reservas
class Reserva {
    constructor(vuelo, pasajero, asiento) {
        this.id = 'RES' + Math.random().toString(36).substr(2, 9);
        this.vuelo = vuelo;
        this.pasajero = pasajero;
        this.asiento = asiento;
        this.fecha = new Date();
        this.estado = 'PENDIENTE';
        this.serviciosAdicionales = [];
        this.precioTotal = vuelo.precio;
    }

    agregarServicioAdicional(servicio) {
        this.serviciosAdicionales.push(servicio);
        this.precioTotal += servicio.precio;
    }

    calcularPrecioTotal() {
        return this.vuelo.obtenerPrecioTotal(this.serviciosAdicionales);
    }

    generarBoleto() {
        return {
            numeroReserva: this.id,
            pasajero: `${this.pasajero.nombre} ${this.pasajero.apellido}`,
            vuelo: this.vuelo.numeroVuelo,
            origen: this.vuelo.origen,
            destino: this.vuelo.destino,
            fechaSalida: this.vuelo.fechaSalida,
            asiento: this.asiento,
            estado: this.estado,
            precioTotal: this.precioTotal
        };
    }
}

// Clase para servicios adicionales
class ServicioAdicional {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

// Clase para manejar pagos
class Pago {
    constructor(reserva, datosPago) {
        this.reserva = reserva;
        this.datosPago = datosPago;
        this.fecha = new Date();
        this.estado = 'PENDIENTE';
        this.referencia = 'PAY' + Math.random().toString(36).substr(2, 9);
    }

    procesarPago() {
        // Simulación de procesamiento de pago
        if (this.validarDatosTarjeta()) {
            this.estado = 'COMPLETADO';
            return true;
        }
        this.estado = 'FALLIDO';
        return false;
    }

    validarDatosTarjeta() {
        // Simulación de validación de tarjeta
        const { cardNumber, expiryDate, cvv } = this.datosPago; // Ajuste de nombres
        return (
            cardNumber && 
            cardNumber.length === 16 && 
            expiryDate && 
            cvv && 
            cvv.length === 3
        );
    }

    generarRecibo() {
        return {
            referenciaPago: this.referencia,
            numeroReserva: this.reserva.id,
            monto: this.reserva.precioTotal,
            fecha: this.fecha,
            estado: this.estado
        };
    }
}

//Clase recibo
class GenerarRecibo {
    constructor(reserva) {
        this.reserva = reserva;
        this.fechaEmision = new Date();
        this.referencia = 'REC' + Math.random().toString(36).substr(2, 9);
    }

    // Método para obtener los detalles del recibo en un objeto
    obtenerDetallesRecibo() {
        return {
            referencia: this.referencia,
            fechaEmision: this.fechaEmision,
            numeroReserva: this.reserva.id,
            nombrePasajero: `${this.reserva.pasajero.nombre} ${this.reserva.pasajero.apellido}`,
            vuelo: this.reserva.vuelo.numeroVuelo,
            origen: this.reserva.vuelo.origen,
            destino: this.reserva.vuelo.destino,
            fechaSalida: this.reserva.vuelo.fechaSalida,
            asiento: this.reserva.asiento,
            estadoReserva: this.reserva.estado,
            precioTotal: this.reserva.calcularPrecioTotal()
        };
    }

    // Método para mostrar el recibo en formato de texto HTML (si es necesario)
    generarReciboHTML() {
        const detalles = this.obtenerDetallesRecibo();
        return `
            <h3>Recibo de Pago</h3>
            <p><strong>Referencia:</strong> ${detalles.referencia}</p>
            <p><strong>Fecha de Emisión:</strong> ${detalles.fechaEmision.toLocaleString()}</p>
            <p><strong>Número de Reserva:</strong> ${detalles.numeroReserva}</p>
            <p><strong>Nombre del Pasajero:</strong> ${detalles.nombrePasajero}</p>
            <p><strong>Vuelo:</strong> ${detalles.vuelo}</p>
            <p><strong>Origen:</strong> ${detalles.origen}</p>
            <p><strong>Destino:</strong> ${detalles.destino}</p>
            <p><strong>Fecha de Salida:</strong> ${detalles.fechaSalida}</p>
            <p><strong>Asiento:</strong> ${detalles.asiento}</p>
            <p><strong>Estado de la Reserva:</strong> ${detalles.estadoReserva}</p>
            <p><strong>Precio Total:</strong> ${detalles.precioTotal}€</p>
        `;
    }

    
}


// Inicializar el sistema de reservas
const sistema = new SistemaReserva ();
sistema.inicializarVuelos();

// Evento para el formulario de búsqueda
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const origen = document.getElementById('origin').value;
    const destino = document.getElementById('destination').value;
    const fecha = document.getElementById('date').value;

    const vuelosDisponibles = sistema.buscarVuelos(origen, destino, fecha);
    mostrarResultadosVuelos(vuelosDisponibles);
});


// Función para mostrar los resultados de vuelos
function mostrarResultadosVuelos(vuelos) {
    const resultadosDiv = document.getElementById('flightResults');
    resultadosDiv.innerHTML = ''; // Limpia resultados anteriores
    resultadosDiv.classList.remove('hidden');

    if (vuelos.length === 0) {
        resultadosDiv.innerHTML = '<p>No se encontraron vuelos.</p>'; // Mensaje si no hay vuelos
        return;
    }

    vuelos.forEach(vuelo => {
        const vueloElement = document.createElement('div');
        vueloElement.className = 'flight-card';
        vueloElement.innerHTML = `
            <div>
                <h3>${vuelo.origen} - ${vuelo.destino}</h3>
                <p>Vuelo: ${vuelo.numeroVuelo}</p>
                <p>Salida: ${vuelo.fechaSalida}</p>
            </div>
            <div class="price">
                ${vuelo.precio}€
                <button onclick="seleccionarVuelo('${vuelo.numeroVuelo}')">Seleccionar</button>
            </div>
        `;
        resultadosDiv.appendChild(vueloElement);
    });
}

// Asumiendo que la función para seleccionar vuelo está bien definida
function seleccionarVuelo(numeroVuelo) {
    // Buscar el vuelo correspondiente
    const vueloSeleccionado = sistema.vuelos.find(vuelo => vuelo.numeroVuelo === numeroVuelo);

    if (vueloSeleccionado) {
        // Mostrar los detalles del vuelo en la interfaz
        sistema.vueloSeleccionado = vueloSeleccionado;
       // mostrarDetallesVuelo(vueloSeleccionado);//
        cambiarPaso(1, 2); // Cambiar al paso del formulario de pasajeros
    } else {
        console.error('Vuelo no encontrado');
    }
}

// Función para cambiar entre pasos
function cambiarPaso(pasoActual, pasoSiguiente) {
    // Cambiar clase del paso actual
    document.getElementById(`step${pasoActual}-indicator`).classList.remove('active');
    document.getElementById(`step${pasoSiguiente}-indicator`).classList.add('active');

    const pasoActualDiv = document.querySelector(`[id$="Step"]:not(.hidden)`);
    pasoActualDiv.classList.add('hidden');

    const pasoSiguienteDiv = document.getElementById(
        pasoSiguiente === 1 ? 'searchStep' :
        pasoSiguiente === 2 ? 'passengerStep' :
        pasoSiguiente === 3 ? 'servicesStep' :
        pasoSiguiente === 4 ? 'paymentStep' : 'confirmationStep'
    );
    pasoSiguienteDiv.classList.remove('hidden');
}

// Evento para el formulario de pasajeros
document.getElementById('passengerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtén los datos del pasajero
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const documento = document.getElementById('document').value;
    const asientoSeleccionado = document.getElementById('selectedSeat').value;

    const pasajero = new Pasajero(nombre, apellido, email, documento, telefono);
    

    // Crea la reserva
    const reserva = sistema.crearReserva(sistema.vueloSeleccionado, pasajero, asientoSeleccionado);
   
       
    // Aquí se usa el vuelo seleccionado correctamente
    if (!sistema.vueloSeleccionado) {
        console.error('No hay un vuelo seleccionado');
        return; // Salir si no hay vuelo seleccionado
    }


    // Muestra el resumen y pasa a la siguiente sección
    mostrarResumenReserva(reserva);
    cambiarPaso(2, 3);
});

// Muestra el resumen de la reserva
function mostrarResumenReserva(reserva) {
    const resumenDiv = document.getElementById('reservationSummary');
    resumenDiv.innerHTML = `
        <h3>Resumen de Reserva</h3>
        <p>Vuelo: ${reserva.vuelo.numeroVuelo}</p>
        <p>Pasajero: ${reserva.pasajero.nombre} ${reserva.pasajero.apellido}</p>
        <p>Asiento: ${reserva.asiento}</p>
        <p>Precio Total: ${reserva.precioTotal}€</p>
    `;
}

// Función para mostrar el popup
function mostrarPopup(contenido) {
    const popupContainer = document.getElementById('popupContainer');
    const popupReceipt = document.getElementById('popupReceipt');
    
    if (popupContainer && popupReceipt) {
        popupReceipt.innerHTML = contenido;
        popupContainer.classList.remove('hidden');
        popupContainer.classList.add('show');
    } else {
        console.error('Elementos del popup no encontrados');
    }
}

// Función para cerrar el popup
function cerrarPopup() {
    const popupContainer = document.getElementById('popupContainer');
    
    if (popupContainer) {
        popupContainer.classList.add('hidden');
        popupContainer.classList.remove('show');
    }
}

// Añadir evento al botón de cerrar
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar popup al hacer clic fuera del contenido
    const popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
        popupContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarPopup();
            }
        });
    }
});

// Evento para el formulario de pago
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const datosPago = {
        cardNumber: document.getElementById('cardNumber').value,
        expiryDate: document.getElementById('expiryDate').value,
        cvv: document.getElementById('cvv').value,
        cardName: document.getElementById('cardName').value
       
    };

    // Aquí deberías tener acceso a tu objeto sistema y la reserva
    const reserva = sistema.reservas.find(r => r.vuelo.numeroVuelo === sistema.vueloSeleccionado.numeroVuelo);

    if (reserva) {
        try {
            const pagoExitoso = sistema.confirmarPago(reserva, datosPago);

            if (pagoExitoso) {
                const recibo = new GenerarRecibo(reserva);
                mostrarPopup(recibo.generarReciboHTML());
            } else {
                alert("Error en el pago. Verifique los datos de la tarjeta.");
            }
        } catch (error) {
            alert("Error al procesar el pago: " + error.message);
        }
    } else {
        alert("No se encontró la reserva");
    }
});
