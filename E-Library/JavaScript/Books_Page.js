function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var linkText = document.getElementById("myLink");
     
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        linkText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else{
        dots.style.display = "none";
        linkText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// Image Pop-up Screen
var modal = document.getElementById("myModal");

// image inside the modal....alt text
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Close Image pop-up Screen