"use strict"


window.addEventListener('load', function () {
    let loader = document.querySelector('.loader');
    loader.classList.add('hidden');
    setTimeout(function() {
        loader.style.display = 'none'; 
      }, 2000);
});

btnApplyProfileChngs.addEventListener ('click', function(){
    un.innerHTML = userNameField.value;
})
document.addEventListener('scroll', function () {
if ((window.pageYOffset) > window.innerHeight/2) {
document.body.querySelector('FOOTER').classList.add('vis');
} else

document.body.querySelector('FOOTER').classList.remove('vis');

let w = window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100;
document.querySelector("#scrollProgress").style.width = w + '%';

});

document.addEventListener('scroll', function () {

if ((window.pageYOffset) > 950) {
document.body.querySelector('#scrollProgress').classList.add('polosa2');
} 
else document.body.querySelector('#scrollProgress').classList.remove('polosa2');
});
document.addEventListener('scroll', function () {

if ((window.pageYOffset) < 550) {
document.body.querySelector('#c1').classList.add('cvet');
} 
else document.body.querySelector('#c1').classList.remove('cvet');
});
document.addEventListener('scroll', function () {

if ((window.pageYOffset) > 450 && (window.pageYOffset) < 900) {
document.body.querySelector('#c2').classList.add('cvet');
} 
else document.body.querySelector('#c2').classList.remove('cvet');
});
document.addEventListener('scroll', function () {

if ((window.pageYOffset) > 600 && (window.pageYOffset) < 1200) {
document.body.querySelector('#c3').classList.add('cvet');
} 
else document.body.querySelector('#c3').classList.remove('cvet');
});
document.addEventListener('scroll', function () {

if ((window.pageYOffset) > 800 && (window.pageYOffset) < 1200) {
document.body.querySelector('#c4').classList.add('cvet');
} 
else document.body.querySelector('#c4').classList.remove('cvet');
});

btn.addEventListener('click', function(){
window.scrollTo(0,0)
});

c1.addEventListener('click', function(){
window.scrollTo(0,0)
});
c2.addEventListener('click', function(){
window.scrollTo(0,550)
});
c3.addEventListener('click', function(){
window.scrollTo(0,800)
});
c4.addEventListener('click', function(){
window.scrollTo(0,2500)
});
let elements = [...document.querySelectorAll('.corb')].forEach(item => { 
    item.addEventListener('click', () => {
        console.log('click');
        
        corcount.innerHTML = (parseInt(corcount.innerHTML) || 0) + 1;
    });
    item.addEventListener('contextmenu', () => {
        console.log('click');
        
        corcount.innerHTML = (parseInt(corcount.innerHTML) || 0) - 1;
    });
});

btnChangeTheme.addEventListener('click', function(e){
console.log('click');
document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme');
document.querySelector('nav').classList.toggle('dark-theme2');

document.main.classList.toggle('light-theme');
})
