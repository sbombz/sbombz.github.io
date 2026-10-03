/// Code is from a w3schools How to Modal Tutorial, see references for link
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var close = document.getElementById("close");

// SELECT ALL IMAGES
var images = document.querySelectorAll(".myImg");

// LOOP THROUGH THEM
images.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// CLOSE BUTTON
close.onclick = function() {
  modal.style.display = "none";
}