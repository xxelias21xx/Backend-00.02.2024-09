import http from "node:http";
import url from "node:url";

const server = http.createServer();
let listSales = [];
server.on("request", (req, res) => {
  console.log(req.method);

  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;

  console.log("🚀 ~ file: app.js:8 ~ server.on ~ parseUrl:", parseUrl);

  if (req.method == "GET" && path == "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        message: "Api available!",
      })
    );
  }

  if (req.method == "GET" && path == "/api/sales") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        message: "Operation successful",
        data: listSales,
      })
    );
  }

  if (req.method=="GET" && path=="/api/pendientes") {
    const LstPendien= listSales.filter(lista=>lista.isComplete==="Por Pagar");
    res.writeHead(200,{ "Content-Type":"application/json" });
    return res.end(
        JSON.stringify({
            message:"Operacion exitosa",
            data:LstPendien,
        })
    );
  }

  if (req.method=="GET" && path=="/api/pagado") {
    const LstPagado= listSales.filter(lista=>lista.isComplete==="Pagado");
        res.writeHead(200,{ "Content-Type":"application/json" });
        return res.end(
            JSON.stringify({
                message:"Operacion exitosa",
                data:LstPagado,
            })
        );  
  }


  if (req.method == "POST" && path == "/api/sales") {
    console.log("creating a new sales");

    console.log("============================================");
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    return req.on("end", () => {
      try {
        const { client, total, date, isComplete, products } = JSON.parse(body);

        if (!client || !date || !isComplete || !total | !products) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({
              message: "The fields [client,date,isComplete] is required",
            })
          );
        }

        listSales.push({
          client,
          total,
          date,
          isComplete,
          products,
        });

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            message: "Operation successful",
          })
        );
      } catch (e) {
        console.error(e.message);
      }
    });
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "route not found",
    })
  );
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});