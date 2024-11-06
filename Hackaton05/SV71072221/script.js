let celularGlobal;
const Reparacion = function() {
    let Local = "";

    let arrTecnicos =[];

    function configurar () {
        console.log("Inicio de configurar");
        console.log(Local);
        $("#local").text(Local);
        let objTecnico1 = new Tecnicos ("Ronald","Perez");
        objTecnico1.agregarSkill("Microprocesadores", "Pantallas", "Conocimiento marca Apple");
        arrTecnicos.push(objTecnico1);
        let objTecnico2 = new Tecnicos ("Joaquin","Bustamante");
        objTecnico2.agregarSkill("Pantallas", "Baterias", "Conocimiento sistema Android", "Microcontroladores");
        arrTecnicos.push(objTecnico2);
        console.log(arrTecnicos);
    };

    // Eventos para click en botones
    function eventos () {
        console.log("Inicio de eventos");

        $("#Registrar").on("click", registrar);
        $("#Cotizar").on("click", cotizar);

        // Configurar metodo de pago
        const form = document.getElementById('payment-form');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                // Mostrar error
                document.getElementById('payment-result').innerText = error.message;
            } else {
                // Enviar paymentMethod.id a tu servidor
                fetch("http://localhost:3000/create-payment-intent", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify({amount:200})
                  }).then(res => {
                    console.log("Request complete! response:", res);
                  });
                document.getElementById('payment-result').innerText = 'Pago exitoso: ' + paymentMethod.id;
            }
        });
    };

    // Funcion para evento de registrar
    async function registrar() {
        console.log("Inicio de registrar");
        $("#Reparacion").hide();
        $("#cotizacion").hide();
        const { value : formValues} = await Swal.fire({
            title: "Ingrese los datos solicitados",
            icon: "info",
            html: `
            <label class="col-md-4 control-label" for="textinput">Nombre</label>  
            <input id="nombre" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Apellidos</label>  
            <input id="apellidos" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">DNI</label>  
            <input id="dni" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Marca de telefono</label>  
            <input id="marca" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Modelo</label>  
            <input id="modelo" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Numero de Serie</label>  
            <input id="serie" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Numero IMEI</label>  
            <input id="imei" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Problema Reportado</label>  
            <input id="problema" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">¿Imei Reportado?</label>  
             <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary">
                    <input type="radio" name="si" value="si" id="si">SI
                </label>
                <label class="btn btn-secondary active">
                    <input type="radio" name="no" value="no" id="no">NO
                </label>
            </div>
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                const reportado = document.getElementById("si");
                return {
                    nombre: document.getElementById("nombre").value,
                    apellidos: document.getElementById("apellidos").value,
                    dni: document.getElementById("dni").value,
                    marca: document.getElementById("marca"),
                    modelo: document.getElementById("modelo").value,
                    serie: document.getElementById("serie").value,
                    imei: document.getElementById("imei").value,
                    problema: document.getElementById("problema").value,
                    reportado: reportado.checked ? true : false,
                    
                }
            }
        });
        if(formValues) {
            let usuario = new Usuarios(formValues.nombre,formValues.apellidos,formValues.dni);
            let celular = new Celulares(formValues.marca,formValues.modelo,formValues.serie,formValues.imei, formValues.problema, formValues.reportado);
            celular.agregarUsuario(usuario);
            dibujarIngreso(celular);
            console.log(celular);
            console.log(usuario);
            celularGlobal = celular
        }
    }

    // Funcion para dibujar el ingreso
    function dibujarIngreso(celular) {
        $('#ingnombre').val(celular.Usuarios.Nombre);
        $('#ingapellido').val(celular.Usuarios.Apellido);
        $('#ingdni').val(celular.Usuarios.DNI);
        $('#ingmodelo').val(celular.modelo);
        $('#ingserie').val(celular.numSerie);
        $('#ingimei').val(celular.IMEI);
        $('#ingproblema').val(celular.observacion);    
        $("#Reparacion").show();
        $("#cotizacion").hide();
    }

    // Funcion para evento de cotizar
    async function cotizar() {
        console.log("Iniciio de cotizar");
        console.log("Inicio de cotizar");
        $("#Ingreso").hide();
        const { value : formValues} = await Swal.fire({
            title: "Ingrese los datos de la cotización",
            icon: "info",
            html: `
            <label class="col-md-4 control-label" for="textinput">Tecnico de diagnostico</label>  
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="opcion" value="opcion1" id="opcion1">${arrTecnicos[0].Nombre} ${arrTecnicos[0].Apellido}
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="opcion" value="opcion2" id="opcion2">${arrTecnicos[1].Nombre} ${arrTecnicos[1].Apellido}
                </label>
            </div>
            <label class="col-md-4 control-label" for="textinput">Comentarios de diagnostico</label>  
            <input id="diagnostico" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Costo de reparacion</label>  
            <input id="precio" class="swal2-input" type="number">
            <label class="col-md-4 control-label" for="textinput">Plazo de reparación (días)</label>  
            <input id="plazo" class="swal2-input" type="number">
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                const opcion1 = document.getElementById("opcion1"); 
                return {
                    observacion: document.getElementById("diagnostico").value,
                    precio: document.getElementById("precio").value,
                    plazo: document.getElementById("plazo").value,
                }
            }
        });
        if(formValues) {
            let cotizacion = new Cotizaciones(formValues.observacion,formValues.precio,formValues.plazo);
            console.log(cotizacion);
            cotizacion.agregarCelular(celularGlobal);
            cotizacion.agregarTecnico(opcion1.checked ? arrTecnicos[0] : arrTecnicos[1]);
            dibujarCotizacion(cotizacion)
        }
    };
    // Funcion para dibujar la cotizacion
    function dibujarCotizacion(cotizacion) {
        $('#cotmodelo').val(cotizacion.Celulares.modelo);
        $('#cotserie').val(cotizacion.Celulares.numSerie);
        $('#cotimei').val(cotizacion.Celulares.IMEI);
        $('#cotnombreusuario').val(cotizacion.Celulares.Usuarios.Nombre);
        $('#cotapellidousuario').val(cotizacion.Celulares.Usuarios.Apellido);     
        $('#cottecnico').val(cotizacion.Tecnicos.Nombre);
        $('#cotobservaciones').val(cotizacion.Reporte);
        $('#cotprecio').val(cotizacion.Precio);
        $('#cotplazo').val(cotizacion.Plazo);
        $("#Reparacion").hide();
        $("#cotizacion").show();

        if (cotizacion.Celulares.reportado) {
            window.alert("El numero de IMEI se encuentra reportado, por tu seguridad llama a la policia");
        }
        
        // $("#Ingreso").hide();
        $("#cotizacion").show();
    }


    return {
        init: function (parametros) {
            console.log(parametros);
            Local = parametros.ubicacion;
            console.log(Local);
            configurar();
            eventos();
        }
    }
} ()

// Se planifica los objetos
class Usuarios {
    constructor (Nombre, Apellido, DNI) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.DNI = DNI;
    };
};

class Celulares {
    constructor (marca, modelo, numSerie, IMEI, observacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.numSerie = numSerie;
        this.IMEI = IMEI;
        this.observacion = observacion;

        this.reportado = false;
        Usuarios = null;
    };
    cambiarEstadoReportado(opcion) {
        this.reportado = opcion;
    };
    agregarUsuario(usuario) {
        this.Usuarios = usuario;
    }
};

class Tecnicos {
    constructor (Nombre, Apellido) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;

        this.skills = [];
    };
    agregarSkill(...rest) {
        this.skills.push(...rest);
    }
};

class Cotizaciones {
    constructor (Reporte, Precio, Plazo) {
        this.Reporte = Reporte;
        this.Precio = Precio;
        this.Plazo = Plazo;

        Celulares = null;
        Tecnicos = null;
    };
    agregarCelular(celular) {
        this.Celulares = celular;
    };
    agregarTecnico(tecnico) {
        this.Tecnicos = tecnico;
    };
};

class Reparaciones {
    constructor (fechaEntrega) {
        this.fechaEntrega = fechaEntrega;

        Reparado = false;
        Repuestos = [];
        Cotizaciones = null;
    };
};