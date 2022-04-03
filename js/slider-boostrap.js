window.addEventListener("load", () => {
    var myCarousel = document.querySelector('#myslider')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      wrap: false,
    })
})