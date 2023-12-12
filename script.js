document.addEventListener("DOMContentLoaded", function () {
    var plane1 = document.getElementById("plane1");
    var plane2 = document.getElementById("plane2");
  
    window.addEventListener("scroll", function () {
      // Adjust this value based on when you want the animation to start
      var triggerPosition = window.innerHeight / 2;
  
      // Check if the user has scrolled to the trigger position
      if (window.scrollY > triggerPosition) {
        plane1.classList.add("animated");
      } else {
        plane1.classList.remove("animated");
      }
  
      // You can add a similar logic for the second plane if needed
      // For example, trigger the second plane when the user has scrolled further down the page
      var triggerPosition2 = window.innerHeight * 1.5;
  
      if (window.scrollY > triggerPosition2) {
        plane2.classList.add("animated");
      } else {
        plane2.classList.remove("animated");
      }
    });
  });
  