function suma_matriz(matriz) {
    let respuesta=matriz.reduce((total,personas)=>total+personas.presupuesto,0);

    let repsuesta2=matriz.reduce((suma,personas)=>suma+personas.edad,0)
    return `la suma de sus presupuesto es ${respuesta} y la suma de sus edades son ${repsuesta2}`;    
}

let arrayobjetos=[

    {nombre:"carlos", presupuesto:2000,edad:23},
    {nombre:"miguel", presupuesto:3000,edad:15},
    {nombre:"milagros", presupuesto:4000,edad:45}
];

console.log(suma_matriz(arrayobjetos))




