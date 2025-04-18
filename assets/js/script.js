function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    setTimeout(() =>{
         textoArray.forEach((letra, i) =>{
              setTimeout(() => {
                   elemento.innerHTML += letra;
              }, 90 * i)
    
         })
    }, 1000)
  

}

const titulo = document.querySelector('h1');
typeWriter(titulo)


document.querySelector(".controles").style.height = 
`${document.querySelector('.area-projetos').clientHeight}px`;

let slide = 0;



function back(){
     slide--;
     if(slide < 0){
          slide = 2
     }
     margin()
}

function next(){
     slide++;
     if(slide>2){
          slide = 0
     }
      margin()
}

function margin(){
     let widthProjeto = document.querySelector(".projetos").clientWidth;
     let newMargin = (slide * widthProjeto);
     document.querySelector('.projeto-aeupp').style.marginLeft = `-${newMargin}px`
}


setInterval(next, 12000)


function start(){
       
     setTimeout(()=>{
         pare();
     }, 500);
 
     clear();
 
     setTimeout(()=>{
         alerta();
     }, 2000);
 
     clear();
 
     setTimeout(()=>{
         vai();
     }, 4000);
 }
 
 function pare(){
     document.querySelector("#stop").backgroundColor = "red";
 }
 
 function alerta(){
     document.querySelector("#warning").backgroundColor = "yellow";
 }
 
 function vai(){
     document.querySelector("#go").backgroundColor = "green";
 }
 
 function clear(){
     document.querySelector("#stop").backgroundColor = 'none';
     document.querySelector("#warning").backgroundColor = "none";
     document.querySelector("#go").backgroundColor = "none";
 }