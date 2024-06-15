window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const navLinkEls = document.querySelectorAll('.navlinks');

navLinkEls.forEach(navLinkEl =>{
    navLinkEl.addEventListener('click', ()=>{
        navLinkEl.classList.add('.active1')
    })
})

const burger = document.querySelector('.burgerMenu')
navlink = document.querySelector('.links ')

burger.addEventListener('click',()=>{
  navlink.classList.toggle('Menu-toggle')
  console.log(1);
})
console.log(burger, navlink);


// typing text animation

const texts = ["Académie", "Numérique", "ACAN"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); // Delay before starting the next word
    } else {
        setTimeout(type, 200); // Typing speed
    }
}());