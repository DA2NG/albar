window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    

    if (window.pageYOffset > document.getElementById("pembatas").offsetTop) {
      navbar.classList.add("backgroundHitam");
      navbar.classList.add("position-fixed");
    } else {
      navbar.classList.remove("backgroundHitam");
      navbar.classList.remove("position-fixed");
    }
  });