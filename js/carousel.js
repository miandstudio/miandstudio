

$( document ).ready(function() {
  $(".dot1").addClass("active");
  document.getElementById("hideme").style.display="none";
});

function displayImg() {
  document.getElementById("hideme").style.display="block";
}

$(".dot1").on('click',function(){
  $(".slide-1").show();
  $(".slide-2").hide();
  $(".dot1").addClass("active");
  $(".dot2").removeClass("active");
});

$(".dot2").on('click',function(){
  $(".slide-2").show();
  $(".slide-1").hide();
  $(".dot2").addClass("active");
  $(".dot1").removeClass("active");
});



// Create a variable currentImageNumber and set it to 0
/*
let currentSlideNumber=0;

$(".dot1").on('click',function(){
  if(currentSlideNumber<1){
    currentSlideNumber+=1;
    console.log(currentSlideNumber);

  } else {
    currentSlideNumber=0;
    //hide all images
    //fade in the current image
    console.log(currentSlideNumber);
  }

  $('.carousel-wrapper').hide();
  $('.carousel-wrapper').eq(currentSlideNumber).fadeIn();

});


$(".dot2").on('click', function(){
  if(currentSlideNumber>0){
    currentSlideNumber-=1;
    console.log(currentSlideNumber);
  }
  else{
    currentSlideNumber=1;
    console.log(currentSlideNumber);
  }
  //hide all images
  //fade in the current image
  $('.carousel-wrapper').hide();
  $('.carousel-wrapper').eq(currentSlideNumber).fadeIn();
});
*/

let currentSlideNumber=0;

setInterval(function(){
  if(currentSlideNumber<1){
    currentSlideNumber+=1;
    console.log(currentSlideNumber);

  } else {
    currentSlideNumber=0;
    //hide all images
    //fade in the current image
    console.log(currentSlideNumber);
  }

  $('.carousel-wrapper').hide();
  $('.carousel-wrapper').eq(currentSlideNumber).fadeIn(2000);

  console.log("currentSlideNumber");
  $(".dot").removeClass("active");
  $(".dot").eq(currentSlideNumber).addClass("active");



}, 5000);


// setInterval

/*
setInterval(function(){
  if(currentSlideNumber<1){
    currentSlideNumber+=1;
    console.log(currentSlideNumber);

  } else {
    currentSlideNumber=0;
    //hide all images
    //fade in the current image
    console.log(currentSlideNumber);
  }

  $('.carousel-wrapper').hide();
  $('.carousel-wrapper').eq(currentSlideNumber).fadeIn(2000);

  console.log("currentSlideNumber");
}, 5000);

*/
