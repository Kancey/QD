let menubtn = document.querySelector('.burger');
let menu = document.querySelector('.menu-hidden');

menubtn.addEventListener('click' , function(){
  menubtn.classList.toggle('active');
  menu.classList.toggle('active');
})

