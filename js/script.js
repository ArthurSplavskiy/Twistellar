// file.js include place
////alert("alert message");
;

// webpcss
// function testWebP(callback) {
//   var webP = new Image();

//   webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//   };
//   webP.src =
//     "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {
//   if (support == true) {
//     document.querySelector("body").classList.add("webp");
//   } else {
//     document.querySelector("body").classList.add("no-webp");
//   }
// });

// ibg
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// project scripts

// === hamburger menu
const body = document.querySelector('body')
const mainWrap = document.querySelector('.navigation-panel-menu')
const gamburgerButton = document.querySelector('#gamburger')
const mainMenu = document.querySelector('.main-menu')
const navPanel = document.querySelector('.navigation-panel')

gamburgerButton.addEventListener('click', function() {
  mainWrap.classList.toggle('active')
  navPanel.classList.toggle('navigation-panel-active')
  gamburgerButton.classList.toggle('gamburger-active')
  body.classList.toggle('hide')
  mainMenu.classList.toggle('active')
})
// ===

// === Swiper slider
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  slidesPerView: 3,
  breakpoints: {
    1292: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});

// const sliderContainer = document.querySelector('.swiper-container')
// const nextButton = document.querySelector('.swiper-button-next')

// sliderContainer.addEventListener('mouseover', () => {
//   nextButton.classList.toggle('d-none')
// })
// ===

// === Swiper slider

// === Accordion
document.querySelectorAll('.accordion').forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active')
  })
})

// for(let i = 0; i < accortion.length; i++) {
//   alert(i)
//   accordion[i].addEventListener('click', function() {
//     alert('2')
//     this.classList.toggle('active')
//   })
// }
// ===

// lottie animation
const lottieAnimation = (domElement, path,) => {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById(`${domElement}`),
    path: `${path}`,
    renderer: 'svg',
    loop: true,
    autoplay: true,
  })
}
lottieAnimation('lottie-1','01.json')
lottieAnimation('lottie-2','../img/pages/main/02.json')
lottieAnimation('lottie-3','../img/pages/main/03.json')
lottieAnimation('lottie-4','../img/pages/main/04.json')
// ===