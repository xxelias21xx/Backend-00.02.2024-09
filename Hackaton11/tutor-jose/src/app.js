import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from "./config/db/sequelize.cofig.js";
import Clientes from "../src/models/clients.model.js";
import Mascotas from "./models/mascota.model.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

try {
  sequelize.authenticate().catch((err) => {
    console.error(err);
  });
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.post("/clientes", async (req, resp) => {
  try {
    console.log(req.body);

    const existsClient = await Clientes.findByPk(req.body.dni);

    if (existsClient) {
      return resp.status(400).json({ message: "El cliente ya existe" });
    }
    const newClients = await Clientes.create(req.body);

    // console.log(newClients);

    return resp.json({ message: "cliente creado", data: newClients });
  } catch (err) {
    // if (
    //   err.name == "SequelizeUniqueConstraintError" &&
    //   err.error[0].path == "dni"
    // ) {
    //   resp.status(400).json({ message: "El cliente ya existe" });
    // }
    console.log("🚀 ~ file: app.js:36 ~ app.post ~ err:", err);
    return resp.status(500).json({ message: "error del servidor" });
  }
});

app.post("/mascotas", async (req, resp) => {
  try {
    const { responsable, ...rest } = req.body;

    const existResponsable = await Clientes.findByPk(responsable);
    if (!existResponsable) {
      return resp
        .status(400)
        .json({ message: "El responsable no esta registrado" });
    }
    const newMascota = await Mascotas.create({
      ...rest,
      clienteDni: existResponsable.dni,
    });
    console.log("mascotas", newMascota);

    return resp.json({ data: "mascota creada", data: newMascota });
  } catch (err) {
    console.log("🚀 ~ file: app.js:36 ~ app.post ~ err:", err);
    return resp.status(500).json({ message: "error del servidor" });
  }
});

app.get("/mascotas", async (req, resp) => {
  const mascotas = await Mascotas.findAll({
    attributes: ["codigo", "nombre", "fechaNacimiento"],
    include: [
      {
        model: Clientes,
        attributes: ["nombre", "direccion"],
      },
    ],
  });

  return resp.json({ message: "datos de mascotas", data: mascotas });
});

app.patch("/mascotas/:codigo", async (req, resp) => {
  try {
    const { codigo } = req.params;

    const updataData = await Mascotas.update(
      {
        ...req.body,
      },
      {
        where: {
          codigo,
        },
        returning: true,
      }
    );

    if (updataData.length > 0) {
      console.log(updataData[1][0]);
      return resp.json({
        message: "datos actualizados",
        data: updataData[1][0].dataValues,
      });
    }
    resp.json({});
  } catch (err) {
    console.log("🚀 ~ file: app.js:36 ~ app.post ~ err:", err);
    return resp.status(500).json({ message: "error del servidor" });
  }
});
app.delete("/mascotas/:codigo", async (req, resp) => {
  const { codigo } = req.params;

  const deleteMascota = await Mascotas.destroy({
    where: {
      codigo: codigo,
    },
    force: true,
  });

  resp.json();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
