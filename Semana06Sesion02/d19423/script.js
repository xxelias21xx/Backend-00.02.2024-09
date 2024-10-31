// let contenedor = document.getElementById("contenedor");
// let audio = `<audio controls>
//   <source src="audio.ogg" type="audio/ogg">
//   <source src="audio.mp3" type="audio/mpeg">
//   Your browser does not support the audio tag.
// </audio>`;
// contenedor.innerHTML = audio;
// let img = document.createElement("img");
// img.src = "https://plamoscale.com/images/fog1labs1/fulls/79.jpg";
// img.width = "400"
// contenedor.appendChild(img);

// let select  = document.createElement("select");
// select.id = "miselect"
// let arrDatos = ["BMW","Mercedes","Audi"]

// arrDatos.forEach(element => {
//     let option = document.createElement("option");
//     option.text = element;
//     option.value = element;
//     select.appendChild(option);
// });
// contenedor.appendChild(select)
// let texto = document.createElement("textarea");
// contenedor.appendChild(texto)

// window.onload = function () {
//     console.log("Cargado")
// }

// // document.getElementById("miselect").addEventListener("change",cambio)

// // function cambio(){
// //     console.log("Cambio")
// // }

// // document.getElementById("miselect").addEventListener("change",function(){
// //     console.log(this.options[this.selectedIndex].value)
// //     console.log(this.options[this.selectedIndex].innerText)
// //     console.log(this.selectedIndex)
// // })


// $("#miselect").on("change",function(){
//     console.log(this.selectedIndex)
// })

// let h1 = $("h1");
// console.log(typeof(h1))
// for (let index = 0; index < h1.length; index++) {
//     const element = h1[index];
//     element.innerText = `este es el indice ${index}`
//     console.log(element)
// }

// $(".btn").on("click",function(){
//     console.log("Hizo clic")
// })

// $("#link").on("mouseleave", function(){
//     console.log("Paso el mouse por aqui")
// })

window.onload = function () {
    verificarLogin();
    arrGundam = JSON.parse(localStorage.getItem("gundam"));
    $table.bootstrapTable({ data: arrGundam })

}

$("#logout").on("click", function (event) {
    event.preventDefault();
    sessionStorage.removeItem("login");
    window.location.reload();
})

function verificarLogin() {
    let sesion = sessionStorage.getItem("login")
    if (sesion === null) {
        window.location.href = 'login.html';
    }
}

$("#btnAgregar").on("click", async function (event) {
    event.preventDefault();
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos del kit",
        icon: "info",
        html: `
        <label class="col-md-4 control-label" for="textinput">Nombre</label>  
        <input id="nombre" class="swal2-input">
        <label class="col-md-4 control-label" for="textinput">Descripcion</label>  
        <input id="descripcion" class="swal2-input">
        <label class="col-md-4 control-label" for="textinput">Imagen</label>  
        <input id="imagen" class="swal2-input">
        <label class="col-md-4 control-label" for="textinput">Es Custom??</label>  
        <select id="selCustom" onchange="selCustomCambio(this)"><option>SI</option><option>NO</option><select/>
        <br>
        <label class="col-md-4 control-label" for="textinput">Custom</label>  
        <input id="custom" class="swal2-input">
        

        `,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Cancelar`,
        preConfirm: () => {
            return {
                nombre: $("#nombre").val(),
                descripcion: $("#descripcion").val(),
                imagen: $("#imagen").val(),
                isCustom: $("#selCustom").val(),
                custom: $("#custom").val()
            };
        }
    });
    if (formValues) {
        console.log(formValues)
        let objGundam = new Gundam(formValues.nombre, formValues.descripcion,formValues.imagen,formValues.isCustom,formValues.custom);
        guardarGundam(objGundam);
    }
})

class Gundam {
    constructor(nombre, descripcion, imagen, isCustom, custom) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.isCustom = isCustom;
        this.imagen = imagen;
        this.custom = custom;
    }
}

$("#selCustom").on("change", function () {
    console.log(this.selectedIndex)
})

function selCustomCambio(event) {
    console.log(event.selectedIndex)
    if (event.selectedIndex === 1) {
        $("#custom").prop('disabled', true);
    } else {
        $("#custom").prop('disabled', false);
    }
}
let arrGundam=[]
function guardarGundam(gundam){
    arrGundam.push(gundam);
    localStorage.setItem("gundam",JSON.stringify(arrGundam));
    dibujarTabla();
}
let $table = $('#table');

function dibujarTabla(){
    $table.bootstrapTable('load', arrGundam)
}

function gundamFormatter(value, row, index) {

        return [
            '<a class="like" href="javascript:void(0)" title="Like">',
            '<i class="fa-brands fa-jedi-order">Editar</i>',
            '</a>  ',
            '<a class="remove" href="javascript:void(0)" title="Like">',
            '<i class="fa-solid fa-download">Eliminar</i>',
            '</a>  '
        ].join('')

}

window.gundamEvents = {
    'click .like': function (e, value, row, index) {
        //despacharHelado(row)
        alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        console.log(row)
        
    //     const obj = arrGundam.indexOf(row);
    // console.log(obj);
    // if (obj > -1) { // only splice array when item is found
    //     arrGundam.splice(obj, 1); // 2nd parameter means remove one item only
    // }
    // console.log(arrGundam);
    // $table.bootstrapTable('remove', {
    //     field: 'nombre',
    //     values: [row.nombre]
    // })
    }
}