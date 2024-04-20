window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("back-to-top").style.display = "";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}



function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}