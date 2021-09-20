const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("mybropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.bropbtn')) {
    var bropdowns = document.getElementsByClassName("bropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openbropdown = bropdowns[i];
      if (openbropdown.classList.contains('show')) {
        openbropdown.classList.remove('show');
      }
    }
  }
}
