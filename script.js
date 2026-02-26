$(document).ready(() => {
  var swiper = new Swiper(".productSwiper", {
    lazy: true,
    speed: 1000,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  $(".faq_wrap").click(function () {
    $(this).find("button").toggleClass("active");
    $(this).find(".faq_content").slideToggle();
  });

  // mob menu
  $("#get_mob_menu, #close_mob_menu").click(() => {
    $("#mob_menu").toggleClass("active");
  });
});
