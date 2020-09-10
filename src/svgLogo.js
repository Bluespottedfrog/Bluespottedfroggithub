


function animateBezier(){
  var initX; var initY;
  var currentPos = [];
}
function blobLogo(){
  var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svg.setAttribute("viewBox", "0 0 200 200");

  var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  path.setAttributeNS(null, "d", "M59.5,-1.9
  C59.5,29.2,29.7,58.5,-1,58.5
  C-31.7,58.5,-63.5,29.2,-63.5,-1.9
  C-63.5,-32.9,-31.7,-65.9,-1,-65.9
  C29.7,-65.9,59.5,-32.9,59.5,-1.9Z");


  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M36.5,-5.5
  C36.5,19.5,18.3,39,-3.7,39
  C-25.6,39,-51.2,19.5,-51.2,-5.5
  C-51.2,-30.4,-25.6,-60.8,-3.7,-60.8
  C18.3,-60.8,36.5,-30.4,36.5,-5.5Z" transform="translate(100 100)" />
</svg>
  path.setAttribute("fill", "#FF0066");
  path.setAttribute("transform", "translate(100, 100)");

  svg.appendChild(path);

  var logoWrapper = document.querySelector(".logoWrapper");

  logoWrapper.appendChild(svg);
}
