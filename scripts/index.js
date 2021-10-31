let menubtn = document.querySelector('.burger');
let menu = document.querySelector('.menu-hidden');
let languagem = document.querySelector('.languagem');
let roundm = document.querySelector('.joj');
let roundm1 = document.querySelector('.joj1');
let burgerm = document.querySelector('.burger-m');
let burmenu = document.querySelector('.menu-m');
let closem = document.querySelector('.up-thing');
let body = document.querySelector('body');
let openeye = document.querySelector('.open-eyes');
let casesbar = document.querySelector('.cases-bar');
let langup = document.querySelector('.language');
let chglang = document.querySelector('.change-lng');
let spanlng = document.querySelector('.change-lng-span');
let spanlng1 = document.querySelector('.change-lng-span1');
let openmenu = document.querySelector('.open-lng');
let done1 = document.querySelector('.done1');
let done2 = document.querySelector('.done2');
let open1 = document.querySelector('.open1');
let open2 = document.querySelector('.open2');



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
  body.classList.toggle ('lock');
})

closem.addEventListener('click' , function(){
  burmenu.classList.toggle('close');
})

openeye.addEventListener('click' , function(){
  casesbar.classList.toggle('active');
})

langup.addEventListener('click' , function(){
  chglang.classList.toggle('active');
  spanlng.classList.toggle('active');
  spanlng1.classList.toggle('active');
  openmenu.classList.toggle('active');
})


open1.addEventListener('click' , function(){
  done1.classList.toggle ('active');
})

open2.addEventListener('click' , function(){
  done2.classList.toggle ('active');
})
