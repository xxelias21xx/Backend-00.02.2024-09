const Heladeria = function () {

    let Nombre="";
    let Direccion="";
    function configurar(){
       // document.getElementById("nombre").innerText = Nombre
       $("#nombre").text(Nombre);
       $("#direccion").text(Direccion);
    }
    function eventos(){
        console.log("Escuchando eventos");
        //document.getElementById("crearCliente").addEventListener("click",crearCliente);
        $("#crearCliente").on("click",(e)=>{
            e.preventDefault();
            let nombre = prompt("Escribe tu nombre");
            let documento = prompt("Escribe tu documento");
            let telefono = prompt("Escribe tu telefono");
            let objCliente = {
                nombre,
                documento,
                telefono,
                helado:{},
                recibirPedido(){
                    let sabor = prompt("Escoje tu sabor")
                    let tamano = prompt("Escoje tu tamaño")
                    let toppis = prompt("Escoje tus toppins")
                    this.helado.sabor = sabor;
                    this.helado.tamano = tamano;
                    this.helado.toppis = toppis;
                }
            }
            objCliente.recibirPedido();
            console.log(objCliente);
        })
    }
    
    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar();
            eventos();
        },
    };
}();
