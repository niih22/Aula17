function draw() {
  fill(cor);
  
  for(let contador in circuloX) {
    circle(circuloX [contador], circuloY [contador], 50);
    circuloX[conatador]+= random(0, 3);
    circuloY[contador]+= random(-3, 3);
 }
  if(circuloX[contador] >= width) {
    circuloX[contador] = 0;
    circuloY[contador] = random(heigth);
  }
}

function setup() {
  createCanvas(400, 400);
  background(color(100, 0, 0));
  
  
  
  cor = color(random(255), random(255), random(255));
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(heigth), random(heigth)];
} 

let cor;
let posicaoHorizontal; // x 
let posicaoVertical; // y


let posicaoHorizontal12; // x
let posicaoVertical12; // y