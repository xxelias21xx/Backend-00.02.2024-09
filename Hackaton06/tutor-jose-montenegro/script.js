const tecnoIdat = new Central();
const tecnoIdatChiclayo = new Sucursal(
  "tecnoIdat-chiclayo",
  "chiclayo",
  "893465978"
);
const newDb = new DB();

tecnoIdat.agregarSucursal(tecnoIdatChiclayo);

const loadingSystem = () => {
  const sucursales = newDb.obtenerDatos("sucursales");
  console.log(sucursales);
  if (sucursales) {
    const arraySucursales = sucursales.map((e) => {
      console.log("🚀 ~ file: script.js:15 ~ arraySucursales ~ e:", e);

      const newSucursal = new Sucursal(
        e.nombre,
        e.direccion,
        e.contacto,
        e.central
      );
      console.log(
        "🚀 ~ file: script.js:16 ~ arraySucursales ~ newSucursal:",
        newSucursal
      );
      //   newSucursal.asignarDatos(e);
      return newSucursal;
    });
    tecnoIdat.cargarSucursales(arraySucursales);
  }

  loadingSucursal();
};

const loadingSucursal = () => {
  let arrayOption = [];

  const selectInitial = document.createElement("option");
  selectInitial.value = "no-option";
  selectInitial.textContent = "seleccionar sucursal";
  arrayOption.push(selectInitial);

  const optionSucursal = document.querySelector("#sucursal");

  tecnoIdat.sucursales.forEach((opcion) => {
    const optionItem = document.createElement("option");
    optionItem.value = opcion.nombre;
    optionItem.textContent = opcion.nombre;
    // optionSucursal.appendChild(optionItem);
    arrayOption.push(optionItem);
  });

  optionSucursal.replaceChildren(...arrayOption);

  ///alamacenamos datos

  newDb.guardarDatos("sucursales", tecnoIdat.sucursales);
};

const addNewSucursal = document.querySelector(".container-add-sucursal-button");

addNewSucursal.addEventListener("click", () => {
  const inputValueNewSucursal = document.querySelector(
    ".container-add-sucursal-input"
  ).value;
  if (inputValueNewSucursal == "") {
    alert("ingrese un valor");
  } else {
    const newSucursal = new Sucursal(inputValueNewSucursal, "", "");

    tecnoIdat.agregarSucursal(newSucursal);
    loadingSucursal();
  }
});

const selectElement = document.querySelector("#sucursal");
const titleSucursal = document.querySelector(".sucursal-name-h2");
selectElement.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value != "no-option") {
    titleSucursal.textContent = "Sucursal:" + e.target.value;
  } else {
    titleSucursal.textContent = "Sucursal";
  }
});
loadingSystem();
