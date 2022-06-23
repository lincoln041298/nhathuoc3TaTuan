
const closeMenuBtn = document.querySelector('.button-close') //closenav mobile
const openMenuBtn = document.querySelector('.button-open') //opennav  mobile
const dropDown = document.querySelector('.choosen-health__tablet-mobile') //dropdown mobile


openMenuBtn.addEventListener('click', function() {
    dropDown.classList.add('d-open')
})

closeMenuBtn.addEventListener('click', function() {
    dropDown.classList.remove('d-open')
})


//set date
const date =  document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//scroll to top
const toTop = document.getElementById("scroll-top");

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 50) {
        toTop.classList.add('scroll-active');
    } else {
        toTop.classList.remove('scroll-active');
    }
});

////Main slider

var swiper = new Swiper(".mySwiper", {
navigation: {
  nextEl: ".swiper-button-right",
  prevEl: ".swiper-button-left",
},
});

var swiper = new Swiper(".firstwiper", {
slidesPerView: 5,
spaceBetween: 20,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
  el: ".swiper-pagination-custom",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-nav-next",
  prevEl: ".swiper-button-nav-prev",
},

breakpoints: {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },

  1097: {
    slidesPerView: 5,
   spaceBetween: 24,
  },
  1580: {
    slidesPerView: 5,
  //  spaceBetween: 35,
  }
},
});

var swiper = new Swiper(".iSwiper", {
slidesPerView: 5,
spaceBetween: 24,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
  el: ".swiper-pagination-custom",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-rightmain",
  prevEl: ".swiper-button-leftmain",
},

breakpoints: {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },

  1097: {
    slidesPerView: 5,
   spaceBetween: 24,
  },
  1580: {
    slidesPerView: 5,
  //  spaceBetween: 35,
  }
},
});

var swiper = new Swiper(".arewiper", {
slidesPerView: 1,
// spaceBetween: 24,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
  el: ".swiper-pagination-custom",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-rightmain",
  prevEl: ".swiper-button-leftmain",
},

// breakpoints: {
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 12,
//     slidesPerGroup: 1,
//   },

//   768: {
//     slidesPerView: 1,
//     spaceBetween: 15,
//     slidesPerGroup: 1,
//   },
//   966: {
//     slidesPerView: 2,
//     spaceBetween: 40,
//   },
// },
});