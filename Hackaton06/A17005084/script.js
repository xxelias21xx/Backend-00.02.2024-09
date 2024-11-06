let CentraObj=[];


function CargarSucursaleEmp() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    CentraObj.SucursalTda.forEach(Tienda => {
        const item = document.createElement('a');
        item.className = 'dropdown-item';
        item.href = '#';
        item.textContent = Tienda.NomSucursal;
        item.dataset.value = Tienda.NroSucu; 
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            const valueSeleccionado = this.dataset.value; 
            const nomSeleccionado = this.textContent;
            $('#NomSucursal').text("Sucursal: " + nomSeleccionado);
            $('#CodSucursal').text(valueSeleccionado);
            ListarCboTecnico(valueSeleccionado);
            FiltrarTablaDiagnostico(valueSeleccionado);
        });
        dropdownMenu.appendChild(item);
    });
}

function ListarCboTecnico(CodTecni = null){
    const $CboTecnico=$('#CboTecnico');
    $CboTecnico.empty();
    CentraObj.Tecnico.forEach(ListTecn =>{
        if (ListTecn.NroSucuF == CodTecni) {
            const $ItmTecnico = $('<option></option>')
            .val(ListTecn.NroTecni)
            .text(ListTecn.NomTecni + ' ' + ListTecn.ApeTecni);
            $CboTecnico.append($ItmTecnico);
        }
    })
}


function ListarCboMarca() {
    const $CboMarca = $('#CboMarca');
    $CboMarca.empty(); 
    CentraObj.LstMarca.forEach(Marca => {
        const $ItmMarca = $('<option></option>')
            .val(Marca.CodMarca)
            .text(Marca.NomMarca);
        $CboMarca.append($ItmMarca);
    });
}


function ListarCboRepuesto() {
    const CboRepues=$('#CboRepuesto');
    CboRepues.empty();
    CentraObj.LstRepuesto.forEach(RepuestF =>{
        const ItmRepues=$('<option></option>')
        .val(RepuestF.CodRepuesto)
        .text(RepuestF.DescrRespuesto);
        CboRepues.append(ItmRepues);
    });
}

function LimpiarObjetos() {
    $("#nomCliente").val('');
    $("#docCliente").val('');
    $("#nroIMEI").val('');
    $("#nroSerie").val('');
    $("#nroCelular").val('');
    $("#CboMarca").val('');
    $("#NomModelo").val('');
    $("#CboTecnico").val('');
    $("#costo").val('');
    $("#diagnostico").val('');
}


async function EventDiagnosticar() {
    NroImeiFilt=$("#nroIMEI").val();
    const VeriRoba=CentraObj.celularesRobados.find(
        (e) => e.NroImei == NroImeiFilt
    );
    
    if (VeriRoba) {

        Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "El celular ah sido reportado como robado",
          });
    }else{
        var VnomClie=$("#nomCliente").val();
        var VdocClie=$("#docCliente").val();
        var Vimei=$("#nroIMEI").val();
        var Vserie=$("#nroSerie").val();
        var VnroCelular=$("#nroCelular").val();
        var Vmarca=$("#CboMarca").val();
        var Vmodelo=$("#NomModelo").val();
        var Vtecnico=$("#CboTecnico").val();
        var Vdiagnos=$("#diagnostico").val();
        var Vcosto=$("#costo").val();
        var VnroDiag=CentraObj.ObjTelDiag.length+100;
        var CodSucur=$("#CodSucursal").text();    
        let VtelObj=new TelefDiag(VnomClie,VdocClie,Vimei,Vserie,VnroCelular,Vmarca,Vmodelo,Vtecnico,Vcosto,"Por Autorizar",VnroDiag,Vdiagnos,CodSucur);
        const NeoData01= new DataBas();
        CentraObj.AgregarTeleDiagnos(VtelObj);
        NeoData01.guardarDatos("TbDiagnostico",CentraObj.ObjTelDiag);
        FiltrarTablaDiagnostico(CodSucur);
        LimpiarObjetos();
        Swal.fire({
            title: "Completado",
            text: "Diagnostico Registrado con Nro: " + VnroDiag,
            icon: "success"
          })
    }
}


async function AutorizarReparacion() {
               
    Swal.fire({
        title: "Autorizando",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`,
        html: `<div class="form-group row">
            <label for="TxtPagoAbono">Ingrese el monto a pagar:</label>
            <input type="number" id="TxtPagoAbono" class="col-md-4" placeholder="Monto">
            </div><div class="form-group row">
            <label for="authorization">Autorizar operación:</label>
            <select id="authorization" class="swal2-input">
                <option value="">Seleccione una opción</option>
                <option value="autorizar">Autorizar</option>
                <option value="no-autorizar">No autorizar</option>
            </select></div>
        `,
        preConfirm: () => {
            const payment = Swal.getPopup().querySelector('#TxtPagoAbono').value;
            const authorization = Swal.getPopup().querySelector('#authorization').value;
            if (!payment || !authorization) {
                Swal.showValidationMessage('Por favor, complete todos los campos');
            }
            return { payment, authorization };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          //Swal.fire("Saved!", "", "success");
            var Pago= parseInt($("#TxtPagoAbono").val());
            var PagMin=parseInt($("#TxtTotal").val());
            var PagMin2=PagMin/2;
            if (Pago<PagMin2) {
                Swal.fire("El abono debe ser mayor al 50%", "", "info");
            }else{
                var NroOpera=$("#NroDiagAuto").text();
                var CodiSucu=$("#CodSucursal").text();
                CentraObj.ObjTelDiag.forEach(Pgobj => {
                    if (Pgobj.NroDiag.toString() == NroOpera) {
                        Pgobj.estado = 'Por Pagar';
                        Pgobj.Abonado= Pgobj.Abonado + Pago;
                        Pgobj.Total=PagMin;         
                    }
                    FiltrarTablaDiagnostico(CodiSucu); 
                    Swal.fire("Autorizado!", "", "success");
                    $("#FormRegistrarServicio").hide();
                    $("#FormAutorizar").hide();
                    $("#TableDiagnos").show();
                });
                let NeoData02=new DataBas();
                NeoData02.guardarDatos("TbDiagnostico",CentraObj.ObjTelDiag);

            }

        } else if (result.isDenied) {
          
        }
      });

}


const loadingSystem = () => {
    const NeoData02= new DataBas();
    const DatDiagnost = NeoData02.obtenerDatos("TbDiagnostico");
    if (DatDiagnost) {
        CentraObj.ObjTelDiag=DatDiagnost;
        FiltrarTablaDiagnostico();
    }
  };
  

function FiltrarTablaDiagnostico(CodSucu01){
    $('#TblAutorizar tbody').empty();
    $.each(CentraObj.ObjTelDiag, function(key, value) {
        if (value.SucurNro == CodSucu01) {
            var fila = '<tr>';
            fila += '<td class="ocultar" data-nrodiag="' + value.NroDiag + '">' + value.NroDiag + '</td>'
            fila += '<td>' + value.NomClien + '</td>';
            fila += '<td>' + value.DocClien + '</td>';
            fila += '<td class="ocultar">' + value.Marca + '</td>';
            fila += '<td>' + value.Modelo + '</td>';
            fila += '<td>' + value.NroImei + '</td>';
            fila += '<td>' + value.NroSerie + '</td>';
            fila += '<td class="ocultar">' + value.TecnicoDiag + '</td>';
            fila += '<td>' + value.DescrDiag + '</td>';
            fila += '<td>' + value.CostoDiag + '</td>';
            fila += '<td>' + value.estado + '</td>';
            if (value.estado == "Por Autorizar") {
                fila += '<td><button class="btn btn-success btn-sm autorizar-btn" data-toggle="tooltip" title="Autorizar"><i class="fas fa-folder-open"></i></button></td>';
            }
            else {
                if (value.estado == "Por Pagar") {
                    fila += '<td><button class="btn btn-primary btn-sm Pagar-btn" data-toggle="tooltip" title="Cancelar Pago"><i class="fas fa-wallet"></i></button></td>';
                } else {
                    fila += '<td></td>';
                }
            }           
            fila += '</tr>';
            $('#TblAutorizar tbody').append(fila);
        }
    });





    $('.autorizar-btn').on('click', function() {
        var fila = $(this).closest('tr');
        var NroDiag = fila.find('td').eq(0).text();
        console.log(NroDiag);
        console.log(CentraObj.ObjTelDiag);
        const datDiagTel = CentraObj.ObjTelDiag.find(
            (e) => e.NroDiag == NroDiag
        );

        const datMarca = CentraObj.LstMarca.find(
            (f) => f.CodMarca == datDiagTel.Marca
        );

        const datTecnico = CentraObj.Tecnico.find(
            (T) => T.NroTecni == datDiagTel.TecnicoDiag
        );

        $("#NroDiagAuto").text(datDiagTel.NroDiag);
        $("#nomClienteAuto").val(datDiagTel.NomClien);
        $("#docClienteAuto").val(datDiagTel.DocClien);
        $("#nroIMEIAuto").val(datDiagTel.NroImei);
        $("#nroSerieAuto").val(datDiagTel.NroSerie);
        $("#nroCelularAuto").val(datDiagTel.NroCelular);
        $("#TxtMarcaAuto").val(datMarca.NomMarca);
        $("#NomModeloAuto").val(datDiagTel.Modelo);
        $("#TxtTecnicoAuto").val(datTecnico.NomTecni + ' ' + datTecnico.ApeTecni);
        $("#costoAuto").val(datDiagTel.CostoDiag);
        $("#diagnosticoAuto").val(datDiagTel.DescrDiag);
        $("#TxtTotal").val(datDiagTel.CostoDiag);

        $("#FormRegistrarServicio").hide();
        $("#TableDiagnos").hide();
        $("#FormAutorizar").show();
    });
}


const CargaDatos = (function() {
    let NomCompani = "";
    let NroRucCompa = "";

    function CargarSucursales() {
        $('#NomEmpresa').text(NomCompani.toUpperCase());
        $('#RucEmpresa').text("RUC: " + NroRucCompa);

        CentraObj = new Central(NomCompani, NroRucCompa); // Asegúrate de que Central esté definida
    
        let LinceSucursal=new SucursalEmpre(NomCompani + " - Lima","Juan Lopez","Av. Aramburu Mz2 Lt 12","01 345-2589","S01");
        let ChorriSucursal=new SucursalEmpre(NomCompani + " - Chorrillos","Miguel Arenales","Av. Huaylas Mz31 Lt 10","01 258-7300","S02");
        let AteSucursal=new SucursalEmpre(NomCompani + " - Ate","Pedro Espinoza","Av. Torenjo Mz15 Lt 10","01 721-1690","S03");

        CentraObj.agregarSucursal(LinceSucursal);
        CentraObj.agregarSucursal(ChorriSucursal);
        CentraObj.agregarSucursal(AteSucursal);
        
        CargarSucursaleEmp();
        const NeoData= new DataBas();
        NeoData.guardarDatos("TbSucursal",CentraObj.SucursalTda);


        let CelRoba01= new CelularesReportado("490154203237518","SN1234567890");
        let CelRoba02= new CelularesReportado("356938035643809","ABC123456DEF");
        let CelRoba03= new CelularesReportado("864201001234567","XYZ987654321");
        let CelRoba04= new CelularesReportado("012345678901234","SN-2021-0001");

        CentraObj.agregarCelularRobado(CelRoba01);
        CentraObj.agregarCelularRobado(CelRoba02);
        CentraObj.agregarCelularRobado(CelRoba03);
        CentraObj.agregarCelularRobado(CelRoba04);
        NeoData.guardarDatos("TbCelRobado",CentraObj.celularesRobados);

        let TecniEmp01= new TecnicoSucursal("T01","Juan","Roble Pere","47859632","S01");
        let TecniEmp02= new TecnicoSucursal("T02","Benito","Torres Juarez","47412563","S01");
        let TecniEmp03= new TecnicoSucursal("T03","Ramon","Diaz Lopez","41256398","S02");

        CentraObj.AgregarTecnicoCel(TecniEmp01);
        CentraObj.AgregarTecnicoCel(TecniEmp02);
        CentraObj.AgregarTecnicoCel(TecniEmp03);
        NeoData.guardarDatos("TbTecnicos",CentraObj.Tecnico);


        let Marca01=new MarcaTele("M01","Sansung");
        let Marca02=new MarcaTele("M02","Apple");
        let Marca03=new MarcaTele("M03","Huawei");
        let Marca04=new MarcaTele("M04","Xiaomi");
        let Marca05=new MarcaTele("M05","Motorola");
        let Marca06=new MarcaTele("M06","Honor");
        let Marca07=new MarcaTele("M07","Redmi");

        CentraObj.AgregarMarcaCelu(Marca01);
        CentraObj.AgregarMarcaCelu(Marca02);
        CentraObj.AgregarMarcaCelu(Marca03);
        CentraObj.AgregarMarcaCelu(Marca04);
        CentraObj.AgregarMarcaCelu(Marca05);
        CentraObj.AgregarMarcaCelu(Marca06);
        CentraObj.AgregarMarcaCelu(Marca07);
        NeoData.guardarDatos("TbMarca",CentraObj.LstMarca);
        ListarCboMarca();

        let Repuest01=new RespuestosExtras("R01","Pantalla Motorola X15",80)
        let Repuest02=new RespuestosExtras("R02","Pantalla SANSUNG P24",90)
        let Repuest03=new RespuestosExtras("R03","Bateria Motorola",135)
        let Repuest04=new RespuestosExtras("R04","Bateria Sansung X30",250)
        let Repuest05=new RespuestosExtras("R05","Puerto conector Xiaomi",155)
        let Repuest06=new RespuestosExtras("R06","Cargador tipo C",70)
        let Repuest07=new RespuestosExtras("R07","Memoria almacenamiento ",55)
        let Repuest08=new RespuestosExtras("R08","Parlantes Sansung M40",125)
        let Repuest09=new RespuestosExtras("R09","Parlantes Motorola X15",165)

        CentraObj.AgregarRepuestoCelu(Repuest01);
        CentraObj.AgregarRepuestoCelu(Repuest02);
        CentraObj.AgregarRepuestoCelu(Repuest03);
        CentraObj.AgregarRepuestoCelu(Repuest04);
        CentraObj.AgregarRepuestoCelu(Repuest05);
        CentraObj.AgregarRepuestoCelu(Repuest06);
        CentraObj.AgregarRepuestoCelu(Repuest07);
        CentraObj.AgregarRepuestoCelu(Repuest08);
        CentraObj.AgregarRepuestoCelu(Repuest09);
        NeoData.guardarDatos("TbRepuestos",CentraObj.LstRepuesto);
        ListarCboRepuesto();


    }

    return {
        init: function(parametros) {
            NomCompani = parametros.Empresa;
            NroRucCompa = parametros.RucEmpr;
            CargarSucursales();
        }
    };
})();


async function CompletaPago(NroOpera) {
    console.log(NroOpera);
    const DtSaldo =CentraObj.ObjTelDiag.find(Saldo => Saldo.NroDiag.toString() == NroOpera);
    GenePago=parseInt(DtSaldo.Total-DtSaldo.Abonado);
    console.log(DtSaldo);
    Swal.fire({
        title: "Realizar Pago",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Pagar",
        //denyButtonText: `Cancelar`,
        html:`<div class="form-group row">
            <label for="LblTotPago">Total Pagar:</label>
            <input type="number" id="TxtTotPagar" class="col-md-4" placeholder="Monto" value=${DtSaldo.Total}>
            </div><div class="form-group row">
            <label for="LblAbono">Abonado:</label>
            <input type="number" id="TxtAbonado" class="col-md-4" placeholder="Abonodado" value=${DtSaldo.Abonado}>
            </div><div class="form-group row">
            <label for="LblPendiente">Pendiente:</label>
            <input type="number" id="TxtPendiente" class="col-md-4" placeholder="Pendiente" value=${GenePago}>
            </div>`,
            preConfirm: () => {
                const MtoPendiente = Swal.getPopup().querySelector('#TxtPendiente').value;
                if (!MtoPendiente) {
                    Swal.showValidationMessage('Por favor, complete todos los campos');
                }
                return {MtoPendiente};
            }
    }).then((result) =>{
        if (result.isConfirmed){
            var CodiSucu=$("#CodSucursal").text();
            var ComPago=$("#TxtPendiente").val();

            CentraObj.ObjTelDiag.forEach(Pgobj => {
                if (Pgobj.NroDiag.toString() == NroOpera) {
                    Pgobj.estado = 'Pago Cancelado';
                    Pgobj.Abonado= parseInt(Pgobj.Abonado) + parseInt(ComPago);        
                }
                FiltrarTablaDiagnostico(CodiSucu); 
                Swal.fire("Pago Cancelado!", "", "success");
                $("#FormRegistrarServicio").hide();
                $("#FormAutorizar").hide();
                $("#TableDiagnos").show();
            });

            let NeoData03=new DataBas();
            NeoData03.guardarDatos("TbDiagnostico",CentraObj.ObjTelDiag);

        }
    })
}


function MensajeInfo(TitMsm,DescMsm) {
    Swal.fire({
        title: TitMsm,
        text: DescMsm,
        icon: "info"
    })
}


$(document).ready(function(){
    loadingSystem();
    $('#LnkServicio').on('click', function () {
        NroSucu = $('#CodSucursal').text();
        if (NroSucu == "0") {
            MensajeInfo("Alerta","Seleccione sucursal primero");
        } else {
            $("#FormRegistrarServicio").show();
            $("#TableDiagnos").hide();
            $("#FormAutorizar").hide();
        }
    })
    
    $('#LnkDiagnostico').on('click',function(){
        NroSucu = $('#CodSucursal').text();
        if (NroSucu == "0") {
            MensajeInfo("Alerta","Seleccione sucursal primero");
        } else {
            $("#FormRegistrarServicio").hide();
            $("#FormAutorizar").hide();
            $("#TableDiagnos").show();
        }   
    })

    $('#BtnDiagnosticar').on('click',function(){
        EventDiagnosticar();
    })


    $('#BtnAutorizar').on('click',function(){
        AutorizarReparacion();
    })

    document.addEventListener('click', function (event) {
        if (event.target.closest('.Pagar-btn')) {
            const fila = event.target.closest('tr'); 
            const NroOpera = fila.querySelector('td[data-nrodiag]').getAttribute('data-nrodiag').trim();
            CompletaPago(NroOpera);
        }
    });

    
$('#CboRepuesto').on('change', function() {
    const selectedCodRepuesto = $(this).val();
    const selectedRepuesto = CentraObj.LstRepuesto.find(repuesto => repuesto.CodRepuesto === selectedCodRepuesto);
    
    $("#TxtTotRepues").val(selectedRepuesto.Precio);
    var PrecDiag = $("#costoAuto").val();
    var PrecTotal = parseInt(selectedRepuesto.Precio) + parseInt(PrecDiag);
    $("#TxtTotal").val(PrecTotal);
});

})

