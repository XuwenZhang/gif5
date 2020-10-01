let angle = 0;
let speed = 0.02;

let boxDim = 40;
let growth = .5;

//Lamp head rectangle
let box01 = { // this is a "map" of all components that define location of box01
  color: 0,
  boxX: 220,
  boxY: 152,
  boxWidth:160,
  boxHeight:120,
  speedX: 5,
  speedY: 7
}

//Lamp cap circle
let circle01 = {
  color: 0,
  circleX: 302,
  circleY: 145,
  circleWidth: 12,
  circleHeight: 12,
  speedX: 7,
  speedY: 5
}

//Lamp neck rectangle
let box02 = {
  color: 0,
  boxX: 294,
  boxY: 230,
  boxWidth: 16,
  boxHeight: 60,
  speedX: 4,
  speedY: 6,
}

//Lamp shoulder rectangle
let box03 = {
  color: 0,
  boxX: 275,
  boxY: 290,
  boxWidth: 54,
  boxHeight: 22,
  speedX: 8,
  speedY: 3
}

//Lamp chest rectangle
let box04 = {
  color: 0,
  boxX: 290,
  boxY: 312,
  boxWidth: 24,
  boxHeight: 52,
  speedX: 7,
  speedY: 10
}

//Lamp belly upward triangle
let triangle01 = {
 color: 0,
 triangleX1: 276,
 triangleY1: 392,
 triangleX2: 302,
 triangleY2: 327,
 triangleX3: 328,
 triangleY3: 392,
 speedX: 5,
 speedY: 5
}

//Lamp belly rectangle
let box05 = {
 color: 0,
 boxX: 276,
 boxY: 392,
 boxWidth: 52,
 boxHeight: 26,
 speedX: 6,
 speedY: 5
}

//Lamp belly downward triangle
let triangle02 = {
 color: 0,
 triangleX1: 276,
 triangleY1: 418,
 triangleX2: 302,
 triangleY2: 453,
 triangleX3: 328,
 triangleY3: 418,
 speedX: 3,
 speedY: 3
}

//Lamp foot triangle
let triangle03 = {
 color: 0,
 triangleX1: 267,
 triangleY1: 478,
 triangleX2: 302,
 triangleY2: 428,
 triangleX3: 337,
 triangleY3: 478,
 speedX: 1,
 speedY: 1
}

//Lamp foot rectangle
let box06 = {
 color: 0,
 boxX: 264,
 boxY: 478,
 boxWidth: 76,
 boxHeight: 13,
 speedX: 3,
 speedY: 2
}

//Lamp head left minus triangle
let triangle04 = {
 color: [200,200,240],
 triangleX1: 220,
 triangleY1: 150,
 triangleX2: 220,
 triangleY2: 270,
 triangleX3: 230,
 triangleY3: 150,
 speedX: 1,
 speedY: 8
}

//Lamp head right minus triangle
let triangle05 = {
 color: [200,200,240],
 triangleX1: 380,
 triangleY1: 150,
 triangleX2: 380,
 triangleY2: 270,
 triangleX3: 370,
 triangleY3: 150,
 speedX: 5,
 speedY: 3
}

//Lamp cap minus rectangle
let box07 = {
 color: [200,200,240],
 boxX: 286,
 boxY: 149,
 boxWidth: 20,
 boxHeight: 2,
 speedX: 8,
 speedY: 2
}

//Lamp shoulder left minus circle
let circle02 = {
 color: [200,200,240],
 circleX: 275,
 circleY: 312,
 circleWidth: 30,
 circleHeight: 30,
 speedX: 5,
 speedY: 2
}

//Lamp shoulder right minus circle
let circle03 = {
 color: [200,200,240],
 circleX: 329,
 circleY: 312,
 circleWidth: 30,
 circleHeight: 30,
 speedX: 2,
 speedY: 7
}


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200,200,240);



  //Lamp head rectangle
  drawBox(box01);

  //Lamp cap circle
  drawCircle(circle01);

  //Lamp neck rectangle
  push()
  rotate(angle);
  drawBox(box02);
  pop();

   //Lamp shoulder rectangle
  drawBox(box03);

  //Lamp chest rectangle
  push()
  rotate(angle);
 drawBox(box04);

 pop();

 //Lamp belly upward triangle
 drawTriangle(triangle01);

 //Lamp belly rectangle
 drawBox(box05);

 //Lamp belly downward triangle
 drawTriangle(triangle02);

 //Lamp foot triangle
 drawTriangle(triangle03);

 //Lamp foot rectangle
 push()
 rotate(angle);
 drawBox(box06);
 pop();

 //Lamp head left minus triangle
 drawTriangle(triangle04);

 //Lamp head right minus triangle
 drawTriangle(triangle05);

 //Lamp cap minus rectangle
 drawBox(box07);

 //Lamp shoulder left minus circle
 drawCircle(circle02);

 //Lamp shoulder right minus circle
 drawCircle(circle03);

  angle = angle + speed;


}




function drawBox(box01) {
  //Lamp head rectangle
  fill(box01.color)
  noStroke()
  push()
  if (box01.boxX > width || box01.boxX < 0) {
    box01.speedX = box01.speedX*-1;
  }

  box01.boxX = box01.boxX + box01.speedX;

  if (box01.boxY > height || box01.boxY < 0) {
    box01.speedY = box01.speedY*-1;
  }

  box01.boxY = box01.boxY + box01.speedY;
  rect(box01.boxX, box01.boxY, box01.boxWidth, box01.boxHeight);
  pop();


  stroke(255)
  line(box01.boxX+box01.boxWidth/2, 0, box01.boxX+box01.boxWidth/2, height)
  line(0, box01.boxY+box01.boxHeight/2, width, box01.boxY+box01.boxHeight/2)
}


function drawCircle(circle01) {
  //Lamp cap circle
  fill(circle01.color);//Black
  noStroke()
  push()
  if (circle01.circleX > width || circle01.circleX < 0) {
    circle01.speedX = circle01.speedX*-1;
  }

  circle01.circleX = circle01.circleX + circle01.speedX;

  if (circle01.circleY > height || circle01.circleY < 0) {
    circle01.speedY = circle01.speedY*-1;
  }

  circle01.circleY = circle01.circleY + circle01.speedY;
  translate(circle01.circleX, circle01.circleY, 50)
  circle(0, 0, circle01.circleWidth, circle01.circleHeight);
  pop();

  stroke(255)
  line(circle01.circleX, 0, circle01.circleX, height)
  line(0, circle01.circleY, width, circle01.circleY)
}


function drawBox(box02) {
  //Lamp neck rectangle
  fill(box02.color)
  noStroke()
  push()
  if (box02.boxX > width || box02.boxX < 0) {
    box02.speedX = box02.speedX*-1;
  }

  box02.boxX = box02.boxX + box02.speedX;

  if (box02.boxY > height || box02.boxY < 0) {
    box02.speedY = box02.speedY*-1;
  }

  box02.boxY = box02.boxY + box02.speedY;
  translate(box02.boxX, box02.boxY, 50)
  rect(0, 0, box02.boxWidth, box02.boxHeight);
  pop();


  stroke(255)
  line(box02.boxX+box02.boxWidth/2, 0, box02.boxX+box02.boxWidth/2, height)
  line(0, box02.boxY+box02.boxHeight/2, width, box02.boxY+box02.boxHeight/2)
}


function drawBox(box03) {
  //Lamp shoulder rectangle
  fill(box03.color)
  noStroke()
  push()
  if (box03.boxX > width || box03.boxX < 0) {
    box03.speedX = box03.speedX*-1;
  }

  box03.boxX = box03.boxX + box03.speedX;

  if (box03.boxY > height || box03.boxY < 0) {
    box03.speedY = box03.speedY*-1;
  }

  box03.boxY = box03.boxY + box03.speedY;
  translate(box03.boxX, box03.boxY, 50)
  rect(0, 0, box03.boxWidth, box03.boxHeight);
  pop();


  stroke(255)
  line(box03.boxX+box03.boxWidth/2, 0, box03.boxX+box03.boxWidth/2, height)
  line(0, box03.boxY+box03.boxHeight/2, width, box03.boxY+box03.boxHeight/2)
}


function drawBox(box04) {
  //Lamp chest rectangle
  fill(box04.color)
  noStroke()
  push()
  if (box04.boxX > width || box04.boxX < 0) {
    box04.speedX = box04.speedX*-1;
  }

  box04.boxX = box04.boxX + box04.speedX;

  if (box04.boxY > height || box04.boxY < 0) {
    box04.speedY = box04.speedY*-1;
  }

  box04.boxY = box04.boxY + box04.speedY;
  translate(box04.boxX, box04.boxY, 50)
  rect(0, 0, box04.boxWidth, box04.boxHeight);
  pop();


  stroke(255)
  line(box04.boxX+box04.boxWidth/2, 0, box04.boxX+box04.boxWidth/2, height)
  line(0, box04.boxY+box04.boxHeight/2, width, box04.boxY+box04.boxHeight/2)
}


function drawBox(box05) {
  //Lamp belly rectangle
  fill(box05.color)
  noStroke()
  push()
  if (box05.boxX > width || box05.boxX < 0) {
    box05.speedX = box05.speedX*-1;
  }

  box05.boxX = box05.boxX + box05.speedX;

  if (box05.boxY > height || box05.boxY < 0) {
    box05.speedY = box05.speedY*-1;
  }

  box05.boxY = box05.boxY + box05.speedY;
  translate(box05.boxX, box05.boxY, 50)
  rect(0, 0, box05.boxWidth, box05.boxHeight);
  pop();


  stroke(255)
  line(box05.boxX+box05.boxWidth/2, 0, box05.boxX+box05.boxWidth/2, height)
  line(0, box05.boxY+box05.boxHeight/2, width, box05.boxY+box05.boxHeight/2)
}


function drawBox(box06) {
  //Lamp foot rectangle
  fill(box06.color)
  noStroke()
  push()
  if (box06.boxX > width || box06.boxX < 0) {
    box06.speedX = box06.speedX*-1;
  }

  box06.boxX = box06.boxX + box06.speedX;

  if (box06.boxY > height || box06.boxY < 0) {
    box06.speedY = box06.speedY*-1;
  }

  box06.boxY = box06.boxY + box06.speedY;
  translate(box06.boxX, box06.boxY, 50)
  rect(0, 0, box06.boxWidth, box06.boxHeight);
  pop();


  stroke(255)
  line(box06.boxX+box06.boxWidth/2, 0, box06.boxX+box06.boxWidth/2, height)
  line(0, box06.boxY+box06.boxHeight/2, width, box06.boxY+box06.boxHeight/2)
}

function drawBox(box07) {
  //Lamp cap minus rectangle
  fill(box07.color)
  noStroke()
  push()
  if (box07.boxX > width || box07.boxX < 0) {
    box07.speedX = box07.speedX*-1;
  }

  box07.boxX = box07.boxX + box07.speedX;

  if (box07.boxY > height || box07.boxY < 0) {
    box07.speedY = box07.speedY*-1;
  }

  box07.boxY = box07.boxY + box07.speedY;
  translate(box07.boxX, box07.boxY, 50)
  rect(0, 0, box07.boxWidth, box07.boxHeight);
  pop();


  stroke(255)
  line(box07.boxX+box07.boxWidth/2, 0, box07.boxX+box07.boxWidth/2, height)
  line(0, box07.boxY+box07.boxHeight/2, width, box07.boxY+box07.boxHeight/2)
}


function drawCircle(circle02) {
  //Lamp shoulder left minus circle
  fill(circle02.color);//Black
  noStroke()
  push()
  if (circle02.circleX > width || circle02.circleX < 0) {
    circle02.speedX = circle02.speedX*-1;
  }

  circle02.circleX = circle02.circleX + circle02.speedX;

  if (circle02.circleY > height || circle02.circleY < 0) {
    circle02.speedY = circle02.speedY*-1;
  }

  circle02.circleY = circle02.circleY + circle02.speedY;
  translate(circle02.circleX, circle02.circleY, 50)
  circle(0, 0, circle02.circleWidth, circle02.circleHeight);
  pop();

  stroke(255)
  line(circle02.circleX, 0, circle02.circleX, height)
  line(0, circle02.circleY, width, circle02.circleY)
}


function drawCircle(circle03) {
  //Lamp shoulder right minus circle
  fill(circle03.color);//Black
  noStroke()
  push()
  if (circle03.circleX > width || circle03.circleX < 0) {
    circle03.speedX = circle03.speedX*-1;
  }

  circle03.circleX = circle03.circleX + circle03.speedX;

  if (circle03.circleY > height || circle03.circleY < 0) {
    circle03.speedY = circle03.speedY*-1;
  }

  circle03.circleY = circle03.circleY + circle03.speedY;
  translate(circle03.circleX, circle03.circleY, 50)
  circle(0, 0, circle03.circleWidth, circle03.circleHeight);
  pop();

  stroke(255)
  line(circle03.circleX, 0, circle03.circleX, height)
  line(0, circle03.circleY, width, circle03.circleY)
}


function drawTriangle(triangle01) {
  //Lamp belly upward triangle
  fill(triangle01.color);//Black
  noStroke()
  push()
  if (triangle01.triangleX1 > width || triangle01.triangleX1 < 0 || triangle01.triangleX2 > width || triangle01.triangleX2 < 0 || triangle01.triangleX3 > width || triangle01.triangleX3 < 0 ) {
    triangle01.speedX = triangle01.speedX*-1;
  }
  triangle01.triangleX1 = triangle01.triangleX1 + triangle01.speedX;
  triangle01.triangleX2 = triangle01.triangleX2 + triangle01.speedX;
  triangle01.triangleX3 = triangle01.triangleX3 + triangle01.speedX;

  if (triangle01.triangleY1 > width || triangle01.triangleY1 < 0 || triangle01.triangleY2 > width || triangle01.triangleY2 < 0 || triangle01.triangleY3 > width || triangle01.triangleY3 < 0) {
    triangle01.speedY = triangle01.speedY*-1;
  }
    triangle01.triangleY1 = triangle01.triangleY1 + triangle01.speedY;
    triangle01.triangleY2 = triangle01.triangleY2 + triangle01.speedY;
    triangle01.triangleY3 = triangle01.triangleY3 + triangle01.speedY;
      triangle(triangle01.triangleX1, triangle01.triangleY1, triangle01.triangleX2, triangle01.triangleY2, triangle01.triangleX3, triangle01.triangleY3);

  pop();

  stroke(255)
  line(triangle01.triangleX1, 0, triangle01.triangleX1, height)
  line(0, (triangle01.triangleY1+triangle01.triangleY2)/2, width, (triangle01.triangleY1+triangle01.triangleY2)/2)
}


function drawTriangle(triangle02) {
  //Lamp belly downward triangle
  fill(triangle02.color);//Black
  noStroke()
  push()
  if (triangle02.triangleX1 > width || triangle02.triangleX1 < 0 || triangle02.triangleX2 > width || triangle02.triangleX2 < 0 || triangle02.triangleX3 > width || triangle02.triangleX3 < 0 ) {
    triangle02.speedX = triangle02.speedX*-1;
  }
  triangle02.triangleX1 = triangle02.triangleX1 + triangle02.speedX;
  triangle02.triangleX2 = triangle02.triangleX2 + triangle02.speedX;
  triangle02.triangleX3 = triangle02.triangleX3 + triangle02.speedX;

  if (triangle02.triangleY1 > width || triangle02.triangleY1 < 0 || triangle02.triangleY2 > width || triangle02.triangleY2 < 0 || triangle02.triangleY3 > width || triangle02.triangleY3 < 0) {
    triangle02.speedY = triangle02.speedY*-1;
  }
    triangle02.triangleY1 = triangle02.triangleY1 + triangle02.speedY;
    triangle02.triangleY2 = triangle02.triangleY2 + triangle02.speedY;
    triangle02.triangleY3 = triangle02.triangleY3 + triangle02.speedY;
      triangle(triangle02.triangleX1, triangle02.triangleY1, triangle02.triangleX2, triangle02.triangleY2, triangle02.triangleX3, triangle02.triangleY3);

  pop();

  stroke(255)
  line(triangle02.triangleX2, 0, triangle02.triangleX2, height)
  line(0, (triangle02.triangleY2+triangle02.triangleY1)/2, width, (triangle02.triangleY1+triangle02.triangleY2)/2)
}


function drawTriangle(triangle03) {
  //Lamp foot triangle
  fill(triangle03.color);//Black
  noStroke()
  push()
  if (triangle03.triangleX1 > width || triangle03.triangleX1 < 0 || triangle03.triangleX2 > width || triangle03.triangleX2 < 0 || triangle03.triangleX3 > width || triangle03.triangleX3 < 0 ) {
    triangle03.speedX = triangle03.speedX*-1;
  }
  triangle03.triangleX1 = triangle03.triangleX1 + triangle03.speedX;
  triangle03.triangleX2 = triangle03.triangleX2 + triangle03.speedX;
  triangle03.triangleX3 = triangle03.triangleX3 + triangle03.speedX;

  if (triangle03.triangleY1 > width || triangle03.triangleY1 < 0 || triangle03.triangleY2 > width || triangle03.triangleY2 < 0 || triangle03.triangleY3 > width || triangle03.triangleY3 < 0) {
    triangle03.speedY = triangle03.speedY*-1;
  }
    triangle03.triangleY1 = triangle03.triangleY1 + triangle03.speedY;
    triangle03.triangleY2 = triangle03.triangleY2 + triangle03.speedY;
    triangle03.triangleY3 = triangle03.triangleY3 + triangle03.speedY;
      triangle(triangle03.triangleX1, triangle03.triangleY1, triangle03.triangleX2, triangle03.triangleY2, triangle03.triangleX3, triangle03.triangleY3);

  pop();


  stroke(255)
  line(triangle03.triangleX2, 0, triangle03.triangleX2, height)
  line(0, (triangle03.triangleY1+triangle03.triangleY2)/2, width, (triangle03.triangleY1+triangle03.triangleY2)/2)
}


function drawTriangle(triangle04) {
  //Lamp head left minus triangle
  fill(triangle04.color);//Black
  noStroke()
  push()
  if (triangle04.triangleX1 > width || triangle04.triangleX1 < 0 || triangle04.triangleX2 > width || triangle04.triangleX2 < 0 || triangle04.triangleX3 > width || triangle04.triangleX3 < 0 ) {
    triangle04.speedX = triangle04.speedX*-1;
  }
  triangle04.triangleX1 = triangle04.triangleX1 + triangle04.speedX;
  triangle04.triangleX2 = triangle04.triangleX2 + triangle04.speedX;
  triangle04.triangleX3 = triangle04.triangleX3 + triangle04.speedX;

  if (triangle04.triangleY1 > width || triangle04.triangleY1 < 0 || triangle04.triangleY2 > width || triangle04.triangleY2 < 0 || triangle04.triangleY3 > width || triangle04.triangleY3 < 0) {
    triangle04.speedY = triangle04.speedY*-1;
  }
    triangle04.triangleY1 = triangle04.triangleY1 + triangle04.speedY;
    triangle04.triangleY2 = triangle04.triangleY2 + triangle04.speedY;
    triangle04.triangleY3 = triangle04.triangleY3 + triangle04.speedY;
      triangle(triangle04.triangleX1, triangle04.triangleY1, triangle04.triangleX2, triangle04.triangleY2, triangle04.triangleX3, triangle04.triangleY3);

  pop();


  stroke(255)
  line(triangle04.triangleX2, 0, triangle04.triangleX2, height)
  line(0, (triangle04.triangleY1+triangle04.triangleY2)/2, width, (triangle04.triangleY1+triangle04.triangleY2)/2)
}


function drawTriangle(triangle05) {
  //Lamp head right minus triangle
  fill(triangle05.color);//Black
  noStroke()
  push()
  if (triangle05.triangleX1 > width || triangle05.triangleX1 < 0 || triangle05.triangleX2 > width || triangle05.triangleX2 < 0 || triangle05.triangleX3 > width || triangle05.triangleX3 < 0 ) {
    triangle05.speedX = triangle05.speedX*-1;
  }
  triangle05.triangleX1 = triangle05.triangleX1 + triangle05.speedX;
  triangle05.triangleX2 = triangle05.triangleX2 + triangle05.speedX;
  triangle05.triangleX3 = triangle05.triangleX3 + triangle05.speedX;

  if (triangle05.triangleY1 > width || triangle05.triangleY1 < 0 || triangle05.triangleY2 > width || triangle05.triangleY2 < 0 || triangle05.triangleY3 > width || triangle05.triangleY3 < 0) {
    triangle05.speedY = triangle05.speedY*-1;
  }
    triangle05.triangleY1 = triangle05.triangleY1 + triangle05.speedY;
    triangle05.triangleY2 = triangle05.triangleY2 + triangle05.speedY;
    triangle05.triangleY3 = triangle05.triangleY3 + triangle05.speedY;
      triangle(triangle05.triangleX1, triangle05.triangleY1, triangle05.triangleX2, triangle05.triangleY2, triangle05.triangleX3, triangle05.triangleY3);

  pop();


  stroke(255)
  line(triangle05.triangleX2, 0, triangle05.triangleX2, height)
  line(0, (triangle05.triangleY1+triangle05.triangleY2)/2, width, (triangle05.triangleY1+triangle05.triangleY2)/2)


}

function tracingObject(incomingBox) {
stroke(255)
line(box01.boxX, 0, box01.boxX, height)
line(0, box01.boxY, width, box01.boxY)
}
