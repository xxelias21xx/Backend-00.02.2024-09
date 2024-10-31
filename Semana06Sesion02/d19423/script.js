let contenedor = document.getElementById("contenedor");
let audio = `<audio controls>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>`;
contenedor.innerHTML = audio;
let img = document.createElement("img");
img.src = "https://plamoscale.com/images/fog1labs1/fulls/79.jpg";
img.width = "400"
contenedor.appendChild(img);

let select  = document.createElement("select");
select.id = "miselect"
let arrDatos = ["BMW","Mercedes","Audi"]

arrDatos.forEach(element => {
    let option = document.createElement("option");
    option.text = element;
    option.value = element;
    select.appendChild(option);
});
contenedor.appendChild(select)
let texto = document.createElement("textarea");
contenedor.appendChild(texto)

window.onload = function () {
    console.log("Cargado")
}

// document.getElementById("miselect").addEventListener("change",cambio)

// function cambio(){
//     console.log("Cambio")
// }

// document.getElementById("miselect").addEventListener("change",function(){
//     console.log(this.options[this.selectedIndex].value)
//     console.log(this.options[this.selectedIndex].innerText)
//     console.log(this.selectedIndex)
// })


$("#miselect").on("change",function(){
    console.log(this.selectedIndex)
})

let h1 = $("h1");
console.log(typeof(h1))
for (let index = 0; index < h1.length; index++) {
    const element = h1[index];
    element.innerText = `este es el indice ${index}`
    console.log(element)
}

$(".btn").on("click",function(){
    console.log("Hizo clic")
})

$("#link").on("mouseleave", function(){
    console.log("Paso el mouse por aqui")
})