let menubtn = document.querySelector('.burger');
let menu = document.querySelector('.menu-hidden');
let languagem = document.querySelector('.languagem');
let roundm = document.querySelector('.joj');
let roundm1 = document.querySelector('.joj1');
let burgerm = document.querySelector('.burger-m');
let burmenu = document.querySelector('.menu-m');
let closem = document.querySelector('.up-thing');




menubtn.addEventListener('click' , function(){
  menubtn.classList.toggle('active');
  menu.classList.toggle('active');
})

languagem.addEventListener('click' , function(){
  roundm.classList.toggle('active');
  roundm1.classList.toggle('active');
})


burgerm.addEventListener('click' , function(){
  burgerm.classList.toggle('active');
  burmenu.classList.toggle('active');
  burmenu1.classList.toggle ('active');
})

closem.addEventListener('click' , function(){
  burmenu.classList.toggle('close');
})
