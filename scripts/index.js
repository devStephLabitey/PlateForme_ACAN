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