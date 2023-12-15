let circles = [];

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(255);

  // 새로운 원
  if (frameCount % 10 === 0) {
    let grayValue = floor(random(256)); // 회색조
    let newCircle = {
      x: width / 2,
      y: height / 2,
      maxSize: 300,
      radius: 300,
      color: color(grayValue, grayValue, grayValue) 
    };
    circles.push(newCircle);
  }

  //  원 업데이트 그리기
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    updateCircle(circle);
    displayCircle(circle);

    if (circle.radius <= 0) {
      circles.splice(i, 1);
    }
  }
}

function updateCircle(circle) {
  // 원 크기를 줄임
  circle.radius -= 1;
}

function displayCircle(circle) {
  fill(circle.color);
  ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
}
