var sectionSelected = 1;

function updateSlideShow() {
  var background = document.getElementById("SlideShow");
  var text = document.getElementById("SlideShowText");
  var img = document.getElementById("SlideImg");
  var heading = document.getElementById("SlideShowHeading");
  var button = document.getElementsByClassName("SlideShowButton");

  resetButtonColours();

  switch(sectionSelected) {
    case 1:
      background.style.backgroundImage = 'url("images/Background_Picture_1.jpg")';
      button[0].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "About Traversity";
      text.innerHTML = "About Traversity Text";
      break;
    case 2:
      background.style.backgroundImage = 'url("images/Background_Picture_2.jpg")';
      button[1].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "Social Media Intergration";
      text.innerHTML = "About Traversity Text";
      break;
    case 3:
      background.style.backgroundImage = 'url("images/Background_Picture_3.jpg")';
      button[2].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "Progress Tracked in Real Time";
      text.innerHTML = "About Traversity Text";
      break;
    case 4:
      background.style.backgroundImage = 'url("images/Background_Picture_4.jpg")';
      button[3].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "A Powerful Web-Admin Console";
      text.innerHTML = "About Traversity Text";
      break;
    case 5:
      background.style.backgroundImage = 'url("images/Background_Picture_5.jpg")';
      button[4].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "Interact in a variety of ways";
      text.innerHTML = "About Traversity Text";
      break;
    case 6:
      background.style.backgroundImage = 'url("images/Background_Picture_6.jpg")';
      button[5].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "Dramaticaly reduce running costs";
      text.innerHTML = "About Traversity Text";
      break;
    case 7:
      button[6].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "A Competetive Scoring System";
      text.innerHTML = "About Traversity Text";
      background.style.backgroundImage = 'url("images/Background_Picture_7.jpg")';
      break;
    case 8:
      button[7].style.backgroundColor = "#47c1ff";
      heading.innerHTML = "Auto-Generated Location Posters";
      text.innerHTML = "About Traversity Text";
      background.style.backgroundImage = 'url("images/Background_Picture_8.jpg")';
      break;
  }
}

function resetButtonColours() {
  for(var x = 0; x < 8; x++){
    var button = document.getElementsByClassName("SlideShowButton");
    button[x].style.backgroundColor = "#0277bd";
  }
}

function changeSlide(slideNumber){
  sectionSelected = slideNumber;
  $("#SlideShow").fadeOut(1500, function() {
    updateSlideShow();
  });
  $("#SlideShow").fadeIn(1500);
}

$(document).ready(function(){
  updateSlideShow();

  setInterval(function() {
    if(sectionSelected < 8) {
      sectionSelected ++;
    } else {
      sectionSelected = 1;
    }
    changeSlide(sectionSelected);
  }, 15000);

  $("#Button1").click(function() {changeSlide(1)});
  $("#Button2").click(function() {changeSlide(2)});
  $("#Button3").click(function() {changeSlide(3)});
  $("#Button4").click(function() {changeSlide(4)});
  $("#Button5").click(function() {changeSlide(5)});
  $("#Button6").click(function() {changeSlide(6)});
  $("#Button7").click(function() {changeSlide(7)});
  $("#Button8").click(function() {changeSlide(8)});

});
