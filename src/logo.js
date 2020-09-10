
function animateLogo(name){
  var logoSide = document.querySelectorAll(name);
  var id = setInterval(frame, 10);
  var rotation = 0;

  var corners = [];

  for(var i = 0; i < 16 ; i++ ){
    corners.push(new Corner());
  }

  function frame(){
    for(var i = 0; i < corners.length; i++){
      corners[i].checkTarget();
    }
    rotation += 0.1;
    logoSide[0].style.borderRadius =
    corners[7].getCorner() + "% " +
    corners[6].getCorner() + "% " +
    corners[5].getCorner() + "% " +
    corners[4].getCorner() + "%"  + " / " +
    corners[0].getCorner() + "% " +
    corners[1].getCorner() + "% " +
    corners[2].getCorner() + "% " +
    corners[3].getCorner() + "%";
    logoSide[0].style.transform = "rotate(" + rotation + "deg)";

    logoSide[1].style.borderRadius =
    corners[15].getCorner() + "% " +
    corners[14].getCorner() + "% " +
    corners[13].getCorner() + "% " +
    corners[12].getCorner() + "%"  + " / " +
    corners[10].getCorner() + "% " +
    corners[9].getCorner() + "% " +
    corners[8].getCorner() + "% " +
    corners[11].getCorner() + "%";
    logoSide[1].style.transform = "rotate(" + rotation + "deg)";

  }
}

class Corner{
  constructor(){
    this.target = 50 + (40 * (0.5 - Math.random()));
    this.baseCorner = 50;
    this.velocity = 0.1;
  }

  checkTarget(){
      if(this.velocity < 0){
        if(this.baseCorner < this.target){
          this.setTarget();
        }
      }
      else if(this.velocity >= 0){
        if(this.baseCorner > this.target){
          this.setTarget();
        }
      }

      if(this.baseCorner > this.target){
        this.velocity = -0.1;
      }
      else{
        this.velocity = 0.1;
      }
      this.baseCorner += this.velocity;
  }

  setTarget(){
    this.target = 50 + (40 * (0.5 - Math.random()));
  }

  getCorner(){
    return this.baseCorner;
  }

}
