// const blobCursor = (() => {  
//     const CURSOR = document.querySelector('#cursorBlob');
//     const LINKS = document.querySelectorAll('.nav__link');
//     const setCursorPos = (e) => {
//       const { pageX: posX, pageY: posY } = e;
//       CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2)}px`;
//       CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2)}px`;
//     };
//     document.addEventListener('mousemove', setCursorPos);
    
//     const setCursorHover = () => CURSOR.style.transform = 'scale(2.5)';
//     const removeCursorHover = () => CURSOR.style.transform = '';
//     LINKS.forEach(link => link.addEventListener('mouseover', setCursorHover));
//     LINKS.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
    
//   })();  

   

// setTimeout(function(){ 
//     var galleryThumbs = new Swiper('.gallery-thumbs', {
//         spaceBetween: 10,
//         slidesPerView: 4,
//         loop: true,
//         freeMode: true,
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//       });
//       var galleryTop = new Swiper('.gallery-top', {
//         spaceBetween: 10,
//         loop: true,
//         speed: 1500,
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
//         thumbs: {
//           swiper: galleryThumbs
//         }
//       });

    
//       var swiper = new Swiper('.review12', {
//         speed: 1000,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//       });
      

//       var lastScrollTop = 0;
//       $(window).scroll(function(event){
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop){
//             //âíèç
//           $('.header').addClass('scrolling_down');
//           $('.header').removeClass('scrolling_up');
//         } else {
//             // ââåðõ 
//           $('.header').addClass('scrolling_up');
//           $('.header').removeClass('scrolling_down');
//         }
//         lastScrollTop = st;
//       });
//       $(window).scroll(function() {    
//         var scroll = $(window).scrollTop(); 
//         if (scroll >= 150) { 
//             $("header").addClass("header");
//         }else{
//           $("header").removeClass("header, scrolling_up");
//         }
//     });
      
// }, 1000);

