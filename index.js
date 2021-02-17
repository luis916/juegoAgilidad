//Datos usuario
const misPuntos = document.querySelector('#misPuntos');
const tiempoRestante = document.querySelector('#tiempoRestante');
const volverJugar = document.querySelector('#volverJugar');
const contenedor = document.querySelector('.contenedor');
const imagen = document.getElementById('imagen');
//Datos juego
const puntosNecesarios = 20;
var tiempoJuego = 15;
var bot = document.querySelector('.bot');
bot.style.transitionDuration = "1s";
// tiempo restante del juego
function temporizador(){
    
  var intervalo = setInterval(function(){
        tiempoRestante.textContent = tiempoJuego--;
        if(tiempoRestante.textContent == 0){tiempoRestante.textContent=10;clearInterval(intervalo);tiempoRestante.textContent = 0;}
    },1000)
}
temporizador();
// sumador de puntos
function contadorPuntos(newPuntos){
    newPuntos;
    if (misPuntos.textContent==20)
    {  
        let h1 = document.createElement('h1');
        let h1Texto = document.createTextNode('Felicidades ganaste!!!');
        imagen.style.display = 'none';
        h1.appendChild(h1Texto);
        h1.style.fontSize = '31px';
        h1.style.marginLeft = '7px';
        h1.style.position = 'absolute'; 
        setInterval(function()
        {
        var random = Math.random()*255;
        var random2 = Math.random()*255;
        var random3 = Math.random()*255;
        let rotacion = Math.random()*360;
        h1.style.color = `rgb(${Math.round(random)}, ${Math.round(random2)}, ${Math.round(random3)})`;
        h1.style.transitionDuration = `10s`;
        h1.style.transform = `rotate(${rotacion}deg)`;
        
        contenedor.appendChild(h1);
        },1000) 
    }
    
}
let perdiste = document.createElement('h1');
let perdisteTexto = document.createTextNode('Haz perdido!!!');
perdiste.style.color = 'red';
perdiste.style.fontSize = '40px';
perdiste.style.top = '70px';
perdiste.appendChild(perdisteTexto);
bot.addEventListener('click',function(){
    let randomTop = Math.random()*480;
    let randomLeft = Math.random()*290;
    let rotacion = Math.random()*360;
    bot.style.top = `${randomTop}px`;
    bot.style.left = `${randomLeft}px`;
   // bot.style.transform = `rotate(${rotacion}deg)`;
    contadorPuntos(misPuntos.textContent++);
    if (tiempoRestante.textContent ==0) 
    {
        misPuntos.textContent=0;
       
        contenedor.appendChild(perdiste);
        
    }
})
// Volver a jugar
volverJugar.addEventListener('click',function(){
    window.location.reload('ventanajuego.html')
})
