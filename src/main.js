var s = 1;

function letterAnimation(arg){
  var className = '.'+arg;
  var textWrapper = document.querySelectorAll(className);
  console.log(textWrapper);

  for(var i = 0; i < textWrapper.length; i++){
    textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }

  anime.timeline({loop: false})
    .add({
      targets:  className + ' .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    })
}
