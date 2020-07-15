$(function () {

  var mixer = mixitup(".products__inner-box");
  
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    ratedFill: "#ffa726",
    readOnly: true
  });

  $(".product-slider__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
  })

});
