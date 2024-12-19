const UsersControllers = require('./controllers/users.controller');

exports.routesConfig = function (app) {
    // app.get("/users",(req,res)=>{
    //     res.send({message:"Hola desde users"});
    // })
    app.post('/users',[
        UsersControllers.insert
    ]);
}