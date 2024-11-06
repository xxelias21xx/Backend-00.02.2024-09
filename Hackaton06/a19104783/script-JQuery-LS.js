//se cambia la declaracion de los arreglos que contiene los inei y los numeros de serie porque no se va a alterar el contenido
const repotadosImei = ['imeiReportado1', 'imeiReportado2', 'imeiReportado3', 'imeiReportado4', 'imeiReportado5'];
const reportadosNserie = ['nserieReportado1', 'nserieReportado2', 'nserieReportado3', 'nserieReportado4', 'nserieReportado6'];
/*
let revisados = [];
let atendidos = [];
let tecnicos = [];
*/

//localStorage.getItem("revisados") => busca el almacenamiento LS elemento llamado "revisado"  
let revisados = JSON.parse(localStorage.getItem("revisados")) || [];
//JSON.Parse() => convierte los arreglos recibidos del local storage a objetos JS 
let atendidos = JSON.parse(localStorage.getItem("atendidos")) || [];
// || []  => esta sentencia se usa cuando se carga por primera vez la pagina y los asigne como listas vacias 
// y evitar que el local store devuelva null
let tecnicos = JSON.parse(localStorage.getItem("tecnicos")) || [];

class Telefono {
    constructor(marca, numeroSerie, imei, modelo, so) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.so = so;
        this.estado = "Ninguno";
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

class Tecnico {
    constructor(nombre, skillAndroid, skillIos) {
        this.nombre = nombre;
        this.skillAndroid = skillAndroid;
        this.skillIos = skillIos;
    }
}
//guarda el contenido de los arreglos en local storage 
function guardarEnLocalStorage() {
    localStorage.setItem("revisados", JSON.stringify(revisados));
    localStorage.setItem("atendidos", JSON.stringify(atendidos));
    localStorage.setItem("tecnicos", JSON.stringify(tecnicos));
}

$(document).ready(function () {
    $("#formTelefono").submit(function (e) {
        e.preventDefault();
        // uso del JQuery para simplificar el uso del DOM
        const marca = $("#marca").val();
        const modelo = $("#modelo").val();
        const numeroSerie = $("#numeroSerie").val();
        const imei = $("#imei").val();
        const so = $("#so").val();

        if (repotadosImei.includes(imei) || reportadosNserie.includes(numeroSerie)) {
            alert("El teléfono está reportado y no puede ser aceptado.");
            return;
        }

        const telefono = new Telefono(marca, numeroSerie, imei, modelo, so);
        //llamado del primer modal a traves del JQuery
        $("#modalDiagnostico").modal("show");
        //Declaracion de funcion 
        $("#guardarDiagnostico").click(function () {
            const cliente = $("#cliente").val();
            const diagnostico = $("#diagnostico").val();

            telefono.actualizarEstado("Revisado");
            const revisado = { telefono, cliente, diagnostico };
            revisados.push(revisado);
            guardarEnLocalStorage();

            // Mostrar revisados en la tabla
            mostrarRevisados();
            $("#modalDiagnostico").modal("hide");
            $("#formTelefono")[0].reset();
        });
    });
});

function mostrarRevisados() {
    const listaRevisados = $("#listaRevisados");
    listaRevisados.empty();

    revisados.forEach((revisado, index) => {
        listaRevisados.append(`
                <tr>
                    <td>${revisado.cliente}</td>
                    <td>${revisado.telefono.so}</td>
                    <td>${revisado.telefono.marca}</td>
                    <td>${revisado.telefono.modelo}</td>
                    <td>${revisado.diagnostico}</td>
                    <td>${revisado.telefono.estado}</td>
                    <td><button class="btn btn-primary" onclick="accionRevisado(${index})">Verificar</button></td>
                </tr>
            `);
    });
}

// Cargar datos al iniciar
mostrarRevisados();