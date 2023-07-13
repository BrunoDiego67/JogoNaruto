let personagem
let grama

let andarX = 0
let andarY = 0

let resetGameBtn
let comecarBetn

let comecar = false

const tamanho = 64
const velocidade = 64

function drawGrass() {
  for (let i = 0; i < 9; i ++){
    for (let j = 0; j < 9; j ++){
      image(grama, tamanho * i , tamanho * j , tamanho , tamanho)
    }
  }
}

function reset(){
  
  andarX = 0
  andarY = 0
  resetGameBtn.remove()
  loop()
  
}

function comecarJogo(){
  comecarBtn.remove()
  comecar = true
  loop()
  
}

function setup() {
  createCanvas(576, 576);
  naruto = loadImage('personagem.png')
  grama = loadImage('grama.png')
  
}

function draw() {
  
  
  if (comecar){
    background(222)

    drawGrass()
    image(naruto, andarX, andarY, tamanho, tamanho)


    if (andarX < 0){
      andarX = 0
    }

    if (andarY < 0){
      andarY= 0
    }

    if (andarX > 512){
      andarX = 512
    }

    if (andarY > 512){
      andarY= 512
    }

    if (andarX  === 512 && andarY === 512)
    {
        rect(160, 160, 256,256 )
        textSize(16)
        text('O Naruto virou ninja!!!', 180, 300)
      
        resetGameBtn = createButton('Recomeçar')
        resetGameBtn.mousePressed(reset)
        resetGameBtn.style("font-size", "16px")
    
        resetGameBtn.position(245, 380)
        noLoop()

    }  
  }
  else{
    
    rect(180, 180, 340,240 )
    textSize(16)
    text('Ajude Naruto Uzumaki.', 185, 280)
    text('Ela precisa da sua ajuda para ser um ninja!', 185, 300)
    comecarBtn = createButton('Começar!!')
    comecarBtn.mousePressed(comecarJogo)
    comecarBtn.style("font-size", "16px")
    comecarBtn.position(300, 380)
    
    noLoop()
  }
  
  
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
      andarY -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
   if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
  
 
}