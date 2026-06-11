let coins = 50;
let eco = 50;

const farmArea = document.getElementById("farmArea");

for(let i=0;i<24;i++){
  const slot = document.createElement("div");
  slot.className = "slot";
  farmArea.appendChild(slot);
}

function atualizar(){
  document.getElementById("coins").textContent = coins;
  document.getElementById("eco").textContent = eco;

  let nivel = "Iniciante";

  if(eco >= 70) nivel = "Sustentável";
  if(eco >= 90) nivel = "Mestre Agroflorestal";

  document.getElementById("level").textContent = nivel;

  if(eco <= 0){
    document.getElementById("message").textContent =
    "💀 Sua fazenda entrou em colapso ambiental!";
  }
}

function adicionarNaFazenda(emoji){
  const slots = document.querySelectorAll(".slot");

  for(let slot of slots){
    if(slot.textContent === ""){
      slot.textContent = emoji;
      return true;
    }
  }

  document.getElementById("message").textContent =
  "🚜 Não há mais espaço na fazenda!";
  return false;
}

function plantarArvore(){

  if(coins < 10){
    document.getElementById("message").textContent =
    "Sem moedas suficientes!";
    return;
  }

  if(adicionarNaFazenda("🌳")){
    coins -= 10;
    eco += 8;

    document.getElementById("message").textContent =
    "🌳 Árvore plantada!";
  }

  atualizar();
}

function plantarMilho(){

  if(coins < 5){
    document.getElementById("message").textContent =
    "Sem moedas suficientes!";
    return;
  }

  if(adicionarNaFazenda("🌽")){
    coins -= 5;
    eco += 3;

    document.getElementById("message").textContent =
    "🌽 Milho plantado!";
  }

  atualizar();
}

function compostar(){
  eco += 15;
  coins += 5;

  document.getElementById("message").textContent =
  "♻️ Compostagem realizada!";
  
  atualizar();
}

function desmatar(){
  eco -= 20;
  coins += 15;

  document.getElementById("message").textContent =
  "🔥 Você desmatou uma área e prejudicou o ambiente!";
  
  atualizar();
}

setInterval(() => {
  coins += 2;

  if(eco > 100) eco = 100;

  atualizar();

  if(eco >= 100){
    document.getElementById("message").textContent =
    "🏆 Parabéns! Você criou uma agrofloresta modelo!";
  }
}, 3000);

atualizar();
