let tempoPorCaixa = document.getElementById("seconds");
let tempoRestante = 0;
let totalCaixas = document.getElementById("box");
let caixasRestantes = 0;
let intervalo;


function formatTime(segundos) {
    const minutos =Math.floor(segundos / 60);
    const restoSegundos = segundos % 60;
    return String(minutos).padStart(2, '0')+":"+String(restoSegundos).padStart(2,'0'); 
    
}

function start() {
    if (!intervalo) {
        tempoRestante = totalCaixas.value * tempoPorCaixa.value;
    caixasRestantes= totalCaixas.value;
    

    document.getElementById("ttime").textContent = formatTime(tempoRestante);
    document.getElementById("contTime").textContent = formatTime(tempoRestante);
    document.getElementById("contBox").textContent = caixasRestantes;

    intervalo = setInterval(executar, 1000);

    }
    
}

function executar() {
    if (tempoRestante > 0 &&  caixasRestantes > 0 ) {
        tempoRestante --;
        document.getElementById("contTime").textContent = formatTime(tempoRestante);
        
        if (tempoRestante % tempoPorCaixa.value === 0) {
            caixasRestantes--;
            document.getElementById("contBox").textContent = caixasRestantes;
            
        }
    }else{
        stop()
    }
    
}

function pause() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo= null;
        
    }
    
}

function stop() {
    clearInterval(intervalo);
    intervalo = null;
    document.getElementById("contTime").textContent = "00:00";
    document.getElementById("contBox").textContent = "0";
    
}
