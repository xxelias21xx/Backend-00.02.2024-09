class Cliente {
    constructor(nombre, telefono, email, dispositivo) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.dispositivo = dispositivo;
    }
}

class Celular {
    constructor(modelo, marca, color, serie, imei, sistema) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.serie = serie;
        this.imei = imei;
        this.sistema = sistema;
    }
}

class Tecnico {
    constructor(nombre, celular, correo, precio, skill) {
        this.nombre = nombre;
        this.celular = celular;
        this.correo = correo;
        this.precio = precio;
        this.skill = skill;
    }
}

class IMEIBloq {
    constructor() {
        this.reportedIMEIs = ["123456789012345"];
    }

    verificarIMEI(imei) {
        return this.reportedIMEIs.includes(imei);
    }
}

class PasoManager {
    constructor() {
    }

    cambiarPaso(pasoActual, pasoSiguiente) {
        localStorage.setItem('pasoActual', pasoSiguiente);

        document.getElementById(`searchStep`).classList.toggle('hidden', pasoSiguiente !== 1);
        document.getElementById(`datoCliente`).classList.toggle('hidden', pasoSiguiente !== 2);
        document.getElementById(`servicio`).classList.toggle('hidden', pasoSiguiente !== 3);
        document.getElementById(`confirmacionStep`).classList.toggle('hidden', pasoSiguiente !== 4);

        document.getElementById(`step${pasoActual}-indicator`)?.classList.remove('active');
        document.getElementById(`step${pasoSiguiente}-indicator`)?.classList.add('active');
    }
}

class opcionAlmacLocal {
    constructor() {
    }

    guardar(clave, valor) {
        try {
            localStorage.setItem(clave, JSON.stringify(valor));
            console.log(`Datos Guardados Correctamente con la clave:${clave}`);
        } catch (error) {
            console.error("Error al guardar en localStorage:", error);
        }
    }

    obtener(clave) {
        try {
            const valor = localStorage.getItem(clave);
            if (valor === null || valor === undefined) {
                return null;
            }
            return JSON.parse(valor);
        } catch (error) {
            console.error("Error al obtener datos de localStorage:", error);
            return null;
        }
    }

    eliminar(clave) {
        try {
            localStorage.removeItem(clave);
            console.log(`Datos eliminados correctamente con la clave: ${clave}`);
        } catch (error) {
            console.error("Error al eliminar datos de localStorage:", error);
        }
    }
}

class IMEIConsult {
    constructor() {
        this.IMEIbusqueda = new IMEIBloq();
        this.pasCliente = new PasoManager();
        this.storage = new opcionAlmacLocal();
        this.consultarIMEIBoton = document.getElementById('consultarIMEI');
        this.consultarIMEIBoton.addEventListener("click", () => this.mostrarPopupIMEI());
    }

    mostrarPopupIMEI() {
        this.storage.eliminar("imei");
        this.storage.eliminar("datosCliente");

        const IMEIIngresado = prompt("Estimado, ingrese el IMEI de su dispositivo, por favor.");
        if (IMEIIngresado) {
            this.validarIMEI(IMEIIngresado);
        }
    }

    validarIMEI(imei) {
        if (this.IMEIbusqueda.verificarIMEI(imei)) {
            alert("El IMEI ingresado está reportado como robado o perdido. No puede continuar con la cotización.");
        } else {
            alert("IMEI no reportado. Puede proceder a llenar el formulario.");
            this.storage.guardar("imei", imei);
            const mostrarIMEIInput = document.getElementById("mostrarIMEI");
            if (mostrarIMEIInput) {
                mostrarIMEIInput.value = imei;
            }
            this.pasCliente.cambiarPaso(1, 2);
        }
    }
}

class nuevoSolicitud {
    constructor() {
        this.storage = new opcionAlmacLocal();
        this.cargarIMEI();
        this.inicializarDatos();
        this.pasServicio = new PasoManager();
        this.guardarDatos();
        this.enviarDatos();
    }

    inicializarDatos() {
        const datos = {
            imei: this.storage.obtener("imei"),
            provincia: document.getElementById("provincia")?.value,
            cliente: {
                nombre: document.getElementById("nomnbreCliente")?.value,
                telefono: document.getElementById("telefonoCliente")?.value,
                email: document.getElementById("emailCliente")?.value,
                dispositivo: {
                    marca: document.getElementById("marcaCelular")?.value,
                    modelo: document.getElementById("modeloCelular")?.value,
                    sistema: document.getElementById("sistema")?.value,
                }
            }
        }
    }

    cargarIMEI() {
        const imei = this.storage.obtener("imei");
        const inputIMEI = document.getElementById("mostrarIMEI");
        if (imei && inputIMEI) {
            inputIMEI.value = imei;
        }
    }

    obtenerDatos() {
        return {
            nombre: document.getElementById("nombreCliente")?.value || "",
            telefono: document.getElementById("telefonoCliente")?.value || "",
            provincia: document.getElementById("provincia")?.value || "",
            email: document.getElementById("emailCliente")?.value || "",
            dispositivo: {
                marca: document.getElementById("marcaCelular")?.value || "",
                modelo: document.getElementById("modeloCelular")?.value || "",
                sistema: document.getElementById("sistema")?.value || "",
            }
        }
    }

    guardarDatos() {
        const datosCliente = this.obtenerDatos();
        this.storage.guardar("datosCliente", datosCliente);
        console.log("Datos del cliente guardados", datosCliente);
    }

    enviarDatos() {
        const botonContinuar = document.getElementById("Continuar");
        if (botonContinuar) {
            botonContinuar.addEventListener("click", (e) => {
                e.preventDefault();
                this.guardarDatos();
                this.pasServicio.cambiarPaso(2, 3);
            });
        }
    }
}

class servicioCliente {
    constructor() {
        this.almacenamiento = new opcionAlmacLocal();
        this.servicioActual = '';
        this.listTecnicos();
        this.inicializarEventListeners();
        this.pasPago = new PasoManager();
    }

    listTecnicos() {
        const tecnicosUp = {
            celular: {
                Lima: [
                    new Tecnico("Juan Pérez", "999999999", "juan@email.com", 150, ["celular"]),
                    new Tecnico("Ana Silva", "999999998", "ana@email.com", 130, ["celular"])
                ],
                Callao: [
                    new Tecnico("Carlos López", "999999997", "carlos@email.com", 140, ["celular"]),
                    new Tecnico("María Torres", "999999996", "maria@email.com", 120, ["celular"])
                ],
                Arequipa: [
                    new Tecnico("Pedro Mamani", "999999995", "pedro@email.com", 130, ["celular"]),
                    new Tecnico("Laura Condori", "999999994", "laura@email.com", 110, ["celular"])
                ]
            },
            laptop: {
                Lima: [
                    new Tecnico("Roberto García", "999999993", "roberto@email.com", 200, ["laptop"]),
                    new Tecnico("Carmen Ruiz", "999999992", "carmen@email.com", 180, ["laptop"])
                ],
                Callao: [
                    new Tecnico("Diego Castro", "999999991", "diego@email.com", 190, ["laptop"]),
                    new Tecnico("Sofia Vargas", "999999990", "sofia@email.com", 170, ["laptop"])
                ],
                Arequipa: [
                    new Tecnico("José Flores", "999999989", "jose@email.com", 180, ["laptop"]),
                    new Tecnico("Lucía Mendoza", "999999988", "lucia@email.com", 160, ["laptop"])
                ]
            }
        };

        this.almacenamiento.guardar('tecnicosDisponibles', tecnicosUp);
    }

    inicializarEventListeners() {
        document.querySelectorAll('input[name="servicio"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.toggleOptions(e.target.value));
        });

        document.querySelectorAll('input[name="dispositivo"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.mostrarDetallesServicio(e.target.value));
        });

        const revisionRadio = document.querySelector('input[name="tipoRevision"]');
        if (revisionRadio) {
            revisionRadio.addEventListener('change', () => this.mostrarDetallesServicio('revision'));
        }

        const selectProvincia = document.getElementById('selectProvincia');
        if (selectProvincia) {
            selectProvincia.addEventListener('change', () => this.actualizarTecnicos());
        }

        const selectTecnico = document.getElementById('selectTecnico');
        if (selectTecnico) {
            selectTecnico.addEventListener('change', () => this.actualizarPrecio());
        }

        const formServicio = document.getElementById('formServicio');
        if (formServicio) {
            formServicio.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    getProvincias() {
        return ["Lima", "Callao", "Arequipa"];
    }

    getTecnicos(tipoServicio, provincia) {
        const tecnicosGuardados = this.almacenamiento.obtener('tecnicosDisponibles');

        if (tecnicosGuardados &&
            tecnicosGuardados[tipoServicio] &&
            tecnicosGuardados[tipoServicio][provincia]) {
            return tecnicosGuardados[tipoServicio][provincia];
        }

        if (this.tecnicosUp &&
            this.tecnicosUp[tipoServicio] &&
            this.tecnicosUp[tipoServicio][provincia]) {
            return this.tecnicosUp[tipoServicio][provincia];
        }

        return [];
    }

    getPrecio(tipoServicio, provincia, nombreTecnico) {
        const tecnicos = this.getTecnicos(tipoServicio, provincia);
        const tecnico = tecnicos.find(t => t.nombre === nombreTecnico);
        return tecnico ? tecnico.precio : 0;
    }

    toggleOptions(servicio) {
        document.querySelectorAll('.option-group').forEach(group => {
            group.style.display = 'none';
        });

        const grupoServicio = document.getElementById(servicio);
        if (grupoServicio) {
            grupoServicio.style.display = 'block';
        }

        document.getElementById('detallesServicio').style.display = 'none';
        document.getElementById('selectProvincia').innerHTML = '<option value="">Seleccione una provincia</option>';
        document.getElementById('selectTecnico').innerHTML = '<option value="">Seleccione un técnico</option>';
        document.getElementById('precioServicio').textContent = 'S/. 0.00';
    }

    mostrarDetallesServicio(tipo) {
        this.servicioActual = tipo;
        const detallesServicio = document.getElementById('detallesServicio');
        detallesServicio.style.display = 'block';

        const selectProvincia = document.getElementById('selectProvincia');
        selectProvincia.innerHTML = '<option value="">Seleccione una provincia</option>';

        this.getProvincias().forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia;
            option.textContent = provincia;
            selectProvincia.appendChild(option);
        });
    }

    actualizarTecnicos() {
        const provincia = document.getElementById('selectProvincia').value;
        const selectTecnico = document.getElementById('selectTecnico');

        selectTecnico.innerHTML = '<option value="">Seleccione un técnico</option>';

        if (provincia && this.servicioActual) {
            const tecnicos = this.getTecnicos(this.servicioActual, provincia);

            if (tecnicos && tecnicos.length > 0) {
                tecnicos.forEach(tecnico => {
                    const option = document.createElement('option');
                    option.value = tecnico.nombre;
                    option.textContent = `${tecnico.nombre} - ${tecnico.celular}`;
                    selectTecnico.appendChild(option);
                });
            }
        }

        this.actualizarPrecio();
    }

    actualizarPrecio() {
        const provincia = document.getElementById('selectProvincia').value;
        const nombreTecnico = document.getElementById('selectTecnico').value;
        const precioElement = document.getElementById('precioServicio');

        if (provincia && nombreTecnico && this.servicioActual) {
            const precio = this.getPrecio(this.servicioActual, provincia, nombreTecnico);
            precioElement.textContent = `S/. ${precio.toFixed(2)}`;
        } else {
            precioElement.textContent = 'S/. 0.00';
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const provincia = document.getElementById('selectProvincia').value;
        const tecnico = document.getElementById('selectTecnico').value;
        const precio = document.getElementById('precioServicio').textContent;

        if (!provincia || !tecnico) {
            alert('Por favor, complete todos los campos');
            return;
        }

        // Obtener los datos del cliente del almacenamiento
        const datosCliente = this.almacenamiento.obtener('datosCliente');

        // Crear un ID único para la solicitud
        const solicitudId = 'solicitud_' + Date.now();

        // Crear objeto de solicitud
        const nuevaSolicitud = {
            id: solicitudId,
            fecha: new Date().toISOString(),
            estado: 'pendiente',
            cliente: {
                nombre: datosCliente.nombre,
                telefono: datosCliente.telefono,
                email: datosCliente.email
            },
            dispositivo: {
                marca: datosCliente.dispositivo.marca,
                modelo: datosCliente.dispositivo.modelo,
                sistema: datosCliente.dispositivo.sistema,
                imei: this.almacenamiento.obtener('imei')
            },
            servicio: {
                tipo: this.servicioActual,
                provincia: provincia,
                tecnico: tecnico,
                precio: precio
            }
        };

        // Obtener solicitudes existentes o crear array vacío
        const solicitudesExistentes = this.almacenamiento.obtener('solicitudesServicio') || [];

        // Agregar nueva solicitud
        solicitudesExistentes.push(nuevaSolicitud);

        // Guardar en localStorage
        this.almacenamiento.guardar('solicitudesServicio', solicitudesExistentes);

        alert('Solicitud registrada exitosamente.\nID de seguimiento: ' + solicitudId);
        this.pasPago.cambiarPaso(3, 4);
    }
}

class servicioPago {
    constructor() {
        this.storage = new opcionAlmacLocal();
        this.inicializarFormularioPago();
        this.manejarEventosPago();
        this.pasInicio = new PasoManager();
    }

    inicializarFormularioPago() {
        const formularioPago = document.getElementById('formularioPago');
        if (formularioPago) {
            const datosServicio = this.storage.obtener('seleccionServicio');
            if (datosServicio) {
                const precioTotal = parseFloat(datosServicio.precio.replace('S/. ', ''));
                const adelanto = precioTotal * 0.5;

                document.getElementById('montoTotal').textContent = `S/. ${precioTotal.toFixed(2)}`;
                document.getElementById('montoAdelanto').textContent = `S/. ${adelanto.toFixed(2)}`;
            }
        }
    }

    manejarEventosPago() {
        const formularioAutorizacion = document.getElementById('formularioAutorizacion');
        if (formularioAutorizacion) {
            formularioAutorizacion.addEventListener('submit', (e) => this.procesarAutorizacion(e));
            
        }

        const botonConfirmarPago = document.getElementById('confirmarPago');
        if (botonConfirmarPago) {
            botonConfirmarPago.addEventListener("click", (e) => {
            this.pasInicio.cambiarPaso(4, 1);
          
        });
        }
    }

    procesarAutorizacion(evento) {
        evento.preventDefault();
        const archivoAutorizacion = document.getElementById('archivoAutorizacion').files[0];
        if (!archivoAutorizacion) {
            alert('Por favor, adjunte la autorización firmada');
            return;
        }

        this.storage.guardar('estadoAutorizacion', 'aprobado');
        document.getElementById('seccionPago').classList.remove('hidden');
    }

    async procesarPago() {
        const montoAdelanto = document.getElementById('montoAdelanto').textContent;
        const estadoAuth = this.storage.obtener('estadoAutorizacion');

        if (estadoAuth !== 'aprobado') {
            alert('Se requiere autorización firmada antes de proceder con el pago');
            return;
        }

        try {
            const datosPago = {
                monto: montoAdelanto,
                fecha: new Date().toISOString(),
                estado: 'completado'
            };

            this.storage.guardar('datosPago', datosPago);
            alert('Pago procesado exitosamente');
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            alert('Error al procesar el pago. Por favor, intente nuevamente.');
        }
    }
}

class dashboardTecnico {
    constructor() {
        this.storage = new opcionAlmacLocal();
        this.inicializarDashboard();
        window.DashboardTecnico = this;
    }

    inicializarDashboard() {
        try {
            console.log('Inicializando dashboard...');
            const sesionActual = this.storage.obtener('sesionTecnico');
            console.log('Sesión actual:', sesionActual);
            
            this.cargarServiciosAsignados(sesionActual?.usuario || '');
            this.inicializarFiltroTecnicos();
            this.actualizarNombreUsuario();
            
            // Mostrar el nombre del técnico en sesión
            const nombreUsuarioSpan = document.getElementById('nombreUsuario');
            if (nombreUsuarioSpan && sesionActual) {
                nombreUsuarioSpan.textContent = `Técnico: ${sesionActual.usuario}`;
            }
        } catch (error) {
            console.error('Error al inicializar dashboard:', error);
        }
    }

    inicializarEventListeners() {
        // Manejador del filtro de técnicos
        const selectFiltro = document.getElementById('selectFiltroTecnico');
        if (selectFiltro) {
            selectFiltro.addEventListener('change', (e) => {
                this.cargarServiciosAsignados(e.target.value);
            });
        }

        // Manejador del botón de cerrar sesión
        const btnCerrarSesion = document.querySelector('.btn-cerrar-sesion');
        if (btnCerrarSesion) {
            btnCerrarSesion.addEventListener('click', () => {
                const manejador = new manejadorPanelTecnico();
                manejador.cerrarSesion();
            });
        }
    }

    actualizarNombreUsuario() {
        const sesion = this.storage.obtener('sesionTecnico');
        const spanNombre = document.getElementById('nombreUsuario');
        if (sesion && spanNombre) {
            spanNombre.textContent = `Usuario: ${sesion.usuario}`;
        }
    }

    obtenerTecnicosUnicos() {
        const solicitudes = this.storage.obtener('solicitudesServicio') || [];
        const tecnicos = new Set(solicitudes.map(s => s.servicio?.tecnico).filter(Boolean));
        return Array.from(tecnicos);
    }

    inicializarFiltroTecnicos() {
        const selectFiltro = document.getElementById('selectFiltroTecnico');
        if (selectFiltro) {
            const tecnicos = this.obtenerTecnicosUnicos();
            selectFiltro.innerHTML = '<option value="">Todos los técnicos</option>';
            tecnicos.forEach(tecnico => {
                const option = document.createElement('option');
                option.value = tecnico;
                option.textContent = tecnico;
                selectFiltro.appendChild(option);
            });

            // Seleccionar automáticamente el técnico actual si está en sesión
            const sesion = this.storage.obtener('sesionTecnico');
            if (sesion) {
                selectFiltro.value = sesion.usuario;
                this.cargarServiciosAsignados(sesion.usuario);
            }
        }
    }

    cargarServiciosAsignados(filtroTecnico = '') {
        try {
            console.log('Cargando servicios para técnico:', filtroTecnico);
            const solicitudes = this.storage.obtener('solicitudesServicio') || [];
            console.log('Solicitudes encontradas:', solicitudes);

            const solicitudesFiltradas = filtroTecnico ? 
                solicitudes.filter(s => s.servicio?.tecnico === filtroTecnico) : 
                solicitudes;

            console.log('Solicitudes filtradas:', solicitudesFiltradas);

            const contenedorServicios = document.getElementById('listaServicios');
            if (!contenedorServicios) {
                console.error('No se encontró el contenedor de servicios');
                return;
            }

            if (solicitudesFiltradas.length === 0) {
                contenedorServicios.innerHTML = '<p class="text-center">No hay solicitudes asignadas.</p>';
                return;
            }

            contenedorServicios.innerHTML = solicitudesFiltradas
                .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                .map(solicitud => this.crearTarjetaServicio(solicitud))
                .join('');
        } catch (error) {
            console.error('Error al cargar servicios:', error);
        }
    }


    crearTarjetaServicio(solicitud) {
        const sesionActual = this.storage.obtener('sesionTecnico');
        const esTecnicoAsignado = sesionActual && solicitud.servicio?.tecnico === sesionActual.usuario;

        return `
            <div class="servicio-card" data-id="${solicitud.id}">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h5>Cliente: ${solicitud.cliente?.nombre || 'No especificado'}</h5>
                        <p class="mb-1">Dispositivo: ${solicitud.dispositivo?.marca || ''} ${solicitud.dispositivo?.modelo || ''}</p>
                        <p class="mb-1">Sistema: ${solicitud.dispositivo?.sistema || 'No especificado'}</p>
                        <p class="mb-1">IMEI: ${solicitud.dispositivo?.imei || 'No especificado'}</p>
                        <p class="mb-1">Fecha: ${this.formatearFecha(solicitud.fecha)}</p>
                        <p class="mb-1">Provincia: ${solicitud.servicio?.provincia || 'No especificada'}</p>
                        <p class="mb-1">Precio: ${solicitud.servicio?.precio || 'No especificado'}</p>
                        <p class="mb-1">Contacto: ${solicitud.cliente?.telefono || ''} | ${solicitud.cliente?.email || ''}</p>
                        ${solicitud.diagnostico ? `
                            <div class="mt-2">
                                <strong>Diagnóstico:</strong>
                                <p class="mb-1">${solicitud.diagnostico}</p>
                            </div>
                        ` : ''}
                        ${this.mostrarRepuestos(solicitud)}
                    </div>
                    <span class="estado-badge estado-${solicitud.estado}">
                        ${this.formatearEstado(solicitud.estado)}
                    </span>
                </div>
                <div class="mt-3 action-buttons">
                    ${esTecnicoAsignado ? this.generarBotonesAccion(solicitud) : 
                      `<p class="text-muted">Asignado a: ${solicitud.servicio?.tecnico || 'No asignado'}</p>`}
                </div>
            </div>
        `;
    }

    mostrarRepuestos(solicitud) {
        if (!solicitud.repuestos || solicitud.repuestos.length === 0) return '';

        return `
            <div class="repuestos-lista mt-2">
                <h6>Repuestos:</h6>
                <ul>${solicitud.repuestos.map(repuesto => `
                    <li>${repuesto.nombre} - S/. ${repuesto.precio}</li>
                `).join('')}
            </ul>
        </div>
    `;
    }

    generarBotonesAccion(solicitud) {
        let buttons = '';
        
        switch(solicitud.estado) {
            case 'pendiente':
                buttons = `
                    <button 
                        class="btn btn-sm btn-primary" 
                        onclick="window.DashboardTecnico.gestionarDiagnostico('${solicitud.id}')"
                    >
                        Iniciar Diagnóstico
                    </button>
                `;
                break;
                
            case 'diagnosticado':
                buttons = `
                    <button 
                        class="btn btn-sm btn-success" 
                        onclick="window.DashboardTecnico.iniciarReparacion('${solicitud.id}')"
                    >
                        Iniciar Reparación
                    </button>
                `;
                break;
                
            case 'en_reparacion':
                buttons = `
                    <button 
                        class="btn btn-sm btn-info me-2" 
                        onclick="window.DashboardTecnico.agregarRepuestos('${solicitud.id}')"
                    >
                        Gestionar Repuestos
                    </button>
                    <button 
                        class="btn btn-sm btn-success" 
                        onclick="window.DashboardTecnico.completarServicio('${solicitud.id}')"
                    >
                        Completar Servicio
                    </button>
                `;
                break;
                
            case 'completado':
                buttons = `<span class="text-success">Servicio finalizado</span>`;
                break;
        }

        return buttons;
    }

    formatearFecha(fecha) {
        try {
            return new Date(fecha).toLocaleString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return 'Fecha no válida';
        }
    }

    formatearEstado(estado) {
        const estados = {
            'pendiente': 'Pendiente',
            'diagnosticado': 'Diagnosticado',
            'en_reparacion': 'En Reparación',
            'completado': 'Completado'
        };
        return estados[estado] || estado || 'Pendiente';
    }

    gestionarDiagnostico(solicitudId) {
        const solicitudes = this.storage.obtener('solicitudesServicio') || [];
        const solicitud = solicitudes.find(s => s.id === solicitudId);

        if (!solicitud) {
            alert('Solicitud no encontrada');
            return;
        }

        const diagnostico = prompt('Ingrese el diagnóstico del dispositivo:');
        if (diagnostico) {
            solicitud.diagnostico = diagnostico;
            solicitud.estado = 'diagnosticado';
            solicitud.fechaDiagnostico = new Date().toISOString();

            this.storage.guardar('solicitudesServicio', solicitudes);
            this.cargarServiciosAsignados(document.getElementById('selectFiltroTecnico')?.value);
            alert('Diagnóstico guardado exitosamente');
        }
    }

    iniciarReparacion(solicitudId) {
        const solicitudes = this.storage.obtener('solicitudesServicio') || [];
        const solicitud = solicitudes.find(s => s.id === solicitudId);

        if (!solicitud) return;

        const confirmacion = confirm('¿Está seguro de iniciar la reparación?');
        if (confirmacion) {
            solicitud.estado = 'en_reparacion';
            solicitud.fechaInicioReparacion = new Date().toISOString();

            this.storage.guardar('solicitudesServicio', solicitudes);
            this.cargarServiciosAsignados(this.storage.obtener('sesionTecnico')?.usuario);
            alert('Reparación iniciada exitosamente');
        }
    }

    agregarRepuestos(solicitudId) {
        const nombreRepuesto = prompt('Nombre del repuesto:');
        if (!nombreRepuesto) return;

        const precioRepuesto = prompt('Precio del repuesto:');
        if (!precioRepuesto || isNaN(precioRepuesto)) {
            alert('Por favor, ingrese un precio válido');
            return;
        }

        const solicitudes = this.storage.obtener('solicitudesServicio') || [];
        const solicitud = solicitudes.find(s => s.id === solicitudId);

        if (!solicitud) return;

        if (!solicitud.repuestos) solicitud.repuestos = [];

        solicitud.repuestos.push({
            nombre: nombreRepuesto,
            precio: parseFloat(precioRepuesto),
            fecha: new Date().toISOString()
        });

        this.storage.guardar('solicitudesServicio', solicitudes);
        this.cargarServiciosAsignados(this.storage.obtener('sesionTecnico')?.usuario);
        alert('Repuesto agregado exitosamente');
    }

    completarServicio(solicitudId) {
        const solicitudes = this.storage.obtener('solicitudesServicio') || [];
        const solicitud = solicitudes.find(s => s.id === solicitudId);

        if (!solicitud) return;

        const confirmacion = confirm('¿Está seguro de marcar este servicio como completado?');
        if (confirmacion) {
            solicitud.estado = 'completado';
            solicitud.fechaCompletado = new Date().toISOString();

            this.storage.guardar('solicitudesServicio', solicitudes);
            this.cargarServiciosAsignados(this.storage.obtener('sesionTecnico')?.usuario);
            alert('Servicio completado exitosamente');
        }
    }
}

class manejadorPanelTecnico {
    constructor() {
        this.storage = new opcionAlmacLocal();
        this.inicializarEventos();
        this.verificarSesion();
    }

    inicializarEventos() {
        const btnAccesoTecnico = document.getElementById('btnAccesoTecnico');
        if (btnAccesoTecnico) {
            btnAccesoTecnico.addEventListener('click', () => this.mostrarPanel());
        }

        const btnCerrar = document.getElementById('cerrarPanel');
        if (btnCerrar) {
            btnCerrar.addEventListener('click', () => this.cerrarSesion());
        }

        const formLogin = document.getElementById('loginTecnico');
        if (formLogin) {
            formLogin.addEventListener('submit', (e) => this.manejarLogin(e));
        }
    }

    verificarSesion() {
        const sesionActual = this.storage.obtener('sesionTecnico');
        if (sesionActual) {
            this.mostrarPanelTecnico();
        }
    }

    mostrarPanel() {
        const sesionActual = this.storage.obtener('sesionTecnico');
        if (sesionActual) {
            this.mostrarPanelTecnico();
        } else {
            this.mostrarLogin();
        }
    }

    mostrarLogin() {
        this.toggleElementosPrincipales(true);
        const panel = document.getElementById('panelTecnico');
        const formLogin = document.getElementById('loginTecnico');
        const contenidoPanel = document.getElementById('contenidoPanel');

        if (panel && formLogin && contenidoPanel) {
            panel.classList.remove('hidden');
            formLogin.classList.remove('hidden');
            contenidoPanel.classList.add('hidden');
        }
    }

    mostrarPanelTecnico() {
        this.toggleElementosPrincipales(true);
        const panel = document.getElementById('panelTecnico');
        const formLogin = document.getElementById('loginTecnico');
        const contenidoPanel = document.getElementById('contenidoPanel');

        if (panel && formLogin && contenidoPanel) {
            panel.classList.remove('hidden');
            formLogin.classList.add('hidden');
            contenidoPanel.classList.remove('hidden');
            window.DashboardTecnico.cargarServiciosAsignados();
        }
    }

    manejarLogin(evento) {
        evento.preventDefault();
        const usuario = document.getElementById('usuarioTecnico')?.value;
        const password = document.getElementById('passwordTecnico')?.value;

        if (!usuario || !password) {
            alert('Por favor, complete todos los campos');
            return;
        }

        if (this.validarCredenciales(usuario, password)) {
            this.storage.guardar('sesionTecnico', {
                usuario: usuario,
                fechaLogin: new Date().toISOString()
            });
            this.mostrarPanelTecnico();
        } else {
            alert('Credenciales inválidas');
        }
    }

    validarCredenciales(usuario, password) {
        const tecnicosValidos = {
            'Juan.Perez': '123456',
            'Ana.Silva': '123456',
            'Carlos.Lopez': '123456',
            'Maria.Torres': '123456'
        };
        return tecnicosValidos[usuario] === password;
    }

    toggleElementosPrincipales(ocultar) {
        const elementosParaOcultar = [
            'jumbotron',
            'step-indicator',
            'searchStep',
            'datoCliente',
            'servicio',
            'confirmacionStep'
        ];

        elementosParaOcultar.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.classList.toggle('hidden', ocultar);
            }
        });
    }

    cerrarSesion() {
        this.storage.eliminar('sesionTecnico');
        this.toggleElementosPrincipales(false);
        const panel = document.getElementById('panelTecnico');
        if (panel) {
            panel.classList.add('hidden');
        }
        // Recargar la página para reiniciar el estado
        window.location.reload();
    }
}

// Inicialización de las instancias
document.addEventListener('DOMContentLoaded', () => {
    const imeiConsult = new IMEIConsult();
    const NuevaSolicitud = new nuevoSolicitud();
    const ServicioCliente = new servicioCliente();
    const ServicioPago = new servicioPago();
    window.DashboardTecnico = new dashboardTecnico();
    const ManejadorPanelTecnico = new manejadorPanelTecnico();
});