/* STICKY NAV BAR JAVASCRIPT */
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

/* SIGNUP MODAL JAVASCRIPT */
var modal = document.getElementById("signup-modal");            // Get the modal element

var userIcon = document.getElementById("user-icon");            // Get the user icon element

var closeButton = document.getElementsByClassName("close")[0];  // Get the close button element

// When the user clicks on the user icon, show the modal
userIcon.onclick = function() { 
  modal.style.display = "block";
}

// When the user clicks on the close button, hide the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks outside of the modal, hide it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
