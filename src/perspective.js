function mouseMove(event){
  var angleX = 20;
  var angleY = 20;
  var mouseX = event.clientX - screen.width/2;
  var mouseY = event.clientY - screen.height/2;
  mouseX = mouseX/(screen.width/2) * angleX; //rotate y
  mouseY = mouseY/(screen.height/2) * angleY; //rotate x

  var mouseXDepth = mouseX/(screen.width/2) * 15;
  var mouseYDepth = mouseY/(screen.height/2) * 15;

  var hero = document.querySelector('canvas');

  hero.style.transform = "translate(" + -mouseX * 0.2 + "px," + -mouseY * 0.2 + "px)";

  //rotateDash.style.transform = "matrix3d(0.94,0,0.34," + mouseXDepth * 0.0002 + ",0.00,0.94,0.34,"+ mouseYDepth * 0.0002 + ",-0.34,-0.34,0.8835999999999999,0,0,0,0,1)";


  console.log(canvas);
}
