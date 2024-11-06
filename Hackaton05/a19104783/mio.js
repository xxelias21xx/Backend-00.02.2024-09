class Telefono {
    estadorobado=0;
    estado=null;
    constructor(imei,marca,modelo,estado=null) {
        this.imei=imei;
        this.marca=marca;
        this.modelo=modelo;
        this.estado=estado;
        
        
        
    }

    estado_control_dearreglo(estadoarreglo){
        this.estado=estadoarreglo;

    }
    actualizarEstadoRobado(estadorobado) {
        this.estadorobado = estadorobado;
      }

}



///////////////////////////////////////////////////////////////////////////////////////////////

class Local_sucursal {

    tecnicos=[];
    clientes=[]
    tikets=[]
    central;
 
    constructor(nombre,direccion,contacto,central) {
        this.nombre=nombre;
        this.direccion=direccion;
        this.contacto=contacto;
        this.central=central;
       

        
    }



    agregar_cliente(cliente){
        this.clientes.push(cliente);

    }

    agregar_tecnicos(tecnico,especialida){
        this.tecnicos.push([tecnico,especialida]);

    }
    agregar_ticket(ticket){
        const verificar=this.central.celularesrobados.find((e)=>e.imei==ticket.Telefono.imei)

        if (verificar) {
            console.log("no pondemos arreglar el telefono")
            
        }else{

            this.tikets.push(ticket);

        }

    }



   




}
/////////////////////////////////////////////////////////////////////////////////////////////////

class central {
    celularesrobados=[];
    sucurales=[];

    agregar_robados(robado){
        if (robado) {
            robado.actualizarEstadoRobado("si");
            this.celularesrobados.push(robado);
        }

        
        
        

        
        
        
        
    }
    agregar_sucursales(sucursal){
        this.sucurales.push(sucursal);
    }


}
/////////////////////////////////////////////////////////////////////////////////////////////////
const mood={
    inicio:"INICIALIZADO",
    proceso:"PROCESO",
    fin:"TERMINADO"
}
class Ticket {
    
   
    autorizar=0;
    repuestos=[];
    constructor(telefono,diagnostico,porcentaje,montototal,cliente) {
        this.telefono=telefono;
        this.diagnostico=diagnostico;
        this.porcentaje=porcentaje;
        this.montototal=montototal;
        this.cliente=cliente
        this.estado=mood.inicio;
        
   
        
    }
    metodo_autorizar(autorizar){
        this.autorizar=autorizar;

    }


  

    metodo_agregar_repuestos(repuesto){
        if(!repuesto){
            console.log("no se pudo añadir el respuesto")
        }else{
            this.repuestos.push(repuesto)
        }

    }

    metodo_iniciarArreglo(){
        if (this.autorizar>0 && this.porcentaje>=50) {
            this.telefono.estado_control_dearreglo("en proceso");
            this.estado=mood.proceso;
            return "servicio iniciado"

            
            
        }else{
            return "no se puede iniciar el servicio por quen no autorizo o porque el pago no es el 50%"

        }

    }
    metodo_finArreglo(){
        this.telefono.estado_control_dearreglo("reparado");
;       this.estado=mood.fin;
        return "servicio finalizado"


    }
    

        







}


let center=new central();//creamos la central

let local=new Local_sucursal("sede_lima","lima","987654321",center);//creamos la sucursal

local.agregar_tecnicos("daniel","apple")//agregamos tecnicos a la empresa
local.agregar_tecnicos("carlos","samsung")

center.agregar_sucursales(local);//agregamos la sucursal a la central

let iphone=new Telefono("11111","apple","iphone 8");//creamos un celular en la clase telefono

//creamos el ticket para hacer obtner los datos del celular y poder arreglarlo con los metodos
let cliente1=new Ticket(iphone,"pantalla rota",50,250,"carlos");


//añadimos cliente
local.agregar_cliente(cliente1)

//agregamos el tiket a la cucursal
local.agregar_tiket(cliente1)

console.log(local)

//----------------ahora utilizamos los metodos para poder hacer las modificaciones------------


cliente1.metodo_autorizar("si");//usamos el metodo par ver si el cliente autoriza repararlo


cliente1.metodo_agregar_repuestos("pantalla")//agregamos repuestos


cliente1.metodo_iniciarArreglo()//usamos el metodo para inciar el arreglo


cliente1.metodo_finArreglo();//finalizamos el arreglo del celular


console.log(local)





































