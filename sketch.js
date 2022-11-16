var face_x=[]
var face_y=[]
var facce_size=[]
var face_num=2
var song
var songIsplay
var song
var songIsplay=false
var amp
function preload(){
  song = loadSound("Organic Guitar House - Dyalla.mp3");
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(189,224,254); //背景顏色
  textSize(40)
  text("X:"+mouseX+" Y:"+mouseY,50,50) //左上座標
  translate(width/2,height/2)
  push()
  fill("#ffc8dd")
  ellipse(0,0,450) //身體
  fill("#f72585")
  ellipse(0-100,0+150,180) //左腳
  ellipse(0+100,0+150,180) //右腳
  fill("#ffc8dd")
  ellipse(0+200,0-50,130) //右手
  ellipse(0-200,0-50,130) //左手
  fill("#ff99c8")
  ellipse(0-100,0-50,50,20) //左腮紅
  ellipse(0+100,0-50,50,20) //右腮紅
  fill("#001d3d")
  ellipse(-50,-100,50,110) //左眼眶
  ellipse(+50,-100,50,110) //右眼眶
  fill("#ffffff")
  ellipse(-50+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),35) //左眼
  ellipse(50+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),35) //右眼
  if(mouseIsPressed)
  {   //mouseIsPressed為true，代表有按下滑鼠
    fill(255,0,0)
    arc(0,75-70,100,40,0,180)  //下弧
  }
  else
  {   //mouseIsPressed為false，代表沒有按下滑鼠
   fill(255,0,0)
   arc(0,75-70,100,90,0,180)  //上弧
  }

pop()
if(!songIsplay){
 // arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //沒有播放
}
else{
  vol = amp.getLevel() //取得聲音值(值為0~1之間)
  console.log(vol)
 // arc(0,f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/10),0,180)
}


  }