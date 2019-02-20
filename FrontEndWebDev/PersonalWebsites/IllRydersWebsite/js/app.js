// Automatic Slideshow - change image every 3 seconds
let myIndex = 0;
//carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("myPics");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 9000);
}
