function fetchData(callback) {
    //emular solicitud ajax
    setTimeout(function () {
        const data = { message: "Hola desde el callback" }
        callback(data);
    }, 5000)
}

console.log("Inicio del Callback");
fetchData(function(data){
    console.log("Llego la data del callback");
    console.log(data.message);
});
console.log("Fin del callback");

function fetchData2(){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            try {
                const data = { message: "Hola desde la promesa" }
                if(Math.random() < 0.5)
                    throw new Error("me cai sin querer");
                    
                resolve(data)
            } catch (error) {
                reject(error);
            }
        }, 10000)
    })
}

console.log("Inicio de la promesa");
fetchData2().then(function (data){
    console.log("Llego la data de la Promesa");
    console.log(data.message);
}).catch(function(error){
    if(error.message == "me cai sin querer"){
        console.log("No pasa nada todo en orden")
    }
});
console.log("fin de la promesa");


async function ejemploAsync() {
    
    return "Hola, mundo!";
    
}

console.log("inicio de async");
ejemploAsync().then(console.log); // Imprime: Hola, mundo!
console.log("fin de async");


async function ejemploAwait() {
    setTimeout(async function () {
    const resultado = await Promise.resolve("Resultado");
        console.log(resultado); // Imprime: Resultado
    },4000);
}
console.log("inicio de await");
ejemploAwait();
console.log("fin de await");


async function ejecutarEnDesOrden() {
    console.log("Inicia el proceso");

     tarea1().then(resultado1=>
        console.log("Tarea 1 completada:", resultado1)
    );

    tarea2().then(resultado2=>
    console.log("Tarea 2 completada:", resultado2));

    tarea3().then(resultado3=>
    console.log("Tarea 3 completada:", resultado3));

    console.log("Todas las tareas completadas");
}

async function tarea1() {
    return new Promise((resolve) => setTimeout(() => resolve("Resultado 1"), 1000));
}

async function tarea2() {
    return new Promise((resolve) => setTimeout(() => resolve("Resultado 2"), 500));
}

async function tarea3() {
    return new Promise((resolve) => setTimeout(() => resolve("Resultado 3"), 700));
}

ejecutarEnDesOrden();

async function ejecutarEnOrden() {
    console.log("Inicia el proceso");

    const resultado1 = await tarea1();
    console.log("Tarea 1 completada:", resultado1);

    const resultado2 = await tarea2();
    console.log("Tarea 2 completada:", resultado2);

    const resultado3 = await tarea3();
    console.log("Tarea 3 completada:", resultado3);

    console.log("Todas las tareas completadas");
}

async function tarea1() {
    return new Promise((resolve) => setTimeout(() => resolve("Resultado 1"), 1000));
}

async function tarea2() {
    return new Promise((resolve) => setTimeout(() => resolve("Resultado 2"), 500));
}

async function tarea3() {
    return new Promise((resolve) => setTimeout(() => resolve("Resultado 3"), 700));
}

ejecutarEnOrden();