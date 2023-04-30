document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }


 /**
   * Sticky header on scroll
   */
const selectHeader = document.querySelector('#header');
if (selectHeader) {
  document.addEventListener('scroll', () => {
    window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
  });
}

/**
 * Mobile nav toggle
 */
const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
if (mobileNavToogle) {
  mobileNavToogle.addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelector('body').classList.toggle('mobile-nav-active');

    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
}

/**
 * Navbar links active state on scroll
 */
let navbarlinks = document.querySelectorAll('#navbar .scrollto');

function navbarlinksActive() {
  navbarlinks.forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    let position = window.scrollY;
    if (navbarlink.hash != '#header') position += 200;

    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  })
}
window.addEventListener('load', navbarlinksActive);
document.addEventListener('scroll', navbarlinksActive);

/**
 * Function to scroll to an element with top ofset
 */
function scrollto(el) {
  const selectHeader = document.querySelector('#header');
  let offset = 0;

  if (selectHeader.classList.contains('sticked')) {
    offset = document.querySelector('#header.sticked').offsetHeight;
  } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
    offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
  }
  window.scrollTo({
    top: document.querySelector(el).offsetTop - offset,
    behavior: 'smooth'
  });
}

/**
 * Fires the scrollto function on click to links .scrollto
 */
let selectScrollto = document.querySelectorAll('.scrollto');
selectScrollto.forEach(el => el.addEventListener('click', function(event) {
  if (document.querySelector(this.hash)) {
    event.preventDefault();

    let mobileNavActive = document.querySelector('.mobile-nav-active');
    if (mobileNavActive) {
      mobileNavActive.classList.remove('mobile-nav-active');

      let navbarToggle = document.querySelector('.mobile-nav-toggle');
      navbarToggle.classList.toggle('bi-list');
      navbarToggle.classList.toggle('bi-x');
    }
    scrollto(this.hash);
  }
}));

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener('load', () => {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


//model box

// Get the modal
const modal = document.querySelector("#myModal");

// Get the button that opens the modal
const btn = document.querySelectorAll(".btn_modal");

// Get the <span> element that closes the modal
const closeModal = document.getElementsByClassName("close")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    modal.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//**********nav new**********
// navscroll
// $(document).ready(function(){
//   $(window).scroll(function(){
//       if($(window).scrollTop() > 150){
//           $(".navbar").css({"color":"#fff"});   
//       }
//       else{
//           $(".navbar").css({"color":"#0e1d34"});
//       }

//   });
// });

// $(document).ready(function(){
//   $(window).scroll(function(){
//       if($(window).scrollTop() > 150){
//           $(".bar_head").css({"color":"#fff"});   
//       }
//       else{
//           $(".bar_head").css({"color":"#0e1d34"});
//       }

//   });
// });

// hamburger-navbar
// $(document).ready(function(){
// 	$(".hamburger").click(function(){
// 		$(".hamul").show()
// 	});
// });
// $(document).ready(function(){
// 	$(".cross").click(function(){
// 		$(".hamul").hide()
// 	});
// });
















/**
 * Toggle mobile nav dropdowns
 */
const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

navDropdowns.forEach(el => {
  el.addEventListener('click', function(event) {
    if (document.querySelector('.mobile-nav-active')) {
      event.preventDefault();
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('dropdown-active');

      let dropDownIndicator = this.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    }
  })
});
