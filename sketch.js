function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255) //框線顏色
  noFill() //不要充滿顏色
  rectMode(CENTER) //以框中心點為座標點

  for(var j = 0; j<(height/50); j = j+1){
    for(var i = 0; i<(width/50); i = i+1) //i++
    {
      ellipse(25+(i*50), 25+(j*50), 50+mouseX/10) //在座標(25, 25)畫一個直徑50的圓
      stroke(241, 91+mouseX%256, 181)
      rect(25+(i*50), 25+(j*50), 50) //方框座標為
      stroke(0, 245, 212)
      ellipse(50+(i*50), 50+(j*50), 25+mouseY/5)
      stroke(255)
    }
  }

}
