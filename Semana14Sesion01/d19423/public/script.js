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
}