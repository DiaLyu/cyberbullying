$(function() {
    var widthElem = $(".container-notebook").width();
    var trueElem = true;
    while(trueElem){
        $(".strip-of-stick").append("<img class='yellowElem' src='image/yellow.png'/>");
        widthElem = widthElem - 18 - 34;
        if(widthElem < 70){
            trueElem = false;
            $(".strip-of-stick").append("<img class='yellowElem' src='image/yellow.png'/>");
        }
    }
})

var $homeSlider = $(".home-slider");
 
$(window).resize(function() {
  showHomeSlider();
  changeCountYellow();
});
 
function changeCountYellow(){
    $('.strip-of-stick').empty();
    var widthElem = $(".container-notebook").width();
    var trueElem = true;
    while(trueElem){
        $(".strip-of-stick").append("<img class='yellowElem' src='image/yellow.png'/>");
        widthElem = widthElem - 18 - 34;
        if(widthElem < 70){
            trueElem = false;
            $(".strip-of-stick").append("<img class='yellowElem' src='image/yellow.png'/>");
        }
    }
}

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 768px)").matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();
 
function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dotsEach: 1,
    // autoplay: true,
    // autoplayTimeout: 2000,
    smartSpeed: 1000
  });
}

 
function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}