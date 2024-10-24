console.log("Inicio de la aplicacion")
const Reserva = function () //a
{
    let Nombre = "";
    let Ciudad = "";

    let arrAviones = [];
    function configurar(){
        console.log("Inicio de configurar")
        $('#aerolinea').text(Nombre);
        $('#ciudad').text(Ciudad);
        let objAvion1 = new Aviones("HBC123","AIRBUS 321 MAX",185,90,30000);
        arrAviones.push(objAvion1);
        let objAvion2 = new Aviones("HBC343","AIRBUS 321 MAX",200,100,32000);
        arrAviones.push(objAvion2);
    }
    function eventos(){
        console.log("Inicio de eventos")
        $("#reservar").on("click", reservar);
    }

    async function reservar(){
        console.log("Empieza el proceso de reserva de vuelos");
        $("#divReserva").hide();
        const { value: formValues } = await Swal.fire({
            title: "Ingresa tus datos",
            icon: "info",
            html: `
            <label class="col-md-4 control-label" for="textinput">Origen</label>  
            <input id="origen" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Destino</label>  
            <input id="destino" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Fecha de Ida</label>  
            <input id="fechaIda" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Fecha de Retorno</label>  
            <input id="fechaRetorno" class="swal2-input">
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                return {
                    origen:  document.getElementById("origen").value,
                    destino: document.getElementById("destino").value,
                    fechaIda:  document.getElementById("fechaIda").value,
                    fechaRegreso:  document.getElementById("fechaRetorno").value
                };
            }
        });
        if (formValues) {
            let reserva =new Reservas(formValues.origen, formValues.destino, formValues.fechaIda, formValues.fechaRegreso);
            incluirPasajeros().then(data =>{
                 reserva.asignarAvionIda(arrAviones[0]);
                 reserva.asignarAvionVuelta(arrAviones[1]);
                 reserva.avionIda.agregarPasajeros(data);
                 reserva.avionVuelta.agregarPasajeros(data);
               // dibujarReserva(reserva);
           });
            console.log(reserva)
            
        }
       
    }
    async function incluirPasajeros() {
        console.log("Agregar Pasajeros");

        const { value: formValues } = await Swal.fire({
            title: "Ingresa los datos del pasajero",
            icon: "info",
            html: `
            <label class="col-md-4 control-label" for="textinput">Nombre</label>  
            <input id="nombre" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Apellido</label>  
            <input id="apellido" class="swal2-input">
            <label class="col-md-4 control-label" for="textinput">Documento</label>  
            <input id="documento" class="swal2-input">
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                return {
                    nombre:  document.getElementById("nombre").value,
                    apellido: document.getElementById("apellido").value,
                    documento:  document.getElementById("documento").value
                };
            }
        });
        if (formValues) {
            let pasajero =new Pasajeros(formValues.nombre, formValues.apellido, formValues.documento);
            return pasajero;
        }
    }

    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Ciudad = parametros.ciudad;
            configurar();
            eventos();
        },
    };
}();


class Reservas {
    constructor(origen, destino, fechaIda, fechaVuelta) {
        this.origen = origen;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;
        this.avionIda = null;
        this.avionVuelta = null;
    }
    asignarAvionIda(avion) {
        this.avionIda = avion;
    }
    asignarAvionVuelta(avion) {
        this.avionVuelta = avion;
    }
}

class Pasajeros{
    constructor(nombre, apellido,documento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}

class Aviones {
    constructor(matricula, modelo, nroAsientos, capacidadMinima, costoVuelo) {
        this.matricula = matricula;
        this.modelo = modelo;
        this.nroAsientos = nroAsientos;
        this.capacidadMinima = capacidadMinima;
        this.arrPasajeros = [];
        this.habilitado = false;
        this.reservado = 0;
        this.costoVuelo = costoVuelo;
    }
    agregarPasajeros(pasajero) {
        if (this.reservado >= this.capacidadMinima) {
            this.habilitado = true;
        }
        this.arrPasajeros.push(pasajero);
        this.reservado++;
    }
}