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
class CelularesReportado {
    NroImei="";
    NroSerie="";
    constructor(NroImei,NroSerie) {
        this.NroImei=NroImei;
        this.NroSerie=NroSerie;
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

class MarcaTele {
    CodMarca="";
    NomMarca="";
    constructor(CodMarca,NomMarca) {
        this.CodMarca=CodMarca;
        this.NomMarca=NomMarca;
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
    SucursalTda=[];
    celularesRobados=[];
    Tecnico=[];
    LstMarca=[];
    LstRepuesto=[];
    ObjTelDiag=[];
    NomCentral="";
    NroRuc="";
    constructor(NomCentral,NroRuc){
        this.NomCentral=NomCentral;
        this.NroRuc=NroRuc;
    }
   
    agregarSucursal(Sucursal){
        this.SucursalTda.push(Sucursal);
    }

    agregarCelularRobado(celular){
        this.celularesRobados.push(celular);
    }

    AgregarTecnicoCel(Tecni){
        this.Tecnico.push(Tecni);
    }

    AgregarMarcaCelu(LstMarca){
        this.LstMarca.push(LstMarca);
    }

    AgregarRepuestoCelu(ObjRepuesto){
        this.LstRepuesto.push(ObjRepuesto);
    }

    AgregarTeleDiagnos(ObjTelefono){
        this.ObjTelDiag.push(ObjTelefono);
    }
}


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


class DataBas {
    //guardar en local storage
    //cargar de local storage
    guardarDatos(key, valor) {
      localStorage.setItem(key, JSON.stringify(valor));
    }
    obtenerDatos(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  }