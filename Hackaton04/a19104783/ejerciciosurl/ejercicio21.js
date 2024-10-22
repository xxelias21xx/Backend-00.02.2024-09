function encontrar(cadena,palabra) {
    
  
    if (cadena.includes(palabra)) {
        let separar=cadena.split(" ");
        let encontrar=separar.indexOf(palabra);
        return `encontre a "${palabra}" en la poscion ${encontrar}`;


   
    }else{
        console.log("la palabra no esta incluida en el texto");
    }
    
}

let texto="hola que tal?";
console.log(encontrar(texto,"hola"));
