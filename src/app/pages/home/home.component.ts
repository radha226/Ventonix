import { Component, OnDestroy, OnInit } from "@angular/core";
import * as $ from "jquery";
import { HeaderService } from "src/app/shared/services/header.service";
import Swiper from "../../../assets/js/swiper-bundle.min.js";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private headerService: HeaderService) {
    this.headerService.isHomePage.next(true);
  }

  ngOnInit(): void {
    setTimeout(function () {
      var galleryThumbs = new Swiper(".gallery-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        // freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      });
      var galleryTop = new Swiper(".gallery-top", {
        spaceBetween: 10,
        loop: true,
        //speed: 1500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });

      var swiper = new Swiper(".review12", {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

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
    }, 1000);

    var counted = 0;
    $(window).scroll(function () {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
        counted = 1;
      }
    });
  }

  ngOnDestroy() {
    $(window).off("scroll");
  }
}
