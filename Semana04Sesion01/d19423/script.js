console.log("Inicio de la aplicacion");
// console.error("Hubo un error");

// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
//     console.log("Estoy sumando, la respuesta es: " + resultado);
//     return resultado;
// }

// let respuesta = sumar(3, 4);
// console.log(respuesta)

// let suma = function (a, b) { return a + b; }


// console.log(suma(5, 6));

// const sumatoria = (a, b) => { return a + b }

// console.log(sumatoria(55, 66));

//Una Cafeteria tipo starbuks -> Automatizacion
//Cajero, Barista y Cliente
let arrCliente = [];
function recibirPedido() {
    let cliente = prompt("Dime tu nombre");
    let objCliente = {
        nombre: cliente
    }
    let producto = prompt("Escoja el Producto -> 1=Cafe, 2=Postre")
    switch (producto) {
        case "1":
            let tipoCafe = parseInt(prompt("Dime tu tipo de cafe: 1=Expresso, 2=Americano, 3=Late"))
            switch (tipoCafe) {
                case 1:
                    objCliente.cafe = { tipo: "Expresso" }
                    objCliente = preguntarAzucar(objCliente)
                    break;
                case 2:
                    objCliente.cafe = { tipo: "Americanp" }
                    objCliente = preguntarAzucar(objCliente)
                    break;
                case 3:
                    objCliente.cafe = { tipo: "Late" }
                    objCliente = preguntarAzucar(objCliente)
                    break;

                default:
                    return false
                    break;
            }
            arrCliente.push(objCliente);
            break;
        case "2":
            let tipoPostre = parseInt(prompt("Dime tu postre: 1=Torta de Chocolate, 2=Croissant, 3=Triple"))
            switch (tipoPostre) {
                case 1:
                    objCliente.postre = { tipo: "Torta de Chocolate" }
                    break;
                case 2:
                    objCliente.cafe = { tipo: "Croissant" }
                    break;
                case 3:
                    objCliente.cafe = { tipo: "Triple" }
                    break;

                default:
                    return false
                    break;
            }
            arrCliente.push(objCliente);
            break;
        default:
            return false
            break;
    }
    return true;
}

function preguntarAzucar(objCliente) {
    let respuesta = prompt("Quieres azucar?? 1=SI, 2=NO")
    if (respuesta == "1") {
        let tipo = prompt("Azucar Morena = 1, Azucar Blanca = 2, Stevia = 3");
        switch (tipo) {
            case "1":
                objCliente.cafe.azucar = true;
                objCliente.cafe.tipoazucar = "Azucar Morena ";
                break;
            case "2":
                objCliente.cafe.azucar = true;
                objCliente.cafe.tipoazucar = "Azucar Blanca ";
                break;
            case "3":
                objCliente.cafe.azucar = true;
                objCliente.cafe.tipoazucar = "Stevia";
                break;
            default:
                break;
        }
    }
    return objCliente


}



document.getElementById("btnPedir").addEventListener('click',(e)=>{
    e.preventDefault();
    if (recibirPedido()) {
        console.log("Pedido Recibido")
        console.log(arrCliente)
    }
})