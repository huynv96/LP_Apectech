let nav = document.querySelector('#header_menu .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  nav.classList.toggle('active');
};


function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }
// Go to top
// Get the button
let mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   menuBtn.classList.remove('fa-times');
   nav.classList.remove('active');
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }


function HideLoadingScreen() {
   $(".loading-screen").css({ "display": "none" });
}
 $("#getInfoBonds").click(function () {
   ShowLoadingScreen();
   let name = $("#name").val();
   let phone = $("#phone").val();
   let email = $("#email").val();
   let regions = $("#regions").val();
   //let regions = $('#regions').find(":selected").val;

   if (!name || !phone || !regions) {
       swal("Lỗi", "Họ tên, vùng miền và số điện thoại là bắt buộc.", "error");
       HideLoadingScreen();
       return;
   }
   let mail_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if (mail_regex.test(email) == false) {
       swal("Lỗi", "Email bạn vừa nhập không hợp lệ", "error");
       HideLoadingScreen();
       return;
   }
   let vnf_regex = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
   if (vnf_regex.test(phone) == false) {
       swal("Lỗi", "Số điện thoại bạn vừa nhập không hợp lệ.", "error");
       HideLoadingScreen();
       return;
   }

   let info = JSON.stringify({
       phone: phone,
       email: email,
       username: name,
       regions: regions
   });

   $.ajax({
       url: "https://api.caresoft.vn/TBD/api/v1/tickets",
       data: info,
       headers:{
         "Authorization": "Bearer jio6r7UMMO_ituQ",
         "Content-Type": "application/json"
       },
       dataType: 'jsonp',
       type: "POST",
       success: function (response) {
           HideLoadingScreen();
           if (response.status == "success")
               swal("Thành công", "Đã gửi thông tin thành công, bạn sẽ được nhận thông tin mới nhất về những sản phẩm của chúng tôi", "success");
           else
               swal("Lỗi", "Gửi thông tin không thành công, vui lòng kiểm tra lại thông tin", "error");
       },
       error: function (response) {
           HideLoadingScreen();
           swal("Lỗi", "Gửi thông tin không thành công, vui lòng kiểm tra lại thông tin", "error");
       }
   });
});
// End go to top
$(document).ready(function (){
   $('#slide').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: true,
      dots: false,
      fade: false,
      infinite: true,
      autoplay: false,
      draggable: true,
      cssEase: 'linear',
      prevArrow: '<button id="slick-prev" class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-chevron-left"></i></button>',
      nextArrow: '<button id="slick-next" class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-chevron-right"></i></button>',
      responsive: [{
          breakpoint: 320,
          settings: {
              fade: false,
              arrows: false,
              dots: true,
              autoplay: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }]
   });  
});


// Popup Register
// Get the modal
var modal = document.getElementById("register_buynow");

// Get the button that opens the modal
var btn = document.getElementById("btnRegBuyNow");
var btnmb = document.getElementById("btnRegBuyNow-mb");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeformRegister")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btnmb.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//menu header scroll
// $(window).scroll(function() {
//   if ($(window).scrollTop() > 0) $('header').addClass('scroll');
//   else $('header').removeClass('scroll');
// });



// Home-banner slider
$('.testimonials-carousel').owlCarousel({
  loop: true,
  margin: 50,
  autoplayTimeout: 3000,
  autoplaySpeed: 1000,
  nav: false,
  autoplay: true,
  dots: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  },
  // animateOut:'fadeOut',
})

$('#partner_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
  infinite: true,
  autoplay: true,
  draggable: true,
  cssEase: 'linear',
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
  responsive: [
     {
      breakpoint: 568,
      settings: {
          arrows: false,
          dots: false,
          autoplay: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
      }
     },
     {
        breakpoint: 820,
        settings: {
            arrows: false,
            dots: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
        }
      }
]
});

AOS.init({
  duration: 1000
});
// Product slider
var $carousel = $('#product .slider');

var settings = {
  dots: false,
  arrows: false,
  slide: '.slick-slideshow__slide',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '60px',
  infinite: true,
  autoplay: true,
  responsive: [
    {
     breakpoint: 568,
     settings: {
         arrows: false,
         dots: false,
         autoplay: true,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
     }
    },
    {
       breakpoint: 820,
       settings: {
           arrows: false,
           dots: false,
           autoplay: true,
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
       }
     }
]
};


function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});

// Animation
$(function() {
  
  var html = $('html');
  // Detections
  if (!("ontouchstart" in window)) {
    html.addClass("noTouch");
  }
  if ("ontouchstart" in window) {
    html.addClass("isTouch");
  }
  if ("ontouchstart" in window) {
    html.addClass("isTouch");
  }
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    if (navigator.appVersion.indexOf("Trident") === -1) {
      html.addClass("isEDGE");
    } else {
      html.addClass("isIE isIE11");
    }
  }
  if (navigator.appVersion.indexOf("MSIE") !== -1) {
    html.addClass("isIE");
  }
  if (
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1
  ) {
    html.addClass("isSafari");
  }

  // On Screen

  $.fn.isOnScreen = function() {
    var elementTop = $(this).offset().top,
      elementBottom = elementTop + $(this).outerHeight(),
      viewportTop = $(window).scrollTop(),
      viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  function detection() {
    for (var i = 0; i < items.length; i++) {
      var el = $(items[i]);

      if (el.isOnScreen()) {
        el.addClass("in-view");
      } else {
        el.removeClass("in-view");
      }
    }
  }

  var items = document.querySelectorAll(
    "*[data-animate-in], *[data-detect-viewport]"
  ),
    waiting = false,
    w = $(window);

  w.on("resize scroll", function() {
    if (waiting) {
      return;
    }
    waiting = true;
    detection();

    setTimeout(function() {
      waiting = false;
    }, 100);
  });

  $(document).ready(function() {
    setTimeout(function() {
      detection();
    }, 500);

    for (var i = 0; i < items.length; i++) {
      var d = 0,
        el = $(items[i]);
      if (items[i].getAttribute("data-animate-in-delay")) {
        d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
      } else {
        d = 0;
      }
      el.css("transition-delay", d);
    }
  });
});

