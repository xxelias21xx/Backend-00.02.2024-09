let repotadosImei = ['imeiReportado1', 'imeiReportado2', 'imeiReportado3', 'imeiReportado4', 'imeiReportado5'];
let reportadosNserie = ['nserieReportado1', 'nserieReportado2', 'nserieReportado3', 'nserieReportado4', 'nserieReportado6'];
let revisados = [];
let atendidos=[];
let tecnicos=[];


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
    constructor(nombre , skillAndroid, skillIos){
        this.nombre = nombre;
        this.skillAndroid = skillAndroid;
        this.skillIos = skillIos;
    }
}

class Revisado {
    constructor(telefono, cliente, diagnostico) {
        this.telefono = telefono;
        this.cliente = cliente;
        this.diagnostico = diagnostico;
    }

    mostrarRevisados() {
        const listaRevisados = document.getElementById("listaRevisados");
        listaRevisados.innerHTML = "";

        revisados.forEach(revisado => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${revisado.cliente}</td>
                <td>${revisado.telefono.so}</td>
                <td>${revisado.telefono.marca}</td>
                <td>${revisado.telefono.modelo}</td>
                <td>${revisado.diagnostico}</td>
                <td>${revisado.telefono.estado}</td>
                <td>
                    <button class="btn btn-primary" >verificar</button>
                    
                </td>
                
            `;
            listaRevisados.appendChild(fila);
        });
        // onclick="atendidos(${index})"
        //<button id="verificar" class="btn btn-primary" data-index="${index}">verificar</button>
        // <button class="btn btn-primary" onclick="accionRevisado(${index})">verificar</button>
    }
}

class Atendidos{
    constructor(revisado, tecnico, autorizacion, montoRevision, pagoRevision){
        this.revisado = revisado;
        this.tecnico  = tecnico ;
        this.autorizacion = autorizacion;
        this.montoRevision = montoRevision;
        this.pagoRevision = pagoRevision;
    }

    

    mostarAtendidos() {
        const listaRevisados = document.getElementById("listaAtenciones");
        listaRevisados.innerHTML = "";

        atendidos.forEach(atendidos => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${atendidos.revisado.cliente}</td>
                <td>${atendidos.revisado.telefono.marca}</td>
                <td>${atendidos.revisado.telefono.modelo}</td>
                <td>${atendidos.revisado.diagnostico}</td>
                <td>${atendidos.revisado.telefono.estado}</td>
            `;
            listaRevisados.appendChild(fila);
        });
    }

}

document.getElementById("formTelefono").addEventListener("submit", function (registrarTelefono) {
    registrarTelefono.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const so = document.getElementById("so").value;

    const telefono = new Telefono(marca, numeroSerie, imei, modelo, so);

    // Verificar si el teléfono está en los reportes
    if (repotadosImei.includes(imei) || reportadosNserie.includes(numeroSerie)) {
        alert("El teléfono está reportado y no puede ser aceptado.");
    } else {
        // Mostrar el modal para ingresar cliente y diagnóstico
        $("#modalDiagnostico").modal("show");

        document.getElementById("guardarDiagnostico").onclick = function () {
            const cliente = document.getElementById("cliente").value;
            const diagnostico = document.getElementById("diagnostico").value;

            telefono.actualizarEstado("Revisado");
            const revisado = new Revisado(telefono, cliente, diagnostico);
            revisados.push(revisado);

            revisado.mostrarRevisados();
            $("#modalDiagnostico").modal("hide");
            e.target.reset();
        };
    }
});

// function atendidos() {
//     // Aquí puedes definir la acción que deseas realizar con el índice 'index'
//     // Por ejemplo, eliminar el elemento o mostrar más detalles
//     // console.log(`Acción en el equipo revisado con índice: ${index}`);
//     console.log("indice");
// }

// document.getElementById("verificar").addEventListener("click",(atendidos) => {
//     atendidos.preventDefault();
//     // const index = document.getElementById("Revisar").getAttribute("data-index");
//     // console.log("Índice del teléfono:", index);
//     console.log("Índice del teléfono:");
// })

