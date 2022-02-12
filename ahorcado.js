

function sorteo(){
    let Aleatorio = Math.floor(Math.random()*palabras.length);
    Sorteada = palabras[Aleatorio];
    palabras.splice(Aleatorio,1);
    return Sorteada;
}

function generarMatrizPalabra(palabra){
    separada = palabra.split("");
    matrizPalabra = separada;
}

function comenzarJuego(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    base();
    sorteo();
    generarMatrizPalabra(Sorteada);
    agregarGuiones();
    mostrarRepetidas();
    iniciarPartida = true;
    letraIngresada = [];
    letrasCorrectas = [];
    letrasErroneas = [];
}

function buscarPosiciones(){
    if (iniciarPartida){
    let posicionBuscada = matrizPalabra.indexOf(letraIngresada[0]);
        while (posicionBuscada != -1) { 
            posiciones.push(posicionBuscada);
            posicionBuscada = matrizPalabra.indexOf(letraIngresada[0], posicionBuscada + 1);
  }
}
}

function agregarGuiones(){
    let Xinicial = 350;
    let Yinicial = 610;
    let contador = 0;
    let numeroLetras = Sorteada.length;
    while (contador<numeroLetras){
        pincel.fillStyle = "black";
        pincel.fillRect(Xinicial+(40*contador),Yinicial,30,4);
        contador++;
    }
}

function dibujarletras(arrOrden){
    let Xinicial = 358;
    let Yinicial = 600;
        for(i=0;i<arrOrden.length;i++){
            pincel.fillStyle = "#FF3300";
            pincel.font = "40px Georgia";
            pincel.fillText(letraIngresada[0],Xinicial+(40*arrOrden[i]),Yinicial);
        }
        posiciones = [];
}


document.addEventListener("keyup", function(event){
    letraIngresada = [];
    let letra = event.key.toUpperCase();
    let codigo = letra.charCodeAt();
    if (iniciarPartida){
    if(codigo>64 && codigo<91){
        letraIngresada.push(letra);
        buscarPosiciones();
        dibujarletras(posiciones);
        var comparador = letrasErroneas.length;
        if(matrizPalabra.includes(letra)){
            if(!letrasCorrectas.includes(letra)){
                letrasCorrectas.push(letra)
            }
        }else if(!letrasErroneas.includes(letra)){
            letrasErroneas.push(letra)
        }
        if(comparador<letrasErroneas.length){
            dibujarErroneas(letrasErroneas) 
        }
        dibujarAhorcado();
        }
    comprobarJuegoGanado();
    comprobarJuegoPerdido();
    } 
});



function mostrarRepetidas(){
    for (i=0;i<Sorteada.length;i++){
        if(!letrasUnicas.includes(Sorteada[i])){
            letrasUnicas.push(Sorteada[i])
        }
    }
}

function dibujarErroneas(letrasIncorrectas){
    let Xinicial = 300;
    let Yinicial = 650;
    pincel.fillStyle = "black";
    pincel.font = "20px Georgia";
    pincel.fillText("letras erroneas : " + letrasIncorrectas.toString(),Xinicial,Yinicial);
}

function comprobarJuegoGanado(){
    let palabra_sin_Letras_Repetidas = letrasUnicas.sort().toString();
    let erroneasIngresadas =letrasCorrectas.sort().toString();
    if(palabra_sin_Letras_Repetidas===erroneasIngresadas){
        pincel.fillStyle = "#FFFF00 ";
        pincel.font = "50px Georgia";
        pincel.fillText("Felicidades , Ganaste! :)",500,400);
        iniciarPartida = false;
        botonReiniciar.focus();
        letrasUnicas = [];
    }
}

function comprobarJuegoPerdido(){
    if(letrasErroneas.length>5){
        pincel.fillStyle = "#FF0033";
        pincel.font = "40px Georgia";
        pincel.fillText("Lo lamentamos,perdiste :(",500,300);
        juegoIniciado = false;

        pincel.fillStyle = "#1A237E";
        pincel.font = "25px Georgia";
        pincel.fillText("La palabra era!" + " " + Sorteada,600,400);
        botonReiniciar.focus();
        letrasUnicas = [];
    }
}

function dibujarAhorcado(){
    let contador = letrasErroneas.length;
    if (contador===1){
        cabeza()
    }else if(contador===2){
        tronco()
    }else if(contador===3){
        brazoIzquierdo()
    }else if(contador===4){
        brazoDerecho()
    }else if(contador===5){
        piernaIzquierda()
    }else if(contador===6){
        piernaDerecha()
    }
}
