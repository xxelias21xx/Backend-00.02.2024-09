$("#formulario").on("submit",function(event){
    event.preventDefault();
    console.log("esta enviando el formulario")
    let username = $("#username").val()
    let password = $("#password").val()
    console.log(username)
    console.log(password)
    if(username!=="" && password !=="" && password === "123456"){
        console.log("Validado")
        sessionStorage.setItem("login",JSON.stringify({login:true})) 
        window.location.href = 'index.html';
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario y/o el password son incorrectos",
            showConfirmButton: false,
            timer: 1500
          });
    }
})