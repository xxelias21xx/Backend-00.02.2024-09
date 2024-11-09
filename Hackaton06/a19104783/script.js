let repotadosImei = ['imeiReportado1', 'imeiReportado2', 'imeiReportado3', 'imeiReportado4', 'imeiReportado5'];
let reportadosNserie = ['nserieReportado1', 'nserieReportado2', 'nserieReportado3', 'nserieReportado4', 'nserieReportado6'];
let revisados = [];
let atendidos = [];
let tecnicos = [];

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

const tecnico1 = new Tecnico("Tec1", true, false);
const tecnico2 = new Tecnico("Tec2", false, true);
const tecnico3 = new Tecnico("Tec3", true, true);

tecnicos.push(tecnico1);
tecnicos.push(tecnico2);
tecnicos.push(tecnico3);

class Revisado {
    constructor(telefono, cliente, diagnostico) {
        this.telefono = telefono;
        this.cliente = cliente;
        this.diagnostico = diagnostico;
    }

    mostrarRevisados() {
        const listaRevisados = document.getElementById("listaRevisados");
        listaRevisados.innerHTML = "";

        revisados.forEach((revisado, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${revisado.cliente}</td>
                <td>${revisado.telefono.so}</td>
                <td>${revisado.telefono.marca}</td>
                <td>${revisado.telefono.modelo}</td>
                <td>${revisado.diagnostico}</td>
                <td>${revisado.telefono.estado}</td>
                <td>
                    <button class="btn btn-primary" onclick="accionRevisado(${index})">Verificar</button>
                </td>
            `;
            listaRevisados.appendChild(fila);
        });
    }
}

class Atendidos {
    constructor(revisado, tecnico, autorizacion, montoRevision, pagoRevision) {
        this.revisado = revisado;
        this.tecnico = tecnico;
        this.autorizacion = autorizacion;
        this.montoRevision = montoRevision;
        this.pagoRevision = pagoRevision;
    }
}

function mostrarAtendidos() {
    const listaAtendidos = document.getElementById("listAtendidos");
    listaAtendidos.innerHTML = "";

    atendidos.forEach((atendido, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${atendido.revisado.telefono.marca} : ${atendido.revisado.telefono.modelo}</td>
            <td>${atendido.revisado.diagnostico}</td>
            <td>${atendido.revisado.telefono.estado}</td>
            <td>${atendido.tecnico.nombre}</td>
            <td>
                <button class="btn btn-primary" onclick="actualizarEstado(${index})">Actualizar</button>
            </td>
        `;
        listaAtendidos.appendChild(fila);
    });
}

document.getElementById("formTelefono").addEventListener("submit", function (registrarTelefono) {
    registrarTelefono.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const so = document.getElementById("so").value;

    const telefono = new Telefono(marca, numeroSerie, imei, modelo, so);

    if (repotadosImei.includes(imei) || reportadosNserie.includes(numeroSerie)) {
        alert("El teléfono está reportado y no puede ser aceptado.");
    } else {
        $("#modalDiagnostico").modal("show");

        document.getElementById("guardarDiagnostico").onclick = function () {
            const cliente = document.getElementById("cliente").value;
            const diagnostico = document.getElementById("diagnostico").value;

            telefono.actualizarEstado("Revisado");
            const revisado = new Revisado(telefono, cliente, diagnostico);
            revisados.push(revisado);

            revisado.mostrarRevisados();
            $("#modalDiagnostico").modal("hide");
            registrarTelefono.target.reset();
        };
    }
});

function elegirTecnico(auxrevisado) {
    if (auxrevisado.telefono.so === "Android") {
        return tecnicos.find(tecnico => tecnico.skillAndroid);
    } else {
        return tecnicos.find(tecnico => tecnico.skillIos);
    }
}

function accionRevisado(index) {
    const montoRevision = 10.0;
    const auxrevisado = revisados[index];
    const tecnico = elegirTecnico(auxrevisado);

    $("#modalAtenciones").modal("show");
    document.getElementById("guardarAutorizacion").onclick = function () {
        const autorizacion = document.querySelector('input[name="autorizacion"]:checked')?.value;
        const pagoRevision = parseFloat(document.getElementById("pagoRevision").value);

        if (autorizacion === "1" && pagoRevision >= montoRevision * 0.5) {
            auxrevisado.telefono.actualizarEstado("En Atención");
            const atendido = new Atendidos(auxrevisado, tecnico, autorizacion, montoRevision, pagoRevision);
            atendidos.push(atendido);
            mostrarAtendidos();
        } else {
            alert("Autorización no válida o pago insuficiente.");
        }
        $("#modalAtenciones").modal("hide");
    };
}

function actualizarEstado(index) {
    console.log("Actualizar estado de atendido con índice:", index);
    const auxAtendido = atendidos[index];
    auxAtendido.revisado.telefono.actualizarEstado("Finalizado");
    mostrarAtendidos();
}