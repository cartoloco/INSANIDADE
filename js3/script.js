let palavras = [
    "#principal-palavra4", "#principal-palavra6", "#principal-palavra7", 
    "#principal-palavra8", "#principal-palavra5", "#principal-palavra3",
     "#principal-palavra2", "#principal-palavra1"
];
let palavra = [
    "CONTROLA", "O", "FUTURO", "DE", "INSANIDADE", "QUEM", "CONTROLA", "SIMBOLO9IA", 
    "CON7ROLA", "O", "FU7URO", "DE", "INSANIDAD3", "QUEM", "CON7ROLA", "SIMBOLOGIA", 
    "CONTROLA", "O", "FUTURO", "DE", "INSANIDADE", "QU3M", "CONTROLA", "SIMBOLOGIA", 
    "CON7ROLA", "O", "FU7URO", "DE", "INSANIDAD3", "QUEM", "CON7ROLA", "SIMBOLOGIA", 
    "CONTROLA", "O", "FUTURO", "D3", "INSANIDADE", "QUEM", "CONTROLA", "SIMBOLO9IA"
];
let contador = 7;

function rodaPalavras() {
    for(var i = 0; i < 8; i++){
        document.querySelector(palavras[i]).textContent = palavra[i+contador];
    }
    contador++;
    if(contador == 31){
        contador = 6;
    }
}

executar = setInterval(rodaPalavras, 500);