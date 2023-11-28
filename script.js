function setup() {
    createCanvas(windowWidth, windowHeight, SVG);
}

function keyPressed(event){ // 엔터키로 저장하는 법
    console.log(event.key);
    if( event.key === "Enter") {
        save("제목","svg")
    }
}

function draw() {
  
    background(250);
    
    fill(5,68,0);
    noStroke();
    ellipse(225,680,240,160); // 진한 잎
}