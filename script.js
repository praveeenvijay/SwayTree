var lm = 70
var ls = 8.75
var t=0
function setup() {
  createCanvas(windowWidth,windowHeight)
angleMode(DEGREES)
// noLoop()


}
let seed = 5
function draw() {
  background(20, 164, 249)
  translate(width / 2
  ,height/1.25) 
  randomSeed(seed)
  text(seed,50,50)
  t=t+0.03

 
  branch(lm)
  branch(lm-10)
  //branch(lm-25)
  

}  

function mousePressed(){
  seed = millis()
}
 function branch(len) {
  push()

  
 if (len>ls){
    strokeWeight(map(len,ls,lm,0.1,8))
    stroke(70,40,20)
    line(0,0,0, -len)
    translate(0, -len)
    rotate(random(-10,-30)+15*noise(t))
    branch(len*random(0.7,0.9)) 
    rotate(random(30,50)+15*noise(t))
    branch(len*random(0.7,0.9))
    

   }else {
     
     if (len<(ls-0.25))
      {var r = 0 + random(199,255)
      var g = 0 + random(13,255)
      var b = 0 + random(0,27)
      fill(r,g,b,170)
      noStroke()
     ellipse(0,0,random(8,10))}

     

      
     else {
      var r = 0 + random(50,70)
      var g = 0 + random(42,150)
      var b = 0 + random(67,82)
      fill(r,g,b,200)
      noStroke()
       ellipse(0,0,random(7,10))
      
      

      

      
      }
   }
  pop()
 }