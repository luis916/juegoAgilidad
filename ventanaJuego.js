

//Datos usuario
const misPuntos = document.querySelector('#misPuntos');
const tiempoRestante = document.querySelector('#tiempoRestante');
const volverJugar = document.querySelector('#volverJugar');
const contenedor = document.querySelector('.contenedor');
//Datos juego
const puntosNecesarios = 5;
var tiempoJuego = 14;
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
    if (misPuntos.textContent==5)
    {  
        let h1 = document.createElement('h1');
        let h1Texto = document.createTextNode('Felicidades ganaste!!!');
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
bot.addEventListener('click',function(){
    let randomTop = Math.random()*480;
    let randomLeft = Math.random()*280;
    let rotacion = Math.random()*360;
    bot.style.top = `${randomTop}px`;
    bot.style.left = `${randomLeft}px`;
    bot.style.transform = `rotate(${rotacion}deg)`;
    contadorPuntos(misPuntos.textContent++);
    if (tiempoRestante.textContent ==0) {misPuntos.textContent=0;}
})
// Volver a jugar
volverJugar.addEventListener('click',function(){
    window.location.reload('ventanajuego.html')
})



























/*


window.onload = ()=>{
    var i = 1;
    formulario.onsubmit = (e) => {
        e.preventDefault();
        let agregar = document.getElementById('agregar');
        let input = document.getElementById('input');
        let formulario = document.getElementById('formulario');
        let body = document.getElementById('body');
       // input.value = " ";
        let lista = document.createElement('li');
        let listaContent = document.createTextNode(input.value);
        lista.appendChild(listaContent);
        formulario.appendChild(lista);
        let arreglo = [input.value];
        input.value = '';
        let h1 = document.createElement('h1');
        let contenth1 = document.createTextNode(arreglo);
        h1.appendChild(contenth1);
        h1.setAttribute("id","h1prueba")
        body.appendChild(h1);
        lista.style.textAlign = 'center';
        if (i>4){window.open('https://google.com');i=1;}
        //alert(`tamaño lista: ${i}`);
       // if (listaContent.length(2)){input.style.opacity = '1';  alert("no se puede agregar más");}
       i++;
    }
    
}*/









