const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");
const loginBtn = document.querySelector("#login-btn")
const loginForm = document.querySelector(".login-form-container")
const closeLoginBtn = document.querySelector("#close-login-form");
const home = document.querySelector(".home");
const homeParallax = document.querySelectorAll(".home-parallax");

loginBtn.addEventListener("click", ()=>{
  loginForm.classList.add('active');
})

closeLoginBtn.addEventListener('click', ()=>{
  loginForm.classList.remove('active')
})

menu.addEventListener('click', ()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})

onscroll = ()=>{
  if (scrollY > 0){
    document.querySelector(".header").classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active')
  }
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')
}

home.onmouseover = (e)=>{
  homeParallax.forEach(element =>{
    let speed = element.getAttribute('data-speed');
    let x = (innerWidth - e.pageX * speed) / 90;
    let y =(innerHeight - e.pageY * speed) / 90;

    element.style.transform = `translateX(${y}px) translateY(${x}px)`;
  })
}
home.onmouseleave = ()=>{
  homeParallax.forEach(element =>{
    element.style.transform = `translateX(0px) translateY(0px)`;
  })
}

let swiper1 = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let swiper2 = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let swiper3 = new Swiper(".reviews-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});