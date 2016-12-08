var lat, long;

var isHeHere = false;
var img;
function preload(){
img = loadImage("washingtonsquarepostcard.jpg");
}
function setup() {
  createCanvas(600, 500);


  navigator.geolocation.watchPosition(successCallback, errorCallback, {});
}

function draw() {
  background(196,39,146);


  fill(0,98,144);
  strokeWeight(7);
  rect(30,30,540,320,20,20);

  textAlign(CENTER);
  fill(0);
  textFont("Stencil");
  textSize(70);
  text("ITP MIXTAPE", width/2, 130);

  fill(0,random(255),0);
  rect(150,380,300,80,20,20);
  fill(0);
  textSize(50);
  text("DOWNLOAD", 300,440);

  //corner circles
  fill(200);
  ellipse(50,50,25,25);
  ellipse(550,50,25,25);
  ellipse(50,330,25,25);
  ellipse(550,330,25,25);


  //quad at bottom
  fill(0);
  quad(150, 350, 180,280, 420, 280, 450, 350);

  //center quad
  rect(150,150,300,80, 40,40);
  fill(150);
  ellipse(190,190,70,70);
  ellipse(410,190,70,70);
  fill(0);
  ellipse(190,190,50,50);

  //quad circles
  fill(150,150,150);
  ellipse(200,330,20,20);
  ellipse(250,300,20,20);
  ellipse(350,300,20,20);
  ellipse(400,330,20,20);

  //A
  fill(0);
  rect(80,150,40,50);
  fill(255);
  text("A", 100,190);

  line(70,280,530,280);
  line(70,280,70,100);
  line(530,280,530,100);
  line(530,100,510,70);
  line(70, 100,90,70);

  //If he's not here
  if(isHeHere === true){

      text('come hither',50,50,500,700);
  image(img,60,90,470,470);
  }

}



function mousePressed(){
  // console.log("clicked somewhere");
  if(mouseX > 150 && mouseX < 450 && mouseY > 380 && mouseY < 465){


    if(lat != undefined && long != undefined){

      if(lat >=40.729662 && lat<= 40.732310 && long <=-73.995578 && long>=-73.999643){

        console.log("success");

        var canvasio = document.getElementsByTagName('canvas');

        canvasio[0].style.display = 'none';

        var elementio = document.getElementById('container');

        container.style.display = 'block';

      } else {

        console.log('you are nowhere');

        isHeHere = true;




      }

    }


  }

}

function successCallback(currentPosition) {
  console.log(currentPosition.coords.latitude + ',' + currentPosition.coords.longitude);

	lat = currentPosition.coords.latitude,
	long = currentPosition.coords.longitude;
}

function errorCallback(e) {
		alert(e);
  }
