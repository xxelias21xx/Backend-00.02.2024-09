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
                    objCliente = preguntarLeche(objCliente)
                    break;

                default:
                    return false
                    break;
            }
            arrCliente.push(objCliente);
            break;
        case "2":
            addExtra("azucar", objCliente);
            addExtra("leche", objCliente);
            addExtra("toppins", objCliente);
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


function preguntarLeche(objCliente) {
    respuesta = prompt("Que tipo de leche quieres: 0=Sin Leche 1=Normal, 2=Leche de Soya o 3=Leche de Almendras")
    switch (respuesta) {
        case "1":
            objCliente.cafe.leche = true;
            objCliente.cafe.lecheTipo = "Normal";
            break;
        case "2":
            objCliente.cafe.leche = true;
            objCliente.cafe.lecheTipo = "Leche de Soya";
            break;
        case "3":
            objCliente.cafe.leche = true;
            objCliente.cafe.lecheTipo = "Leche de Almendras";
            break;
        default:
            break;
    }
    return objCliente;
}

let arrExtras = [{
    id: "leche",
    opciones: [
        "Normal", "Leche de Almendra", "Leche de Soya"
    ]
},
{
    id: "azucar",
    opciones: [
        "Azucar Morena", "Azucar Blanca", "Stevia"
    ]
},
{
    id: "toppins",
    opciones:
        [
            "Crema", "Chocolate", "Vainilla"
        ]
}]

let arrProductos = [
    {
        id: "cafe",
        opciones: [
            "Americano", "Expresso", "Late"
        ]
    },
    {
        id: "postres",
        opciones: [
            "Torta de Chocolate", "Croissant", "Triple"
        ]
    }
]

function addProducto(objCliente) {
    let strListaProductos = "escoje tu producto\n";

    for (let index = 0; index < arrProductos.length; index++) {
        const element = arrProductos[index].id;
        strListaProductos += `${index} = ${element}\n`

    }
    console.log(strListaProductos)
    opcion = prompt(strListaProductos)
    console.log(opcion)
    strListaProductos = ""
    let tipoProducto;
    let strProducto;
    for (let index = 0; index < arrProductos.length; index++) {

        if (index == parseInt(opcion)) {
            strProducto = arrProductos[index].id;
            tipoProducto = arrProductos[index].opciones
            break;
        }
    }
    console.log(tipoProducto)
    for (let index = 0; index < tipoProducto.length; index++) {
        const element = tipoProducto[index];
        strListaProductos += `${index} = ${element}\n`

    }
    console.log(strListaProductos)
    opcion = prompt(strListaProductos)
    console.log(opcion)
    for (let index = 0; index < tipoProducto.length; index++) {
        if (index == opcion) {
            const element = tipoProducto[index];
            objCliente[strProducto] = element;
            break
        }
    }

    console.log(objCliente)
    return objCliente;
}

function addExtra(extra, objCliente) {
    respuesta = prompt(`Deseas agregar ${extra} SI=1 NO=2`)
    if (respuesta == "1") {
        let lista = findNameById(arrExtras, extra);
        let strOpciones = "Escoje tu opcion:\n";
        let indice = 0;
        lista.forEach(element => {
            console.log(element)
            indice++;
            strOpciones += `${indice} = ${element} \n`
        });
        console.log(strOpciones)
        opcion = prompt(strOpciones)
        console.log(opcion)
        for (let index = 0; index < lista.length; index++) {
            if (index == parseInt(opcion) - 1) {
                console.log(lista[index])
                objCliente[extra] = lista[index]
            }
        }
    }
    return objCliente;
}

function recibirPedido2() {
    let cliente = prompt("Dime tu nombre");
    let objCliente = {
        nombre: cliente
    }
    objCliente = addProducto(objCliente)
    objCliente = addExtra("azucar", objCliente)
    objCliente = addExtra("leche", objCliente)
    objCliente = addProducto(objCliente)
    console.log(objCliente)
}


function findNameById(list, id) {
    return list.find((obj) => obj.id === id).opciones;
}





document.getElementById("btnPedir").addEventListener('click', (e) => {
    e.preventDefault();
    if (recibirPedido2()) {
        console.log("Pedido Recibido")
        console.log(arrCliente)
    }
})

