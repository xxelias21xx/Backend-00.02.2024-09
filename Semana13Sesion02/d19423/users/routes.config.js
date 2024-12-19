exports.routesConfig = function (app) {
    app.get("/users",(req,res)=>{
        res.send({message:"Hola desde users"});
    })
}