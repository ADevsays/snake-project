//Esta es otra versión
const canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d");
const frame = window.requestAnimationFrame;
const myStorage = window.localStorage;

let cuerpo = [];
let largo = 10;
let cabezaX = 10, cabezaY = 300;
let manzanaX = 300,  manzanaY = 300;



let left = false, down = false, right = true, up = false;
let score = 0;
let maxScore = 0;

if(myStorage.getItem("max") != undefined){
    maxScore = myStorage.getItem("max")
}

class CuerpoSnake{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
const dibujarText = ()=>{
    ctx.beginPath() 
    ctx.fillStyle="green"; 
    ctx.font="50px arial"; 
    ctx.fillText(`Score ${+ score}`,10,50);
    
    ctx.beginPath() 
    ctx.fillStyle="yellow"; 
    ctx.font="50px arial"; 
    ctx.fillText(`Max Score ${+ maxScore}`,canvas.width-350,50);
}
const dibujarSnake=(x,y)=>{
    ctx.fillStyle = "red";
    for(let i = 0; i < cuerpo.length; i++){
        ctx.fillRect(cuerpo[i].x, cuerpo[i].y, 50, 50);
    }
    cuerpo.push(new CuerpoSnake(cabezaX, cabezaY))

    if(cuerpo.length > largo){
        cuerpo.shift();
    }
    dibujarText();
    ctx.fillStyle = "orange";
        ctx.fillRect(x, y, 50, 50);
    ctx.fill();
}


const crearManzana=()=>{
    ctx.fillStyle = "blue";
    ctx.fillRect(manzanaX, manzanaY, 70, 70);
    if((cabezaX == manzanaX ||cabezaX == manzanaX + 1 ||cabezaX == manzanaX + 2 ||cabezaX == manzanaX + 3 ||cabezaX == manzanaX + 4 ||cabezaX == manzanaX + 5 ||cabezaX == manzanaX + 6 ||cabezaX == manzanaX + 7 ||cabezaX == manzanaX + 8 ||cabezaX == manzanaX + 9 ||cabezaX == manzanaX + 10||cabezaX == manzanaX + 11 ||cabezaX == manzanaX + 12 ||cabezaX == manzanaX + 13 ||cabezaX == manzanaX + 14 ||cabezaX == manzanaX + 15 ||cabezaX == manzanaX + 16 ||cabezaX == manzanaX + 17||cabezaX == manzanaX + 18 ||cabezaX == manzanaX + 19 ||cabezaX == manzanaX + 20 ||cabezaX == manzanaX + 21 ||cabezaX == manzanaX + 22 ||cabezaX == manzanaX + 23 ||cabezaX == manzanaX + 24 ||cabezaX == manzanaX + 25 ||cabezaX == manzanaX + 26 ||cabezaX == manzanaX + 27 ||cabezaX == manzanaX + 28 ||cabezaX == manzanaX + 29 ||cabezaX == manzanaX + 30 ||cabezaX == manzanaX + 31 ||cabezaX == manzanaX + 32 ||cabezaX == manzanaX + 33 ||cabezaX == manzanaX + 34||cabezaX == manzanaX + 35 ||cabezaX == manzanaX + 36 ||cabezaX == manzanaX + 37 ||cabezaX == manzanaX + 38 ||cabezaX == manzanaX + 39 ||cabezaX == manzanaX + 40 ||cabezaX == manzanaX + 41 ||cabezaX == manzanaX + 42 ||cabezaX == manzanaX + 43 ||cabezaX == manzanaX + 44 ||cabezaX == manzanaX + 45 ||cabezaX == manzanaX + 46 ||cabezaX == manzanaX + 46 ||cabezaX == manzanaX + 48 ||cabezaX == manzanaX + 49 ||cabezaX == manzanaX + 50 ) && (cabezaY == manzanaY ||cabezaY == manzanaY + 1 ||cabezaY == manzanaY + 2  ||cabezaY == manzanaY + 3 ||cabezaY == manzanaY + 4  ||cabezaY == manzanaY + 5 ||cabezaY == manzanaY + 6  ||cabezaY == manzanaY + 7 ||cabezaY == manzanaY + 8  ||cabezaY == manzanaY + 9 ||cabezaY == manzanaY + 10 ||cabezaY == manzanaY + 11 ||cabezaY == manzanaY + 12 ||cabezaY == manzanaY + 13 ||cabezaY == manzanaY + 14 ||cabezaY == manzanaY + 15 ||cabezaY == manzanaY + 16 ||cabezaY == manzanaY + 17||cabezaY == manzanaY + 18 ||cabezaY == manzanaY + 19 ||cabezaY == manzanaY + 20 ||cabezaY == manzanaY + 21 ||cabezaY == manzanaY + 22 ||cabezaY == manzanaY + 23 ||cabezaY == manzanaY + 24 ||cabezaY == manzanaY + 25 ||cabezaY == manzanaY + 26 ||cabezaY == manzanaY + 27 ||cabezaY == manzanaY + 28 ||cabezaY == manzanaY + 29 ||cabezaY == manzanaY + 30 ||cabezaY == manzanaY + 31 ||cabezaY == manzanaY + 32 ||cabezaY == manzanaY + 33 ||cabezaY == manzanaY + 34||cabezaY == manzanaY + 35 ||cabezaY == manzanaY + 36 ||cabezaY == manzanaY + 37 ||cabezaY == manzanaY + 38 ||cabezaY == manzanaY + 39 ||cabezaY == manzanaY + 40 ||cabezaY == manzanaY + 41 
        ||cabezaY == manzanaY + 42 ||cabezaY == manzanaY + 43 ||cabezaY == manzanaY + 44 ||cabezaY == manzanaY + 45 ||cabezaY == manzanaY + 46 ||cabezaY == manzanaY + 46 ||cabezaY == manzanaY + 48 ||cabezaY == manzanaY + 49 ||cabezaY == manzanaY + 50 )){

            let x = canvas.width - 100;
            let y = canvas.height - 100;

            manzanaX = parseInt(Math.random() * x)
                manzanaY = parseInt(Math.random() * y)
                largo+=10;
                score++;
            if(score > maxScore){
                maxScore = score;
                myStorage.setItem("max", maxScore);
            }
    }
  
}
let gameOver = false;
const morir=()=>{

    for(let i = 1; i < cuerpo.length; i++){
        let part = cuerpo[i];   
      if(part.x == cuerpo[0].x && part.y ==cuerpo[0].y){
          gameOver = true;
          let container = document.querySelector(".container");
          container.style.height = "90vh";
          container.innerHTML = `<div class="gameOver">
                                     <h1>GAME OVER!</h1>
                                     <button class = "reiniciar">Reiniciar</button>
                                </div>`
      }
    }

}

class Elemento{
    animar(x = 0,y= 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dibujarSnake(x, y);
        crearManzana();
        morir();
      
    }
}

const element = new Elemento();


const mover=()=>{
    if(right) cabezaX+=4;
    if(down)cabezaY+=4;
    if(left)cabezaX-=4;
    if(up) cabezaY-=4;
    
    element.animar(cabezaX, cabezaY,100,100);

    if(cabezaX >= canvas.width) cabezaX = 0;
    if(cabezaY >= canvas.height) cabezaY = 0; 
    if(cabezaX <= -10) cabezaX = canvas.width;
    if(cabezaY <= -10) cabezaY = canvas.height;


    if(gameOver){
        document.querySelector(".reiniciar").addEventListener("click", ()=>{
            location.reload();
        })
        return;
    }
    frame(mover)
}
mover()



window.addEventListener("keydown",(e)=>{
    if(e.key == "ArrowLeft" && !right){
        left = true;
        right = false;
        down = false;
        up = false;
    }
    if(e.key == "ArrowRight" && !left){
        left = false;
        right = true;
        down = false;
        up = false;
    }
    if(e.key == "ArrowUp" && !down){
        left = false;
        right = false;
        down = false;
        up = true;
    }
    if(e.key == "ArrowDown" && !up){
        left = false;
        right = false;
        down = true;
        up = false;
    }
})