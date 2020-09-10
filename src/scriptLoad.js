/*;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(".name").inViewport(function(px){
    if(px && !$(".myName").hasClass("ml3") ) {
      $(".myName").addClass("ml3");
      letterAnimation('ml3');
    } ;
});

$(".project-1").inViewport(function(px){
    if(px && !$(".p1").hasClass("ml4") ) {
      $(".p1").addClass("ml4");
      $(".p1-2").addClass("ml4");
      letterAnimation('ml4');
    } ;

    console.log("NANI THE FUCK");
});
*/

function animateOnView(){
    if(scrollPosition == 1){
      if(!$(".p1").hasClass("ml4") ) {
        $(".p1").addClass("ml4");
        $(".p1-2").addClass("ml4");
        letterAnimation('ml4');
        console.log("P1 Animation Called");
      } ;
    }
}
