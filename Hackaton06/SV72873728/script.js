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

class Usuario {
    constructor(nombre, id, password) {
        this.nombre = nombre;
        this.id = id;
        this.password = password;
    }
}

class SistemaReparaciones {
    constructor() {
        //  this.sucursales = [];
        //  this.telefonosRobados = new Set(); // Se guardan los IMEI que estan declarados como robados
        const sucursalesGuardadas = JSON.parse(localStorage.getItem('sucursales')) || [];
        
        this.sucursales = sucursalesGuardadas.map(s => {
            const sucursal = new Sucursal(s.nombre, s.ubicacion);
            s.tecnicos.forEach(tecnicoData => {
                const tecnico = new Tecnico(tecnicoData.nombre, tecnicoData.especialidades, sucursal.nombre); // No agregamos el objeto completo
                sucursal.agregarTecnico(tecnico);
            });
            return sucursal;
        });

        this.telefonosRobados = new Set(JSON.parse(localStorage.getItem('telefonosRobados')) || []); // Se guardan los IMEI que estan declarados como robados
        this.usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        if (this.usuarios.length === 0) {
            this.agregarUsuario('admin', 'admin', 'admin');
        }
    }

    guardarEnLocalStorage() {
        const sucursalesPlanas = this.sucursales.map(sucursal => ({
            nombre: sucursal.nombre,
            ubicacion: sucursal.ubicacion,
            tecnicos: sucursal.tecnicos.map(tecnico => ({
                nombre: tecnico.nombre,
                especialidades: tecnico.especialidades
            }))
        }));
        localStorage.setItem('sucursales', JSON.stringify(sucursalesPlanas));
        localStorage.setItem('telefonosRobados', JSON.stringify([...this.telefonosRobados]));
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios)); // Guardar usuarios
    }

    agregarSucursal(nombre, ubicacion) {
        const nuevaSucursal = new Sucursal(nombre, ubicacion);
        this.sucursales.push(nuevaSucursal);
        console.log(`Sucursal creada: ${nombre}, Ubicación: ${ubicacion}`);
        this.guardarEnLocalStorage();
    }

    agregarTecnico(nombre, especialidades, sucursalNombre) {
        const sucursal = this.sucursales.find(s => s.nombre === sucursalNombre);
        if (sucursal) {
            const nuevoTecnico = new Tecnico(nombre, especialidades.split(',').map(s => s.trim()), sucursal);
            sucursal.agregarTecnico(nuevoTecnico);
            console.log(`Técnico agregado: ${nombre}, Especialidades: ${especialidades}, Sucursal: ${sucursalNombre}`);
            this.guardarEnLocalStorage();
        } else {
            console.log(`Sucursal ${sucursalNombre} no encontrada.`);
        }
    }

    eliminarTecnico(nombre, sucursalNombre) {
        const sucursal = this.sucursales.find(s => s.nombre === sucursalNombre);
        if (sucursal) {
            const tecnicoIndex = sucursal.tecnicos.findIndex(t => t.nombre === nombre);
            if (tecnicoIndex !== -1) {
                sucursal.tecnicos.splice(tecnicoIndex, 1);
                console.log(`Técnico ${nombre} eliminado de la sucursal ${sucursalNombre}.`);
                this.guardarEnLocalStorage();
            } else {
                console.log(`Técnico ${nombre} no encontrado en la sucursal ${sucursalNombre}.`);
            }
        } else {
            console.log(`Sucursal ${sucursalNombre} no encontrada.`);
        }
    }

    eliminarSucursal(nombre) {
        const sucursalIndex = this.sucursales.findIndex(s => s.nombre === nombre);
        if (sucursalIndex !== -1) {
            this.sucursales.splice(sucursalIndex, 1);
            console.log(`Sucursal ${nombre} eliminada.`);
            this.guardarEnLocalStorage();
        } else {
            console.log(`Sucursal ${nombre} no encontrada.`);
        }
    }

    reportarTelefonoRobado(imei) {
        this.telefonosRobados.add(imei);
        console.log(`Teléfono robado reportado: IMEI ${imei}`);
        this.guardarEnLocalStorage();
    }

    eliminarTelefonoRobado(imei) {
        if (this.telefonosRobados.has(imei)) {
            this.telefonosRobados.delete(imei);
            console.log(`IMEI ${imei} eliminado de la lista de teléfonos robados.`);
            this.guardarEnLocalStorage();
        } else {
            console.log(`El IMEI ${imei} no está en la lista de teléfonos robados.`);
        }
    }

    agregarUsuario(nombre, id, password) {
        const nuevoUsuario = new Usuario(nombre, id, password);
        this.usuarios.push(nuevoUsuario);
        this.guardarEnLocalStorage();
        console.log(`Usuario agregado: ${nombre}`);
    }

    eliminarUsuario(id) {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        this.guardarEnLocalStorage();
        console.log(`Usuario con ID ${id} eliminado.`);
    }

    verificarUsuario(id, password) {
        return this.usuarios.some(usuario => usuario.id === id && usuario.password === password);
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

        localStorage.setItem('ultimoTicket', JSON.stringify(nuevoTicket));
        // Actualizar el estado del servicio
        console.log(`Reparación en proceso para el cliente ${cliente}. Técnico asignado: ${tecnico.nombre}. Estado: ${nuevoTicket.estado}`);
        
    }
}

// Crear una instancia del sistema
const sistema = new SistemaReparaciones();

// Función para mostrar el formulario de inicio de sesión
function mostrarLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.onsubmit = function(event) {
        event.preventDefault();
        const id = this[0].value;
        const password = this[1].value;

        if (sistema.verificarUsuario(id, password)) {
            sessionStorage.setItem('usuarioActivo', id);  // Guardar el ID del usuario en sessionStorage
            alert("Inicio de sesión exitoso");
            document.getElementById('login').style.display = 'none';  // Ocultar el formulario de inicio
            document.getElementById('contenido').style.display = 'block';  // Mostrar contenido principal
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };
}

// Función para verificar si hay un usuario activo al cargar la página
function verificarUsuarioActivo() {
    const usuarioActivo = sessionStorage.getItem('usuarioActivo');
    if (!usuarioActivo) {
        document.getElementById('login').style.display = 'block';  // Mostrar el formulario de inicio de sesión
    } else {
        alert(`Bienvenido, ${usuarioActivo}`);  // Puedes hacer otra cosa al iniciar sesión
        document.getElementById('contenido').style.display = 'block';  // Mostrar contenido principal
    }
}

// Ejecutar función de inicio de sesión al cargar la página
window.onload = function() {
    verificarUsuarioActivo();
    mostrarLogin();
};


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

document.getElementById('eliminarTecnicoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = this[0].value;
    const sucursalNombre = this[1].value;
    sistema.eliminarTecnico(nombre, sucursalNombre);
    this.reset();
});

document.getElementById('eliminarSucursalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = this[0].value;
    sistema.eliminarSucursal(nombre);
    this.reset();
});

document.getElementById('eliminarTelefonoRobadoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const imei = this[0].value;
    sistema.eliminarTelefonoRobado(imei);
    this.reset();
});

// Manejar el formulario de agregar usuario
document.getElementById('usuarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = this[0].value;
    const id = this[1].value;
    const password = this[2].value;
    sistema.agregarUsuario(nombre, id, password);
    this.reset();
    alert(`Usuario agregado: ${nombre}`);
});

// Manejar el formulario de eliminar usuario
document.getElementById('eliminarUsuarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = this[0].value;
    sistema.eliminarUsuario(id);
    this.reset();
    alert(`Usuario con ID ${id} eliminado.`);
});