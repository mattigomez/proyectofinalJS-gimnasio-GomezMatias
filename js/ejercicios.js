const contenedor= document.querySelector(".cardsEjercicios");
const radios= document.querySelectorAll('input[type="radio"]');
const search= document.getElementById("search");

const ejercicios= [
    {id:1, nombre: "press plano", musculo: "pecho",img:"http://www.bodytrainer.tv/data/exercisefiles/9/2809.jpg"},
    {id:2, nombre: "press declinado", musculo: "pecho",img:"http://www.bodytrainer.tv/data/exercisefiles/22/1022.jpg"},
    {id:3, nombre: "apertura con mancuernas", musculo: "pecho",img:"http://www.bodytrainer.tv/data/exercisefiles/19/819.jpg"},
    {id:4, nombre: "press plano con mancuernas", musculo: "pecho",img:"http://www.bodytrainer.tv/data/exercisefiles/38/838.jpg"},
    {id:5, nombre: "remo bajo con polea", musculo: "espalda",img:"http://www.bodytrainer.tv/data/exercisefiles/22/322.jpg"},
    {id:6, nombre: "press militar con mancuerna", musculo: "hombros",img:"http://www.bodytrainer.tv/data/exercisefiles/87/887.jpg"},
    {id:7, nombre: "triceps en polea", musculo: "triceps",img:"http://www.bodytrainer.tv/data/exercisefiles/6/406.jpg"},
    {id:8, nombre: "curl con mancuernas", musculo: "biceps",img:"http://www.bodytrainer.tv/data/exercisefiles/17/2017.jpg"},
    {id:9, nombre: "vuelo lateral a dos brazos", musculo: "hombros",img:"http://www.bodytrainer.tv/data/exercisefiles/91/891.jpg"},
    {id:10, nombre: "prensa 45", musculo: "piernas",img:"http://www.bodytrainer.tv/data/exercisefiles/88/188.jpg"},
    {id:11, nombre: "biceps Scott", musculo: "biceps",img:"http://www.bodytrainer.tv/data/exercisefiles/22/2622.jpg"},
    {id:12, nombre: "posteriores en maquina", musculo: "hombros",img:"http://www.bodytrainer.tv/data/exercisefiles/49/2749.jpg"},
    {id:13, nombre: "vuelo frontal", musculo: "hombros",img:"http://www.bodytrainer.tv/data/exercisefiles/24/524.jpg"},
    {id:14, nombre: "peso muerto", musculo: "piernas",img:"http://www.bodytrainer.tv/data/exercisefiles/79/1079.jpg"},
    {id:15, nombre: "remo con barra", musculo: "espalda",img:"http://www.bodytrainer.tv/data/exercisefiles/66/266.jpg"},
    {id:16, nombre: "cuadriceps", musculo: "piernas",img:"http://www.bodytrainer.tv/data/exercisefiles/85/2085.jpg"},
    {id:17, nombre: "serrucho con mancuerna", musculo: "espalda",img:"http://www.bodytrainer.tv/data/exercisefiles/35/835.jpg"},
    {id:18, nombre: "fondo paralelas en maquina", musculo: "triceps",img:"http://www.bodytrainer.tv/data/exercisefiles/37/37.jpg"},
    {id:19, nombre: "dominadas", musculo: "espalda",img:"http://www.bodytrainer.tv/data/exercisefiles/43/743.jpg"},
    {id:20, nombre: "patada de burro con mancuerna", musculo: "triceps",img:"http://www.bodytrainer.tv/data/exercisefiles/91/991.jpg"}

]
function crearCards(array){
  let html;
  for (const ejs of array) {
    html= `
     
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${ejs.img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center">${ejs.nombre.toUpperCase()}</h5>
        </div>
      </div>
   
   
      `;
      contenedor.innerHTML += html;

    
  }
}
/* 
crearCards(ejercicios) */

fetch('./data/data.json')
.then(res=>res.json())
.then(data=>{
  console.log(data)
  crearCards(data)
})

function filtrarEjercicios(filtro){
  let filtrado=ejercicios.filter((el)=>{
    return el.nombre.includes(filtro);
  })
  return filtrado;
}

search.addEventListener ("input", (e)=>{
  e.preventDefault();
  contenedor.innerHTML="";
  let filtro= filtrarEjercicios(search.value.toLowerCase());
  crearCards(filtro);
});



