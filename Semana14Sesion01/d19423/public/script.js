window.addEventListener('load', init, false);

function init(){
    wsConnect();
}

function wsConnect(){
    websocket= new WebSocket("ws://localhost:8089");

    websocket.onopen= function(evt){
        onOpen(evt);
    }
    websocket.onclose = function(evt){
        onClose(evt);
    }
    websocket.onmessage= function(evt){
        onMessage(evt);
    }
    websocket.onerror = function(evt){
        onError(evt);
    }
}

function onError(evt){
    console.error("ERROR: "+ evt.data);
}

function onClose(evt){
    document.getElementById("enviar").disabled = true;
    setTimeout(function(){
        wsConnect();
    }, 2000);
}

function onOpen(evt){
    document.getElementById("enviar").disabled = false;
    doSend("Hola");
}

function onMessage(evt){
    let area = document.getElementById("mensajes");
    area.append(evt.data);
}

function doSend(message){
    console.log(`Enviando ${message} al servidor`);
    websocket.send(message);
}

function enviarTexto(event){
    event.preventDefault();
    let campo = event.target.texto;
    doSend(campo.value);
}