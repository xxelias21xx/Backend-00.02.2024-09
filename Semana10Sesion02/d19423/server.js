console.log("Inicio de la aplicacion");
require('dotenv').config();
const { MongoClient } = require("mongodb");
const URI = process.env.mongoURI;

const CLIENT = new MongoClient(URI);

async function run() {
    try {
        let database = CLIENT.db("sample_airbnb");
        let collection = database.collection("listingsAndReviews");
        let query = { property_type: 'House' };
        let result = await collection.findOne(query);
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        await CLIENT.close();
    }
}
//run().catch(console.dir);
//console.log(process.env.mongoURI)

//CRUD
async function traerUno(base, coleccion, filtro = null) {
    try {
        let database = CLIENT.db(base);
        let collection = database.collection(coleccion);
        if (filtro === null) {
            return await collection.findOne();
        }
        else {
            return await collection.findOne(filtro);
        }
    } finally {
        CLIENT.close();
    }

}
// let filtro = {property_type:"Apartment"}
// traerUno("sample_airbnb","listingsAndReviews",filtro).then(data =>{
//     console.log(data);
// });

async function traerVarios(base, coleccion, filtro = null) {
    try {
        let database = CLIENT.db(base);
        let collection = database.collection(coleccion);
        if (filtro === null) {
            return await collection.find().toArray();
        }
        else {
            return await collection.find(filtro).toArray();
        }
    } finally {
        CLIENT.close();
    }

}

// let filtroVarios = {property_type:"Apartment"}
// traerVarios("sample_airbnb","listingsAndReviews",filtroVarios).then(data =>{
//     console.log(data);
// });

async function crearUno(base, coleccion, data = null) {
    try {
        let database = CLIENT.db(base);
        let collection = database.collection(coleccion);
        if (data === null) {
            throw "Se nececita data"
        }
        else {
            return await collection.insertOne(data);
        }
    } finally {
        CLIENT.close();
    }

}
let data = {
    listing_url: "https://www.airbnb.com/rooms/10009999",
    name: "Horto flat with small garden",
    summary: "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area.",
}

crearUno("sample_airbnb", "listingsAndReviews", data).then(data => {
    console.log(data);
}).catch(console.dir);

async function CRUD(accion, base, coleccion, filtro = null, data = null) {
    try {
        let database = CLIENT.db(base);
        let collection = database.collection(coleccion);
        switch (accion) {
            case 'traerUno':
                if (filtro === null) {
                    return await collection.findOne();
                }
                else {
                    return await collection.findOne(filtro);
                }
                break;
            case 'traerVarios':
                if (filtro === null) {
                    return await collection.find().toArray();
                }
                else {
                    return await collection.find(filtro).toArray();
                }
                break;
            case 'insertarUno':
                if (data === null) {
                    throw "Se nececita data"
                }
                else {
                    return await collection.insertOne(data);
                }
                break;

            case 'insertarVarios':
                if (data !== null && data.isArray()) {
                    return await collection.insertMany(data);

                }
                else {
                    throw "Se necesita data en formato array"
                }
                break;

            case 'actualizarUno':
                if (data !== null && filtro !== null) {
                    return await collection.updateOne(filtro, data)

                }
                else {
                    throw "Se necesita data en formato array"
                }
                break;
            case 'actualizarVarios':
                if (data !== null && filtro !== null) {
                    return await collection.updateMany(filtro, data)

                }
                else {
                    throw "Se necesita data en formato array"
                }
                break;
            case 'borraUno':
                if (data !== null && filtro !== null) {
                    return await collection.deleteOne(filtro, data)

                }
                else {
                    throw "Se necesita data en formato array"
                }
                break;
            case 'borraVarios':
                if (data !== null && filtro !== null) {
                    return await collection.deleteMany(filtro, data)

                }
                else {
                    throw "Se necesita data en formato array"
                }
                break;
            default:
                return "No esta implementada esa accion";
                break;
        }
    } finally {
        CLIENT.close();
    }
}