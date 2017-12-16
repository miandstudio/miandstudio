// Create a variable currentImageNumber and set it to 0
let currentSlideNumber=0;

$("#next").on('click',function(){
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
// When the user clicks the next button (#next)
// If currentImageNumber < 3
// Add one to the currentImageNumber
// log currentImageNumber to the console

// else
// Set currentImageNumber to 0
// log currentImageNumber to the console




$("#previous").on('click', function(){
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

//When the user clicks the previous button(#previous)
//If currentImageNumber>0
//deduct one from the currentImageNumber
//log currentImageNumberto the console
//else
//Set currentImageNumber to 3
//log currentImageNumber to the console



// setInterval
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
