var hr,ms,sc
var scAngle,hrAngle,msAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(200,250)
  rotate(-90)
  hr = hour()
  ms = minute()
  sc = second()
  scAngle = map(sc,0,60,0,360)
  msAngle = map(ms,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)

  push()
  rotate(scAngle)
  stroke('red')
  strokeWeight(3)
  line(0,0,100,0)
  pop()

  push()
  rotate(msAngle)
  stroke(0,0,255)
  strokeWeight(5)
  line(0,0,90,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(50,255,50)
  strokeWeight(7)
  line(0,0,55,0)
  pop()
  
  push()
  strokeWeight(5)
  stroke(255,0,0)
  noFill()
  arc(0,0,250,250,0,scAngle)
  pop()
  push()
  stroke(0,0,255)
  noFill()
  strokeWeight(5)
  arc(0,0,260,260,0,msAngle)
  pop()
  push()
  stroke(100,255,100)
  noFill()
  strokeWeight(5)
  arc(0,0,240,240,0,hrAngle)
  pop()

  textSize(23)
  fill('yellow')
  rotate(90)
  text("DIGITAL CLOCK",-90,-210)
  fill('cyan')
  strokeWeight(3)
  text(hr+" : "+ms+" : "+sc,-60,-160)
}