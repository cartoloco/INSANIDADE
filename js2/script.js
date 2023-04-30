function verificar() {
    const num1 = parseInt(document.getElementById("caixa1").value);
    const num2 = parseInt(document.getElementById("caixa2").value);
    const num3 = parseInt(document.getElementById("caixa3").value);
    if (clicksAmarelo === 9 && clicksVerde === 2 && clicksVermelho === 4) {
        document.getElementById("mensagem").textContent = "A FENDA!";
        window.location.href = "./index3.html";
    } else {
        document.getElementById("mensagem").textContent = "ERRO";
        clicksVermelho = 0;
        clicksVerde = 0;
        clicksAmarelo = 0;
        document.getElementById("btnVermelho").innerHTML = clicksVermelho;
        document.getElementById("btnVerde").innerHTML = clicksVerde;
        document.getElementById("btnAmarelo").innerHTML = clicksAmarelo;
    }
}
let clicksVermelho = 0;
let clicksVerde = 0;
let clicksAmarelo = 0;

document.getElementById("btnVermelho").addEventListener("click", function() {
    clicksVermelho++;
    document.getElementById("btnVermelho").innerHTML = clicksVermelho;
});
document.getElementById("btnVerde").addEventListener("click", function() {
    clicksVerde++;
    document.getElementById("btnVerde").innerHTML = clicksVerde;
});
document.getElementById("btnAmarelo").addEventListener("click", function() {
    clicksAmarelo++;
    document.getElementById("btnAmarelo").innerHTML = clicksAmarelo;
});
