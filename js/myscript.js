//aqui vai javascript
function trocarFrase() {
    var fraseAtual = document.getElementById("frase");
    var novaFrase = document.getElementById("novaFrase").value;
    fraseAtual.innerHTML = novaFrase;
    fraseAtual.style.color = "white";
    fraseAtual.style.fontSize = "25px";
    fraseAtual.style.backgroundColor = "blue";
    document.body.style.backgroundColor = "white";
    elemento.innerHTML = "<img src=\'img/a.jpeg\' />"    
}

function gebi(id){
    return document.getElementById(id)
}