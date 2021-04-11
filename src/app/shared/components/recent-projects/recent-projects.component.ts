import { Component, OnInit } from "@angular/core";
import Swiper from "../../../../assets/js/swiper-bundle.min.js";
@Component({
  selector: "app-recent-projects",
  templateUrl: "./recent-projects.component.html",
  styleUrls: ["./recent-projects.component.scss"],
})
export class RecentProjectsComponent implements OnInit {
  constructor() {}

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
    }, 1000);
  }
}
