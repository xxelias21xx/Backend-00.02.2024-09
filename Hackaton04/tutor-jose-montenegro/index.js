// funciones que no retornan valores
function main() {
  console.log("me llamo jose");
}

const hello = () => {
  console.log("soy la funcion hello");
};

// funciones que  retornan valores
function saludar() {
  const saludo = "Hola, estoy saludando";

  return saludo;
}

const escribir = () => "Hola, estoy escribiendo";

const dato = escribir();

console.log(dato);
