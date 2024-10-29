let CentraObj;
let CeluReporObj;
class TelefDiag {
    NroDiag="";
    NomClien="";
    DocClien="";
    NroImei="";
    NroSerie="";
    NroCelular="";
    Marca="";
    Modelo="";
    TecnicoDiag="";
    CostoDiag=0;
    estado="";
    DescrDiag="";
    SucurNro="";
    Abonado=0;
    Total=0;
    constructor(NomClien,DocClien,NroImei,NroSerie,NroCelular,Marca,Modelo,TecnicoDiag,CostoDiag,estado=null,NroDiag,DescrDiag,SucurNro) {
        this.NomClien=NomClien;
        this.DocClien=DocClien;
        this.NroImei=NroImei;
        this.NroSerie=NroSerie;
        this.NroCelular=NroCelular;
        this.Marca=Marca;
        this.Modelo=Modelo;
        this.TecnicoDiag=TecnicoDiag;
        this.CostoDiag=CostoDiag;
        this.estado=estado;
        this.NroDiag=NroDiag;
        this.DescrDiag=DescrDiag;
        this.SucurNro=SucurNro;
    }
}

class MarcaTele {
    CodMarca="";
    NomMarca="";
    constructor(CodMarca,NomMarca) {
        this.CodMarca=CodMarca;
        this.NomMarca=NomMarca;
    }
}

class CelularesReportado {
    NroImei="";
    NroSerie="";
    constructor(NroImei,NroSerie) {
        this.NroImei=NroImei;
        this.NroSerie=NroSerie;
    }
}

class SucursalEmpre {
    NomSucursal="";
    NomContacto="";
    DireSucursal="";
    TelSucu="";
    NroSucu="";
    
    constructor(NomSucursal,NomContacto,DireSucursal,TelSucu,NroSucu) {
        this.NomSucursal=NomSucursal;
        this.NomContacto=NomContacto;
        this.DireSucursal=DireSucursal;
        this.TelSucu=TelSucu;
        this.NroSucu=NroSucu;
    }
}

class TecnicoSucursal {
    NroTecni="";
    NomTecni="";
    ApeTecni="";
    DocTecni="";
    NroSucuF="";
    constructor(NroTecni,NomTecni,ApeTecni,DocTecni,NroSucuF) {
        this.NroTecni=NroTecni;
        this.NomTecni=NomTecni;
        this.ApeTecni=ApeTecni;
        this.DocTecni=DocTecni;
        this.NroSucuF=NroSucuF;
    }
}

class RespuestosExtras{
    CodRepuesto="";
    DescrRespuesto="";
    Precio=0;
    constructor(CodRepuesto,DescrRespuesto,Precio){
        this.CodRepuesto=CodRepuesto;
        this.DescrRespuesto=DescrRespuesto;
        this.Precio=Precio;
    }

}

class Central{
    celularesRobados=[];
    Tecnico=[];
    SucursalTda=[];
    LstMarca=[];
    ObjTelDiag=[];
    LstRepuesto=[];
    NomCentral="";
    NroRuc="";
    constructor(NomCentral,NroRuc){
        this.NomCentral=NomCentral;
        this.NroRuc=NroRuc;
    }
    agregarCelularRobado(celular){
        this.celularesRobados.push(celular);
    }

    eliminarCelularRobado(NroImei){
        for(let celular in this.celularesRobados){
            if (this.celularesRobados[i].NroImei = NroImei) {
                
            }
        }
    }
    agregarSucursal(Sucursal){
        this.SucursalTda.push(Sucursal);
    }

    AgregarTecnicoCel(Tecni){
        this.Tecnico.push(Tecni);
    }

    AgregarMarcaCelu(LstMarca){
        this.LstMarca.push(LstMarca);
    }

    AgregarTeleDiagnos(ObjTelefono){
        this.ObjTelDiag.push(ObjTelefono);
    }

    AgregarRepuestoCelu(ObjRepuesto){
        this.LstRepuesto.push(ObjRepuesto);
    }

    ListarCboMarca(){
        const CboMarcaList=document.getElementById("CboMarca");
        this.LstMarca.forEach(ListMarca => {
        const option=document.createElement('option');
        option.value=ListMarca.CodMarca;
        option.textContent=ListMarca.NomMarca;
        CboMarcaList.appendChild(option);
    });
    }

    ListarCboTecnico(CodTecni = null){
        const CboTecnico=document.getElementById("CboTecnico");
        CboTecnico.innerHTML="";
        this.Tecnico.forEach(Lista => {
        if (Lista.NroSucuF == CodTecni) {
            const option=document.createElement('option');
            option.value=Lista.NroTecni;
            option.textContent=Lista.NomTecni + ' ' + Lista.ApeTecni;
            CboTecnico.appendChild(option);
        }    
    });
    }



    ListarCboRepuesto(){
        const CboRepuetoList=document.getElementById("cboRepuesto");
        this.LstRepuesto.forEach(ListRepuesto => {
        const option=document.createElement('option');
        option.value=ListRepuesto.CodRepuesto;
        option.textContent=ListRepuesto.DescrRespuesto;
        CboRepuetoList.appendChild(option);
    });

    CboRepuetoList.addEventListener('change', (event) => {
        const selectedCodRepuesto = event.target.value;
        const selectedRepuesto = this.LstRepuesto.find(repuesto => repuesto.CodRepuesto === selectedCodRepuesto);
        
        $("#TxtTotRepues").val(selectedRepuesto.Precio)     
        var PrecDiag=$("#costoAuto").val();
        var PrecTotal=parseInt(selectedRepuesto.Precio)+ parseInt(PrecDiag);
        $("#TxtTotal").val(PrecTotal);     

    });
    }

 
    FiltrarTablaDiagnostico(CodSucu01){
        $('#TblAutorizar tbody').empty();
        $.each(this.ObjTelDiag, function(key, value) {
            if (value.SucurNro == CodSucu01 ) {
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
                }else{
                    fila += '<td><button class="btn btn-primary btn-sm Pagar-btn" data-toggle="tooltip" title="Cancelar Pago"><i class="fas fa-wallet"></i></button></td>';
                }           
                fila += '</tr>';
                $('#TblAutorizar tbody').append(fila);
            }
        });


        $('.autorizar-btn').on('click', function() {

            var fila = $(this).closest('tr');

            var NroDiag= fila.find('td').eq(0).text();

            const datDiagTel=CentraObj.ObjTelDiag.find(
                (e) => e.NroDiag == NroDiag
            );

            const datMarca=CentraObj.LstMarca.find(
                (f) => f.CodMarca == datDiagTel.Marca
            )

            const datTecnico=CentraObj.Tecnico.find(
                (T) => T.NroTecni == datDiagTel.TecnicoDiag
            )

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

    AutorizarReparacion(DatosDiagn){

        $("#FormRegistrarServicio").hide();
        $("#TableDiagnos").hide();
        $("#FormAutorizar").show();
    }
}

const GenerarTicket = function(){
    let NomCompani="";
    let NroRucCompa="";
    function ConfigurarSucursales() {
        console.log("Iniciando Apliacion de Servicio Tecnico");
        $('#NomEmpresa').text(NomCompani.toUpperCase());
        $('#RucEmpresa').text("RUC: " + NroRucCompa);
        CentraObj=new Central(NomCompani,NroRucCompa);

        let LinceSucursal=new SucursalEmpre(NomCompani + " - Lima","Juan Lopez","Av. Aramburu Mz2 Lt 12","01 345-2589","S01");
        let ChorriSucursal=new SucursalEmpre(NomCompani + " - Chorrillos","Miguel Arenales","Av. Huaylas Mz31 Lt 10","01 258-7300","S02");
        let AteSucursal=new SucursalEmpre(NomCompani + " - Ate","Pedro Espinoza","Av. Torenjo Mz15 Lt 10","01 721-1690","S03");

        let TecniEmp01= new TecnicoSucursal("T01","Juan","Roble Pere","47859632","S01");
        let TecniEmp02= new TecnicoSucursal("T02","Benito","Torres Juarez","47412563","S01");
        let TecniEmp03= new TecnicoSucursal("T03","Ramon","Diaz Lopez","41256398","S02");

        CentraObj.AgregarTecnicoCel(TecniEmp01);
        CentraObj.AgregarTecnicoCel(TecniEmp02);
        CentraObj.AgregarTecnicoCel(TecniEmp03);

        let CelRoba01= new CelularesReportado("490154203237518","SN1234567890");
        let CelRoba02= new CelularesReportado("356938035643809","ABC123456DEF");
        let CelRoba03= new CelularesReportado("864201001234567","XYZ987654321");
        let CelRoba04= new CelularesReportado("012345678901234","SN-2021-0001");

        let Marca01=new MarcaTele("M01","Sansung");
        let Marca02=new MarcaTele("M02","Apple");
        let Marca03=new MarcaTele("M03","Huawei");
        let Marca04=new MarcaTele("M04","Xiaomi");
        let Marca05=new MarcaTele("M05","Motorola");
        let Marca06=new MarcaTele("M06","Honor");
        let Marca07=new MarcaTele("M07","Redmi");

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

        CentraObj.agregarSucursal(LinceSucursal);
        CentraObj.agregarSucursal(ChorriSucursal);
        CentraObj.agregarSucursal(AteSucursal);
    
        CentraObj.AgregarMarcaCelu(Marca01);
        CentraObj.AgregarMarcaCelu(Marca02);
        CentraObj.AgregarMarcaCelu(Marca03);
        CentraObj.AgregarMarcaCelu(Marca04);
        CentraObj.AgregarMarcaCelu(Marca05);
        CentraObj.AgregarMarcaCelu(Marca06);
        CentraObj.AgregarMarcaCelu(Marca07);

        CentraObj.agregarCelularRobado(CelRoba01);
        CentraObj.agregarCelularRobado(CelRoba02);
        CentraObj.agregarCelularRobado(CelRoba03);
        CentraObj.agregarCelularRobado(CelRoba04);

        const dropdownMenu = document.getElementById('dropdown-menu');

        CentraObj.SucursalTda.forEach(Tienda => {
            const item = document.createElement('a');
            item.className = 'dropdown-item';
            item.href = '#';
            item.textContent = Tienda.NomSucursal;
            item.dataset.value = Tienda.NroSucu; // Almacena el value en un atributo

            // Manejador de evento para obtener el value al hacer clic
            item.addEventListener('click', function(event) {
                event.preventDefault(); // Previene la redirección
                 valueSeleccionado = this.dataset.value; // Obtiene el value
                 nomSeleccionado=this.textContent;
                $('#NomSucursal').text("Sucursal: " + nomSeleccionado);
                $('#CodSucursal').text(valueSeleccionado);
                CentraObj.ListarCboTecnico($('#CodSucursal').text());
                CentraObj.FiltrarTablaDiagnostico($('#CodSucursal').text());
            });
            dropdownMenu.appendChild(item);
        });
        CentraObj.ListarCboMarca();
        CentraObj.ListarCboRepuesto();
    }

    function eventDiag(){
        $("#BtnDiagnosticar").on("click",EventDiagnosticar);
        $("#BtnAutorizar").on("click",AutorizarReparacion);
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
                icon: "error",
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

            CentraObj.AgregarTeleDiagnos(VtelObj);
            CentraObj.FiltrarTablaDiagnostico(CodSucur);
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
                        CentraObj.FiltrarTablaDiagnostico(CodiSucu); 
                        Swal.fire("Autorizado!", "", "success");
                        $("#FormRegistrarServicio").hide();
                        $("#FormAutorizar").hide();
                        $("#TableDiagnos").show();
                    });
                }

            } else if (result.isDenied) {
              
            }
          });

    }
    return {
        init: function(parametros)
        {
            NomCompani=parametros.Empresa;
            NroRucCompa=parametros.RucEmpr;
            ConfigurarSucursales();
            eventDiag();
        }
    }
}();

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
                CentraObj.FiltrarTablaDiagnostico(CodiSucu); 
                Swal.fire("Pago Cancelado!", "", "success");
                $("#FormRegistrarServicio").hide();
                $("#FormAutorizar").hide();
                $("#TableDiagnos").show();
            });

        }
    })
}

$('#LnkServicio').on('click',function(){
    $("#FormRegistrarServicio").show();
    $("#TableDiagnos").hide();
    $("#FormAutorizar").hide();

})

$('#LnkDiagnostico').on('click',function(){
    $("#FormRegistrarServicio").hide();
    $("#FormAutorizar").hide();
    $("#TableDiagnos").show();

})


document.addEventListener('click', function (event) {
    if (event.target.closest('.Pagar-btn')) {
        const fila = event.target.closest('tr'); 
        const NroOpera = fila.querySelector('td[data-nrodiag]').getAttribute('data-nrodiag').trim();
        CompletaPago(NroOpera);
    }
});