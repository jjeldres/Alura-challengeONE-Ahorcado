
botonIniciar.addEventListener("click",function(event){
    event.preventDefault();   
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
     comenzarJuego();
})
botonReiniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    comenzarJuego();
})

botonAgregar.addEventListener("click",function(event){
    event.preventDefault();
    palabras.push(inputPalabra.value.toUpperCase());
    inputPalabra.value = "";
    inputPalabra.focus();
})