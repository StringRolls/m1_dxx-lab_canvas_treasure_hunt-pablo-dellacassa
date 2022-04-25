/** @type {HTMLCanvasElement} */

// main.js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1

function drawGrid() {
    // TODO: write the code of the function

    for (row= 0; row<=canvas.width; row+=50) {
        for (col=0; col<=canvas.height; col+=50) {
            ctx.moveTo(row, 0);
            ctx.lineTo(row, canvas.width);
            ctx.moveTo(0, col);
            ctx.lineTo(canvas.height, col);
            ctx.stroke();
        }
}}

// Iteration 2

class Character {
    constructor(){
        this.x = 0,
        this.y = 0
    }
    
    moveUp(){
        this.y -=50 
        playerDetails.y = this.y
        playerDetails.img = playerUp
    }
    moveRight(){
        this.x +=50 
        playerDetails.x = this.x
        playerDetails.img = playerRight
    }
    moveDown(){
        this.y +=50 
        playerDetails.y = this.y
        playerDetails.img = playerDown
    }
    moveLeft(){
        this.x -=50 
        playerDetails.x = this.x
        playerDetails.img = playerLeft
    }
    
    }
    
    const playerPlay = new Character
    
    
    console.log(playerPlay.x, playerPlay.y)


// Iteration 3

function drawPlayer() {
    ctx.drawImage(
      player.imgs[player.orientation], 
      player.col*TILE_SIZE, player.row*TILE_SIZE,
      TILE_SIZE, // TODO: find the right ratio
      TILE_SIZE
    )
  }

// Iteration 4

class Treasure{
   
    etRandomPosition(){
    let randomX = Math.floor(Math.random()*10)*50
    let randomY = Math.floor(Math.random()*10)*50
    treasureDetails.y = randomY
    treasureDetails.x = randomX
    }
}

const treasurePlay = new Treasure

//images
const playerDown = new Image();
playerDown.src = "./images/character-down.png";

const playerUp = new Image();
playerUp.src = "./images/character-up.png";

const playerRight = new Image();
playerRight.src = "./images/character-right.png";

const playerLeft = new Image();
playerLeft.src = "./images/character-left.png";
  
  const playerDetails = {
     img: playerDown,
     x: 0,
     y: 0
  };

  const treasure = new Image()
  treasure.src = "./images/treasure.png"
  
  const treasureDetails ={
      img: treasure,
      x:0,
      y:0
  }

//show images on load
treasurePlay.setRandomPosition()
playerDetails.img.onload = () =>context.drawImage(playerDetails.img, 0,0)
treasure.onload = () =>context.drawImage(treasureDetails.img, treasureDetails.x,treasureDetails.y, 50, 50)


function drawEverything() {
  drawGrid();
  if ((playerDetails.x === treasureDetails.x) && (playerDetails.y === treasureDetails.y)){
    context.clearRect(0, 0, context.canvas.width, context.canvas.width);
    treasurePlay.setRandomPosition()
    drawEverything()
} else {
  context.drawImage(playerDetails.img, playerDetails.x,playerDetails.y)
  context.drawImage(treasureDetails.img, treasureDetails.x,treasureDetails.y, 50, 50)}
}

drawEverything();

// Iteration 5

window.addEventListener('keydown', (event) => {
   
    event.preventDefault();
    switch (event.key) {
        case "ArrowLeft":
            context.clearRect(0, 0, context.canvas.width, context.canvas.width);
            playerPlay.moveLeft();
            drawEverything()
          break;
        case "ArrowUp":
            context.clearRect(0, 0, context.canvas.width, context.canvas.width);
            playerPlay.moveUp();
            drawEverything()
          break;
        case "ArrowRight":
            context.clearRect(0, 0, context.canvas.width, context.canvas.width);
            playerPlay.moveRight();
            drawEverything()
          break;
        case "ArrowDown":
            context.clearRect(0, 0, context.canvas.width, context.canvas.width);
            playerPlay.moveDown();
            drawEverything()
          break;

}
       console.log(playerDetails.x, playerDetails.y, treasureDetails.x, treasureDetails.y)
      });

