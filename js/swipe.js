window.addEventListener('load', function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var mediaqueryList = window.matchMedia("(max-width: 576px)");
  if (mediaqueryList.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
 
})

var mediaqueryList = window.matchMedia("(max-width:491px)");
if (mediaqueryList.matches) {
  let overlay = this.document.getElementById('overlay');
  overlay.classList.remove("overlay");
}