$(document).ready(() => {
  var swiper = new Swiper(".productSwiper", {
    lazy: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  $(".faq_wrap").click(function () {
    $(this).find("button").toggleClass("active")
    $(this).find(".faq_content").slideToggle();
  });
});
