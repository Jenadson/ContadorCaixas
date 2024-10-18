let tempoPorCaixa = document.getElementById("seconds");
let tempoRestante = 0;
let totalCaixas = document.getElementById("box");
let caixasRestantes = 0;
let intervalo;
let tempoTotal = 0;



function formatTime(segundos) {
    const minutos =Math.floor(segundos / 60);
    const restoSegundos = segundos % 60;
    return String(minutos).padStart(2, '0')+":"+String(restoSegundos).padStart(2,'0'); 
    
}

function start() {
    if (!intervalo) {     
        
        if (tempoRestante === 0) {
            tempoRestante = totalCaixas.value * tempoPorCaixa.value;
            caixasRestantes = totalCaixas.value;
            tempoTotal = tempoRestante;
        }

        document.getElementById("ttime").textContent = formatTime(tempoRestante);
        document.getElementById("contTime").textContent = formatTime(tempoRestante);
        document.getElementById("contBox").textContent = caixasRestantes;

        intervalo = setInterval(executar, 1000);

    

    }
    
}

function executar() {
    if (tempoRestante > 0 && caixasRestantes > 0) {
        tempoRestante--;
        document.getElementById("contTime").textContent = formatTime(tempoRestante);

        // Reduz a quantidade de caixas a cada execução do tempoPorCaixa
        if (tempoRestante % tempoPorCaixa.value === 0) {
            caixasRestantes--;
            document.getElementById("contBox").textContent = caixasRestantes;
        }
    } else {
        stop(); // Para o cronômetro se o tempo acabar ou todas as caixas forem processadas
    }
}

function pause() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo= null;
        
    }
    
}



function clearAll() {

    if (intervalo){
        clearInterval(intervalo);
        intervalo = null;
    } 

    // Limpar os inputs
    document.getElementById("box").value = '';
    document.getElementById("seconds").value = '';

    // Limpar os contadores exibidos
    document.getElementById("ttime").textContent = "00:00";
    document.getElementById("contTime").textContent = "00:00";
    document.getElementById("contBox").textContent = "0";

    tempoRestante = 0;
    caixasRestantes = 0;
    
}

function mark() {
    // Obter o tempo restante e caixas restantes
    const tempoAtual = formatTime(tempoRestante);
    const caixasAtual = caixasRestantes;
    const tempo = formatTime(tempoTotal);
    // Criar um novo item de lista para exibir o salvamento
    const item = document.createElement("li");
    item.textContent = `Tempo T.: ${tempo}, Rest.: ${tempoAtual}, Cxs ${totalCaixas.value}, Cxs Rest.: ${caixasAtual}`;

    // Adicionar o item ao histórico de salvamentos
    document.getElementById("historico").appendChild(item);
}
