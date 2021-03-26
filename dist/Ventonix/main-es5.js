(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\angular\freelance\Ventonix\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/js/swiper-bundle.min.js */
      "d4cB");
      /* harmony import */


      var _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/about"];
      };

      var _c1 = function _c1() {
        return ["/contact"];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(headerService) {
          _classCallCheck(this, HomeComponent);

          this.headerService = headerService;
          this.headerService.isHomePage.next(true);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              var galleryThumbs = new _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default.a(".gallery-thumbs", {
                spaceBetween: 10,
                slidesPerView: 4,
                loop: true,
                // freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                autoplay: {
                  delay: 3500,
                  disableOnInteraction: false
                }
              });
              var galleryTop = new _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default.a(".gallery-top", {
                spaceBetween: 10,
                loop: true,
                //speed: 1500,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                },
                autoplay: {
                  delay: 3500,
                  disableOnInteraction: false
                },
                thumbs: {
                  swiper: galleryThumbs
                }
              });
              var swiper = new _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default.a(".review12", {
                autoplay: {
                  delay: 3500,
                  disableOnInteraction: false
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true
                }
              }); //       var lastScrollTop = 0;
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
            jquery__WEBPACK_IMPORTED_MODULE_0__(window).scroll(function () {
              var oTop = jquery__WEBPACK_IMPORTED_MODULE_0__("#counter").offset().top - window.innerHeight;

              if (counted == 0 && jquery__WEBPACK_IMPORTED_MODULE_0__(window).scrollTop() > oTop) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".count").each(function () {
                  var $this = jquery__WEBPACK_IMPORTED_MODULE_0__(this),
                      countTo = $this.attr("data-count");
                  jquery__WEBPACK_IMPORTED_MODULE_0__({
                    countNum: $this.text()
                  }).animate({
                    countNum: countTo
                  }, {
                    duration: 2000,
                    easing: "swing",
                    step: function step() {
                      $this.text(Math.floor(this.countNum));
                    },
                    complete: function complete() {
                      $this.text(this.countNum); //alert('finished');
                    }
                  });
                });
                counted = 1;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            jquery__WEBPACK_IMPORTED_MODULE_0__(window).off("scroll");
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 323,
        vars: 4,
        consts: [[1, "hero"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "hero-inner"], [1, "btn", "btn-main", "nav__link", 3, "routerLink"], ["src", "../../../assets/images/arrow.svg"], [1, "hero-inner-img"], ["src", "../../../assets/images/home-banner-icon.svg", "alt", "icon"], [1, "hero-svg"], ["src", "assets/images/hero.svg", "alt", "", 1, "img-fluid"], [1, "slide-project"], [1, "img-bg-1"], ["src", "../../assets/images/slide-round.svg", "alt", "", 1, "img-fluid"], ["src", "../../assets/images/circle.svg", "alt", "", 1, "img-fluid"], [1, "col-md-12"], [1, "slide-inner"], [1, "text-white", "text-center"], [1, "swiper-container", "gallery-thumbs"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "../../assets/images/project1.png", "alt", "", 1, "img-fluid", "W-100"], ["src", "../../assets/images/project2.png", "alt", "", 1, "img-fluid", "W-100"], ["src", "../../assets/images/project3.png", "alt", "", 1, "img-fluid", "W-100"], ["src", "../../assets/images/project4.png", "alt", "", 1, "img-fluid", "W-100"], [1, "swiper-container", "gallery-top", "mt-5"], [1, "swiper-slide-inner"], [1, "col-md-6", "slider-main-image"], ["src", "../../assets/images/main-project1.png", "alt", "", 1, "img-fluid", "W-100"], [1, "slide-content"], [1, "text-white"], [1, "text-white", "my-5"], ["href", "javascript:void(0)", 1, "btn", "btn-border"], ["src", "../../../assets/images/arrow.svg", 1, "slider-icon"], [1, "we-offre"], ["src", "../../assets/images/we-offer-icon1.svg", "alt", "", 1, "img-fluid", "off2"], [1, "col-md-5", "col-lg-5"], [1, "we-offer-inner"], [1, "col-md-7", "col-lg-7"], [1, "we-offer-inner1"], [1, "services-offer"], ["src", "../../assets/images/web-dev.svg", "alt", "", 1, "img-fluid"], ["routerLink", ""], ["src", "../../assets/images/mobile-app.svg", "alt", "", 1, "img-fluid"], ["src", "../../assets/images/seo.svg", "alt", "", 1, "img-fluid"], ["src", "../../assets/images/graphic-design.svg", "alt", "", 1, "img-fluid"], ["src", "assets/images/we-offer-icon.svg", "alt", "", 1, "img-fluid", "of1"], [1, "numbers"], [1, "numbers-title"], [1, "work-with-us"], [1, "work-with-inner"], ["id", "counter"], ["data-count", "90", 1, "count", "percent"], ["data-count", "55", 1, "count", "percent"], ["data-count", "8", 1, "count", "percent"], ["data-count", "10", 1, "count", "percent"], ["data-count", "40", 1, "count", "percent"], ["data-count", "2", 1, "count", "percent"], [1, "col-md-4", "col-lg-3"], [1, "tts"], [1, "col-md-8", "col-lg-9"], [1, "row", "justify-content-end"], [1, "icons"], ["src", "assets/images/icon1.svg", "alt", "", 1, "img-fluid"], [1, "content"], [1, "review"], [1, "title"], [1, "swiper-container", "review12"], [1, "rw-inner"], [1, "swiper-pagination"], [1, "lts"], [1, "lts-container"], [1, "lts-inner"], [1, "btn-white-border", 3, "routerLink"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " We at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Ventonix");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " are professionals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Let's get started ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "section", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "RECENT PROJECTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h2", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Read more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h2", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Read more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h2", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Read more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h2", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Read more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "section", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "WE OFFERS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Expert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Web ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " Developement ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " Mobile App ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " Developement ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " Search Engine");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, " Optimization ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " Graphic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " Design ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "section", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "VENTONIX IN NUMBERS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, " Since years we have put in our hard work and dedication to excell our client\u2019s expectations. Here are just few stats. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "section", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "ul", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Customer Satisfaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Technologies");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, " 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Offices");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, " Why work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, " with us? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](232, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "Dedicated Resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "Every project is backed with real working humans");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](240, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "Perfection");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "All our work is quality tested for high quality");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "On-time Delivery");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Your time is precious. We understand it!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "section", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "What our client says");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "Erin Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Marketing Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Erin Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "Marketing Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](284, "Erin Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "Marketing Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, "Erin Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Marketing Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "Erin Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Marketing Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "Erin Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "Marketing Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](311, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "section", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "Let's start your project now");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "Contact us now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](322, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](307);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: [".hero[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 147px);\n  display: flex;\n  align-items: center;\n  padding: 90px 0;\n  position: relative;\n}\n.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n  margin: 50px 0 0;\n}\n.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 65px;\n  color: #262332;\n  font-size: 65px;\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 68px;\n}\n.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin: 30px 0 44px 0;\n}\n.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]   .hero-inner-img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: -42px;\n}\n.hero[_ngcontent-%COMP%]   .hero-svg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hero[_ngcontent-%COMP%]   .hero-svg[_ngcontent-%COMP%]   g#g1[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 1100s infinite linear;\n          animation: rotate 1100s infinite linear;\n  transform-box: fill-box;\n  transform-origin: left;\n}\n.hero[_ngcontent-%COMP%]   .hero-svg[_ngcontent-%COMP%]   g#Group-6[_ngcontent-%COMP%] {\n  -webkit-animation: zoom 10s infinite linear;\n          animation: zoom 10s infinite linear;\n  transform-box: fill-box;\n  transform-origin: right;\n}\n.review12[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.review12[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  background: linear-gradient(135deg, #009EFF 0%, #30CCC6 100%);\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent;\n}\n.review12[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #79848b;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 30px;\n}\n.slide-project[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  padding: 150px 0 100px 0;\n  position: relative;\n  z-index: 1;\n}\n.slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  padding-right: 123px;\n}\n.slide-project[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 39px;\n  font-weight: 800;\n  font-size: 19px;\n}\n.slide-project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: Montserrat;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n}\n.slide-project[_ngcontent-%COMP%]   a.btn.btn-border[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 2px solid #fff;\n  padding: 16px 45px;\n  display: inline-block;\n  position: relative;\n  transition: 0.4s ease all;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n}\n.slide-project[_ngcontent-%COMP%]   a.btn.btn-border[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  background: linear-gradient(135deg, #009EFF 0%, #30CCC6 100%);\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent;\n}\n.slide-project[_ngcontent-%COMP%]   a.btn.btn-border[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: -1;\n}\n.slide-project[_ngcontent-%COMP%]   .slider-icon[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 10px;\n}\n.slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  position: absolute;\n  top: 100px;\n  left: 90px;\n}\n.slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n  position: absolute;\n  right: 150px;\n  top: 250px;\n}\n.slide-project[_ngcontent-%COMP%]   .gallery-top[_ngcontent-%COMP%] {\n  margin: 92px 0 33px 0 !important;\n}\n.we-offre[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 180px 0 0 0;\n  margin-bottom: 60px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  padding-left: 109px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #009EFF 0%, #30CCC6 100%);\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent;\n  font-weight: 800;\n  font-size: 19px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 60px;\n  letter-spacing: 1px;\n  margin: 30px 0 35px 0;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin-right: 62px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 80px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%;\n  display: flex;\n  padding-right: 66px;\n  margin-bottom: 60px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: 2px solid #f5f5f5;\n  padding: 61px;\n  min-height: 150px;\n  width: 100%;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 30px;\n  margin: 20px 0;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 17px;\n  font-weight: 700;\n  line-height: 20px;\n  border-bottom: 2px solid #0aa7f4;\n  padding-bottom: 3px;\n}\n.we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #262332;\n  text-decoration: none;\n}\n.we-offre[_ngcontent-%COMP%]   .of1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 54px;\n  left: -28px;\n}\n.we-offre[_ngcontent-%COMP%]   .off2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: -1;\n  top: 73px;\n}\n.numbers[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #009EFF 0%, #30CCC6 100%);\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent;\n  font-weight: 800;\n  font-size: 19px;\n}\n.numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  margin: 0 auto;\n  line-height: 55px;\n  max-width: 855px;\n  text-align: center;\n  letter-spacing: 0.3;\n  margin-bottom: 120px;\n}\n.work-with-us[_ngcontent-%COMP%] {\n  background-image: url(/../../assets/images/home-work-icon-1.svg), url(/../../assets/images/home-work-icon-2.svg), url(/../../assets/images/home-work-icon-3.svg);\n  background-repeat: no-repeat;\n  background-position: 2% 59%, 14% 93%, 94% 76%;\n  padding: 60px 60px 107px 60px;\n  background-color: #f5f5f5;\n  background-size: 4%, 8%, 5%;\n}\n.work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  padding: 30px;\n  position: relative;\n  top: -170px;\n}\n.work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%] {\n  padding: 25px;\n  max-width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n}\n.work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 50px;\n}\n.work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 60px;\n  font-weight: 700;\n  line-height: 90px;\n  text-align: center;\n}\n.work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  text-align: center;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 60px;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 30px 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  display: flex;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 31px;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 32px;\n  margin: 20px 66px 4px 0;\n}\n.review[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n  text-align: center;\n  padding: 190px 0 140px;\n}\n.review[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 60px;\n  text-align: center;\n  letter-spacing: 1px;\n  margin-bottom: 80px;\n}\n.review[_ngcontent-%COMP%]   .rw-inner[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 80px 25px;\n  max-width: 850px;\n  background: #f5f5f5;\n  position: relative;\n  z-index: 1;\n}\n.review[_ngcontent-%COMP%]   .rw-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 48px;\n}\n.review[_ngcontent-%COMP%]   .rw-inner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -17px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid #f5f5f5;\n  width: 20px;\n  height: 20px;\n}\n.review[_ngcontent-%COMP%]   .rw-inner[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n.review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.review[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.logo[_ngcontent-%COMP%] {\n  filter: none !important;\n}\n.c-p[_ngcontent-%COMP%] {\n  filter: none !important;\n}\n.lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n@media screen and (max-width: 1600px) {\n  .hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n    line-height: 60px;\n  }\n  .hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n  .slide-project[_ngcontent-%COMP%] {\n    padding: 90px 0 80px 0;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    padding-right: 60px;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 30px 0;\n  }\n\n  .we-offre[_ngcontent-%COMP%] {\n    padding: 120px 0 0 0;\n    margin-bottom: 60px;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%] {\n    margin-right: 30px;\n    padding-left: 50px;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 26px 0 24px 0px;\n    font-size: 40px;\n    line-height: 40px;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-right: 32px;\n  }\n  .we-offre[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-right: 40px;\n    margin-bottom: 39px;\n  }\n  .numbers[_ngcontent-%COMP%] {\n    padding: 70px 0;\n  }\n  .numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 91px;\n    font-size: 40px;\n    max-width: 73%;\n    line-height: 50px;\n  }\n\n  .review[_ngcontent-%COMP%] {\n    padding: 82px 0 100px;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-right: 30px;\n    margin-bottom: 30px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .work-with-inner[_ngcontent-%COMP%]   #counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-right: 30px;\n    margin-bottom: 30px;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%] {\n    padding: 15px;\n    text-align: center;\n  }\n\n  .numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .slide-project[_ngcontent-%COMP%]   a.btn.btn-border[_ngcontent-%COMP%] {\n    padding: 8px 18px;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .mb-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n    margin: 20px 0 !important;\n  }\n\n  .hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .my-5[_ngcontent-%COMP%], .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .slide-project[_ngcontent-%COMP%]   .img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .slider-main-image[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .slider-main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .we-offre[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .we-offre[_ngcontent-%COMP%]   .off2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 19px;\n    margin: 15px 0;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .we-offre[_ngcontent-%COMP%]   .we-offer-inner1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .services-offer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    display: inline-block;\n  }\n\n  .work-with-us[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n    padding-top: 71px;\n    background-image: none;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin: 23px 0 15px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .lts[_ngcontent-%COMP%]   .lts-container[_ngcontent-%COMP%] {\n    background-image: none;\n  }\n\n  .numbers[_ngcontent-%COMP%]   .numbers-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .slider-main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .work-with-us[_ngcontent-%COMP%] {\n    padding: 60px 0px 50px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREY7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDTjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNOO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFHSTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRE47QUFHSTtFQUNFLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBRE47QUFLQTtFQUNFLG9CQUFBO0FBRkY7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsNkRDaERnQjtFRGlEaEIsd0NBQUE7RUFDQSxvQ0FBQTtBQURKO0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZEQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFERjtBQUVFO0VBQ0Usb0JBQUE7QUFBSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLHVCQUFBO0VBQ0EsNkRDakdjO0VEa0dkLHdDQUFBO0VBQ0Esb0NBQUE7QUFBTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFDUjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFESjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0U7RUFDRSxnQ0FBQTtBQURKO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdNO0VBQ0UsNkRDOUlZO0VEK0laLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBSUk7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFGTjtBQUlNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZSO0FBR1E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZWO0FBR1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRFo7QUFHVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUVZO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQUFkO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEo7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTEo7QUFRQTtFQUNFLGdCQUFBO0FBTEY7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQU1NO0VBQ0UsNkRDdk9ZO0VEd09aLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKUjtBQU9JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBTE47QUFTQTtFQUNFLGdLQUFBO0VBR0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQVJGO0FBU0U7RUFDRSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVBKO0FBUUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQU5OO0FBT007RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFI7QUFNUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSlY7QUFNUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSlY7QUFXSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVROO0FBV0k7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBVE47QUFXSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFUTjtBQVdJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVROO0FBVU07RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQVJSO0FBU1E7RUFDRSxrQkFBQTtBQVBWO0FBU1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFQVjtBQVNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFQVjtBQWNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBWEY7QUFhSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVhOO0FBY0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVpKO0FBYUk7RUFDRSxjQUFBO0FBWE47QUFjSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVpOO0FBY0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFaTjtBQWVFO0VBQ0UsaUJBQUE7QUFiSjtBQWVFO0VBQ0UsZ0JBQUE7QUFiSjtBQWdCQTtFQUNFLHVCQUFBO0FBYkY7QUFlQTtFQUNFLHVCQUFBO0FBWkY7QUFnQkU7RUFDRSxtQkFBQTtBQWJKO0FBa0JBO0VBR007SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFqQk47RUFtQkk7SUFDRSxlQUFBO0VBakJOOztFQXNCQTtJQUNFLHNCQUFBO0VBbkJGO0VBb0JFO0lBQ0UsbUJBQUE7RUFsQko7RUFvQkk7SUFDRSxlQUFBO0VBbEJOO0VBb0JJO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFsQk47O0VBdUJBO0lBQ0Usb0JBQUE7SUFDQSxtQkFBQTtFQXBCRjtFQXNCRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7RUFwQko7RUFxQkk7SUFDRSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQW5CTjtFQXFCSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQW5CTjtFQXNCRTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7RUFwQko7RUEwQkE7SUFDRSxlQUFBO0VBeEJGO0VBMEJJO0lBQ0UsbUJBQUE7RUF4Qk47RUEwQkk7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUF4Qk47O0VBNEJBO0lBQ0UscUJBQUE7RUF6QkY7QUFDRjtBQTRCQTtFQUlRO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtFQTdCUjtFQXdDTTtJQUNFLGVBQUE7RUF0Q1I7RUF1Q1E7SUFDRSxlQUFBO0VBckNWO0VBdUNRO0lBQ0UsZUFBQTtFQXJDVjtFQTRDTTtJQUNFLGNBQUE7RUExQ1I7RUEyQ1E7SUFDRSxlQUFBO0VBekNWO0FBQ0Y7QUFnREE7RUFJUTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7RUFqRFI7RUFrRFE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFoRFY7O0VBeURJO0lBQ0UsZUFBQTtFQXRETjs7RUEwREE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUF2REY7QUFDRjtBQTBEQTtFQUNFOztJQUVFLHlCQUFBO0VBeERGOztFQTZETTtJQUNFLGFBQUE7RUExRFI7RUFvRUk7O0lBRUUsU0FBQTtFQWxFTjtFQXNFSTtJQUNFLGFBQUE7RUFwRU47O0VBd0VBO0lBQ0UsZUFBQTtFQXJFRjtFQXNFRTtJQUNFLFVBQUE7RUFwRUo7O0VBd0VBO0lBQ0UsZ0JBQUE7RUFyRUY7RUFzRUU7SUFDRSxhQUFBO0VBcEVKO0VBc0VFO0lBQ0UsaUJBQUE7RUFwRUo7RUFzRUU7SUFDRSxnQkFBQTtFQXBFSjtFQXdFVTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBdEVaO0VBdUVZO0lBQ0UsYUFBQTtFQXJFZDtFQXdFVTtJQUNFLG1CQUFBO0lBQ0EscUJBQUE7RUF0RVo7O0VBOEVBO0lBQ0Usb0JBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBM0VGO0VBNEVFO0lBQ0UsbUJBQUE7RUExRUo7RUE0RU07SUFDRSxhQUFBO0VBMUVSOztFQWlGRTtJQUNFLHNCQUFBO0VBOUVKOztFQW1GSTtJQUNFLGVBQUE7RUFoRk47QUFDRjtBQW9GQTtFQUVJO0lBQ0UsV0FBQTtFQW5GSjs7RUFzRkE7SUFDRSwwQkFBQTtFQW5GRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW4uc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3Iuc2Nzc1wiO1xyXG4uaGVybyB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE0N3B4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOTBweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuaGVyby1pbm5lciB7XHJcbiAgICBtYXJnaW46IDUwcHggMCAwO1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNjhweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luOiAzMHB4IDAgNDRweCAwO1xyXG4gICAgfVxyXG4gICAgLmhlcm8taW5uZXItaW1nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IC00MnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVyby1zdmcge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBnI2cxIHtcclxuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMTEwMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIH1cclxuICAgIGcjR3JvdXAtNiB7XHJcbiAgICAgIGFuaW1hdGlvbjogem9vbSAxMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5yZXZpZXcxMiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmFkaWVudDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM3OTg0OGI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcbi5zbGlkZS1wcm9qZWN0IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOWVmZiAwJSwgIzMwY2NjNiAxMDAlKTtcclxuICBwYWRkaW5nOiAxNTBweCAwIDEwMHB4IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTIzcHg7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM5cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBhLmJ0bi5idG4tYm9yZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE2cHggNDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZSBhbGw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmFkaWVudDtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zbGlkZXItaWNvbiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBzcGFuLmltZy1iZy0xIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogOTBweDtcclxuICB9XHJcbiAgc3Bhbi5pbWctYmctMSBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTUwcHg7XHJcbiAgICB0b3A6IDI1MHB4O1xyXG4gIH1cclxuICAuZ2FsbGVyeS10b3Age1xyXG4gICAgbWFyZ2luOiA5MnB4IDAgMzNweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ud2Utb2ZmcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmc6IDE4MHB4IDAgMCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgLndlLW9mZmVyLWlubmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTA5cHg7XHJcbiAgICBoNSB7XHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmFkaWVudDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luOiAzMHB4IDAgMzVweCAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDYycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53ZS1vZmZlci1pbm5lcjEge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDY2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAuc2VydmljZXMtb2ZmZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y1ZjVmNTtcclxuICAgICAgICAgIC8vIHBhZGRpbmc6IDM2cHggMzNweCAzNnB4IDMzcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2MXB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBhYTdmNDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNjIzMzI7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vZjEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1NHB4O1xyXG4gICAgbGVmdDogLTI4cHg7XHJcbiAgfVxyXG4gIC5vZmYyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDczcHg7XHJcbiAgfVxyXG59XHJcbi5udW1iZXJzIHtcclxuICBwYWRkaW5nOiAxMjBweCAwO1xyXG4gIC5udW1iZXJzLXRpdGxlIHtcclxuICAgIGg1IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktZ3JhZGllbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDg1NXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ud29yay13aXRoLXVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS13b3JrLWljb24tMS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtd29yay1pY29uLTIuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXdvcmstaWNvbi0zLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA1OSUsIDE0JSA5MyUsIDk0JSA3NiU7XHJcbiAgcGFkZGluZzogNjBweCA2MHB4IDEwN3B4IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQlLCA4JSwgNSU7XHJcbiAgLndvcmstd2l0aC1pbm5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOWVmZiAwJSwgIzMwY2NjNiAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNzBweDtcclxuICAgICNjb3VudGVyIHtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogOTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnR0cyB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDY2cHggNHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE5MHB4IDAgMTQwcHg7XHJcbiAgLnRpdGxlIHtcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJ3LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA4MHB4IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwIDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTE3cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCAjZjVmNWY1O1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgc21hbGwge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG4ubG9nbyB7XHJcbiAgZmlsdGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmMtcCB7XHJcbiAgZmlsdGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmx0cyB7XHJcbiAgLy8gcGFkZGluZzogMTgwcHggMDtcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gIC5oZXJvIHtcclxuICAgIC5oZXJvLWlubmVyIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbGlkZS1wcm9qZWN0IHtcclxuICAgIHBhZGRpbmc6IDkwcHggMCA4MHB4IDA7XHJcbiAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndlLW9mZnJlIHtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDAgMCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIC8vIC8qIG1hcmdpbi1ib3R0b206IDYwcHhcclxuICAgIC53ZS1vZmZlci1pbm5lciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAyNnB4IDAgMjRweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzlweDtcclxuICAgICAgLnNlcnZpY2VzLW9mZmVyIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm51bWJlcnMge1xyXG4gICAgcGFkZGluZzogNzBweCAwO1xyXG4gICAgLm51bWJlcnMtdGl0bGUge1xyXG4gICAgICBoNSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOTFweDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MyU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJldmlldyB7XHJcbiAgICBwYWRkaW5nOiA4MnB4IDAgMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAud2Utb2ZmcmUge1xyXG4gICAgLndlLW9mZmVyLWlubmVyMSB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIC5zZXJ2aWNlcy1vZmZlciB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud29yay13aXRoLXVzIHtcclxuICAgIC53b3JrLXdpdGgtaW5uZXIge1xyXG4gICAgICAjY291bnRlciB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudHRzIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAud2Utb2ZmcmUge1xyXG4gICAgLndlLW9mZmVyLWlubmVyMSB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIC5zZXJ2aWNlcy1vZmZlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5udW1iZXJzIHtcclxuICAgIC5udW1iZXJzLXRpdGxlIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpZGUtcHJvamVjdCBhLmJ0bi5idG4tYm9yZGVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubWItNSxcclxuICAubXktNSB7XHJcbiAgICBtYXJnaW46IDIwcHggMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGVybyB7XHJcbiAgICAuaGVyby1pbm5lciB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBiciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNsaWRlLXByb2plY3Qge1xyXG4gICAgLnNsaWRlLWNvbnRlbnQge1xyXG4gICAgICAubXktNSxcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLWJnLTEge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNsaWRlci1tYWluLWltYWdlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud2Utb2ZmcmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC5vZmYyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC53ZS1vZmZlci1pbm5lciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLndlLW9mZmVyLWlubmVyMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAuc2VydmljZXMtb2ZmZXIge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgIGJyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud29yay13aXRoLXVzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDcxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgLmNvbC1tZC00IC50dHMge1xyXG4gICAgICBtYXJnaW46IDIzcHggMCAxNXB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgYnIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sdHMge1xyXG4gICAgLmx0cy1jb250YWluZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAubnVtYmVycyB7XHJcbiAgICAubnVtYmVycy10aXRsZSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc2xpZGVyLW1haW4taW1hZ2Uge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53b3JrLXdpdGgtdXMge1xyXG4gICAgcGFkZGluZzogNjBweCAwcHggNTBweCAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodC1ibGFjazogIzExMTAxMDtcclxuJGRhcmstYmxhY2s6ICMyNjIzMzI7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXk6ICNmNWY1ZjU7XHJcbiRwcmltYXJ5LWdyYWRpZW50OiAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOUVGRiAwJSwgIzMwQ0NDNiAxMDAlKTtcclxuJHByaW1hcnk6ICAgIzMwQ0NDNiA7Il19 */"]
      });
      /***/
    },

    /***/
    "5jEh":
    /*!************************************************************!*\
      !*** ./src/app/pages/job-listing/job-listing.component.ts ***!
      \************************************************************/

    /*! exports provided: JobListingComponent */

    /***/
    function jEh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobListingComponent", function () {
        return JobListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function JobListingComponent_div_0_li_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r3 == null ? null : role_r3.desc, " ");
        }
      }

      function JobListingComponent_div_0_li_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4 == null ? null : item_r4.desc, " ");
        }
      }

      var _c0 = function _c0() {
        return ["/application"];
      };

      function JobListingComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Apply now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Roles & responsibilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, JobListingComponent_div_0_li_21_Template, 2, 1, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Key skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, JobListingComponent_div_0_li_25_Template, 2, 1, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Apply now \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.singleDetail == null ? null : ctx_r0.singleDetail.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.singleDetail == null ? null : ctx_r0.singleDetail.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.singleDetail == null ? null : ctx_r0.singleDetail.skill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      }

      var JobListingComponent = /*#__PURE__*/function () {
        function JobListingComponent(route, headerService) {
          _classCallCheck(this, JobListingComponent);

          this.route = route;
          this.headerService = headerService;
          this.jobDetail = [{
            name: " Software engineers - React Js",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 1
          }, {
            name: "Product Manager",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 2
          }, {
            name: "UX Designer",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 3
          }, {
            name: "Product UI Designer",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 4
          }, {
            name: "Software engineer - Front-end design",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 5
          }, {
            name: "Software engineer - React Js",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 6
          }, {
            name: "Software engineer - Node Js Designer",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 7
          }, {
            name: "Software engineer - React native",
            role: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            skill: [{
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }],
            id: 8
          }];
          this.headerService.isHomePage.next(false);
        }

        _createClass(JobListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            window.scrollTo(0, 0);
            this.route.params.subscribe(function (params) {
              _this.singleDetail = _this.jobDetail.find(function (value, index) {
                return value["id"] == params["id"];
              });
              console.log(_this.singleDetail);
            });
          }
        }]);

        return JobListingComponent;
      }();

      JobListingComponent.ɵfac = function JobListingComponent_Factory(t) {
        return new (t || JobListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]));
      };

      JobListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobListingComponent,
        selectors: [["app-job-listing"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "btn-white", 3, "routerLink"], ["src", "assets/images/blue-arrow.svg"], [1, "job-details"], [1, "row", "justify-content-center"], [1, "col-md-12", "col-lg-10"], [1, "job-details-inner"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-main", "nav__link", 3, "routerLink"], ["src", "../../../assets/images/arrow.svg"]],
        template: function JobListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobListingComponent_div_0_Template, 29, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleDetail);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/career-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 101%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 79px;\n  margin-bottom: 20px;\n  margin-right: 180px;\n}\n.btn-white[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  color: #262332;\n  margin-top: 15px;\n  display: inline-block;\n  text-decoration: none !important;\n  transition: 0.3s ease all;\n  margin-bottom: 70px;\n  padding: 18px 46px;\n  display: inline-block;\n}\n.btn-white[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.btn-white[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n}\n.job-details[_ngcontent-%COMP%] {\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 97% 17%, 2% 37%;\n}\n.job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%] {\n  margin-top: 90px;\n  margin-bottom: 80px;\n}\n.job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 45px;\n  line-height: 52px;\n  margin: 50px 0 30px;\n  letter-spacing: 1px;\n  color: #172127;\n}\n.job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 28px;\n  list-style-type: none;\n  margin-bottom: 90px;\n}\n.job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 19px;\n  line-height: 28px;\n  margin-bottom: 24px;\n  color: #262332;\n  mix-blend-mode: normal;\n  opacity: 0.5;\n  position: relative;\n  z-index: 1;\n}\n.job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: -26px;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n}\n@media screen and (max-width: 1600px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 423px;\n    font-size: 56px;\n  }\n\n  .job-details[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 104%, center center;\n    background-size: 17px, 15px, 30px, 30%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .btn-white[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 18px;\n  }\n\n  .job-details[_ngcontent-%COMP%] {\n    background-image: none;\n  }\n  .job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 18px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 1px;\n    width: 15px;\n  }\n\n  .btn-white[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 4px;\n    width: 15px;\n  }\n\n  .job-details[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin: 0px 0 15px;\n    line-height: 36px;\n  }\n  .job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .job-details[_ngcontent-%COMP%]   .job-details-inner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 14px;\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxqb2ItbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyUUFBQTtFQUtBLDRCQUFBO0VBQ0Esc0VBQUE7RUFDQSw2Q0FBQTtBQUhGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFLQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRkY7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFHRTtFQUNFLHFCQUFBO0FBREo7QUEyQkE7RUFDRSx3R0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUF6QkY7QUEyQkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBekJKO0FBMEJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBeEJOO0FBMEJJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBeEJOO0FBMEJJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXhCTjtBQXlCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0FBdkJSO0FBOEJBO0VBRUk7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUE1Qko7O0VBK0JBO0lBQ0UsZUFBQTtFQTVCRjs7RUE4QkE7SUFDRSxtQkFBQTtFQTNCRjtBQUNGO0FBOEJBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLHNFQUFBO0lBQ0EsNENBQUE7RUE1QkY7RUE4QkU7SUFDRSwwQkFBQTtJQUNBLDRCQUFBO0VBNUJKOztFQStCQTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQTVCRjs7RUE4QkE7SUFDRSxzQkFBQTtFQTNCRjtFQTZCSTtJQUNFLGVBQUE7RUEzQk47RUErQkk7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUE3Qk47QUFDRjtBQWtDQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDZEQUFBO0VBaENGO0VBaUNFO0lBQ0UsZUFBQTtFQS9CSjs7RUFrQ0E7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUEvQkY7O0VBa0NFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBL0JKOztFQW1DQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFoQ0Y7RUFrQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFoQ0o7RUFpQ0k7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQS9CTjtFQWlDSTtJQUNFLG1CQUFBO0VBL0JOO0VBaUNJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBL0JOO0FBQ0YiLCJmaWxlIjoiam9iLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3YtaGVybyB7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0zLnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tNC5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTEuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXJlZXItYmFubmVyLTEuc3ZnKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg4JSAyOSUsIDk1JSA1NyUsIDgxJSAxMDElLCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTdweCwgMTVweCwgMzBweCwgYXV0bywgMTAwJTtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNzlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG4uYnRuLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjYyMzMyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICBwYWRkaW5nOiAxOHB4IDQ2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgfVxyXG59XHJcbi8vIGEuYnRuLmJ0bi1tYWluIHtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDllZmYsICMzMGNjYzYsICMwMDllZmYpO1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBwYWRkaW5nOiAxN3B4IDQ2cHg7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcclxuLy8gICBsaW5lLWhlaWdodDogMjRweDtcclxuLy8gICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAmOmhvdmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuLy8gICAgIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4uam9iLWRldGFpbHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTUuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTYuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk3JSAxNyUsIDIlIDM3JTtcclxuXHJcbiAgLmpvYi1kZXRhaWxzLWlubmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgaDQge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICAgIG1hcmdpbjogNTBweCAwIDMwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGNvbG9yOiAjMTcyMTI3O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogLTI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOWVmZiAwJSwgIzMwY2NjNiAxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKipcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQyM3B4O1xyXG4gICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5qb2ItZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG4gIGEuYnRuLmJ0bi1tYWluIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDAgNTlweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg5JSAyOSUsIDk2JSA1NyUsIDgzJSAxMDQlLCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxN3B4LCAxNXB4LCAzMHB4LCAzMCUsIDEwMCU7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bi13aGl0ZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5qb2ItZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgLmpvYi1kZXRhaWxzLWlubmVyIHtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgYS5idG4uYnRuLW1haW4gaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICB9XHJcbiAgLmJ0bi13aGl0ZSB7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5qb2ItZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICAuam9iLWRldGFpbHMtaW5uZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBtYXJnaW46IDBweCAwIDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIH1cclxuICAgICAgdWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D39z":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/recent-projects/recent-projects.component.ts ***!
      \********************************************************************************/

    /*! exports provided: RecentProjectsComponent */

    /***/
    function D39z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentProjectsComponent", function () {
        return RecentProjectsComponent;
      });
      /* harmony import */


      var _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../assets/js/swiper-bundle.min.js */
      "d4cB");
      /* harmony import */


      var _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RecentProjectsComponent = /*#__PURE__*/function () {
        function RecentProjectsComponent() {
          _classCallCheck(this, RecentProjectsComponent);
        }

        _createClass(RecentProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var galleryThumbs = new _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_0___default.a(".gallery-thumbs", {
              spaceBetween: 10,
              slidesPerView: 4,
              loop: true,
              // freeMode: true,
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              autoplay: {
                delay: 3500,
                disableOnInteraction: false
              }
            });
            var galleryTop = new _assets_js_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_0___default.a(".gallery-top", {
              spaceBetween: 10,
              loop: true,
              //speed: 1500,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              },
              autoplay: {
                delay: 3500,
                disableOnInteraction: false
              },
              thumbs: {
                swiper: galleryThumbs
              }
            });
          }
        }]);

        return RecentProjectsComponent;
      }();

      RecentProjectsComponent.ɵfac = function RecentProjectsComponent_Factory(t) {
        return new (t || RecentProjectsComponent)();
      };

      RecentProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RecentProjectsComponent,
        selectors: [["app-recent-projects"]],
        decls: 82,
        vars: 0,
        consts: [[1, "slide-project"], [1, "img-bg-1"], ["src", "../../assets/images/about-icon-6.svg", "alt", "", 1, "img-fluid"], ["src", "../../assets/images/about-icon-5.svg", "alt", "", 1, "img-fluid"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "slide-inner"], [1, "text-center"], [1, "swiper-container", "gallery-thumbs"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "../../assets/images/project1.png", "alt", "", 1, "img-fluid", "W-100"], ["src", "../../assets/images/project2.png", "alt", "", 1, "img-fluid", "W-100"], ["src", "../../assets/images/project3.png", "alt", "", 1, "img-fluid", "W-100"], ["src", "../../assets/images/project4.png", "alt", "", 1, "img-fluid", "W-100"], [1, "swiper-container", "gallery-top", "mt-5"], [1, "swiper-slide-inner"], [1, "col-md-6", "slider-main-image"], ["src", "../../assets/images/main-project1.png", "alt", "", 1, "img-fluid", "W-100"], [1, "col-md-6"], [1, "slide-content"], [1, ""], [1, "my-5"], ["href", "javascript:void(0)", 1, "btn", "btn-main", "nav__link"], ["src", "../../assets/images/arrow.svg", 1, "slider-icon"]],
        template: function RecentProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "RECENT PROJECTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Read More \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Read More \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Read More \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Lorem ipsum dolor sit amet, consectetur");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui voluptatibus sapiente distinctio inventore ratione recusandae officia quasi vero esse nisi aut, dolores repudiandae est voluptatum, amet soluta laborum fuga voluptas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Read More \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".slide-project[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 150px 0 100px 0;\n  position: relative;\n  z-index: 1;\n}\n.slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  padding-right: 123px;\n}\n.slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #172127;\n  font-size: 45px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  line-height: 60px;\n}\n.slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n}\n.slide-project[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 39px;\n  background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 700;\n}\n.slide-project[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%] {\n  background-size: 300% 100%;\n  background-image: linear-gradient(to right, #009eff, #30ccc6, #009eff);\n  border-radius: 5px;\n  padding: 15px 35px;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 24px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.slide-project[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  position: absolute;\n  top: 100px;\n  left: 90px;\n}\n.slide-project[_ngcontent-%COMP%]   .slider-icon[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 10px;\n}\n.slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n  position: absolute;\n  right: 150px;\n  top: 24%;\n}\n.slide-project[_ngcontent-%COMP%]   .gallery-top[_ngcontent-%COMP%] {\n  margin: 92px 0 33px 0 !important;\n}\n.gallery-thumbs[_ngcontent-%COMP%]   .swiper-slide-thumb-active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-color: #009eff;\n}\n@media screen and (max-width: 1700px) {\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 37px;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 30px 0 30px 0;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .slide-project[_ngcontent-%COMP%] {\n    padding: 100px 0 0px 0;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 21px !important;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity: 0.5;\n    color: #262332;\n    font-size: 20px;\n    letter-spacing: 0;\n    line-height: 30px;\n  }\n  .slide-project[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 13px 32px;\n  }\n  .slide-project[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    width: 15px;\n  }\n  .slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    top: 43px;\n  }\n  .slide-project[_ngcontent-%COMP%]   .gallery-top[_ngcontent-%COMP%] {\n    margin: 45px 0 0px 0 !important;\n  }\n}\n@media screen and (max-width: 767px) {\n  .slider-main-image[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  .gallery-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .slide-project[_ngcontent-%COMP%] {\n    padding: 72px 0 0px 0;\n  }\n  .slide-project[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 21px !important;\n    margin-top: 40px;\n  }\n  .slide-project[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .my-5[_ngcontent-%COMP%] {\n    margin: 20px 0 !important;\n  }\n  .slide-project[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 13px 32px;\n    margin-bottom: 75px;\n  }\n  .slide-project[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    width: 15px;\n  }\n  .slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child, .slide-project[_ngcontent-%COMP%]   span.img-bg-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .slide-project[_ngcontent-%COMP%]   .gallery-top[_ngcontent-%COMP%] {\n    margin: 45px 0 0px 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVjZW50LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7QUFDRTtFQUNFLG9CQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRU47QUFBSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUNFO0VBQ0UsbUJBQUE7RUFFQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUU7RUFDRSwwQkFBQTtFQUNBLHNFQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFHQSxnQ0FBQTtBQUFKO0FBQ0k7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0VBR0EsZ0NBQUE7QUFDTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUFKO0FBRUU7RUFDRSxnQ0FBQTtBQUFKO0FBS0U7RUFDRSxxQkFBQTtBQUZKO0FBT0E7RUFHTTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU5OO0VBUUk7SUFDRSxxQkFBQTtFQU5OO0FBQ0Y7QUFXQTtFQUNFO0lBQ0Usc0JBQUE7RUFURjtFQVVFO0lBQ0UsZ0JBQUE7RUFSSjtFQVNJO0lBQ0UsMEJBQUE7RUFQTjtFQVNJO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQVBOO0VBa0JFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBaEJKO0VBaUJJO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBZk47RUFrQkU7SUFDRSxTQUFBO0VBaEJKO0VBMkJFO0lBQ0UsK0JBQUE7RUF6Qko7QUFDRjtBQTZCQTtFQUNFO0lBQ0UsZUFBQTtFQTNCRjs7RUE2QkE7SUFDRSxXQUFBO0VBMUJGOztFQTRCQTtJQUNFLHFCQUFBO0VBekJGO0VBMEJFO0lBQ0UsZUFBQTtFQXhCSjtFQTBCRTtJQUNFLGdCQUFBO0VBeEJKO0VBeUJJO0lBQ0UsMEJBQUE7SUFDQSxnQkFBQTtFQXZCTjtFQXlCSTtJQUNFLHlCQUFBO0VBdkJOO0VBa0NFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFoQ0o7RUFpQ0k7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUEvQk47RUFrQ0U7O0lBRUUsYUFBQTtFQWhDSjtFQW1DRTtJQUNFLCtCQUFBO0VBakNKO0FBQ0YiLCJmaWxlIjoicmVjZW50LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXByb2plY3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gIHBhZGRpbmc6IDE1MHB4IDAgMTAwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICAuc2xpZGUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjNweDtcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMxNzIxMjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM5cHg7XHJcbiAgICAvL2NvbG9yOlxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOWVmZiAwJSwgIzMwY2NjNiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgYS5idG4uYnRuLW1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDllZmYsICMzMGNjYzYsICMwMDllZmYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XHJcbiAgICAgIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuICBzcGFuLmltZy1iZy0xIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogOTBweDtcclxuICB9XHJcbiAgLnNsaWRlci1pY29uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIHNwYW4uaW1nLWJnLTEgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1MHB4O1xyXG4gICAgdG9wOiAyNCU7XHJcbiAgfVxyXG4gIC5nYWxsZXJ5LXRvcCB7XHJcbiAgICBtYXJnaW46IDkycHggMCAzM3B4IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXRodW1icyAuc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZSB7XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOWVmZjtcclxuICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xyXG4gIC5zbGlkZS1wcm9qZWN0IHtcclxuICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5zbGlkZS1wcm9qZWN0IHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMHB4IDA7XHJcbiAgICAuc2xpZGUtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDM5cHg7XHJcblxyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gICAgICAvLyAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgLy8gLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAvLyBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgYS5idG4uYnRuLW1haW4ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEzcHggMzJweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFuLmltZy1iZy0xIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHRvcDogNDNweDtcclxuICAgIH1cclxuICAgIC8vIC5zbGlkZXItaWNvbiB7XHJcbiAgICAvLyAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8gICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC8vIH1cclxuICAgIC8vIHNwYW4uaW1nLWJnLTEgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgIHJpZ2h0OiAxNTBweDtcclxuICAgIC8vICAgdG9wOiAyNCU7XHJcbiAgICAvLyB9XHJcbiAgICAuZ2FsbGVyeS10b3Age1xyXG4gICAgICBtYXJnaW46IDQ1cHggMCAwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2xpZGVyLW1haW4taW1hZ2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICAuZ2FsbGVyeS10b3AgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2xpZGUtcHJvamVjdCB7XHJcbiAgICBwYWRkaW5nOiA3MnB4IDAgMHB4IDA7XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLm15LTUge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMzlweDtcclxuXHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgICAgIC8vIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAvLyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi5idG4tbWFpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZzogMTNweCAzMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4uaW1nLWJnLTEgaW1nOmZpcnN0LWNoaWxkLFxyXG4gICAgc3Bhbi5pbWctYmctMSBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbGxlcnktdG9wIHtcclxuICAgICAgbWFyZ2luOiA0NXB4IDAgMHB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Fc3L":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/header.service.ts ***!
      \***************************************************/

    /*! exports provided: HeaderService */

    /***/
    function Fc3L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderService", function () {
        return HeaderService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderService = function HeaderService() {
        _classCallCheck(this, HeaderService);

        this.isHomePage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
      };

      HeaderService.ɵfac = function HeaderService_Factory(t) {
        return new (t || HeaderService)();
      };

      HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HeaderService,
        factory: HeaderService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "NfKR":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/services/mobile-app/mobile-app.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MobileAppComponent */

    /***/
    function NfKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobileAppComponent", function () {
        return MobileAppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/recent-projects/recent-projects.component */
      "D39z");

      var _c0 = function _c0() {
        return ["/contact"];
      };

      var MobileAppComponent = /*#__PURE__*/function () {
        function MobileAppComponent(headerService) {
          _classCallCheck(this, MobileAppComponent);

          this.headerService = headerService;
          this.data = {
            title: "Like what you see?",
            desc: "Why not drop us a message and we will get back to you with your personalized quotation?",
            link: "/contact",
            linkText: "Get a quote"
          };
          this.headerService.isHomePage.next(false);
        }

        _createClass(MobileAppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MobileAppComponent;
      }();

      MobileAppComponent.ɵfac = function MobileAppComponent_Factory(t) {
        return new (t || MobileAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      MobileAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MobileAppComponent,
        selectors: [["app-mobile-app"]],
        decls: 119,
        vars: 2,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "website-feature"], [1, "row", "justify-content-end"], [1, "col-md-6"], [1, "tssp"], [1, "tts"], [1, "icons"], ["src", "../../../assets/images/icon1.svg", "alt", "", 1, "img-fluid"], [1, "content"], [1, "btn", "btn-main", 3, "routerLink"], ["src", "../../../../assets/images/arrow.svg"], [1, "benefits"], [1, "benefits-title"], [1, "benefits-list"], ["src", "../assets/images/mobile-benefit-1.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/mobile-benefit-2.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/mobile-benefit-3.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/mobile-benefit-4.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/mobile-benefit-5.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/mobile-benefit-6.svg", "alt", "", 1, "img-fluid"], [1, "lts"], [1, "lts-container"], [1, "lts-inner"], ["routerLink", "/contact", 1, "btn-white-border"]],
        template: function MobileAppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Awesome Apps for your awesome business!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Business application is the most important aspect of any business. Get exposed to masses with your own business application. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Android & iPhone support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Online & offline applications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cloud based user data storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Social login & share integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Get a quote \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Features that just work...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Android / iPhone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cloud Based");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Online / Offline Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Social Integrated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "High Quality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Multi Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "app-recent-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Like what you see?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Why not drop us a message and we will get back to you with your personalized quotation? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Get a quote ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__["RecentProjectsComponent"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  padding: 130px 0 79px 0px;\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/mobile-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 128%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 78px;\n  margin-right: 688px;\n  margin-bottom: 130px;\n}\n.website-feature[_ngcontent-%COMP%] {\n  padding: 200px 0 100px 0;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 96% 30%, 5% 80%;\n}\n.website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 33px;\n  max-width: 400px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  color: #262332;\n  margin-bottom: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 40px 0;\n  display: flex;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.benefits[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg), url(/../../assets/images/about-icon-8.svg);\n  background-repeat: no-repeat;\n  background-position: 3% 53%, 95% 13%, 100% 94%;\n  padding: 188px 0 165px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #172127;\n  font-size: 45px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  line-height: 60px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin: 30px 21% 90px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 2px;\n  width: 31%;\n  float: left;\n  box-sizing: border-box;\n  padding: 60px;\n  margin: 0px 48px 48px 0;\n  max-height: 315px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  margin: 15px 0 20px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  margin: 0px 0px 48px 0px;\n}\n.lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-align: center;\n  padding: 0 28%;\n}\n.lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  text-align: center;\n  margin: 0px 0 68px;\n  padding: 0% 32%;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 423px;\n    font-size: 56px;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n@media screen and (max-width: 1450px) {\n  .website-feature[_ngcontent-%COMP%] {\n    padding: 90px 0 100px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    padding: 80px 0 90px 0px;\n    background-position: 3% 53%, 95% 13%, 100% 96%;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 30%;\n    flex-wrap: wrap;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 30%;\n    display: flex;\n    max-height: none;\n    flex-direction: column;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: auto;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 44px;\n  }\n  .lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 16px 27px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 104%, center center;\n    background-size: 17px, 15px, 30px, 30%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .btn-white[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 18px;\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    padding: 90px 0 126px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 30px 10% 42px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 45%;\n    text-align: center;\n    padding: 20px;\n    margin: 0px 30px 30px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 32px;\n    margin: 15px 0 20px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n    margin: 0px 30px 30px 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-position: 96% 8%, 5% 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-image: none;\n    padding: 50px 0 54px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 36px 0 45px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 67%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    margin-top: 0;\n  }\n\n  .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    margin-bottom: 50px !important;\n  }\n  .lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 I !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .benefits[_ngcontent-%COMP%] {\n    padding: 63px 0 51px 0;\n    background-image: none;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n    margin-left: 0;\n  }\n\n  .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-right: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9iaWxlLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJRQUFBO0VBS0EsNEJBQUE7RUFDQSxzRUFBQTtFQUNBLDZDQUFBO0FBSEY7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQWdDQTtFQUNFLHdCQUFBO0VBQ0Esd0dBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0FBOUJGO0FBK0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBN0JKO0FBK0JFO0VBQ0UsZ0JBQUE7QUE3Qko7QUE4Qkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBNUJOO0FBOEJJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBNUJOO0FBNkJNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBM0JSO0FBNEJRO0VBQ0Usa0JBQUE7QUExQlY7QUFxQ0E7RUFDRSxtQkFBQTtFQUNBLG9KQUFBO0VBR0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0FBckNGO0FBdUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFyQ047QUF1Q0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFyQ047QUEwQ007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0FBekNSO0FBMENRO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBeENWO0FBMENRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBeENWO0FBMkNNOztFQUVFLHdCQUFBO0FBekNSO0FBaURFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE5Q0o7QUFnREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTlDSjtBQW1EQTtFQUVJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBakRKOztFQXFEQTtJQUNFLG1CQUFBO0VBbERGO0FBQ0Y7QUFxREE7RUFDRTtJQUNFLHVCQUFBO0VBbkRGO0VBb0RFO0lBQ0UsY0FBQTtFQWxESjtFQW9ERTtJQUNFLGdCQUFBO0VBbERKOztFQXNEQTtJQUNFLHdCQUFBO0lBQ0EsOENBQUE7RUFuREY7RUFxREk7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUFuRE47RUFvRE07SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUFsRFI7RUFtRFE7SUFDRSxlQUFBO0VBakRWOztFQTBERTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQXZESjtFQXlERTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXZESjtBQUNGO0FBMkRBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLHNFQUFBO0lBQ0EsNENBQUE7RUF6REY7RUEyREU7SUFDRSwwQkFBQTtJQUNBLDRCQUFBO0VBekRKOztFQTZEQTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQTFERjs7RUE0REE7SUFDRSx1QkFBQTtFQXpERjtFQTZESTtJQUNFLHVCQUFBO0VBM0ROO0VBZ0VNO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0VBOURSO0VBK0RRO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUE3RFY7RUErRFE7SUFDRSxlQUFBO0VBN0RWO0VBZ0VNOztJQUVFLHVCQUFBO0VBOURSOztFQW9FQTtJQUNFLG1DQUFBO0VBakVGO0VBa0VFO0lBQ0UsZ0JBQUE7RUFoRUo7RUFpRUk7SUFDRSwwQkFBQTtFQS9ETjtFQWtFTTtJQUNFLGtCQUFBO0VBaEVSO0FBQ0Y7QUFzRUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSw2REFBQTtFQXBFRjtFQXFFRTtJQUNFLGVBQUE7RUFuRUo7O0VBc0VBO0lBQ0Usc0JBQUE7SUFDQSxzQkFBQTtFQW5FRjtFQW9FRTtJQUNFLGdCQUFBO0VBbEVKO0VBbUVJO0lBQ0UsMEJBQUE7RUFqRU47RUFvRUk7SUFDRSxtQkFBQTtFQWxFTjtFQW1FTTtJQUNFLGtCQUFBO0VBakVSO0VBbUVVO0lBQ0UsVUFBQTtFQWpFWjtFQW9FUTtJQUNFLDBCQUFBO0lBQ0EsYUFBQTtFQWxFVjs7RUEyRUk7SUFDRSxVQUFBO0VBeEVOOztFQTZFRTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUExRUo7RUE0RUU7SUFDRSx1QkFBQTtFQTFFSjtBQUNGO0FBOEVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHNCQUFBO0VBNUVGOztFQThFQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBM0VGOztFQStFSTtJQUNFLHNCQUFBO0lBQ0EsMEJBQUE7RUE1RU47QUFDRiIsImZpbGUiOiJtb2JpbGUtYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2LWhlcm8ge1xyXG4gIHBhZGRpbmc6IDEzMHB4IDAgNzlweCAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0zLnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tNC5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTEuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9tb2JpbGUtYmFubmVyLTEuc3ZnKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg4JSAyOSUsIDk1JSA1NyUsIDgxJSAxMjglLCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTdweCwgMTVweCwgMzBweCwgYXV0bywgMTAwJTtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNzhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjg4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqYnV0dG9uKioqKioqKioqKioqKioqKlxyXG4vLyBhLmJ0bi5idG4tbWFpbiB7XHJcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA5ZWZmLCAjMzBjY2M2LCAjMDA5ZWZmKTtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgcGFkZGluZzogMTZweCA0NnB4O1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbi8vICAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgJjpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XHJcbi8vICAgICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKip3b3JrIHdpdGggdXMqKioqKioqKioqKioqKioqKioqKipcclxuLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgcGFkZGluZzogMjAwcHggMCAxMDBweCAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTUuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTYuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk2JSAzMCUsIDUlIDgwJTtcclxuICBwIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIC50dHMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNDBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmljb25zIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqQmVuZWZpdHMqKioqKioqKioqKioqKioqKioqXHJcbi5iZW5lZml0cyB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi01LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi02LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi04LnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSA1MyUsIDk1JSAxMyUsIDEwMCUgOTQlO1xyXG4gIHBhZGRpbmc6IDE4OHB4IDAgMTY1cHggMDtcclxuICAuYmVuZWZpdHMtdGl0bGUge1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogIzE3MjEyNztcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luOiAzMHB4IDIxJSA5MHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iZW5lZml0cy1saXN0IHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDQ4cHggNDhweCAwO1xyXG5cclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMTVweDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpOm50aC1jaGlsZCgzKSxcclxuICAgICAgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggNDhweCAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sdHMge1xyXG4gIC8vIHBhZGRpbmc6IDE4MHB4IDA7XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjglO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IDAgNjhweDtcclxuICAgIHBhZGRpbmc6IDAlIDMyJTtcclxuICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJpZXMqKioqKioqKioqKioqKioqXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0MjNweDtcclxuICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYS5idG4uYnRuLW1haW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gIC53ZWJzaXRlLWZlYXR1cmUge1xyXG4gICAgcGFkZGluZzogOTBweCAwIDEwMHB4IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAudHRzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iZW5lZml0cyB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDAgOTBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSA1MyUsIDk1JSAxMyUsIDEwMCUgOTYlO1xyXG4gICAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgLmljb25zIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sdHMge1xyXG4gICAgLy8gcGFkZGluZzogMTgwcHggMDtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA1OXB4IDBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIlIDgwJSwgODklIDI5JSwgOTYlIDU3JSwgODMlIDEwNCUsIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3cHgsIDE1cHgsIDMwcHgsIDMwJSwgMTAwJTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi13aGl0ZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5iZW5lZml0cyB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDAgMTI2cHggMDtcclxuICAgIC5iZW5lZml0cy10aXRsZSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMTAlIDQycHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAzMHB4IDMwcHggMDtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOm50aC1jaGlsZCgzKSxcclxuICAgICAgICBsaTpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMzBweCAzMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud2Vic2l0ZS1mZWF0dXJlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk2JSA4JSwgNSUgODAlO1xyXG4gICAgLnR0cyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBwYWRkaW5nOiAzOXB4IDAgMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53ZWJzaXRlLWZlYXR1cmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDUwcHggMCA1NHB4IDA7XHJcbiAgICAudHRzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAzNnB4IDAgNDVweDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDA7XHJcbiAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2NyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmVuZWZpdHMtbGlzdCB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogNDQlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sdHMge1xyXG4gICAgaDIge1xyXG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nOiAwIEkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmJlbmVmaXRzIHtcclxuICAgIHBhZGRpbmc6IDYzcHggMCA1MXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBhLmJ0bi5idG4tbWFpbiBpbWcge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "aF9I");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "Ventonix";
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "XEn3":
    /*!****************************************************!*\
      !*** ./src/app/pages/contact/contact.component.ts ***!
      \****************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function XEn3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");

      function ContactComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Enter Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_21_div_1_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formName().fullName.errors.required);
        }
      }

      function ContactComponent_div_25_div_1_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_25_div_1_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_25_div_1_mat_error_1_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactComponent_div_25_div_1_mat_error_2_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formName().email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formName().email.errors.email);
        }
      }

      function ContactComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_25_div_1_Template, 3, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formName().email.errors.required);
        }
      }

      function ContactComponent_div_28_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Phone No is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_28_div_1_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formName().phone.errors.required);
        }
      }

      function ContactComponent_div_31_div_1_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Message is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_31_div_1_mat_error_1_Template, 2, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.formName().message.errors.required);
        }
      }

      function ContactComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_31_div_1_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formName().message.errors.required);
        }
      }

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(fb, headerService) {
          _classCallCheck(this, ContactComponent);

          this.fb = fb;
          this.headerService = headerService;
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.headerService.isHomePage.next(false);
            this.checkContactformValidation();
          }
        }, {
          key: "checkContactformValidation",
          value: function checkContactformValidation() {
            this.contactUs = this.fb.group({
              fullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
              message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              conditon: [true]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(data) {
            console.log(data.value);

            if (!data.invalid) {
              this.checkContactformValidation;
            } else {
              console.log(data.value);
            }
          }
        }, {
          key: "formName",
          value: function formName() {
            return this.contactUs.controls;
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]));
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 52,
        vars: 5,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "website-feature"], [1, "row", "justify-content-end"], [1, "col-md-6"], [1, "tssp"], [1, "form"], [1, "login-form", 3, "formGroup"], [1, "form-group"], ["type", "text", "placeholder", "Your full name", "formControlName", "fullName", "autocomplete", "current-Expected", 1, "form-control"], [4, "ngIf"], ["type", "text", "placeholder", "Email", "autocomplete", "Email", "formControlName", "email", 1, "form-control"], ["type", "number", "placeholder", "phone", "formControlName", "phone", "autocomplete", "current-Phone", 1, "form-control"], ["type", "text", "placeholder", "Message", "formControlName", "message", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "conditon", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexCheckChecked", 1, "terms-condition"], ["href", "javascript:void(0)"], [1, "form-group", "text-left"], [1, "btn", "btn-main", 3, "click"], ["src", "../../../assets/images/arrow.svg"], [1, "find-out"], [1, "text-center"], [1, "mt-3", "fuom"], [1, "f-map"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.077973470469!2d70.77659821495428!3d22.275035985336654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca47aee2ec3f%3A0x1c2cf8a509c24aae!2sRk%20prime!5e0!3m2!1sen!2sin!4v1600503075546!5m2!1sen!2sin", "height", "450", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 1, "w-100", 2, "border", "0"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Whatever you need, we\u2019ve got your back. Let\u2019s connect ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ContactComponent_div_21_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ContactComponent_div_28_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ContactComponent_div_31_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " by clicking this, you are agree to our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u2018terms & conditions\u2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_40_listener() {
              return ctx.onSubmit(ctx.contactUs);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Find us on map");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "iframe", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactUs);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName().fullName.invalid && ctx.formName().fullName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName().email.invalid && ctx.formName().email.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName().phone.invalid && ctx.formName().phone.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName().message.invalid && ctx.formName().message.touched);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  padding: 130px 0 79px 0px;\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/contact-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 128%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 78px;\n  margin-right: 688px;\n  margin-bottom: 130px;\n}\n.mat-error[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: red;\n  margin: 7px 0 0 0;\n  display: inline-block;\n}\n.website-feature[_ngcontent-%COMP%] {\n  padding: 200px 0 170px 0;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 90% 40%, 5% 80%;\n}\n.website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 20px;\n  font-weight: 400;\n  max-width: 400px;\n  font-family: Montserrat;\n  letter-spacing: 0;\n  line-height: 30px;\n  opacity: 0.5;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  color: #262332;\n  margin-bottom: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 50px 0;\n  display: flex;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 26px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.login-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 15px !important;\n  min-height: 50px;\n  width: 66%;\n  border: 2px solid #262332;\n  border-radius: 5px;\n}\n.login-form[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .terms-condition[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0.18461539px;\n}\n.login-form[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .terms-condition[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #262332;\n}\n.terms-condition[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 15px;\n  letter-spacing: 0.18461539px;\n}\n.find-out[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 172px 0;\n}\n.fuom[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 60px;\n  text-align: center;\n  letter-spacing: 1px;\n  margin-bottom: 68px;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-right: 388px;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 388px;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    padding: 100px 0 80px 0;\n  }\n\n  .find-out[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n\n  .fuom[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 151%, center center;\n    background-size: 17px, 15px, 30px, 20%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  .website-feature[_ngcontent-%COMP%] {\n    background-image: none;\n  }\n  .website-feature[_ngcontent-%COMP%]   a.btn.btn-main[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .login-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    padding: 80px 0 60px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNFFBQUE7RUFLQSw0QkFBQTtFQUNBLHNFQUFBO0VBQ0EsNkNBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUhKO0FBd0JBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBckJGO0FBeUJBO0VBQ0Usd0JBQUE7RUFDQSx3R0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUF2QkY7QUF3QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBdEJKO0FBeUJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQXlCSTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQXZCTjtBQXdCTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQXRCUjtBQXVCUTtFQUNFLGtCQUFBO0FBckJWO0FBeUJJO0VBQ0UsaUJBQUE7QUF2Qk47QUErQkU7RUFDRSxtQkFBQTtBQTVCSjtBQThCRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTdCSjtBQStCRTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQTdCSjtBQStCSTs7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUE1Qk47QUFnQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQTdCRjtBQWdDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUE3QkY7QUErQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUE1QkY7QUFnQ0E7RUFFSTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQTlCSjtBQUNGO0FBaUNBO0VBRUk7SUFDRSxtQkFBQTtFQWhDSjs7RUFtQ0E7SUFDRSx1QkFBQTtFQWhDRjs7RUFrQ0E7SUFDRSxlQUFBO0VBL0JGOztFQWlDQTtJQUNFLGVBQUE7RUE5QkY7QUFDRjtBQWlDQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxzRUFBQTtJQUNBLDRDQUFBO0VBL0JGO0VBaUNFO0lBQ0UsMEJBQUE7SUFDQSw0QkFBQTtFQS9CSjtBQUNGO0FBa0NBO0VBQ0U7SUFDRSxzQkFBQTtFQWhDRjtFQWlDRTtJQUNFLGdCQUFBO0VBL0JKOztFQW9DRTtJQUNFLFdBQUE7RUFqQ0o7QUFDRjtBQXFDQTtFQUNFO0lBQ0UsdUJBQUE7SUFFQSxzQkFBQTtJQUNBLDZEQUFBO0VBcENGO0VBcUNFO0lBQ0UsZUFBQTtFQW5DSjs7RUFzQ0E7SUFDRSxzQkFBQTtFQW5DRjtFQW9DRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQWxDSjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3YtaGVybyB7XHJcbiAgcGFkZGluZzogMTMwcHggMCA3OXB4IDBweDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTMuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi00LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tMS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QtYmFubmVyLTEuc3ZnKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg4JSAyOSUsIDk1JSA1NyUsIDgxJSAxMjglLCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTdweCwgMTVweCwgMzBweCwgYXV0bywgMTAwJTtcclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDY4OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKmJ1dHRvbioqKioqKioqKioqKioqKipcclxuXHJcbi8vIC5idG4uYnRuLW1haW4ge1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4vLyAgIHBhZGRpbmc6IDE2cHggNDZweDtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UgYWxsO1xyXG4vLyAgIG1hcmdpbjogMHB4IDAgMCAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcclxuLy8gICBsaW5lLWhlaWdodDogMjRweDtcclxuLy8gICAmOmhvdmVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHNjYWxlKDAuOSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi5tYXQtZXJyb3Ige1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogN3B4IDAgMCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKndvcmsgd2l0aCB1cyoqKioqKioqKioqKioqKioqKioqKlxyXG4ud2Vic2l0ZS1mZWF0dXJlIHtcclxuICBwYWRkaW5nOiAyMDBweCAwIDE3MHB4IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNi5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIDQwJSwgNSUgODAlO1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLnR0cyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDUwcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKmNvbnRhY3QgZm9ybSoqKioqKioqKioqKioqKioqKipcclxuLmxvZ2luLWZvcm0ge1xyXG4gIC8vIHBhZGRpbmc6IDEzNXB4IDA7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgd2lkdGg6IDY2JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjIzMzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5mb3JtLWNoZWNrLWxhYmVsLFxyXG4gIC50ZXJtcy1jb25kaXRpb24ge1xyXG4gICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xODQ2MTUzOXB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50ZXJtcy1jb25kaXRpb24ge1xyXG4gIGNvbG9yOiAjMjYyMzMyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE4NDYxNTM5cHg7XHJcbn1cclxuXHJcbi5maW5kLW91dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAxNzJweCAwO1xyXG59XHJcbi5mdW9tIHtcclxuICBjb2xvcjogIzI2MjMzMjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzODhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDM4OHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAud2Vic2l0ZS1mZWF0dXJlIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgODBweCAwO1xyXG4gIH1cclxuICAuZmluZC1vdXQge1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gIH1cclxuICAuZnVvbSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDAgNTlweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg5JSAyOSUsIDk2JSA1NyUsIDgzJSAxNTElLCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxN3B4LCAxNXB4LCAzMHB4LCAyMCUsIDEwMCU7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAud2Vic2l0ZS1mZWF0dXJlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBhLmJ0bi5idG4tbWFpbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9naW4tZm9ybSB7XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53ZWJzaXRlLWZlYXR1cmUge1xyXG4gICAgcGFkZGluZzogODBweCAwIDYwcHggMDtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/about/about.component */
      "rVrE");
      /* harmony import */


      var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/contact/contact.component */
      "XEn3");
      /* harmony import */


      var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing/app-routing.module */
      "u+pc");
      /* harmony import */


      var _pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/careers/careers.component */
      "pT9T");
      /* harmony import */


      var _pages_job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/job-listing/job-listing.component */
      "5jEh");
      /* harmony import */


      var _pages_application_application_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/application/application.component */
      "ff0e");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./material-module */
      "j5wd");
      /* harmony import */


      var _pages_services_website_website_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/services/website/website.component */
      "cEvD");
      /* harmony import */


      var _pages_services_mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/services/mobile-app/mobile-app.component */
      "NfKR");
      /* harmony import */


      var _pages_services_seo_seo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/services/seo/seo.component */
      "ywks");
      /* harmony import */


      var _pages_services_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/services/graphic/graphic.component */
      "kt6P");
      /* harmony import */


      var _shared_components_online_appointment_online_appointment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/components/online-appointment/online-appointment.component */
      "x0tw");
      /* harmony import */


      var _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/components/recent-projects/recent-projects.component */
      "D39z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_8__["CareersComponent"], _pages_job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_9__["JobListingComponent"], _pages_application_application_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationComponent"], _pages_services_website_website_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteComponent"], _pages_services_mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_15__["MobileAppComponent"], _pages_services_seo_seo_component__WEBPACK_IMPORTED_MODULE_16__["SeoComponent"], _pages_services_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_17__["GraphicComponent"], _shared_components_online_appointment_online_appointment_component__WEBPACK_IMPORTED_MODULE_18__["OnlineAppointmentComponent"], _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_19__["RecentProjectsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "aF9I":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 18,
        vars: 0,
        consts: [[1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "footer-inner"], [1, "logo"], ["src", "assets/images/logo.svg", "width", "60", "alt", "", 1, "img-fluid"], ["routerLink", "#"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA9 2021 Ventonix.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  background: #f5f5f5;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 18px;\n  text-align: center;\n  margin-left: 35px;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  justify-content: flex-end;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0px 25px;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 18px;\n  text-align: right;\n  font-weight: 600;\n}\n@media screen and (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 23px;\n  }\n  footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 12px;\n  }\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n  }\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNOO0FBRUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFBTTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBS0E7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFISjtFQUlJO0lBQ0UsV0FBQTtFQUZOO0VBSUk7SUFDRSxpQkFBQTtFQUZOO0VBS0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBSEo7RUFJSTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAubG9nbyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgIH1cclxuICB9XHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMjVweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "aZ8m":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function aZ8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var _c1 = function _c1() {
        return ["/website"];
      };

      var _c2 = function _c2() {
        return ["/mobile"];
      };

      var _c3 = function _c3() {
        return ["/seo"];
      };

      var _c4 = function _c4() {
        return ["/graphic"];
      };

      var _c5 = function _c5() {
        return ["/about"];
      };

      var _c6 = function _c6() {
        return ["/contact"];
      };

      function HeaderComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mobile App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isHomePage ? "blackmenu" : "whitemenu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
        }
      }

      function HeaderComponent_img_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_img_11_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.showMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.isHomePage ? "../../assets/images/menu.svg" : "../../assets/images/white-menu.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HeaderComponent_img_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_img_12_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.hideMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.isHomePage ? "../../assets/images/close-menu.svg" : "../../assets/images/close-whitemenu.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", ctx_r2.isHomePage ? "open-menu" : "open-menu-white");
        }
      }

      function HeaderComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isHomePage ? "blackmenu" : "whitemenu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(headerService) {
          _classCallCheck(this, HeaderComponent);

          this.headerService = headerService;
          this.title = "ventoxin";
          this.showmenu = false;
          this.isHomePage = true;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log("header");
            this.headerService.isHomePage.subscribe(function (res) {
              _this2.isHomePage = res;
              _this2.showmenu = false; // console.log("value", this.isHomePage);
            });
          }
        }, {
          key: "showMenu",
          value: function showMenu() {
            this.showmenu = true;
          }
        }, {
          key: "hideMenu",
          value: function hideMenu() {
            this.showmenu = false;
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 14,
        vars: 7,
        consts: [[1, "header", 3, "ngClass"], [1, "container"], [1, "row", "align-items-center"], [1, "col-sm-12", "col-md-6"], [1, "logo"], ["routerLink", ""], ["width", "60", "alt", "", 3, "src", "ngClass"], [1, "d-flex", "justify-content-end", "align-items-center", "side-menu"], ["class", "main-menu desktop-menu", 4, "ngIf"], [1, "menu"], ["width", "40", "class", "img-fluid c-p close-menu", "alt", "", 3, "src", "click", 4, "ngIf"], ["width", "40", "class", "img-fluid c-p", "alt", "", 3, "src", "ngClass", "click", 4, "ngIf"], ["class", "main-menu mobile-menu", 4, "ngIf"], [1, "main-menu", "desktop-menu"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"], [1, "dropdown-menu"], [3, "routerLink"], ["width", "40", "alt", "", 1, "img-fluid", "c-p", "close-menu", 3, "src", "click"], ["width", "40", "alt", "", 1, "img-fluid", "c-p", 3, "src", "ngClass", "click"], [1, "main-menu", "mobile-menu"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 27, 15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_img_11_Template, 1, 1, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_img_12_Template, 1, 2, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 27, 15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isHomePage ? "whiteheader" : "blueheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.isHomePage ? "../../assets/images/logo.svg" : "../../assets/images/logo-white.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", ctx.isHomePage ? "img-fluid" : "img-fluid white-logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showmenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmenu);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: [".header[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.blueheader[_ngcontent-%COMP%] {\n  background: linear-gradient(117deg, #009eff 0%, #27c3d0 100%);\n}\n\n.navigation__checkbox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.white-logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 999;\n}\n\n.navigation__button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 7rem;\n  width: 7rem;\n  position: fixed;\n  top: 30px;\n  right: 6rem;\n  border-radius: 50%;\n  z-index: 2000;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);\n  text-align: center;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .navigation__button[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 4rem;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation__button[_ngcontent-%COMP%] {\n    top: 3rem;\n    right: 3rem;\n  }\n}\n\n.navigation__background[_ngcontent-%COMP%] {\n  height: 6rem;\n  width: 6rem;\n  border-radius: 50%;\n  position: fixed;\n  top: 30px;\n  right: 6.5rem;\n  background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  z-index: 1000;\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .navigation__background[_ngcontent-%COMP%] {\n    top: 4.5rem;\n    right: 4.5rem;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation__background[_ngcontent-%COMP%] {\n    top: 3.5rem;\n    right: 3.5rem;\n  }\n}\n\n.navigation__nav[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1500;\n  opacity: 0;\n  width: 0;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  visibility: hidden;\n}\n\n.navigation__list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  list-style: none;\n  text-align: center;\n  width: 100%;\n}\n\n.navigation__item[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.navigation__link[_ngcontent-%COMP%]:link, .navigation__link[_ngcontent-%COMP%]:visited {\n  display: inline-block;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);\n  background-size: 220%;\n  transition: all 0.4s;\n}\n\n.navigation__link[_ngcontent-%COMP%]:link   span[_ngcontent-%COMP%], .navigation__link[_ngcontent-%COMP%]:visited   span[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n  display: inline-block;\n}\n\n.navigation__link[_ngcontent-%COMP%]:hover, .navigation__link[_ngcontent-%COMP%]:active {\n  background-position: 100%;\n  color: #009eff;\n  transform: translateX(1rem);\n}\n\n.navigation__checkbox[_ngcontent-%COMP%]:checked    ~ .navigation__background[_ngcontent-%COMP%] {\n  transform: scale(80);\n}\n\n.navigation__checkbox[_ngcontent-%COMP%]:checked    ~ .navigation__nav[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 100%;\n  visibility: visible;\n}\n\n.navigation__icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 3.5rem;\n}\n\n.navigation__icon[_ngcontent-%COMP%], .navigation__icon[_ngcontent-%COMP%]::before, .navigation__icon[_ngcontent-%COMP%]::after {\n  width: 3rem;\n  height: 2px;\n  background-color: #333;\n  display: inline-block;\n}\n\n.navigation__icon[_ngcontent-%COMP%]::before, .navigation__icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  transition: all 0.2s;\n}\n\n.navigation__icon[_ngcontent-%COMP%]::before {\n  top: -0.8rem;\n}\n\n.navigation__icon[_ngcontent-%COMP%]::after {\n  top: 0.8rem;\n}\n\n.navigation__button[_ngcontent-%COMP%]:hover   .navigation__icon[_ngcontent-%COMP%]::before {\n  top: -1rem;\n}\n\n.navigation__button[_ngcontent-%COMP%]:hover   .navigation__icon[_ngcontent-%COMP%]::after {\n  top: 1rem;\n}\n\n.navigation__checkbox[_ngcontent-%COMP%]:checked    + .navigation__button[_ngcontent-%COMP%]   .navigation__icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.navigation__checkbox[_ngcontent-%COMP%]:checked    + .navigation__button[_ngcontent-%COMP%]   .navigation__icon[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.navigation__checkbox[_ngcontent-%COMP%]:checked    + .navigation__button[_ngcontent-%COMP%]   .navigation__icon[_ngcontent-%COMP%]::after {\n  top: 0;\n  transform: rotate(-135deg);\n}\n\n.main-menu[_ngcontent-%COMP%] {\n  transition: 0.3s ease all;\n}\n\n.main-menu[_ngcontent-%COMP%]   .whitemenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111010;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  text-align: right;\n  display: block;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1 !important;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block !important;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px !important;\n  top: 41px;\n  min-width: 220px;\n  background: #ffffff;\n  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.08);\n  border: 0;\n  transform: translateX(-40px);\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s ease all;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::after {\n  content: \"\";\n  top: -9px;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #ffffff;\n  position: absolute;\n  margin: 0 auto;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 30px;\n  margin: 10px 0;\n  text-align: left;\n}\n\n.main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1 !important;\n}\n\n.open-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n}\n\n.open-menu-white[_ngcontent-%COMP%] {\n  top: 0;\n  width: 15px;\n}\n\n.side-menu[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 9999;\n}\n\n.white-menu[_ngcontent-%COMP%] {\n  filter: brightness(25);\n}\n\nheader.scrolling_up[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  z-index: 999999;\n}\n\n@media screen and (max-width: 1700px) {\n  .menu[_ngcontent-%COMP%]   .close-menu[_ngcontent-%COMP%] {\n    width: 25px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .side-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 32px;\n  }\n  .side-menu[_ngcontent-%COMP%]   .open-menu-white[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n\n  .open-menu[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 17px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .desktop-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .side-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: relative;\n    top: -41px;\n    width: 82%;\n  }\n\n  .main-menu[_ngcontent-%COMP%] {\n    background: #1ab7e1;\n    width: 100%;\n    top: 10px;\n  }\n  .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 10px;\n  }\n  .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    color: black;\n    font-size: 17px;\n    padding: 5px;\n  }\n  .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n  }\n  .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    left: 41%;\n    top: 54px;\n  }\n  .main-menu[_ngcontent-%COMP%]   .whitemenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #000;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVNBO0VBQ0UsNkRBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTEY7O0FBT0E7RUFDRTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBSkY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUFBO0FBTEY7O0FBT0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBSkY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJEQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0FBTEY7O0FBUUE7O0VBRUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFNQSxxQkFBQTtFQUNBLG9CQUFBO0FBVkY7O0FBWUE7O0VBRUUsb0JBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBOztFQUVFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBVEY7O0FBWUE7RUFDRSxvQkFBQTtBQVRGOztBQVlBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVdBOzs7RUFHRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFSRjs7QUFVQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUFQRjs7QUFTQTtFQUNFLFlBQUE7QUFORjs7QUFRQTtFQUNFLFdBQUE7QUFMRjs7QUFRQTtFQUNFLFVBQUE7QUFMRjs7QUFRQTtFQUNFLFNBQUE7QUFMRjs7QUFRQTtFQUNFLDZCQUFBO0FBTEY7O0FBUUE7RUFDRSxNQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTtFQUNFLE1BQUE7RUFDQSwwQkFBQTtBQUxGOztBQU9BO0VBQ0UseUJBQUE7QUFKRjs7QUFPTTtFQUNFLFdBQUE7QUFMUjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBUEo7O0FBUUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFOTjs7QUFPTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUxSOztBQU9RO0VBQ0UscUJBQUE7QUFMVjs7QUFNVTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFKWjs7QUFRTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTlI7O0FBT1E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMVjs7QUFRVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5aOztBQVdRO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQVRWOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBWkY7O0FBY0E7RUFDRSxNQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBVkY7O0FBWUE7RUFDRSxzQkFBQTtBQVRGOztBQVdBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFSRjs7QUFZQTtFQUVJO0lBQ0UsV0FBQTtFQVZKO0FBQ0Y7O0FBYUE7RUFFSTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBWko7RUFjRTtJQUNFLFdBQUE7RUFaSjs7RUFlQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBWkY7QUFDRjs7QUFlQTtFQUNFO0lBQ0UsYUFBQTtFQWJGOztFQWVBO0lBQ0UsY0FBQTtFQVpGOztFQWNBO0lBQ0Usa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQVhGOztFQWFBO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQVZGO0VBWUU7SUFDRSxzQkFBQTtJQUNBLGFBQUE7RUFWSjtFQVlNO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFWUjtFQVdRO0lBQ0UsV0FBQTtFQVRWO0VBWU07SUFDRSxTQUFBO0lBQ0EsU0FBQTtFQVZSO0VBaUJRO0lBQ0UsV0FBQTtFQWZWO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIC8vIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XHJcbiAgLy8gei1pbmRleDogOTk5OTk5O1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAubG9nbyB7XHJcbiAgLy8gICBmaWx0ZXI6IGJyaWdodG5lc3MoMzIpO1xyXG4gIC8vIH1cclxuICAvLyAuYy1wIHtcclxuICAvLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygzMik7XHJcbiAgLy8gfVxyXG59XHJcbi5tb2JpbGUtbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYmx1ZWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExN2RlZywgIzAwOWVmZiAwJSwgIzI3YzNkMCAxMDAlKTtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2NoZWNrYm94IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi53aGl0ZS1sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9fYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogN3JlbTtcclxuICB3aWR0aDogN3JlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHJpZ2h0OiA2cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xyXG4gIC5uYXZpZ2F0aW9uX19idXR0b24ge1xyXG4gICAgdG9wOiA0cmVtO1xyXG4gICAgcmlnaHQ6IDRyZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XHJcbiAgLm5hdmlnYXRpb25fX2J1dHRvbiB7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgICByaWdodDogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19iYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDMwcHg7XHJcbiAgcmlnaHQ6IDYuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xyXG4gIC5uYXZpZ2F0aW9uX19iYWNrZ3JvdW5kIHtcclxuICAgIHRvcDogNC41cmVtO1xyXG4gICAgcmlnaHQ6IDQuNXJlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy41ZW0pIHtcclxuICAubmF2aWdhdGlvbl9fYmFja2dyb3VuZCB7XHJcbiAgICB0b3A6IDMuNXJlbTtcclxuICAgIHJpZ2h0OiAzLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9fbmF2IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxNTAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9fbGlzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2l0ZW0ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2xpbms6bGluayxcclxuLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxMjBkZWcsXHJcbiAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICNmZmYgNTAlXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIyMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuLm5hdmlnYXRpb25fX2xpbms6bGluayBzcGFuLFxyXG4ubmF2aWdhdGlvbl9fbGluazp2aXNpdGVkIHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2xpbms6aG92ZXIsXHJcbi5uYXZpZ2F0aW9uX19saW5rOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICBjb2xvcjogIzAwOWVmZjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19jaGVja2JveDpjaGVja2VkIH4gLm5hdmlnYXRpb25fX2JhY2tncm91bmQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoODApO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uX19uYXYge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2ljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAzLjVyZW07XHJcbn1cclxuLm5hdmlnYXRpb25fX2ljb24sXHJcbi5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUsXHJcbi5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm5hdmlnYXRpb25fX2ljb246OmJlZm9yZSxcclxuLm5hdmlnYXRpb25fX2ljb246OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUge1xyXG4gIHRvcDogLTAuOHJlbTtcclxufVxyXG4ubmF2aWdhdGlvbl9faWNvbjo6YWZ0ZXIge1xyXG4gIHRvcDogMC44cmVtO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9fYnV0dG9uOmhvdmVyIC5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUge1xyXG4gIHRvcDogLTFyZW07XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19idXR0b246aG92ZXIgLm5hdmlnYXRpb25fX2ljb246OmFmdGVyIHtcclxuICB0b3A6IDFyZW07XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19jaGVja2JveDpjaGVja2VkICsgLm5hdmlnYXRpb25fX2J1dHRvbiAubmF2aWdhdGlvbl9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uX19jaGVja2JveDpjaGVja2VkICsgLm5hdmlnYXRpb25fX2J1dHRvbiAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlIHtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgKyAubmF2aWdhdGlvbl9fYnV0dG9uIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG59XHJcbi5tYWluLW1lbnUge1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XHJcbiAgLndoaXRlbWVudSB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxMTEwMTA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA0MXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5vcGVuLW1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxufVxyXG4ub3Blbi1tZW51LXdoaXRlIHtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLnNpZGUtbWVudSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLndoaXRlLW1lbnUge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyNSk7XHJcbn1cclxuaGVhZGVyLnNjcm9sbGluZ191cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xyXG4gIC5tZW51IHtcclxuICAgIC5jbG9zZS1tZW51IHtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zaWRlLW1lbnUge1xyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgIH1cclxuICAgIC5vcGVuLW1lbnUtd2hpdGUge1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm9wZW4tbWVudSB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmRlc2t0b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubW9iaWxlLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zaWRlLW1lbnUgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTQxcHg7XHJcbiAgICB3aWR0aDogODIlO1xyXG4gIH1cclxuICAubWFpbi1tZW51IHtcclxuICAgIGJhY2tncm91bmQ6ICMxYWI3ZTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmNjY7XHJcbiAgICB1bCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgbGVmdDogNDElO1xyXG4gICAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndoaXRlbWVudSB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "cEvD":
    /*!*************************************************************!*\
      !*** ./src/app/pages/services/website/website.component.ts ***!
      \*************************************************************/

    /*! exports provided: WebsiteComponent */

    /***/
    function cEvD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function () {
        return WebsiteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/recent-projects/recent-projects.component */
      "D39z");

      var _c0 = function _c0() {
        return ["/contact"];
      };

      var WebsiteComponent = /*#__PURE__*/function () {
        function WebsiteComponent(headerService) {
          _classCallCheck(this, WebsiteComponent);

          this.headerService = headerService;
          this.data = {
            title: "Are you looking for Online Appointment?",
            desc: "",
            link: "/contact",
            linkText: "Contact us now"
          };
          this.headerService.isHomePage.next(false);
        }

        _createClass(WebsiteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WebsiteComponent;
      }();

      WebsiteComponent.ɵfac = function WebsiteComponent_Factory(t) {
        return new (t || WebsiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      WebsiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WebsiteComponent,
        selectors: [["app-website"]],
        decls: 123,
        vars: 2,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "website-feature"], [1, "row", "justify-content-end"], [1, "col-md-6"], [1, "tssp"], [1, "tts"], [1, "icons"], ["src", "../../../assets/images/icon1.svg", "alt", "", 1, "img-fluid"], [1, "content"], [1, "btn", "btn-main", 3, "routerLink"], ["src", "../../../assets/images/arrow.svg"], [1, "benefits"], [1, "benefits-title"], [1, "benefits-list"], ["src", "../assets/images/website-benefit-1.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/website-benefit-2.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/website-benefit-3.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/website-benefit-4.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/website-benefit-5.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/website-benefit-6.svg", "alt", "", 1, "img-fluid"], [1, "lts"], [1, "lts-container"], [1, "lts-inner"], ["routerLink", "/contact", 1, "btn-white-border"], ["src", "../../../../assets/images/arrow.svg"]],
        template: function WebsiteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Website design plays a vital role in growing your business. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Your website is the first impression for your customers so it should be perfect by all the means. Websites developed and designed at Ventonix are a synonym for Creativity, Innovation, and Precision. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "User-friendly any Custom website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "B2B website & Catalogue website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Static and Dynamic website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Inquiry generation website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Product display & and many more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Get a quote \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "How do we benefit you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " We provide you the best reliable solutions to your business ideas and turning them into user-interface that helps your website reach the customers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Perfect Coding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Websites designed and developed at Ventonix are hand-coded with W3C validations XHTML/CSS. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Stable and Secure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " The website is built and coded by a group of expert members. So they are powerful, stable and secure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Responsive Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Websites may not run smoothly on the multiple platforms, we overcome it by making websites responsive. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Cost Effective Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " We provide you the website with affordable charges at competitive prices maintaining competency. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Graphics Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Web development services provide you high support infrastructure for powerful 2D/3D graphics ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Customer Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " We provide business ideas and user-interface that helps your website reach the customers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "app-recent-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Are you looking for Online Appointment?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Contact us now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__["RecentProjectsComponent"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  padding: 130px 0 79px 0px;\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/website-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 107%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 79px;\n  margin-bottom: 130px;\n  margin-right: 700px;\n}\n.website-feature[_ngcontent-%COMP%] {\n  padding: 200px 0 100px 0;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 96% 33%, 5% 80%;\n}\n.website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  max-width: 400px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  color: #262332;\n  margin-bottom: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 40px 0;\n  display: flex;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.benefits[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg), url(/../../assets/images/about-icon-8.svg);\n  background-repeat: no-repeat;\n  background-position: 3% 53%, 95% 13%, 100% 94%;\n  padding: 188px 0 165px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #172127;\n  font-family: Montserrat;\n  font-size: 45px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  line-height: 60px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin: 30px 21% 90px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 2px;\n  width: 31%;\n  float: left;\n  box-sizing: border-box;\n  padding: 60px;\n  margin: 0px 48px 48px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  margin: 15px 0 20px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  margin: 0px 0px 48px 0px;\n}\n.lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 78px;\n  text-align: center;\n  padding: 0 28%;\n}\n.lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  text-align: center;\n  margin: 0px 0 60px;\n  padding: 0% 21%;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 423px;\n    font-size: 56px;\n  }\n\n  .job-details[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .website-feature[_ngcontent-%COMP%] {\n    padding: 90px 0 100px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    padding: 80px 0 90px 0px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 30%;\n    flex-wrap: wrap;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 44px;\n  }\n  .lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 16px 27px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 104%, center center;\n    background-size: 17px, 15px, 30px, 30%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .btn-white[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 18px;\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    padding: 90px 0 126px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 30px 10% 42px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 45%;\n    text-align: center;\n    padding: 20px;\n    margin: 0px 30px 30px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 32px;\n    margin: 15px 0 20px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n    margin: 0px 30px 30px 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-position: 96% 8%, 5% 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-image: none;\n    padding: 50px 0 54px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 36px 0 45px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 67%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    margin-top: 0;\n  }\n\n  .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    margin-bottom: 50px !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .benefits[_ngcontent-%COMP%] {\n    padding: 63px 0 51px 0;\n    background-image: none;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n    margin-left: 0;\n  }\n\n  .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-right: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2Vic2l0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRRQUFBO0VBS0EsNEJBQUE7RUFDQSxzRUFBQTtFQUNBLDZDQUFBO0FBSEY7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQWdDQTtFQUNFLHdCQUFBO0VBQ0Esd0dBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0FBOUJGO0FBK0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBN0JKO0FBK0JFO0VBQ0UsZ0JBQUE7QUE3Qko7QUE4Qkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBNUJOO0FBOEJJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBNUJOO0FBNkJNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBM0JSO0FBNEJRO0VBQ0Usa0JBQUE7QUExQlY7QUFxQ0E7RUFDRSxtQkFBQTtFQUNBLG9KQUFBO0VBR0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0FBckNGO0FBdUNJO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXJDTjtBQXVDSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBckNOO0FBMENNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUF4Q1I7QUF5Q1E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUF2Q1Y7QUF5Q1E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF2Q1Y7QUEwQ007O0VBRUUsd0JBQUE7QUF4Q1I7QUF5REU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXRESjtBQXdERTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBdERKO0FBMkRBO0VBRUk7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUF6REo7O0VBNERBO0lBQ0UsZUFBQTtFQXpERjs7RUEyREE7SUFDRSxtQkFBQTtFQXhERjtBQUNGO0FBMkRBO0VBQ0U7SUFDRSx1QkFBQTtFQXpERjtFQTBERTtJQUNFLGNBQUE7RUF4REo7RUEwREU7SUFDRSxnQkFBQTtFQXhESjs7RUE0REE7SUFDRSx3QkFBQTtFQXpERjtFQTJESTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQXpETjtFQTBETTtJQUNFLFVBQUE7RUF4RFI7O0VBZ0VFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBN0RKO0VBK0RFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBN0RKO0FBQ0Y7QUFpRUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esc0VBQUE7SUFDQSw0Q0FBQTtFQS9ERjtFQWlFRTtJQUNFLDBCQUFBO0lBQ0EsNEJBQUE7RUEvREo7O0VBbUVBO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBaEVGOztFQWtFQTtJQUNFLHVCQUFBO0VBL0RGO0VBbUVJO0lBQ0UsdUJBQUE7RUFqRU47RUFzRU07SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUFwRVI7RUFxRVE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQW5FVjtFQXFFUTtJQUNFLGVBQUE7RUFuRVY7RUFzRU07O0lBRUUsdUJBQUE7RUFwRVI7O0VBMEVBO0lBQ0UsbUNBQUE7RUF2RUY7RUF3RUU7SUFDRSxnQkFBQTtFQXRFSjtFQXVFSTtJQUNFLDBCQUFBO0VBckVOO0VBd0VNO0lBQ0Usa0JBQUE7RUF0RVI7QUFDRjtBQTRFQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDZEQUFBO0VBMUVGO0VBMkVFO0lBQ0UsZUFBQTtFQXpFSjs7RUE0RUE7SUFDRSxzQkFBQTtJQUNBLHNCQUFBO0VBekVGO0VBMEVFO0lBQ0UsZ0JBQUE7RUF4RUo7RUF5RUk7SUFDRSwwQkFBQTtFQXZFTjtFQTBFSTtJQUNFLG1CQUFBO0VBeEVOO0VBeUVNO0lBQ0Usa0JBQUE7RUF2RVI7RUF5RVU7SUFDRSxVQUFBO0VBdkVaO0VBMEVRO0lBQ0UsMEJBQUE7SUFDQSxhQUFBO0VBeEVWOztFQWlGSTtJQUNFLFVBQUE7RUE5RU47O0VBb0ZFO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQWpGSjtBQUNGO0FBcUZBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHNCQUFBO0VBbkZGOztFQXFGQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBbEZGOztFQXNGSTtJQUNFLHNCQUFBO0lBQ0EsMEJBQUE7RUFuRk47QUFDRiIsImZpbGUiOiJ3ZWJzaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2LWhlcm8ge1xyXG4gIHBhZGRpbmc6IDEzMHB4IDAgNzlweCAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0zLnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tNC5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTEuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy93ZWJzaXRlLWJhbm5lci0xLnN2ZyksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiUgODAlLCA4OCUgMjklLCA5NSUgNTclLCA4MSUgMTA3JSwgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE3cHgsIDE1cHgsIDMwcHgsIGF1dG8sIDEwMCU7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKmJ1dHRvbioqKioqKioqKioqKioqKipcclxuLy8gYS5idG4uYnRuLW1haW4ge1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwOWVmZiwgIzMwY2NjNiwgIzAwOWVmZik7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIHBhZGRpbmc6IDE2cHggNDZweDtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4vLyAgIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICY6aG92ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xyXG4vLyAgICAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqd29yayB3aXRoIHVzKioqKioqKioqKioqKioqKioqKioqXHJcbi53ZWJzaXRlLWZlYXR1cmUge1xyXG4gIHBhZGRpbmc6IDIwMHB4IDAgMTAwcHggMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi01LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi02LnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NiUgMzMlLCA1JSA4MCU7XHJcbiAgcCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICAudHRzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDQwcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKkJlbmVmaXRzKioqKioqKioqKioqKioqKioqKlxyXG4uYmVuZWZpdHMge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNi5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tOC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyUgNTMlLCA5NSUgMTMlLCAxMDAlIDk0JTtcclxuICBwYWRkaW5nOiAxODhweCAwIDE2NXB4IDA7XHJcbiAgLmJlbmVmaXRzLXRpdGxlIHtcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMxNzIxMjc7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luOiAzMHB4IDIxJSA5MHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iZW5lZml0cy1saXN0IHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDQ4cHggNDhweCAwO1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaTpudGgtY2hpbGQoMyksXHJcbiAgICAgIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDQ4cHggMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAubHRzIHtcclxuLy8gICBwYWRkaW5nOiAxODBweCAwO1xyXG4vLyAgIGgyIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAwIDQlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLmx0cyB7XHJcbiAgLy8gcGFkZGluZzogMTgwcHggMDtcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyOCU7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggMCA2MHB4O1xyXG4gICAgcGFkZGluZzogMCUgMjElO1xyXG4gIH1cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqbWVkaWEgcXVlcmllcyoqKioqKioqKioqKioqKipcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQyM3B4O1xyXG4gICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5qb2ItZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG4gIGEuYnRuLmJ0bi1tYWluIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAud2Vic2l0ZS1mZWF0dXJlIHtcclxuICAgIHBhZGRpbmc6IDkwcHggMCAxMDBweCAwO1xyXG4gICAgcCB7XHJcbiAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLnR0cyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmVuZWZpdHMge1xyXG4gICAgcGFkZGluZzogODBweCAwIDkwcHggMHB4O1xyXG4gICAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmx0cyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxODBweCAwO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcGFkZGluZzogMTZweCAyN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgcGFkZGluZzogNjBweCAwIDU5cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiUgODAlLCA4OSUgMjklLCA5NiUgNTclLCA4MyUgMTA0JSwgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTdweCwgMTVweCwgMzBweCwgMzAlLCAxMDAlO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLXdoaXRlIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmJlbmVmaXRzIHtcclxuICAgIHBhZGRpbmc6IDkwcHggMCAxMjZweCAwO1xyXG4gICAgLmJlbmVmaXRzLXRpdGxlIHtcclxuICAgICAgaDIge1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAxMCUgNDJweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmVuZWZpdHMtbGlzdCB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDMwcHggMzBweCAwO1xyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDMpLFxyXG4gICAgICAgIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAzMHB4IDMwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53ZWJzaXRlLWZlYXR1cmUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlIDglLCA1JSA4MCU7XHJcbiAgICAudHRzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgcGFkZGluZzogNTBweCAwIDU0cHggMDtcclxuICAgIC50dHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDM2cHggMCA0NXB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICAgICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY3JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iZW5lZml0cy1saXN0IHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sdHMge1xyXG4gICAgaDIge1xyXG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmJlbmVmaXRzIHtcclxuICAgIHBhZGRpbmc6IDYzcHggMCA1MXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBhLmJ0bi5idG4tbWFpbiBpbWcge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "d4cB":
    /*!********************************************!*\
      !*** ./src/assets/js/swiper-bundle.min.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function d4cB(module, exports, __webpack_require__) {
      /**
       * Swiper 6.2.0
       * Most modern mobile touch slider and framework with hardware accelerated transitions
       * http://swiperjs.com
       *
       * Copyright 2014-2020 Vladimir Kharlampidi
       *
       * Released under the MIT License
       *
       * Released on: September 4, 2020
       */
      !function (e, t) {
        true ? module.exports = t() : undefined;
      }(this, function () {
        "use strict";

        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
          }
        }

        function t() {
          return (t = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];

              for (var s in i) {
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
            }

            return e;
          }).apply(this, arguments);
        }

        function i(e) {
          return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
        }

        function s(e, t) {
          void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
            void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
          });
        }

        var a = {
          body: {},
          addEventListener: function addEventListener() {},
          removeEventListener: function removeEventListener() {},
          activeElement: {
            blur: function blur() {},
            nodeName: ""
          },
          querySelector: function querySelector() {
            return null;
          },
          querySelectorAll: function querySelectorAll() {
            return [];
          },
          getElementById: function getElementById() {
            return null;
          },
          createEvent: function createEvent() {
            return {
              initEvent: function initEvent() {}
            };
          },
          createElement: function createElement() {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function setAttribute() {},
              getElementsByTagName: function getElementsByTagName() {
                return [];
              }
            };
          },
          createElementNS: function createElementNS() {
            return {};
          },
          importNode: function importNode() {
            return null;
          },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
          }
        };

        function r() {
          var e = "undefined" != typeof document ? document : {};
          return s(e, a), e;
        }

        var n = {
          document: a,
          navigator: {
            userAgent: ""
          },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
          },
          history: {
            replaceState: function replaceState() {},
            pushState: function pushState() {},
            go: function go() {},
            back: function back() {}
          },
          CustomEvent: function CustomEvent() {
            return this;
          },
          addEventListener: function addEventListener() {},
          removeEventListener: function removeEventListener() {},
          getComputedStyle: function getComputedStyle() {
            return {
              getPropertyValue: function getPropertyValue() {
                return "";
              }
            };
          },
          Image: function Image() {},
          Date: function Date() {},
          screen: {},
          setTimeout: function setTimeout() {},
          clearTimeout: function clearTimeout() {},
          matchMedia: function matchMedia() {
            return {};
          },
          requestAnimationFrame: function requestAnimationFrame(e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
          },
          cancelAnimationFrame: function cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
          }
        };

        function l() {
          var e = "undefined" != typeof window ? window : {};
          return s(e, n), e;
        }

        function o(e) {
          return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
        }

        function d(e, t) {
          return (d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e;
          })(e, t);
        }

        function h() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }

        function p(e, t, i) {
          return (p = h() ? Reflect.construct : function (e, t, i) {
            var s = [null];
            s.push.apply(s, t);
            var a = new (Function.bind.apply(e, s))();
            return i && d(a, i.prototype), a;
          }).apply(null, arguments);
        }

        function u(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (u = function u(e) {
            if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, s);
            }

            function s() {
              return p(e, arguments, o(this).constructor);
            }

            return s.prototype = Object.create(e.prototype, {
              constructor: {
                value: s,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), d(s, e);
          })(e);
        }

        var c = function (e) {
          var t, i;

          function s(t) {
            var i, s, a;
            return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
              get: function get() {
                return a;
              },
              set: function set(e) {
                a.__proto__ = e;
              }
            }), i;
          }

          return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
        }(u(Array));

        function v(e) {
          void 0 === e && (e = []);
          var t = [];
          return e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
          }), t;
        }

        function f(e, t) {
          return Array.prototype.filter.call(e, t);
        }

        function m(e, t) {
          var i = l(),
              s = r(),
              a = [];
          if (!t && e instanceof c) return e;
          if (!e) return new c(a);

          if ("string" == typeof e) {
            var n = e.trim();

            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
              var o = "div";
              0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
              var d = s.createElement(o);
              d.innerHTML = n;

              for (var h = 0; h < d.childNodes.length; h += 1) {
                a.push(d.childNodes[h]);
              }
            } else a = function (e, t) {
              if ("string" != typeof e) return [e];

              for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) {
                i.push(s[a]);
              }

              return i;
            }(e.trim(), t || s);
          } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
            if (e instanceof c) return e;
            a = e;
          }

          return new c(function (e) {
            for (var t = [], i = 0; i < e.length; i += 1) {
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            }

            return t;
          }(a));
        }

        m.fn = c.prototype;
        var g,
            w,
            b,
            y = {
          addClass: function addClass() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
              t[i] = arguments[i];
            }

            var s = v(t.map(function (e) {
              return e.split(" ");
            }));
            return this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, s);
            }), this;
          },
          removeClass: function removeClass() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
              t[i] = arguments[i];
            }

            var s = v(t.map(function (e) {
              return e.split(" ");
            }));
            return this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, s);
            }), this;
          },
          hasClass: function hasClass() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
              t[i] = arguments[i];
            }

            var s = v(t.map(function (e) {
              return e.split(" ");
            }));
            return f(this, function (e) {
              return s.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0;
            }).length > 0;
          },
          toggleClass: function toggleClass() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
              t[i] = arguments[i];
            }

            var s = v(t.map(function (e) {
              return e.split(" ");
            }));
            this.forEach(function (e) {
              s.forEach(function (t) {
                e.classList.toggle(t);
              });
            });
          },
          attr: function attr(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

            for (var i = 0; i < this.length; i += 1) {
              if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) {
                this[i][s] = e[s], this[i].setAttribute(s, e[s]);
              }
            }

            return this;
          },
          removeAttr: function removeAttr(e) {
            for (var t = 0; t < this.length; t += 1) {
              this[t].removeAttribute(e);
            }

            return this;
          },
          transform: function transform(e) {
            for (var t = 0; t < this.length; t += 1) {
              this[t].style.transform = e;
            }

            return this;
          },
          transition: function transition(e) {
            for (var t = 0; t < this.length; t += 1) {
              this[t].style.transition = "string" != typeof e ? e + "ms" : e;
            }

            return this;
          },
          on: function on() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
              t[i] = arguments[i];
            }

            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];

            function l(e) {
              var t = e.target;

              if (t) {
                var i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) {
                  m(s[n]).is(a) && r.apply(s[n], i);
                }
              }
            }

            function o(e) {
              var t = e && e.target && e.target.dom7EventData || [];
              t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }

            "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

            for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
              var u = this[p];
              if (a) for (d = 0; d < h.length; d += 1) {
                var c = h[d];
                u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
                  listener: r,
                  proxyListener: l
                }), u.addEventListener(c, l, n);
              } else for (d = 0; d < h.length; d += 1) {
                var v = h[d];
                u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                  listener: r,
                  proxyListener: o
                }), u.addEventListener(v, o, n);
              }
            }

            return this;
          },
          off: function off() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
              t[i] = arguments[i];
            }

            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

            for (var l = s.split(" "), o = 0; o < l.length; o += 1) {
              for (var d = l[o], h = 0; h < this.length; h += 1) {
                var p = this[h],
                    u = void 0;
                if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
                  var v = u[c];
                  r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1));
                }
              }
            }

            return this;
          },
          trigger: function trigger() {
            for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
              i[s] = arguments[s];
            }

            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
              for (var o = a[n], d = 0; d < this.length; d += 1) {
                var h = this[d];

                if (e.CustomEvent) {
                  var p = new e.CustomEvent(o, {
                    detail: r,
                    bubbles: !0,
                    cancelable: !0
                  });
                  h.dom7EventData = i.filter(function (e, t) {
                    return t > 0;
                  }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
                }
              }
            }

            return this;
          },
          transitionEnd: function transitionEnd(e) {
            var t = this;
            return e && t.on("transitionend", function i(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", i));
            }), this;
          },
          outerWidth: function outerWidth(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
              }

              return this[0].offsetWidth;
            }

            return null;
          },
          outerHeight: function outerHeight(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
              }

              return this[0].offsetHeight;
            }

            return null;
          },
          styles: function styles() {
            var e = l();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
          },
          offset: function offset() {
            if (this.length > 0) {
              var e = l(),
                  t = r(),
                  i = this[0],
                  s = i.getBoundingClientRect(),
                  a = t.body,
                  n = i.clientTop || a.clientTop || 0,
                  o = i.clientLeft || a.clientLeft || 0,
                  d = i === e ? e.scrollY : i.scrollTop,
                  h = i === e ? e.scrollX : i.scrollLeft;
              return {
                top: s.top + d - n,
                left: s.left + h - o
              };
            }

            return null;
          },
          css: function css(e, t) {
            var i,
                s = l();

            if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (i = 0; i < this.length; i += 1) {
                  for (var a in e) {
                    this[i].style[a] = e[a];
                  }
                }

                return this;
              }

              if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }

            if (2 === arguments.length && "string" == typeof e) {
              for (i = 0; i < this.length; i += 1) {
                this[i].style[e] = t;
              }

              return this;
            }

            return this;
          },
          each: function each(e) {
            return e ? (this.forEach(function (t, i) {
              e.apply(t, [t, i]);
            }), this) : this;
          },
          html: function html(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;

            for (var t = 0; t < this.length; t += 1) {
              this[t].innerHTML = e;
            }

            return this;
          },
          text: function text(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

            for (var t = 0; t < this.length; t += 1) {
              this[t].textContent = e;
            }

            return this;
          },
          is: function is(e) {
            var t,
                i,
                s = l(),
                a = r(),
                n = this[0];
            if (!n || void 0 === e) return !1;

            if ("string" == typeof e) {
              if (n.matches) return n.matches(e);
              if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
              if (n.msMatchesSelector) return n.msMatchesSelector(e);

              for (t = m(e), i = 0; i < t.length; i += 1) {
                if (t[i] === n) return !0;
              }

              return !1;
            }

            if (e === a) return n === a;
            if (e === s) return n === s;

            if (e.nodeType || e instanceof c) {
              for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
                if (t[i] === n) return !0;
              }

              return !1;
            }

            return !1;
          },
          index: function index() {
            var e,
                t = this[0];

            if (t) {
              for (e = 0; null !== (t = t.previousSibling);) {
                1 === t.nodeType && (e += 1);
              }

              return e;
            }
          },
          eq: function eq(e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return m([]);

            if (e < 0) {
              var i = t + e;
              return m(i < 0 ? [] : [this[i]]);
            }

            return m([this[e]]);
          },
          append: function append() {
            for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
              e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

              for (var s = 0; s < this.length; s += 1) {
                if ("string" == typeof e) {
                  var a = t.createElement("div");

                  for (a.innerHTML = e; a.firstChild;) {
                    this[s].appendChild(a.firstChild);
                  }
                } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) {
                  this[s].appendChild(e[n]);
                } else this[s].appendChild(e);
              }
            }

            return this;
          },
          prepend: function prepend(e) {
            var t,
                i,
                s = r();

            for (t = 0; t < this.length; t += 1) {
              if ("string" == typeof e) {
                var a = s.createElement("div");

                for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) {
                  this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
                }
              } else if (e instanceof c) for (i = 0; i < e.length; i += 1) {
                this[t].insertBefore(e[i], this[t].childNodes[0]);
              } else this[t].insertBefore(e, this[t].childNodes[0]);
            }

            return this;
          },
          next: function next(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
          },
          nextAll: function nextAll(e) {
            var t = [],
                i = this[0];
            if (!i) return m([]);

            for (; i.nextElementSibling;) {
              var s = i.nextElementSibling;
              e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
            }

            return m(t);
          },
          prev: function prev(e) {
            if (this.length > 0) {
              var t = this[0];
              return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
            }

            return m([]);
          },
          prevAll: function prevAll(e) {
            var t = [],
                i = this[0];
            if (!i) return m([]);

            for (; i.previousElementSibling;) {
              var s = i.previousElementSibling;
              e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
            }

            return m(t);
          },
          parent: function parent(e) {
            for (var t = [], i = 0; i < this.length; i += 1) {
              null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            }

            return m(t);
          },
          parents: function parents(e) {
            for (var t = [], i = 0; i < this.length; i += 1) {
              for (var s = this[i].parentNode; s;) {
                e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
              }
            }

            return m(t);
          },
          closest: function closest(e) {
            var t = this;
            return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function find(e) {
            for (var t = [], i = 0; i < this.length; i += 1) {
              for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) {
                t.push(s[a]);
              }
            }

            return m(t);
          },
          children: function children(e) {
            for (var t = [], i = 0; i < this.length; i += 1) {
              for (var s = this[i].children, a = 0; a < s.length; a += 1) {
                e && !m(s[a]).is(e) || t.push(s[a]);
              }
            }

            return m(t);
          },
          filter: function filter(e) {
            return m(f(this, e));
          },
          remove: function remove() {
            for (var e = 0; e < this.length; e += 1) {
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            }

            return this;
          }
        };

        function E(e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        }

        function x() {
          return Date.now();
        }

        function T(e, t) {
          void 0 === t && (t = "x");
          var i,
              s,
              a,
              r = l(),
              n = r.getComputedStyle(e, null);
          return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
        }

        function C(e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
        }

        function S() {
          for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
              var n = s[a],
                  l = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
            }
          }

          return e;
        }

        function M(e, t) {
          Object.keys(t).forEach(function (i) {
            C(t[i]) && Object.keys(t[i]).forEach(function (s) {
              "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
            }), e[i] = t[i];
          });
        }

        function z() {
          return g || (g = function () {
            var e = l(),
                t = r();
            return {
              touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
              pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
              observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
              passiveListener: function () {
                var t = !1;

                try {
                  var i = Object.defineProperty({}, "passive", {
                    get: function get() {
                      t = !0;
                    }
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}

                return t;
              }(),
              gestures: "ongesturestart" in e
            };
          }()), g;
        }

        function P(e) {
          return void 0 === e && (e = {}), w || (w = function (e) {
            var t = (void 0 === e ? {} : e).userAgent,
                i = z(),
                s = l(),
                a = s.navigator.platform,
                r = t || s.navigator.userAgent,
                n = {
              ios: !1,
              android: !1
            },
                o = s.screen.width,
                d = s.screen.height,
                h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = r.match(/(iPad).*OS\s([\d_]+)/),
                u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                v = "Win32" === a,
                f = "MacIntel" === a;
            return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
          }(e)), w;
        }

        function k() {
          return b || (b = function () {
            var e,
                t = l();
            return {
              isEdge: !!t.navigator.userAgent.match(/Edge/g),
              isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            };
          }()), b;
        }

        Object.keys(y).forEach(function (e) {
          m.fn[e] = y[e];
        });
        var $ = {
          name: "resize",
          create: function create() {
            var e = this;
            S(e, {
              resize: {
                resizeHandler: function resizeHandler() {
                  e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler: function orientationChangeHandler() {
                  e && !e.destroyed && e.initialized && e.emit("orientationchange");
                }
              }
            });
          },
          on: {
            init: function init(e) {
              var t = l();
              t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
            },
            destroy: function destroy(e) {
              var t = l();
              t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
            }
          }
        },
            L = {
          attach: function attach(e, t) {
            void 0 === t && (t = {});
            var i = l(),
                s = this,
                a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
              if (1 !== e.length) {
                var t = function t() {
                  s.emit("observerUpdate", e[0]);
                };

                i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
              } else s.emit("observerUpdate", e[0]);
            });
            a.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }), s.observer.observers.push(a);
          },
          init: function init() {
            if (this.support.observer && this.params.observer) {
              if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
                this.observer.attach(e[t]);
              }
              this.observer.attach(this.$el[0], {
                childList: this.params.observeSlideChildren
              }), this.observer.attach(this.$wrapperEl[0], {
                attributes: !1
              });
            }
          },
          destroy: function destroy() {
            this.observer.observers.forEach(function (e) {
              e.disconnect();
            }), this.observer.observers = [];
          }
        },
            I = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
          },
          create: function create() {
            M(this, {
              observer: t(t({}, L), {}, {
                observers: []
              })
            });
          },
          on: {
            init: function init(e) {
              e.observer.init();
            },
            destroy: function destroy(e) {
              e.observer.destroy();
            }
          }
        };

        function O(e) {
          var t = r(),
              i = l(),
              s = this.touchEventsData,
              a = this.params,
              n = this.touches;

          if (!this.animating || !a.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var d = m(o.target);
            if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type, (s.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!s.isTouchEvent && "button" in o && o.button > 0 || s.isTouched && s.isMoved))) if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
              n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
              var h = n.currentX,
                  p = n.currentY,
                  u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                  c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

              if (!u || !(h <= c || h >= i.screen.width - c)) {
                if (S(s, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
                  var v = !0;
                  d.is(s.formElements) && (v = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
                  var f = v && this.allowTouchMove && a.touchStartPreventDefault;
                  (a.touchStartForcePreventDefault || f) && o.preventDefault();
                }

                this.emit("touchStart", o);
              }
            }
          }
        }

        function A(e) {
          var t = r(),
              i = this.touchEventsData,
              s = this.params,
              a = this.touches,
              n = this.rtlTranslate,
              l = e;

          if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "touchmove" === l.type) {
              var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                  d = "touchmove" === l.type ? o.pageX : l.pageX,
                  h = "touchmove" === l.type ? o.pageY : l.pageY;
              if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
              if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
                startX: d,
                startY: h,
                currentX: d,
                currentY: h
              }), i.touchStartTime = x()));
              if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
                if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
              } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
              if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

              if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                a.currentX = d, a.currentY = h;
                var p = a.currentX - a.startX,
                    u = a.currentY - a.startY;

                if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                  var c;
                  if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
                  if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                    this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                    var v = this.isHorizontal() ? p : u;
                    a.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                    var f = !0,
                        g = s.resistanceRatio;

                    if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), f && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                      if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
                    }

                    s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                      position: a[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime
                    }), i.velocities.push({
                      position: a[this.isHorizontal() ? "currentX" : "currentY"],
                      time: x()
                    })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
                  }
                }
              }
            }
          } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
        }

        function D(e) {
          var t = this,
              i = t.touchEventsData,
              s = t.params,
              a = t.touches,
              r = t.rtlTranslate,
              n = t.$wrapperEl,
              l = t.slidesGrid,
              o = t.snapGrid,
              d = e;
          if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
          s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var h,
              p = x(),
              u = p - i.touchStartTime;
          if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
            t.destroyed || (t.allowClick = !0);
          }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
          if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

            if (s.freeModeMomentum) {
              if (i.velocities.length > 1) {
                var c = i.velocities.pop(),
                    v = i.velocities.pop(),
                    f = c.position - v.position,
                    m = c.time - v.time;
                t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;

              t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
              var g = 1e3 * s.freeModeMomentumRatio,
                  w = t.velocity * g,
                  b = t.translate + w;
              r && (b = -b);
              var y,
                  T,
                  C = !1,
                  S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
              if (b < t.maxTranslate()) s.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (b > t.minTranslate()) s.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), y = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
                for (var M, z = 0; z < o.length; z += 1) {
                  if (o[z] > -b) {
                    M = z;
                    break;
                  }
                }

                b = -(b = Math.abs(o[M] - b) < Math.abs(o[M - 1] - b) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
              }

              if (T && t.once("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), s.freeModeSticky) {
                  var P = Math.abs((r ? -b : b) - t.translate),
                      k = t.slidesSizesGrid[t.activeIndex];
                  g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
                }
              } else if (s.freeModeSticky) return void t.slideToClosest();

              s.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
                  t.setTranslate(y), n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses();
            } else if (s.freeModeSticky) return void t.slideToClosest();

            (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          } else {
            for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
              var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
              void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
            }

            var A = (h - l[$]) / L,
                D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

            if (u > s.longSwipesMs) {
              if (!s.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
            } else {
              if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
              t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
            }
          }
        }

        function G() {
          var e = this.params,
              t = this.el;

          if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
          }
        }

        function B(e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }

        function N() {
          var e = this.wrapperEl,
              t = this.rtlTranslate;
          this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
          var i = this.maxTranslate() - this.minTranslate();
          (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
        }

        var H = !1;

        function X() {}

        var Y = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: .02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: .85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
        },
            V = {
          modular: {
            useParams: function useParams(e) {
              var t = this;
              t.modules && Object.keys(t.modules).forEach(function (i) {
                var s = t.modules[i];
                s.params && S(e, s.params);
              });
            },
            useModules: function useModules(e) {
              void 0 === e && (e = {});
              var t = this;
              t.modules && Object.keys(t.modules).forEach(function (i) {
                var s = t.modules[i],
                    a = e[i] || {};
                s.on && t.on && Object.keys(s.on).forEach(function (e) {
                  t.on(e, s.on[e]);
                }), s.create && s.create.bind(t)(a);
              });
            }
          },
          eventsEmitter: {
            on: function on(e, t, i) {
              var s = this;
              if ("function" != typeof t) return s;
              var a = i ? "unshift" : "push";
              return e.split(" ").forEach(function (e) {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
              }), s;
            },
            once: function once(e, t, i) {
              var s = this;
              if ("function" != typeof t) return s;

              function a() {
                s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

                for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
                  r[n] = arguments[n];
                }

                t.apply(s, r);
              }

              return a.__emitterProxy = t, s.on(e, a, i);
            },
            onAny: function onAny(e, t) {
              if ("function" != typeof e) return this;
              var i = t ? "unshift" : "push";
              return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
            },
            offAny: function offAny(e) {
              if (!this.eventsAnyListeners) return this;
              var t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off: function off(e, t) {
              var i = this;
              return i.eventsListeners ? (e.split(" ").forEach(function (e) {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
                  (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
                });
              }), i) : i;
            },
            emit: function emit() {
              var e,
                  t,
                  i,
                  s = this;
              if (!s.eventsListeners) return s;

              for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
                r[n] = arguments[n];
              }

              "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
              var l = Array.isArray(e) ? e : e.split(" ");
              return l.forEach(function (e) {
                if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
                  s.apply(i, [e].concat(t));
                }), s.eventsListeners && s.eventsListeners[e]) {
                  var a = [];
                  s.eventsListeners[e].forEach(function (e) {
                    a.push(e);
                  }), a.forEach(function (e) {
                    e.apply(i, t);
                  });
                }
              }), s;
            }
          },
          update: {
            updateSize: function updateSize() {
              var e,
                  t,
                  i = this.$el;
              e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
              }));
            },
            updateSlides: function updateSlides() {
              var e = l(),
                  t = this.params,
                  i = this.$wrapperEl,
                  s = this.size,
                  a = this.rtlTranslate,
                  r = this.wrongRTL,
                  n = this.virtual && t.virtual.enabled,
                  o = n ? this.virtual.slides.length : this.slides.length,
                  d = i.children("." + this.params.slideClass),
                  h = n ? this.virtual.slides.length : d.length,
                  p = [],
                  u = [],
                  c = [];

              function v(e, i) {
                return !t.cssMode || i !== d.length - 1;
              }

              var f = t.slidesOffsetBefore;
              "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
              var m = t.slidesOffsetAfter;
              "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
              var g = this.snapGrid.length,
                  w = this.snapGrid.length,
                  b = t.spaceBetween,
                  y = -f,
                  E = 0,
                  x = 0;

              if (void 0 !== s) {
                var T, C;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? d.css({
                  marginLeft: "",
                  marginTop: ""
                }) : d.css({
                  marginRight: "",
                  marginBottom: ""
                }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

                for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
                  C = 0;
                  var L = d.eq($);

                  if (t.slidesPerColumn > 1) {
                    var I = void 0,
                        O = void 0,
                        A = void 0;

                    if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                      var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                          G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                          B = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                      I = (O = G - (A = Math.floor(G / B)) * B + D * t.slidesPerGroup) + A * T / z, L.css({
                        "-webkit-box-ordinal-group": I,
                        "-moz-box-ordinal-group": I,
                        "-ms-flex-order": I,
                        "-webkit-order": I,
                        order: I
                      });
                    } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;

                    L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
                  }

                  if ("none" !== L.css("display")) {
                    if ("auto" === t.slidesPerView) {
                      var N = e.getComputedStyle(L[0], null),
                          H = L[0].style.transform,
                          X = L[0].style.webkitTransform;
                      if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                        var Y = parseFloat(N.getPropertyValue("width") || 0),
                            V = parseFloat(N.getPropertyValue("padding-left") || 0),
                            F = parseFloat(N.getPropertyValue("padding-right") || 0),
                            W = parseFloat(N.getPropertyValue("margin-left") || 0),
                            R = parseFloat(N.getPropertyValue("margin-right") || 0),
                            q = N.getPropertyValue("box-sizing");
                        C = q && "border-box" === q ? Y + W + R : Y + V + F + W + R;
                      } else {
                        var j = parseFloat(N.getPropertyValue("height") || 0),
                            _ = parseFloat(N.getPropertyValue("padding-top") || 0),
                            U = parseFloat(N.getPropertyValue("padding-bottom") || 0),
                            K = parseFloat(N.getPropertyValue("margin-top") || 0),
                            Z = parseFloat(N.getPropertyValue("margin-bottom") || 0),
                            J = N.getPropertyValue("box-sizing");

                        C = J && "border-box" === J ? j + K + Z : j + _ + U + K + Z;
                      }
                      H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
                    } else C = (s - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");

                    d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (y = y + C / 2 + E / 2 + b, 0 === E && 0 !== $ && (y = y - s / 2 - b), 0 === $ && (y = y - s / 2 - b), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && p.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(y), u.push(y), y = y + C + b), this.virtualSize += C + b, E = C, x += 1;
                  }
                }

                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                  width: this.virtualSize + t.spaceBetween + "px"
                }), t.setWrapperSize && (this.isHorizontal() ? i.css({
                  width: this.virtualSize + t.spaceBetween + "px"
                }) : i.css({
                  height: this.virtualSize + t.spaceBetween + "px"
                })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
                  width: this.virtualSize + t.spaceBetween + "px"
                }) : i.css({
                  height: this.virtualSize + t.spaceBetween + "px"
                }), t.centeredSlides)) {
                  M = [];

                  for (var Q = 0; Q < p.length; Q += 1) {
                    var ee = p[Q];
                    t.roundLengths && (ee = Math.floor(ee)), p[Q] < this.virtualSize + p[0] && M.push(ee);
                  }

                  p = M;
                }

                if (!t.centeredSlides) {
                  M = [];

                  for (var te = 0; te < p.length; te += 1) {
                    var ie = p[te];
                    t.roundLengths && (ie = Math.floor(ie)), p[te] <= this.virtualSize - s && M.push(ie);
                  }

                  p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
                }

                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                  marginLeft: b + "px"
                }) : d.filter(v).css({
                  marginRight: b + "px"
                }) : d.filter(v).css({
                  marginBottom: b + "px"
                })), t.centeredSlides && t.centeredSlidesBounds) {
                  var se = 0;
                  c.forEach(function (e) {
                    se += e + (t.spaceBetween ? t.spaceBetween : 0);
                  });
                  var ae = (se -= t.spaceBetween) - s;
                  p = p.map(function (e) {
                    return e < 0 ? -f : e > ae ? ae + m : e;
                  });
                }

                if (t.centerInsufficientSlides) {
                  var re = 0;

                  if (c.forEach(function (e) {
                    re += e + (t.spaceBetween ? t.spaceBetween : 0);
                  }), (re -= t.spaceBetween) < s) {
                    var ne = (s - re) / 2;
                    p.forEach(function (e, t) {
                      p[t] = e - ne;
                    }), u.forEach(function (e, t) {
                      u[t] = e + ne;
                    });
                  }
                }

                S(this, {
                  slides: d,
                  snapGrid: p,
                  slidesGrid: u,
                  slidesSizesGrid: c
                }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
              }
            },
            updateAutoHeight: function updateAutoHeight(e) {
              var t,
                  i = [],
                  s = 0;
              if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
                if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
                  i.push(e);
                });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                  var a = this.activeIndex + t;
                  if (a > this.slides.length) break;
                  i.push(this.slides.eq(a)[0]);
                }
              } else i.push(this.slides.eq(this.activeIndex)[0]);

              for (t = 0; t < i.length; t += 1) {
                if (void 0 !== i[t]) {
                  var r = i[t].offsetHeight;
                  s = r > s ? r : s;
                }
              }

              s && this.$wrapperEl.css("height", s + "px");
            },
            updateSlidesOffset: function updateSlidesOffset() {
              for (var e = this.slides, t = 0; t < e.length; t += 1) {
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
              }
            },
            updateSlidesProgress: function updateSlidesProgress(e) {
              void 0 === e && (e = this && this.translate || 0);
              var t = this.params,
                  i = this.slides,
                  s = this.rtlTranslate;

              if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

                for (var r = 0; r < i.length; r += 1) {
                  var n = i[r],
                      l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

                  if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                    var o = -(a - n.swiperSlideOffset),
                        d = o + this.slidesSizesGrid[r];
                    (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
                  }

                  n.progress = s ? -l : l;
                }

                this.visibleSlides = m(this.visibleSlides);
              }
            },
            updateProgress: function updateProgress(e) {
              if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0;
              }

              var i = this.params,
                  s = this.maxTranslate() - this.minTranslate(),
                  a = this.progress,
                  r = this.isBeginning,
                  n = this.isEnd,
                  l = r,
                  o = n;
              0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
                progress: a,
                isBeginning: r,
                isEnd: n
              }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
            },
            updateSlidesClasses: function updateSlidesClasses() {
              var e,
                  t = this.slides,
                  i = this.params,
                  s = this.$wrapperEl,
                  a = this.activeIndex,
                  r = this.realIndex,
                  n = this.virtual && i.virtual.enabled;
              t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
              var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
              i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
              var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
              i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
            },
            updateActiveIndex: function updateActiveIndex(e) {
              var t,
                  i = this.rtlTranslate ? this.translate : -this.translate,
                  s = this.slidesGrid,
                  a = this.snapGrid,
                  r = this.params,
                  n = this.activeIndex,
                  l = this.realIndex,
                  o = this.snapIndex,
                  d = e;

              if (void 0 === d) {
                for (var h = 0; h < s.length; h += 1) {
                  void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                }

                r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
              }

              if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
                var p = Math.min(r.slidesPerGroupSkip, d);
                t = p + Math.floor((d - p) / r.slidesPerGroup);
              }

              if (t >= a.length && (t = a.length - 1), d !== n) {
                var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                S(this, {
                  snapIndex: t,
                  realIndex: u,
                  previousIndex: n,
                  activeIndex: d
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
              } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
            },
            updateClickedSlide: function updateClickedSlide(e) {
              var t = this.params,
                  i = m(e.target).closest("." + t.slideClass)[0],
                  s = !1;
              if (i) for (var a = 0; a < this.slides.length; a += 1) {
                this.slides[a] === i && (s = !0);
              }
              if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
              this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
            }
          },
          translate: {
            getTranslate: function getTranslate(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              var t = this.params,
                  i = this.rtlTranslate,
                  s = this.translate,
                  a = this.$wrapperEl;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              var r = T(a[0], e);
              return i && (r = -r), r || 0;
            },
            setTranslate: function setTranslate(e, t) {
              var i = this.rtlTranslate,
                  s = this.params,
                  a = this.$wrapperEl,
                  r = this.wrapperEl,
                  n = this.progress,
                  l = 0,
                  o = 0;
              this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
              var d = this.maxTranslate() - this.minTranslate();
              (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function minTranslate() {
              return -this.snapGrid[0];
            },
            maxTranslate: function maxTranslate() {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function translateTo(e, t, i, s, a) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
              var r = this,
                  n = r.params,
                  l = r.wrapperEl;
              if (r.animating && n.preventInteractionOnTransition) return !1;
              var o,
                  d = r.minTranslate(),
                  h = r.maxTranslate();

              if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
                var p,
                    u = r.isHorizontal();
                if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
                return !0;
              }

              return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
              }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
            }
          },
          transition: {
            setTransition: function setTransition(e, t) {
              this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
            },
            transitionStart: function transitionStart(e, t) {
              void 0 === e && (e = !0);
              var i = this.activeIndex,
                  s = this.params,
                  a = this.previousIndex;

              if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;

                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                  if ("reset" === r) return void this.emit("slideResetTransitionStart");
                  this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                }
              }
            },
            transitionEnd: function transitionEnd(e, t) {
              void 0 === e && (e = !0);
              var i = this.activeIndex,
                  s = this.previousIndex,
                  a = this.params;

              if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;

                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                  if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                  this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                }
              }
            }
          },
          slide: {
            slideTo: function slideTo(e, t, i, s) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
              var a = this,
                  r = e;
              r < 0 && (r = 0);
              var n = a.params,
                  l = a.snapGrid,
                  o = a.slidesGrid,
                  d = a.previousIndex,
                  h = a.activeIndex,
                  p = a.rtlTranslate,
                  u = a.wrapperEl;
              if (a.animating && n.preventInteractionOnTransition) return !1;
              var c = Math.min(a.params.slidesPerGroupSkip, r),
                  v = c + Math.floor((r - c) / a.params.slidesPerGroup);
              v >= l.length && (v = l.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
              var f,
                  m = -l[v];
              if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < o.length; g += 1) {
                -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
              }

              if (a.initialized && r !== h) {
                if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1;
              }

              if (f = r > h ? "next" : r < h ? "prev" : "reset", p && -m === a.translate || !p && m === a.translate) return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;

              if (n.cssMode) {
                var w,
                    b = a.isHorizontal(),
                    y = -m;
                if (p && (y = u.scrollWidth - u.offsetWidth - y), 0 === t) u[b ? "scrollLeft" : "scrollTop"] = y;else if (u.scrollTo) u.scrollTo(((w = {})[b ? "left" : "top"] = y, w.behavior = "smooth", w));else u[b ? "scrollLeft" : "scrollTop"] = y;
                return !0;
              }

              return 0 === t ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)) : (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f));
              }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0;
            },
            slideToLoop: function slideToLoop(e, t, i, s) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
              var a = e;
              return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
            },
            slideNext: function slideNext(e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              var s = this.params,
                  a = this.animating,
                  r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

              if (s.loop) {
                if (a && s.loopPreventsSlide) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
              }

              return this.slideTo(this.activeIndex + r, e, t, i);
            },
            slidePrev: function slidePrev(e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              var s = this.params,
                  a = this.animating,
                  r = this.snapGrid,
                  n = this.slidesGrid,
                  l = this.rtlTranslate;

              if (s.loop) {
                if (a && s.loopPreventsSlide) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
              }

              function o(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }

              var d,
                  h = o(l ? this.translate : -this.translate),
                  p = r.map(function (e) {
                return o(e);
              }),
                  u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
              return void 0 === u && s.cssMode && r.forEach(function (e) {
                !u && h >= e && (u = e);
              }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
            },
            slideReset: function slideReset(e, t, i) {
              return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
            },
            slideToClosest: function slideToClosest(e, t, i, s) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
              var a = this.activeIndex,
                  r = Math.min(this.params.slidesPerGroupSkip, a),
                  n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                  l = this.rtlTranslate ? this.translate : -this.translate;

              if (l >= this.snapGrid[n]) {
                var o = this.snapGrid[n];
                l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
              } else {
                var d = this.snapGrid[n - 1];
                l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
              }

              return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
            },
            slideToClickedSlide: function slideToClickedSlide() {
              var e,
                  t = this,
                  i = t.params,
                  s = t.$wrapperEl,
                  a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                  r = t.clickedIndex;

              if (i.loop) {
                if (t.animating) return;
                e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
                  t.slideTo(r);
                })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
                  t.slideTo(r);
                })) : t.slideTo(r);
              } else t.slideTo(r);
            }
          },
          loop: {
            loopCreate: function loopCreate() {
              var e = this,
                  t = r(),
                  i = e.params,
                  s = e.$wrapperEl;
              s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
              var a = s.children("." + i.slideClass);

              if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - a.length % i.slidesPerGroup;

                if (n !== i.slidesPerGroup) {
                  for (var l = 0; l < n; l += 1) {
                    var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                    s.append(o);
                  }

                  a = s.children("." + i.slideClass);
                }
              }

              "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
              var d = [],
                  h = [];
              a.each(function (t, i) {
                var s = m(t);
                i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
              });

              for (var p = 0; p < h.length; p += 1) {
                s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
              }

              for (var u = d.length - 1; u >= 0; u -= 1) {
                s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
              }
            },
            loopFix: function loopFix() {
              this.emit("beforeLoopFix");
              var e,
                  t = this.activeIndex,
                  i = this.slides,
                  s = this.loopedSlides,
                  a = this.allowSlidePrev,
                  r = this.allowSlideNext,
                  n = this.snapGrid,
                  l = this.rtlTranslate;
              this.allowSlidePrev = !0, this.allowSlideNext = !0;
              var o = -n[t] - this.getTranslate();
              if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
              }
              this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
            },
            loopDestroy: function loopDestroy() {
              var e = this.$wrapperEl,
                  t = this.params,
                  i = this.slides;
              e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
            }
          },
          grabCursor: {
            setGrabCursor: function setGrabCursor(e) {
              if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
              }
            },
            unsetGrabCursor: function unsetGrabCursor() {
              this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
            }
          },
          manipulation: {
            appendSlide: function appendSlide(e) {
              var t = this.$wrapperEl,
                  i = this.params;
              if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) {
                e[s] && t.append(e[s]);
              } else t.append(e);
              i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
            },
            prependSlide: function prependSlide(e) {
              var t = this.params,
                  i = this.$wrapperEl,
                  s = this.activeIndex;
              t.loop && this.loopDestroy();
              var a = s + 1;

              if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) {
                  e[r] && i.prepend(e[r]);
                }

                a = s + e.length;
              } else i.prepend(e);

              t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
            },
            addSlide: function addSlide(e, t) {
              var i = this.$wrapperEl,
                  s = this.params,
                  a = this.activeIndex;
              s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
              var r = this.slides.length;
              if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
                for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
                  var d = this.slides.eq(o);
                  d.remove(), l.unshift(d);
                }

                if ("object" == typeof t && "length" in t) {
                  for (var h = 0; h < t.length; h += 1) {
                    t[h] && i.append(t[h]);
                  }

                  n = a > e ? a + t.length : a;
                } else i.append(t);

                for (var p = 0; p < l.length; p += 1) {
                  i.append(l[p]);
                }

                s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
              }
            },
            removeSlide: function removeSlide(e) {
              var t = this.params,
                  i = this.$wrapperEl,
                  s = this.activeIndex;
              t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
              var a,
                  r = s;

              if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) {
                  a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                }

                r = Math.max(r, 0);
              } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

              t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
            },
            removeAllSlides: function removeAllSlides() {
              for (var e = [], t = 0; t < this.slides.length; t += 1) {
                e.push(t);
              }

              this.removeSlide(e);
            }
          },
          events: {
            attachEvents: function attachEvents() {
              var e = r(),
                  t = this.params,
                  i = this.touchEvents,
                  s = this.el,
                  a = this.wrapperEl,
                  n = this.device,
                  l = this.support;
              this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = N.bind(this)), this.onClick = B.bind(this);
              var o = !!t.nested;
              if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
                if (l.touch) {
                  var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  };
                  s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: o
                  } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
                }

                (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
            },
            detachEvents: function detachEvents() {
              var e = r(),
                  t = this.params,
                  i = this.touchEvents,
                  s = this.el,
                  a = this.wrapperEl,
                  n = this.device,
                  l = this.support,
                  o = !!t.nested;
              if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
                if (l.touch) {
                  var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  };
                  s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
                }

                (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
            }
          },
          breakpoints: {
            setBreakpoint: function setBreakpoint() {
              var e = this.activeIndex,
                  t = this.initialized,
                  i = this.loopedSlides,
                  s = void 0 === i ? 0 : i,
                  a = this.params,
                  r = this.$el,
                  n = a.breakpoints;

              if (n && (!n || 0 !== Object.keys(n).length)) {
                var l = this.getBreakpoint(n);

                if (l && this.currentBreakpoint !== l) {
                  var o = l in n ? n[l] : void 0;
                  o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                    var t = o[e];
                    void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
                  });
                  var d = o || this.originalParams,
                      h = a.slidesPerColumn > 1,
                      p = d.slidesPerColumn > 1;
                  h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                  var u = d.direction && d.direction !== a.direction,
                      c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                  u && t && this.changeDirection(), S(this.params, d), S(this, {
                    allowTouchMove: this.params.allowTouchMove,
                    allowSlideNext: this.params.allowSlideNext,
                    allowSlidePrev: this.params.allowSlidePrev
                  }), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
                }
              }
            },
            getBreakpoint: function getBreakpoint(e) {
              var t = l();

              if (e) {
                var i = !1,
                    s = Object.keys(e).map(function (e) {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    var i = parseFloat(e.substr(1));
                    return {
                      value: t.innerHeight * i,
                      point: e
                    };
                  }

                  return {
                    value: e,
                    point: e
                  };
                });
                s.sort(function (e, t) {
                  return parseInt(e.value, 10) - parseInt(t.value, 10);
                });

                for (var a = 0; a < s.length; a += 1) {
                  var r = s[a],
                      n = r.point;
                  r.value <= t.innerWidth && (i = n);
                }

                return i || "max";
              }
            }
          },
          checkOverflow: {
            checkOverflow: function checkOverflow() {
              var e = this.params,
                  t = this.isLocked,
                  i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
              e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
            }
          },
          classes: {
            addClasses: function addClasses() {
              var e = this.classNames,
                  t = this.params,
                  i = this.rtl,
                  s = this.$el,
                  a = this.device,
                  r = [];
              r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
                e.push(t.containerModifierClass + i);
              }), s.addClass(e.join(" ")), this.emitContainerClasses();
            },
            removeClasses: function removeClasses() {
              var e = this.$el,
                  t = this.classNames;
              e.removeClass(t.join(" ")), this.emitContainerClasses();
            }
          },
          images: {
            loadImage: function loadImage(e, t, i, s, a, r) {
              var n,
                  o = l();

              function d() {
                r && r();
              }

              m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
            },
            preloadImages: function preloadImages() {
              var e = this;

              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
              }

              e.imagesToLoad = e.$el.find("img");

              for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                var s = e.imagesToLoad[i];
                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
              }
            }
          }
        },
            F = {},
            W = function () {
          function t() {
            for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) {
              a[r] = arguments[r];
            }

            1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
            var n = this;
            n.support = z(), n.device = P({
              userAgent: i.userAgent
            }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
              var t = n.modules[e];

              if (t.params) {
                var s = Object.keys(t.params)[0],
                    a = t.params[s];
                if ("object" != typeof a || null === a) return;
                if (!(s in i) || !("enabled" in a)) return;
                !0 === i[s] && (i[s] = {
                  enabled: !0
                }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
                  enabled: !1
                });
              }
            });
            var l = S({}, Y);
            n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
              n.on(e, n.params.on[e]);
            }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m;
            var o = m(n.params.el);

            if (e = o[0]) {
              if (o.length > 1) {
                var d = [];
                return o.each(function (e) {
                  var s = S({}, i, {
                    el: e
                  });
                  d.push(new t(s));
                }), d;
              }

              var h, p, u;
              return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
                return o.children(e);
              } : h = o.children("." + n.params.wrapperClass), S(n, {
                $el: o,
                el: e,
                $wrapperEl: h,
                wrapperEl: h[0],
                classNames: [],
                slides: m(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function isHorizontal() {
                  return "horizontal" === n.params.direction;
                },
                isVertical: function isVertical() {
                  return "vertical" === n.params.direction;
                },
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
                rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
                wrongRTL: "-webkit-box" === h.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
                touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
                  start: p[0],
                  move: p[1],
                  end: p[2],
                  cancel: p[3]
                }, n.touchEventsDesktop = {
                  start: u[0],
                  move: u[1],
                  end: u[2]
                }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements: "input, select, option, textarea, button, video, label",
                  lastClickTime: x(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: n.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
              }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
            }
          }

          var i,
              s,
              a,
              r = t.prototype;
          return r.emitContainerClasses = function () {
            var e = this;

            if (e.params._emitClasses && e.el) {
              var t = e.el.className.split(" ").filter(function (t) {
                return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
              });
              e.emit("_containerClasses", t.join(" "));
            }
          }, r.emitSlidesClasses = function () {
            var e = this;
            e.params._emitClasses && e.el && e.slides.each(function (t) {
              var i = t.className.split(" ").filter(function (t) {
                return 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass);
              });
              e.emit("_slideClass", t, i.join(" "));
            });
          }, r.slidesPerViewDynamic = function () {
            var e = this.params,
                t = this.slides,
                i = this.slidesGrid,
                s = this.size,
                a = this.activeIndex,
                r = 1;

            if (e.centeredSlides) {
              for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) {
                t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
              }

              for (var d = a - 1; d >= 0; d -= 1) {
                t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
              }
            } else for (var h = a + 1; h < t.length; h += 1) {
              i[h] - i[a] < s && (r += 1);
            }

            return r;
          }, r.update = function () {
            var e = this;

            if (e && !e.destroyed) {
              var t = e.snapGrid,
                  i = e.params;
              i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }

            function s() {
              var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
          }, r.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
              "vertical" === e ? t.style.width = "" : t.style.height = "";
            }), this.emit("changeDirection"), t && this.update()), this;
          }, r.init = function () {
            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
          }, r.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i,
                s = this,
                a = s.params,
                r = s.$el,
                n = s.$wrapperEl,
                l = s.slides;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
              s.off(e);
            }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
              try {
                i[e] = null;
              } catch (e) {}

              try {
                delete i[e];
              } catch (e) {}
            })), s.destroyed = !0), null;
          }, t.extendDefaults = function (e) {
            S(F, e);
          }, t.installModule = function (e) {
            t.prototype.modules || (t.prototype.modules = {});
            var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
            t.prototype.modules[i] = e;
          }, t.use = function (e) {
            return Array.isArray(e) ? (e.forEach(function (e) {
              return t.installModule(e);
            }), t) : (t.installModule(e), t);
          }, i = t, a = [{
            key: "extendedDefaults",
            get: function get() {
              return F;
            }
          }, {
            key: "defaults",
            get: function get() {
              return Y;
            }
          }], (s = null) && e(i.prototype, s), a && e(i, a), t;
        }();

        Object.keys(V).forEach(function (e) {
          Object.keys(V[e]).forEach(function (t) {
            W.prototype[t] = V[e][t];
          });
        }), W.use([$, I]);
        var R = {
          update: function update(e) {
            var t = this,
                i = t.params,
                s = i.slidesPerView,
                a = i.slidesPerGroup,
                r = i.centeredSlides,
                n = t.params.virtual,
                l = n.addSlidesBefore,
                o = n.addSlidesAfter,
                d = t.virtual,
                h = d.from,
                p = d.to,
                u = d.slides,
                c = d.slidesGrid,
                v = d.renderSlide,
                f = d.offset;
            t.updateActiveIndex();
            var m,
                g,
                w,
                b = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
            var y = Math.max((b || 0) - w, 0),
                E = Math.min((b || 0) + g, u.length - 1),
                x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

            function T() {
              t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
            }

            if (S(t.virtual, {
              from: y,
              to: E,
              offset: x,
              slidesGrid: t.slidesGrid
            }), h === y && p === E && !e) return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: y,
              to: E,
              slides: function () {
                for (var e = [], t = y; t <= E; t += 1) {
                  e.push(u[t]);
                }

                return e;
              }()
            }), void (t.params.virtual.renderExternalUpdate && T());
            var C = [],
                M = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) {
              (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
            }

            for (var P = 0; P < u.length; P += 1) {
              P >= y && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
            }

            M.forEach(function (e) {
              t.$wrapperEl.append(v(u[e], e));
            }), C.sort(function (e, t) {
              return t - e;
            }).forEach(function (e) {
              t.$wrapperEl.prepend(v(u[e], e));
            }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
          },
          renderSlide: function renderSlide(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
          },
          appendSlide: function appendSlide(e) {
            if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) {
              e[t] && this.virtual.slides.push(e[t]);
            } else this.virtual.slides.push(e);
            this.virtual.update(!0);
          },
          prependSlide: function prependSlide(e) {
            var t = this.activeIndex,
                i = t + 1,
                s = 1;

            if (Array.isArray(e)) {
              for (var a = 0; a < e.length; a += 1) {
                e[a] && this.virtual.slides.unshift(e[a]);
              }

              i = t + e.length, s = e.length;
            } else this.virtual.slides.unshift(e);

            if (this.params.virtual.cache) {
              var r = this.virtual.cache,
                  n = {};
              Object.keys(r).forEach(function (e) {
                var t = r[e],
                    i = t.attr("data-swiper-slide-index");
                i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
              }), this.virtual.cache = n;
            }

            this.virtual.update(!0), this.slideTo(i, 0);
          },
          removeSlide: function removeSlide(e) {
            if (null != e) {
              var t = this.activeIndex;
              if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
                this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
              } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
              this.virtual.update(!0), this.slideTo(t, 0);
            }
          },
          removeAllSlides: function removeAllSlides() {
            this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
          }
        },
            q = {
          name: "virtual",
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0
            }
          },
          create: function create() {
            M(this, {
              virtual: t(t({}, R), {}, {
                slides: this.params.virtual.slides,
                cache: {}
              })
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              if (e.params.virtual.enabled) {
                e.classNames.push(e.params.containerModifierClass + "virtual");
                var t = {
                  watchSlidesProgress: !0
                };
                S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
              }
            },
            setTranslate: function setTranslate(e) {
              e.params.virtual.enabled && e.virtual.update();
            }
          }
        },
            j = {
          handle: function handle(e) {
            var t = l(),
                i = r(),
                s = this.rtlTranslate,
                a = e;
            a.originalEvent && (a = a.originalEvent);
            var n = a.keyCode || a.charCode,
                o = this.params.keyboard.pageUpDown,
                d = o && 33 === n,
                h = o && 34 === n,
                p = 37 === n,
                u = 39 === n,
                c = 38 === n,
                v = 40 === n;
            if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;

            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
              if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
                var f = !1;
                if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                var m = t.innerWidth,
                    g = t.innerHeight,
                    w = this.$el.offset();
                s && (w.left -= this.$el[0].scrollLeft);

                for (var b = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], y = 0; y < b.length; y += 1) {
                  var E = b[y];
                  E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0);
                }

                if (!f) return;
              }

              this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || v) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
            }
          },
          enable: function enable() {
            var e = r();
            this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
          },
          disable: function disable() {
            var e = r();
            this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
          }
        },
            _ = {
          name: "keyboard",
          params: {
            keyboard: {
              enabled: !1,
              onlyInViewport: !0,
              pageUpDown: !0
            }
          },
          create: function create() {
            M(this, {
              keyboard: t({
                enabled: !1
              }, j)
            });
          },
          on: {
            init: function init(e) {
              e.params.keyboard.enabled && e.keyboard.enable();
            },
            destroy: function destroy(e) {
              e.keyboard.enabled && e.keyboard.disable();
            }
          }
        };
        var U = {
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: function event() {
            return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
              var e = r(),
                  t = ("onwheel" in e);

              if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
              }

              return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
            }() ? "wheel" : "mousewheel";
          },
          normalize: function normalize(e) {
            var t = 0,
                i = 0,
                s = 0,
                a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
              spinX: t,
              spinY: i,
              pixelX: s,
              pixelY: a
            };
          },
          handleMouseEnter: function handleMouseEnter() {
            this.mouseEntered = !0;
          },
          handleMouseLeave: function handleMouseLeave() {
            this.mouseEntered = !1;
          },
          handle: function handle(e) {
            var t = e,
                i = this,
                s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0,
                n = i.rtlTranslate ? -1 : 1,
                l = U.normalize(t);
            if (s.forceToAxis) {
              if (i.isHorizontal()) {
                if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                r = -l.pixelX * n;
              } else {
                if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                r = -l.pixelY;
              }
            } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
            if (0 === r) return !0;

            if (s.invert && (r = -r), i.params.freeMode) {
              var o = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r)
              },
                  d = i.mousewheel.lastEventBeforeSnap,
                  h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;

              if (!h) {
                i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                var p = i.getTranslate() + r * s.sensitivity,
                    u = i.isBeginning,
                    c = i.isEnd;

                if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                  clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                  var v = i.mousewheel.recentWheelEvents;
                  v.length >= 15 && v.shift();
                  var f = v.length ? v[v.length - 1] : void 0,
                      g = v[0];
                  if (v.push(o), f && (o.delta > f.delta || o.direction !== f.direction)) v.splice(0);else if (v.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
                    var w = r > 0 ? .8 : .2;
                    i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.mousewheel.timeout = E(function () {
                      i.slideToClosest(i.params.speed, !0, void 0, w);
                    }, 0);
                  }
                  i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
                    i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
                  }, 500));
                }

                if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
              }
            } else {
              var b = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e
              },
                  y = i.mousewheel.recentWheelEvents;
              y.length >= 2 && y.shift();
              var T = y.length ? y[y.length - 1] : void 0;
              if (y.push(b), T ? (b.direction !== T.direction || b.delta > T.delta || b.time > T.time + 150) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0;
            }

            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
          },
          animateSlider: function animateSlider(e) {
            var t = l();
            return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
          },
          releaseScroll: function releaseScroll(e) {
            var t = this.params.mousewheel;

            if (e.direction < 0) {
              if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

            return !1;
          },
          enable: function enable() {
            var e = U.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
          },
          disable: function disable() {
            var e = U.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
          }
        },
            K = {
          update: function update() {
            var e = this.params.navigation;

            if (!this.params.loop) {
              var t = this.navigation,
                  i = t.$nextEl,
                  s = t.$prevEl;
              s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
            }
          },
          onPrevClick: function onPrevClick(e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
          },
          onNextClick: function onNextClick(e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
          },
          init: function init() {
            var e,
                t,
                i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0]
            }));
          },
          destroy: function destroy() {
            var e = this.navigation,
                t = e.$nextEl,
                i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
          }
        },
            Z = {
          update: function update() {
            var e = this.rtl,
                t = this.params.pagination;

            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
              var i,
                  s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                  a = this.pagination.$el,
                  r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

              if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                var n,
                    l,
                    o,
                    d = this.pagination.bullets;
                if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
                  var s = m(e),
                      a = s.index();
                  a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
                });else {
                  var h = d.eq(i),
                      p = h.index();

                  if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                    for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1) {
                      d.eq(v).addClass(t.bulletActiveClass + "-main");
                    }

                    if (this.params.loop) {
                      if (p >= d.length - t.dynamicMainBullets) {
                        for (var f = t.dynamicMainBullets; f >= 0; f -= 1) {
                          d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                        }

                        d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                      } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                    } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                  }
                }

                if (t.dynamicBullets) {
                  var g = Math.min(d.length, t.dynamicMainBullets + 4),
                      w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                      b = e ? "right" : "left";
                  d.css(this.isHorizontal() ? b : "top", w + "px");
                }
              }

              if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                var y;
                y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                var E = (i + 1) / r,
                    x = 1,
                    T = 1;
                "horizontal" === y ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
              }

              "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
            }
          },
          render: function render() {
            var e = this.params.pagination;

            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
              var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                  i = this.pagination.$el,
                  s = "";

              if ("bullets" === e.type) {
                for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
                  e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                }

                i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
              }

              "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
            }
          },
          init: function init() {
            var e = this,
                t = e.params.pagination;

            if (t.el) {
              var i = m(t.el);
              0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                var i = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }), S(e.pagination, {
                $el: i,
                el: i[0]
              }));
            }
          },
          destroy: function destroy() {
            var e = this.params.pagination;

            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
              var t = this.pagination.$el;
              t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
            }
          }
        },
            J = {
          setTranslate: function setTranslate() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
              var e = this.scrollbar,
                  t = this.rtlTranslate,
                  i = this.progress,
                  s = e.dragSize,
                  a = e.trackSize,
                  r = e.$dragEl,
                  n = e.$el,
                  l = this.params.scrollbar,
                  o = s,
                  d = (a - s) * i;
              t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                n[0].style.opacity = 0, n.transition(400);
              }, 1e3));
            }
          },
          setTransition: function setTransition(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
          },
          updateSize: function updateSize() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
              var e = this.scrollbar,
                  t = e.$dragEl,
                  i = e.$el;
              t[0].style.width = "", t[0].style.height = "";
              var s,
                  a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                  r = this.size / this.virtualSize,
                  n = r * (a / this.size);
              s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
                trackSize: a,
                divider: r,
                moveDivider: n,
                dragSize: s
              }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
            }
          },
          getPointerPosition: function getPointerPosition(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
          },
          setDragPosition: function setDragPosition(e) {
            var t,
                i = this.scrollbar,
                s = this.rtlTranslate,
                a = i.$el,
                r = i.dragSize,
                n = i.trackSize,
                l = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
          },
          onDragStart: function onDragStart(e) {
            var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el,
                r = i.$dragEl;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
          },
          onDragMove: function onDragMove(e) {
            var t = this.scrollbar,
                i = this.$wrapperEl,
                s = t.$el,
                a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
          },
          onDragEnd: function onDragEnd(e) {
            var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
              a.css("opacity", 0), a.transition(400);
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
          },
          enableDraggable: function enableDraggable() {
            if (this.params.scrollbar.el) {
              var e = r(),
                  t = this.scrollbar,
                  i = this.touchEventsTouch,
                  s = this.touchEventsDesktop,
                  a = this.params,
                  n = this.support,
                  l = t.$el[0],
                  o = !(!n.passiveListener || !a.passiveListeners) && {
                passive: !1,
                capture: !1
              },
                  d = !(!n.passiveListener || !a.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
            }
          },
          disableDraggable: function disableDraggable() {
            if (this.params.scrollbar.el) {
              var e = r(),
                  t = this.scrollbar,
                  i = this.touchEventsTouch,
                  s = this.touchEventsDesktop,
                  a = this.params,
                  n = this.support,
                  l = t.$el[0],
                  o = !(!n.passiveListener || !a.passiveListeners) && {
                passive: !1,
                capture: !1
              },
                  d = !(!n.passiveListener || !a.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
            }
          },
          init: function init() {
            if (this.params.scrollbar.el) {
              var e = this.scrollbar,
                  t = this.$el,
                  i = this.params.scrollbar,
                  s = m(i.el);
              this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
              var a = s.find("." + this.params.scrollbar.dragClass);
              0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
                $el: s,
                el: s[0],
                $dragEl: a,
                dragEl: a[0]
              }), i.draggable && e.enableDraggable();
            }
          },
          destroy: function destroy() {
            this.scrollbar.disableDraggable();
          }
        },
            Q = {
          setTransform: function setTransform(e, t) {
            var i = this.rtl,
                s = m(e),
                a = i ? -1 : 1,
                r = s.attr("data-swiper-parallax") || "0",
                n = s.attr("data-swiper-parallax-x"),
                l = s.attr("data-swiper-parallax-y"),
                o = s.attr("data-swiper-parallax-scale"),
                d = s.attr("data-swiper-parallax-opacity");

            if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
              var h = d - (d - 1) * (1 - Math.abs(t));
              s[0].style.opacity = h;
            }

            if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
              var p = o - (o - 1) * (1 - Math.abs(t));
              s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
            }
          },
          setTranslate: function setTranslate() {
            var e = this,
                t = e.$el,
                i = e.slides,
                s = e.progress,
                a = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
              e.parallax.setTransform(t, s);
            }), i.each(function (t, i) {
              var r = t.progress;
              e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                e.parallax.setTransform(t, r);
              });
            });
          },
          setTransition: function setTransition(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
              var i = m(t),
                  s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
              0 === e && (s = 0), i.transition(s);
            });
          }
        },
            ee = {
          getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                s = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
          },
          onGestureStart: function onGestureStart(e) {
            var t = this.support,
                i = this.params.zoom,
                s = this.zoom,
                a = s.gesture;

            if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
              if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
              s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
            }

            a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
          },
          onGestureChange: function onGestureChange(e) {
            var t = this.support,
                i = this.params.zoom,
                s = this.zoom,
                a = s.gesture;

            if (!t.gestures) {
              if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
              s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
            }

            a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
          },
          onGestureEnd: function onGestureEnd(e) {
            var t = this.device,
                i = this.support,
                s = this.params.zoom,
                a = this.zoom,
                r = a.gesture;

            if (!i.gestures) {
              if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
              if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
              a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
            }

            r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
          },
          onTouchStart: function onTouchStart(e) {
            var t = this.device,
                i = this.zoom,
                s = i.gesture,
                a = i.image;
            s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
          },
          onTouchMove: function onTouchMove(e) {
            var t = this.zoom,
                i = t.gesture,
                s = t.image,
                a = t.velocity;

            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
              s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
              var r = s.width * t.scale,
                  n = s.height * t.scale;

              if (!(r < i.slideWidth && n < i.slideHeight)) {
                if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                  if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                  if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
                }

                e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
              }
            }
          },
          onTouchEnd: function onTouchEnd() {
            var e = this.zoom,
                t = e.gesture,
                i = e.image,
                s = e.velocity;

            if (t.$imageEl && 0 !== t.$imageEl.length) {
              if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
              i.isTouched = !1, i.isMoved = !1;
              var a = 300,
                  r = 300,
                  n = s.x * a,
                  l = i.currentX + n,
                  o = s.y * r,
                  d = i.currentY + o;
              0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
              var h = Math.max(a, r);
              i.currentX = l, i.currentY = d;
              var p = i.width * e.scale,
                  u = i.height * e.scale;
              i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
            }
          },
          onTransitionEnd: function onTransitionEnd() {
            var e = this.zoom,
                t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
          },
          toggle: function toggle(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t["in"](e);
          },
          "in": function _in(e) {
            var t,
                i,
                s,
                a,
                r,
                n,
                l,
                o,
                d,
                h,
                p,
                u,
                c,
                v,
                f,
                m,
                g = this.zoom,
                w = this.params.zoom,
                b = g.gesture,
                y = g.image;
            (b.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = b.$slideEl[0].offsetWidth, m = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + f / 2 - t, a = b.$slideEl.offset().top + m / 2 - i, l = b.$imageEl[0].offsetWidth, o = b.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > v && (n = v)) : (r = 0, n = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
          },
          out: function out() {
            var e = this.zoom,
                t = this.params.zoom,
                i = e.gesture;
            i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
          },
          toggleGestures: function toggleGestures(e) {
            var t = this.zoom,
                i = t.slideSelector,
                s = t.passiveListener;
            this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
          },
          enableGestures: function enableGestures() {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
          },
          disableGestures: function disableGestures() {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
          },
          enable: function enable() {
            var e = this.support,
                t = this.zoom;

            if (!t.enabled) {
              t.enabled = !0;
              var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
                passive: !0,
                capture: !1
              },
                  s = !e.passiveListener || {
                passive: !1,
                capture: !0
              },
                  a = "." + this.params.slideClass;
              this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
            }
          },
          disable: function disable() {
            var e = this.zoom;

            if (e.enabled) {
              var t = this.support;
              this.zoom.enabled = !1;
              var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
                passive: !0,
                capture: !1
              },
                  s = !t.passiveListener || {
                passive: !1,
                capture: !0
              },
                  a = "." + this.params.slideClass;
              t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
            }
          }
        },
            te = {
          loadInSlide: function loadInSlide(e, t) {
            void 0 === t && (t = !0);
            var i = this,
                s = i.params.lazy;

            if (void 0 !== e && 0 !== i.slides.length) {
              var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                  r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
              !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
                var r = m(e);
                r.addClass(s.loadingClass);
                var n = r.attr("data-background"),
                    l = r.attr("data-src"),
                    o = r.attr("data-srcset"),
                    d = r.attr("data-sizes"),
                    h = r.parent("picture");
                i.loadImage(r[0], l || n, o, d, !1, function () {
                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                    if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                      var t = m(e);
                      t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                    }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                      var e = a.attr("data-swiper-slide-index");

                      if (a.hasClass(i.params.slideDuplicateClass)) {
                        var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                        i.lazy.loadInSlide(p.index(), !1);
                      } else {
                        var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                        i.lazy.loadInSlide(u.index(), !1);
                      }
                    }

                    i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
                  }
                }), i.emit("lazyImageLoad", a[0], r[0]);
              });
            }
          },
          load: function load() {
            var e = this,
                t = e.$wrapperEl,
                i = e.params,
                s = e.slides,
                a = e.activeIndex,
                r = e.virtual && i.virtual.enabled,
                n = i.lazy,
                l = i.slidesPerView;

            function o(e) {
              if (r) {
                if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
              } else if (s[e]) return !0;

              return !1;
            }

            function d(e) {
              return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
            }

            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
              var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
              e.lazy.loadInSlide(i);
            });else if (l > 1) for (var h = a; h < a + l; h += 1) {
              o(h) && e.lazy.loadInSlide(h);
            } else e.lazy.loadInSlide(a);
            if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
              for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + l; f < c; f += 1) {
                o(f) && e.lazy.loadInSlide(f);
              }

              for (var g = v; g < a; g += 1) {
                o(g) && e.lazy.loadInSlide(g);
              }
            } else {
              var w = t.children("." + i.slideNextClass);
              w.length > 0 && e.lazy.loadInSlide(d(w));
              var b = t.children("." + i.slidePrevClass);
              b.length > 0 && e.lazy.loadInSlide(d(b));
            }
          }
        },
            ie = {
          LinearSpline: function LinearSpline(e, t) {
            var i,
                s,
                a,
                r,
                n,
                l = function l(e, t) {
              for (s = -1, i = e.length; i - s > 1;) {
                e[a = i + s >> 1] <= t ? s = a : i = a;
              }

              return i;
            };

            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
              return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
            }, this;
          },
          getInterpolateFunction: function getInterpolateFunction(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
          },
          setTranslate: function setTranslate(e, t) {
            var i,
                s,
                a = this,
                r = a.controller.control,
                n = a.constructor;

            function l(e) {
              var t = a.rtlTranslate ? -a.translate : a.translate;
              "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
              r[o] !== t && r[o] instanceof n && l(r[o]);
            } else r instanceof n && t !== r && l(r);
          },
          setTransition: function setTransition(e, t) {
            var i,
                s = this,
                a = s.constructor,
                r = s.controller.control;

            function n(t) {
              t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
                t.updateAutoHeight();
              }), t.$wrapperEl.transitionEnd(function () {
                r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
              }));
            }

            if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) {
              r[i] !== t && r[i] instanceof a && n(r[i]);
            } else r instanceof a && t !== r && n(r);
          }
        },
            se = {
          makeElFocusable: function makeElFocusable(e) {
            return e.attr("tabIndex", "0"), e;
          },
          makeElNotFocusable: function makeElNotFocusable(e) {
            return e.attr("tabIndex", "-1"), e;
          },
          addElRole: function addElRole(e, t) {
            return e.attr("role", t), e;
          },
          addElLabel: function addElLabel(e, t) {
            return e.attr("aria-label", t), e;
          },
          disableEl: function disableEl(e) {
            return e.attr("aria-disabled", !0), e;
          },
          enableEl: function enableEl(e) {
            return e.attr("aria-disabled", !1), e;
          },
          onEnterKey: function onEnterKey(e) {
            var t = this.params.a11y;

            if (13 === e.keyCode) {
              var i = m(e.target);
              this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
            }
          },
          notify: function notify(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
          },
          updateNavigation: function updateNavigation() {
            if (!this.params.loop && this.navigation) {
              var e = this.navigation,
                  t = e.$nextEl,
                  i = e.$prevEl;
              i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
            }
          },
          updatePagination: function updatePagination() {
            var e = this,
                t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
              var s = m(i);
              e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)));
            });
          },
          init: function init() {
            this.$el.append(this.a11y.liveRegion);
            var e,
                t,
                i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
          },
          destroy: function destroy() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
          }
        },
            ae = {
          init: function init() {
            var e = l();

            if (this.params.history) {
              if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
              var t = this.history;
              t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
            }
          },
          destroy: function destroy() {
            var e = l();
            this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
          },
          setHistoryPopState: function setHistoryPopState() {
            this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
          },
          getPathValues: function getPathValues(e) {
            var t = l(),
                i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
              return "" !== e;
            }),
                s = i.length;
            return {
              key: i[s - 2],
              value: i[s - 1]
            };
          },
          setHistory: function setHistory(e, t) {
            var i = l();

            if (this.history.initialized && this.params.history.enabled) {
              var s;
              s = this.params.url ? new URL(this.params.url) : i.location;
              var a = this.slides.eq(t),
                  r = ae.slugify(a.attr("data-history"));
              s.pathname.includes(e) || (r = e + "/" + r);
              var n = i.history.state;
              n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
                value: r
              }, null, r) : i.history.pushState({
                value: r
              }, null, r));
            }
          },
          slugify: function slugify(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
          },
          scrollToSlide: function scrollToSlide(e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
              var r = this.slides.eq(s);

              if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                var n = r.index();
                this.slideTo(n, e, i);
              }
            } else this.slideTo(0, e, i);
          }
        },
            re = {
          onHashCange: function onHashCange() {
            var e = r();
            this.emit("hashChange");
            var t = e.location.hash.replace("#", "");

            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
              var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
              if (void 0 === i) return;
              this.slideTo(i);
            }
          },
          setHash: function setHash() {
            var e = l(),
                t = r();
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || false), this.emit("hashSet");else {
              var i = this.slides.eq(this.activeIndex),
                  s = i.attr("data-hash") || i.attr("data-history");
              t.location.hash = s || "", this.emit("hashSet");
            }
          },
          init: function init() {
            var e = r(),
                t = l();

            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
              this.hashNavigation.initialized = !0;
              var i = e.location.hash.replace("#", "");
              if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var n = this.slides.eq(s);

                if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                  var o = n.index();
                  this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                }
              }
              this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
            }
          },
          destroy: function destroy() {
            var e = l();
            this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
          }
        },
            ne = {
          run: function run() {
            var e = this,
                t = e.slides.eq(e.activeIndex),
                i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
              e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, i);
          },
          start: function start() {
            return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
          },
          stop: function stop() {
            return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
          },
          pause: function pause(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
          },
          onVisibilityChange: function onVisibilityChange() {
            var e = r();
            "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
          },
          onTransitionEnd: function onTransitionEnd(e) {
            this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
          }
        },
            le = {
          setTranslate: function setTranslate() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
              var i = this.slides.eq(t),
                  s = -i[0].swiperSlideOffset;
              this.params.virtualTranslate || (s -= this.translate);
              var a = 0;
              this.isHorizontal() || (a = s, s = 0);
              var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
              i.css({
                opacity: r
              }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
            }
          },
          setTransition: function setTransition(e) {
            var t = this,
                i = t.slides,
                s = t.$wrapperEl;

            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
              var a = !1;
              i.transitionEnd(function () {
                if (!a && t && !t.destroyed) {
                  a = !0, t.animating = !1;

                  for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
                    s.trigger(e[i]);
                  }
                }
              });
            }
          }
        },
            oe = {
          setTranslate: function setTranslate() {
            var e,
                t = this.$el,
                i = this.$wrapperEl,
                s = this.slides,
                a = this.width,
                r = this.height,
                n = this.rtlTranslate,
                l = this.size,
                o = this.browser,
                d = this.params.cubeEffect,
                h = this.isHorizontal(),
                p = this.virtual && this.params.virtual.enabled,
                u = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
              height: a + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));

            for (var c = 0; c < s.length; c += 1) {
              var v = s.eq(c),
                  f = c;
              p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
              var g = 90 * f,
                  w = Math.floor(g / 360);
              n && (g = -g, w = Math.floor(-g / 360));
              var b = Math.max(Math.min(v[0].progress, 1), -1),
                  y = 0,
                  E = 0,
                  x = 0;
              f % 4 == 0 ? (y = 4 * -w * l, x = 0) : (f - 1) % 4 == 0 ? (y = 0, x = 4 * -w * l) : (f - 2) % 4 == 0 ? (y = l + 4 * w * l, x = l) : (f - 3) % 4 == 0 && (y = -l, x = 3 * l + 4 * l * w), n && (y = -y), h || (E = y, y = 0);
              var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + y + "px, " + E + "px, " + x + "px)";

              if (b <= 1 && b > -1 && (u = 90 * f + 90 * b, n && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                    S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
              }
            }

            if (i.css({
              "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
              "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
              var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                  z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                  P = d.shadowScale,
                  k = d.shadowScale / z,
                  $ = d.shadowOffset;
              e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
            }
            var L = o.isSafari || o.isWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
          },
          setTransition: function setTransition(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
          }
        },
            de = {
          setTranslate: function setTranslate() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
              var s = e.eq(i),
                  a = s[0].progress;
              this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
              var r = -180 * a,
                  n = 0,
                  l = -s[0].swiperSlideOffset,
                  o = 0;

              if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                    h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
              }

              s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
            }
          },
          setTransition: function setTransition(e) {
            var t = this,
                i = t.slides,
                s = t.activeIndex,
                a = t.$wrapperEl;

            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
              var r = !1;
              i.eq(s).transitionEnd(function () {
                if (!r && t && !t.destroyed) {
                  r = !0, t.animating = !1;

                  for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
                    a.trigger(e[i]);
                  }
                }
              });
            }
          }
        },
            he = {
          setTranslate: function setTranslate() {
            for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
              var u = i.eq(h),
                  c = s[h],
                  v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
                  f = r ? o * v : 0,
                  g = r ? 0 : o * v,
                  w = -d * Math.abs(v),
                  b = a.stretch;
              "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(a.stretch) / 100 * c);
              var y = r ? 0 : b * v,
                  E = r ? b * v : 0,
                  x = 1 - (1 - a.scale) * Math.abs(v);
              Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(f) < .001 && (f = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
              var T = "translate3d(" + E + "px," + y + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + f + "deg) scale(" + x + ")";

              if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
                var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                    S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0);
              }
            }
          },
          setTransition: function setTransition(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          }
        },
            pe = {
          init: function init() {
            var e = this.params.thumbs;
            if (this.thumbs.initialized) return !1;
            this.thumbs.initialized = !0;
            var t = this.constructor;
            return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), S(this.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
              watchSlidesVisibility: !0,
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
          },
          onThumbClick: function onThumbClick() {
            var e = this.thumbs.swiper;

            if (e) {
              var t = e.clickedIndex,
                  i = e.clickedSlide;

              if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                var s;

                if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                  var a = this.activeIndex;
                  this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                  var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                      n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                  s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
                }

                this.slideTo(s);
              }
            }
          },
          update: function update(e) {
            var t = this.thumbs.swiper;

            if (t) {
              var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                  s = this.params.thumbs.autoScrollOffset,
                  a = s && !t.params.loop;

              if (this.realIndex !== t.realIndex || a) {
                var r,
                    n,
                    l = t.activeIndex;

                if (t.params.loop) {
                  t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
                  var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                      d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                  r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
                } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

                a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
              }

              var h = 1,
                  p = this.params.thumbs.slideThumbActiveClass;
              if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) {
                t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
              } else for (var c = 0; c < h; c += 1) {
                t.slides.eq(this.realIndex + c).addClass(p);
              }
            }
          }
        },
            ue = [q, _, {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null
            }
          },
          create: function create() {
            M(this, {
              mousewheel: {
                enabled: !1,
                lastScrollTime: x(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                enable: U.enable,
                disable: U.disable,
                handle: U.handle,
                handleMouseEnter: U.handleMouseEnter,
                handleMouseLeave: U.handleMouseLeave,
                animateSlider: U.animateSlider,
                releaseScroll: U.releaseScroll
              }
            });
          },
          on: {
            init: function init(e) {
              !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
            },
            destroy: function destroy(e) {
              e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
            }
          }
        }, {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock"
            }
          },
          create: function create() {
            M(this, {
              navigation: t({}, K)
            });
          },
          on: {
            init: function init(e) {
              e.navigation.init(), e.navigation.update();
            },
            toEdge: function toEdge(e) {
              e.navigation.update();
            },
            fromEdge: function fromEdge(e) {
              e.navigation.update();
            },
            destroy: function destroy(e) {
              e.navigation.destroy();
            },
            click: function click(e, t) {
              var i,
                  s = e.navigation,
                  a = s.$nextEl,
                  r = s.$prevEl;
              !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
            }
          }
        }, {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function formatFractionCurrent(e) {
                return e;
              },
              formatFractionTotal: function formatFractionTotal(e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock"
            }
          },
          create: function create() {
            M(this, {
              pagination: t({
                dynamicBulletIndex: 0
              }, Z)
            });
          },
          on: {
            init: function init(e) {
              e.pagination.init(), e.pagination.render(), e.pagination.update();
            },
            activeIndexChange: function activeIndexChange(e) {
              (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
            },
            snapIndexChange: function snapIndexChange(e) {
              e.params.loop || e.pagination.update();
            },
            slidesLengthChange: function slidesLengthChange(e) {
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange: function snapGridLengthChange(e) {
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy: function destroy(e) {
              e.pagination.destroy();
            },
            click: function click(e, t) {
              e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
            }
          }
        }, {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag"
            }
          },
          create: function create() {
            M(this, {
              scrollbar: t({
                isTouched: !1,
                timeout: null,
                dragTimeout: null
              }, J)
            });
          },
          on: {
            init: function init(e) {
              e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
            },
            update: function update(e) {
              e.scrollbar.updateSize();
            },
            resize: function resize(e) {
              e.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate(e) {
              e.scrollbar.updateSize();
            },
            setTranslate: function setTranslate(e) {
              e.scrollbar.setTranslate();
            },
            setTransition: function setTransition(e, t) {
              e.scrollbar.setTransition(t);
            },
            destroy: function destroy(e) {
              e.scrollbar.destroy();
            }
          }
        }, {
          name: "parallax",
          params: {
            parallax: {
              enabled: !1
            }
          },
          create: function create() {
            M(this, {
              parallax: t({}, Q)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
            },
            init: function init(e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTranslate: function setTranslate(e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTransition: function setTransition(e, t) {
              e.params.parallax.enabled && e.parallax.setTransition(t);
            }
          }
        }, {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed"
            }
          },
          create: function create() {
            var e = this;
            M(e, {
              zoom: t({
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {}
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0
                }
              }, ee)
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function get() {
                return i;
              },
              set: function set(t) {
                if (i !== t) {
                  var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                      a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                  e.emit("zoomChange", t, s, a);
                }

                i = t;
              }
            });
          },
          on: {
            init: function init(e) {
              e.params.zoom.enabled && e.zoom.enable();
            },
            destroy: function destroy(e) {
              e.zoom.disable();
            },
            touchStart: function touchStart(e, t) {
              e.zoom.enabled && e.zoom.onTouchStart(t);
            },
            touchEnd: function touchEnd(e, t) {
              e.zoom.enabled && e.zoom.onTouchEnd(t);
            },
            doubleTap: function doubleTap(e, t) {
              e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
            },
            transitionEnd: function transitionEnd(e) {
              e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
            },
            slideChange: function slideChange(e) {
              e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
            }
          }
        }, {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader"
            }
          },
          create: function create() {
            M(this, {
              lazy: t({
                initialImageLoaded: !1
              }, te)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
            },
            init: function init(e) {
              e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
            },
            scroll: function scroll(e) {
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
            },
            resize: function resize(e) {
              e.params.lazy.enabled && e.lazy.load();
            },
            scrollbarDragMove: function scrollbarDragMove(e) {
              e.params.lazy.enabled && e.lazy.load();
            },
            transitionStart: function transitionStart(e) {
              e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
            },
            transitionEnd: function transitionEnd(e) {
              e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
            },
            slideChange: function slideChange(e) {
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
            }
          }
        }, {
          name: "controller",
          params: {
            controller: {
              control: void 0,
              inverse: !1,
              by: "slide"
            }
          },
          create: function create() {
            M(this, {
              controller: t({
                control: this.params.controller.control
              }, ie)
            });
          },
          on: {
            update: function update(e) {
              e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
            },
            resize: function resize(e) {
              e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
            },
            observerUpdate: function observerUpdate(e) {
              e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
            },
            setTranslate: function setTranslate(e, t, i) {
              e.controller.control && e.controller.setTranslate(t, i);
            },
            setTransition: function setTransition(e, t, i) {
              e.controller.control && e.controller.setTransition(t, i);
            }
          }
        }, {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}"
            }
          },
          create: function create() {
            M(this, {
              a11y: t(t({}, se), {}, {
                liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
              })
            });
          },
          on: {
            init: function init(e) {
              e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
            },
            toEdge: function toEdge(e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            fromEdge: function fromEdge(e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate(e) {
              e.params.a11y.enabled && e.a11y.updatePagination();
            },
            destroy: function destroy(e) {
              e.params.a11y.enabled && e.a11y.destroy();
            }
          }
        }, {
          name: "history",
          params: {
            history: {
              enabled: !1,
              replaceState: !1,
              key: "slides"
            }
          },
          create: function create() {
            M(this, {
              history: t({}, ae)
            });
          },
          on: {
            init: function init(e) {
              e.params.history.enabled && e.history.init();
            },
            destroy: function destroy(e) {
              e.params.history.enabled && e.history.destroy();
            },
            transitionEnd: function transitionEnd(e) {
              e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
            },
            slideChange: function slideChange(e) {
              e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
            }
          }
        }, {
          name: "hash-navigation",
          params: {
            hashNavigation: {
              enabled: !1,
              replaceState: !1,
              watchState: !1
            }
          },
          create: function create() {
            M(this, {
              hashNavigation: t({
                initialized: !1
              }, re)
            });
          },
          on: {
            init: function init(e) {
              e.params.hashNavigation.enabled && e.hashNavigation.init();
            },
            destroy: function destroy(e) {
              e.params.hashNavigation.enabled && e.hashNavigation.destroy();
            },
            transitionEnd: function transitionEnd(e) {
              e.hashNavigation.initialized && e.hashNavigation.setHash();
            },
            slideChange: function slideChange(e) {
              e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
            }
          }
        }, {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1
            }
          },
          create: function create() {
            M(this, {
              autoplay: t(t({}, ne), {}, {
                running: !1,
                paused: !1
              })
            });
          },
          on: {
            init: function init(e) {
              e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
            },
            beforeTransitionStart: function beforeTransitionStart(e, t, i) {
              e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
            },
            sliderFirstMove: function sliderFirstMove(e) {
              e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
            },
            touchEnd: function touchEnd(e) {
              e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
            },
            destroy: function destroy(e) {
              e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
            }
          }
        }, {
          name: "effect-fade",
          params: {
            fadeEffect: {
              crossFade: !1
            }
          },
          create: function create() {
            M(this, {
              fadeEffect: t({}, le)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              if ("fade" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "fade");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
                };
                S(e.params, t), S(e.originalParams, t);
              }
            },
            setTranslate: function setTranslate(e) {
              "fade" === e.params.effect && e.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(e, t) {
              "fade" === e.params.effect && e.fadeEffect.setTransition(t);
            }
          }
        }, {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: .94
            }
          },
          create: function create() {
            M(this, {
              cubeEffect: t({}, oe)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              if ("cube" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0
                };
                S(e.params, t), S(e.originalParams, t);
              }
            },
            setTranslate: function setTranslate(e) {
              "cube" === e.params.effect && e.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(e, t) {
              "cube" === e.params.effect && e.cubeEffect.setTransition(t);
            }
          }
        }, {
          name: "effect-flip",
          params: {
            flipEffect: {
              slideShadows: !0,
              limitRotation: !0
            }
          },
          create: function create() {
            M(this, {
              flipEffect: t({}, de)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              if ("flip" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
                };
                S(e.params, t), S(e.originalParams, t);
              }
            },
            setTranslate: function setTranslate(e) {
              "flip" === e.params.effect && e.flipEffect.setTranslate();
            },
            setTransition: function setTransition(e, t) {
              "flip" === e.params.effect && e.flipEffect.setTransition(t);
            }
          }
        }, {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0
            }
          },
          create: function create() {
            M(this, {
              coverflowEffect: t({}, he)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
            },
            setTranslate: function setTranslate(e) {
              "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(e, t) {
              "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
            }
          }
        }, {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs"
            }
          },
          create: function create() {
            M(this, {
              thumbs: t({
                swiper: null,
                initialized: !1
              }, pe)
            });
          },
          on: {
            beforeInit: function beforeInit(e) {
              var t = e.params.thumbs;
              t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
            },
            slideChange: function slideChange(e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            update: function update(e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            resize: function resize(e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            observerUpdate: function observerUpdate(e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            setTransition: function setTransition(e, t) {
              var i = e.thumbs.swiper;
              i && i.setTransition(t);
            },
            beforeDestroy: function beforeDestroy(e) {
              var t = e.thumbs.swiper;
              t && e.thumbs.swiperCreated && t && t.destroy();
            }
          }
        }];
        return W.use(ue), W;
      }); //# sourceMappingURL=swiper-bundle.min.js.map

      /***/
    },

    /***/
    "ff0e":
    /*!************************************************************!*\
      !*** ./src/app/pages/application/application.component.ts ***!
      \************************************************************/

    /*! exports provided: ApplicationComponent */

    /***/
    function ff0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function () {
        return ApplicationComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");

      function ApplicationComponent_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", o_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", o_r11.name, " ");
        }
      }

      function ApplicationComponent_div_28_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " please Select Your Position ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_28_mat_error_1_Template, 2, 0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formName.jobDetails.errors.required);
        }
      }

      function ApplicationComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Full Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_31_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formName.FullName.errors.required);
        }
      }

      function ApplicationComponent_div_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Phone No is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_36_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formName.Phone.errors.required);
        }
      }

      function ApplicationComponent_div_40_div_1_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_40_div_1_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_40_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_40_div_1_mat_error_1_Template, 2, 0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApplicationComponent_div_40_div_1_mat_error_2_Template, 2, 0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.formName.Email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.formName.Email.errors.email);
        }
      }

      function ApplicationComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_40_div_1_Template, 3, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formName.Email.errors.required);
        }
      }

      function ApplicationComponent_div_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total experience is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_43_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.formName.experience.errors.required);
        }
      }

      function ApplicationComponent_div_46_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current CTC is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_46_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formName.CTC.errors.required);
        }
      }

      function ApplicationComponent_div_49_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Expected CTC is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_49_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.formName.Expected.errors.required);
        }
      }

      function ApplicationComponent_div_52_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reason for change is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_52_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.formName.Reason.errors.required);
        }
      }

      function ApplicationComponent_div_59_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Attach resume is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_59_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.formName.resume.errors.required);
        }
      }

      function ApplicationComponent_div_63_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Short cover letter is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApplicationComponent_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationComponent_div_63_div_1_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formName.letter.errors.required);
        }
      }

      var ApplicationComponent = /*#__PURE__*/function () {
        function ApplicationComponent(formBuilder, _snackBar) {
          _classCallCheck(this, ApplicationComponent);

          this.formBuilder = formBuilder;
          this._snackBar = _snackBar;
          this.submitted = false;
          this.options = [{
            value: "Software engineer - React Js",
            name: "Software engineer - React Js"
          }, {
            value: "Product Manager",
            name: "Product Manager"
          }, {
            value: "UX Designer",
            name: "UX Designer"
          }, {
            value: "Product UI Designer",
            name: "Product UI Designer"
          }, {
            value: "Software engineer - Front-end design",
            name: "Software engineer - Front-end design"
          }, {
            value: "Software engineer - React Js",
            name: "Software engineer - React Js"
          }, {
            value: "Software engineer - Node Js",
            name: "Software engineer - Node Js"
          }, {
            value: "Software engineer - React native",
            name: "Software engineer - React native"
          }];
          this.checkValidation();
          window.scrollTo(0, 0);
        }

        _createClass(ApplicationComponent, [{
          key: "checkValidation",
          value: function checkValidation() {
            this.applicationForm = this.formBuilder.group({
              jobDetails: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
              Phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              experience: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              CTC: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              Expected: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              Reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              resume: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              letter: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "formName",
          get: function get() {
            return this.applicationForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(data) {
            console.log(data.value);

            if (!data.valid) {} else {
              this._snackBar.open("You have Successfully Applied this position", "", {
                duration: 2000
              }); // console.log(data.value);

            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApplicationComponent;
      }();

      ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) {
        return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ApplicationComponent,
        selectors: [["app-application"]],
        decls: 68,
        vars: 13,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "login-registration"], [1, "lp-inner"], [1, "col-md-6"], [1, "form"], [1, "login-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "jobDetails", "placeholder", "Select Position", "ng-modal", "", 1, "form-control"], ["value", "", "disabled", "", "selected", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "placeholder", "Your Full Name", "formControlName", "FullName", "autocomplete", "current-FullName", 1, "form-control"], [1, "row", "m-0"], [1, "col-md-6", "pl-0"], ["type", "number", "placeholder", "Mobile", "formControlName", "Phone", "autocomplete", "current-Phone", 1, "form-control"], [1, "col-md-6", "pr-0"], ["type", "text", "placeholder", "Email", "autocomplete", "Email", "formControlName", "Email", 1, "form-control"], ["type", "text", "placeholder", "Total experience", "formControlName", "experience", "autocomplete", "current-experience", 1, "form-control"], ["type", "text", "placeholder", "Current CTC", "formControlName", "CTC", "autocomplete", "current-CTC", 1, "form-control"], ["type", "text", "placeholder", "Expected CTC", "formControlName", "Expected", "autocomplete", "current-Expected", 1, "form-control"], ["type", "text", "placeholder", "Reasong for change", "formControlName", "Reason", "autocomplete", "current-Reason", 1, "form-control"], [1, "resume"], ["type", "file", "placeholder", "Attach resume (PDF/Doc only)", "formControlName", "resume", "autocomplete", "current-resume", 1, "form-control"], ["src", "../../assets/images/application-icon-1.svg", "alt", "icon"], ["rows", "5", "type", "text", "placeholder", "Short cover letter", "formControlName", "letter", "autocomplete", "current-letter", 1, "form-control"], [1, "form-group", "text-left"], [1, "btn", "btn-main", 3, "disabled", "click"], ["_ngcontent-jba-c20", "", "src", "../../../assets/images/arrow.svg", "alt", "icon"], [3, "value"]],
        template: function ApplicationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Application to join ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " our team ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Apply now");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ApplicationComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit(ctx.applicationForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " select Your Position ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ApplicationComponent_option_27_Template, 2, 2, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ApplicationComponent_div_28_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ApplicationComponent_div_31_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ApplicationComponent_div_36_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ApplicationComponent_div_40_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ApplicationComponent_div_43_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ApplicationComponent_div_46_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ApplicationComponent_div_49_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ApplicationComponent_div_52_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Attach resume");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ApplicationComponent_div_59_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "textarea", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ApplicationComponent_div_63_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationComponent_Template_button_click_65_listener() {
              return ctx.onSubmit(ctx.applicationForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.applicationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.jobDetails.invalid && ctx.formName.jobDetails.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.FullName.invalid && ctx.formName.FullName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.Phone.invalid && ctx.formName.Phone.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.Email.invalid && ctx.formName.Email.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.experience.invalid && ctx.formName.experience.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.CTC.invalid && ctx.formName.CTC.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.Expected.invalid && ctx.formName.Expected.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.Reason.invalid && ctx.formName.Reason.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.resume.invalid && ctx.formName.resume.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formName.letter.invalid && ctx.formName.letter.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.applicationForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/career-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 101%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 79px;\n  margin-bottom: 60px;\n  margin-right: 180px;\n}\n.lp-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 45px;\n  line-height: 60px;\n  margin-right: 15%;\n  letter-spacing: 1px;\n  color: #262332;\n}\n.lp-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 28px;\n  margin: 30px 0 35px;\n  color: #262332;\n  mix-blend-mode: normal;\n  opacity: 0.5;\n}\n.login-registration[_ngcontent-%COMP%] {\n  background-image: url(/../../assets/images/application-icon-2.svg), url(/../../assets/images/application-icon-3.svg);\n  background-repeat: no-repeat;\n  background-position: 1% 40%, 100% 73%;\n  padding: 135px 0;\n}\n.login-registration[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.login-registration[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 2px solid #262332;\n  min-height: 44px;\n  margin-bottom: 10px;\n}\n.login-registration[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-registration[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 13px;\n}\n.login-registration[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 15px;\n  letter-spacing: 0.18461539px;\n}\n.find-out[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 100px 0;\n}\n.fuom[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 60px;\n  text-align: center;\n  letter-spacing: 1px;\n  margin-bottom: 60px;\n}\n.btn.btn-main[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  border-radius: 5px;\n  padding: 15px 35px;\n  color: #fff;\n  transition: 0.4s ease all;\n}\n.btn.btn-main[_ngcontent-%COMP%]:hover {\n  transform: translateY(5px) scale(0.9);\n}\nmat-error[_ngcontent-%COMP%] {\n  color: red;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-right: 388px;\n  }\n\n  .login-registration[_ngcontent-%COMP%] {\n    background-position: 9% 96%, 100% 73%;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .login-registration[_ngcontent-%COMP%] {\n    padding: 110px 0;\n  }\n\n  .lp-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .lp-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 30px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .login-registration[_ngcontent-%COMP%] {\n    padding: 70px 0 110px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .login-registration[_ngcontent-%COMP%] {\n    background-image: none;\n    padding: 70px 0 20px;\n  }\n  .login-registration[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  mat-error[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 1px;\n    width: 15px;\n  }\n\n  .btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 4px;\n    width: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyUUFBQTtFQUtBLDRCQUFBO0VBQ0Esc0VBQUE7RUFDQSw2Q0FBQTtBQUhGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtBQUpKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSko7QUFPQTtFQUNFLG9IQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBTEY7QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFNRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPRTtFQUNFLGtCQUFBO0FBTEo7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFKTjtBQU9FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFMSjtBQVFBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUxGO0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1BO0VBQ0UsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSEY7QUFJRTtFQUNFLHFDQUFBO0FBRko7QUFLQTtFQUNFLFVBQUE7QUFGRjtBQU1BO0VBRUk7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFKSjs7RUFRQTtJQUNFLHFDQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0U7SUFDRSxnQkFBQTtFQU5GOztFQVNFO0lBQ0UsZUFBQTtFQU5KO0VBUUU7SUFDRSxtQkFBQTtFQU5KO0FBQ0Y7QUFVQTtFQUNFO0lBQ0UscUJBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSw2REFBQTtFQVRGO0VBVUU7SUFDRSxlQUFBO0VBUko7O0VBV0E7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBUkY7RUFTRTtJQUNFLGVBQUE7RUFQSjs7RUFVQTtJQUNFLGVBQUE7RUFQRjs7RUFTQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQU5GOztFQVNFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBTko7QUFDRiIsImZpbGUiOiJhcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdi1oZXJvIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTMuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi00LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tMS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhcmVlci1iYW5uZXItMS5zdmcpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOWVmZiAwJSwgIzMwY2NjNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDIlIDgwJSwgODglIDI5JSwgOTUlIDU3JSwgODElIDEwMSUsIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxN3B4LCAxNXB4LCAzMHB4LCBhdXRvLCAxMDAlO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcbi5scC1pbm5lciB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbjogMzBweCAwIDM1cHg7XHJcbiAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcbi5sb2dpbi1yZWdpc3RyYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHBsaWNhdGlvbi1pY29uLTIuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHBsaWNhdGlvbi1pY29uLTMuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDElIDQwJSwgMTAwJSA3MyU7XHJcbiAgcGFkZGluZzogMTM1cHggMDtcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjIzMzI7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAucmVzdW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHRvcDogMTNweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xODQ2MTUzOXB4O1xyXG4gIH1cclxufVxyXG4uZmluZC1vdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxufVxyXG4uZnVvbSB7XHJcbiAgY29sb3I6ICMyNjIzMzI7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4uYnRuLmJ0bi1tYWluIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNXB4IDM1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlIGFsbDtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHNjYWxlKDAuOSk7XHJcbiAgfVxyXG59XHJcbm1hdC1lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKipcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzg4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0cmF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDklIDk2JSwgMTAwJSA3MyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAubG9naW4tcmVnaXN0cmF0aW9uIHtcclxuICAgIHBhZGRpbmc6IDExMHB4IDA7XHJcbiAgfVxyXG4gIC5scC1pbm5lciB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmxvZ2luLXJlZ2lzdHJhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDAgMTEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLXJlZ2lzdHJhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgcGFkZGluZzogNzBweCAwIDIwcHg7XHJcbiAgICAucHItMCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgbWF0LWVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgYS5idG4uYnRuLW1haW4gaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICB9XHJcbiAgLmJ0bi5idG4tbWFpbiB7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "j5wd":
    /*!************************************!*\
      !*** ./src/app/material-module.ts ***!
      \************************************/

    /*! exports provided: MaterialModule */

    /***/
    function j5wd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]]
        });
      })();
      /***/

    },

    /***/
    "kt6P":
    /*!*************************************************************!*\
      !*** ./src/app/pages/services/graphic/graphic.component.ts ***!
      \*************************************************************/

    /*! exports provided: GraphicComponent */

    /***/
    function kt6P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphicComponent", function () {
        return GraphicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/recent-projects/recent-projects.component */
      "D39z");

      var _c0 = function _c0() {
        return ["/contact"];
      };

      var GraphicComponent = /*#__PURE__*/function () {
        function GraphicComponent(headerService) {
          _classCallCheck(this, GraphicComponent);

          this.headerService = headerService;
          this.data = {
            title: "Are you happy with what we offer? Grab your wrapkit copy now",
            desc: "You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time",
            link: "/contact",
            linkText: "Ask for quotation"
          };
          this.headerService.isHomePage.next(false);
        }

        _createClass(GraphicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GraphicComponent;
      }();

      GraphicComponent.ɵfac = function GraphicComponent_Factory(t) {
        return new (t || GraphicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      GraphicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GraphicComponent,
        selectors: [["app-graphic"]],
        decls: 148,
        vars: 2,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "website-feature"], [1, "row", "justify-content-end"], [1, "col-md-6"], [1, "tssp"], [1, "tts"], [1, "icons"], ["src", "../../../assets/images/icon1.svg", "alt", "", 1, "img-fluid"], [1, "content"], [1, "btn", "btn-main", 3, "routerLink"], [1, "Specilize"], [1, "Specilize-title"], [1, "Specilize-list"], ["src", "../assets/images/specialize-1.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-2.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-3.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-4.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-5.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-6.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-7.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-8.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-9.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-10.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-11.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/specialize-12.svg", "alt", "", 1, "img-fluid"], [1, "lts"], [1, "lts-container"], [1, "lts-inner"], ["routerLink", "/contact", 1, "btn-white-border"], ["src", "../../../../assets/images/arrow.svg"]],
        template: function GraphicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wide range of designs and user-interfaces");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A word that helps you to build your brand. A logo is a symbol icon with logo text or image that helps your customer identify your products in the market. At Ventonix we help you to build a logo that helps you build long-term customer loyalty. We provide you the custom logos that are original and helps build a winning brand.We provide website design services consisting wireframes, layouts, and sitemap among others that you need for the online store ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Social marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-mail marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bulk SMS marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Google Adwords & many more.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "E-mail marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Bulk SMS marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Google Adwords & many more.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Get a quote \u2192");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "We specialize at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Ventonix is an imaginative designing company, specializing in various fields like Logo Design, Website Design, Mockups, Banner Design, Stationery Design, Brochure & Flyer design. We have a team of experienced designers that provides you clean and professional artwork. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Logo Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Banner Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Stationary Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Brochure & Flyer Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Ads Banner and Posters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Letterpress Business Cards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Visiting Card Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Envelope and Postcard Designs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Infographics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Label & Advertising Designs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Motion Graphics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Catalog Designs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "app-recent-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "section", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Are you happy with what we offer? Grab your wrapkit copy now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Ask for quotation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__["RecentProjectsComponent"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  padding: 130px 0 79px 0px;\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/graphic-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 100%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 78px;\n  margin-right: 688px;\n  margin-bottom: 130px;\n}\n.website-feature[_ngcontent-%COMP%] {\n  padding: 200px 0 100px 0;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 96% 30%, 5% 88%;\n}\n.website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  max-width: 400px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  color: #262332;\n  margin-bottom: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 40px 0;\n  display: flex;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.Specilize[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg), url(/../../assets/images/about-icon-8.svg);\n  background-repeat: no-repeat;\n  background-position: 3% 53%, 95% 13%, 100% 94%;\n  padding: 188px 0 165px 0;\n}\n.Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #172127;\n  font-family: Montserrat;\n  font-size: 45px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  line-height: 60px;\n}\n.Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin: 30px 21% 90px 0;\n}\n.Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 2px;\n  width: 31%;\n  float: left;\n  box-sizing: border-box;\n  padding: 35px;\n  margin: 0px 48px 48px 0;\n  height: 105px;\n}\n.Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 21px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  margin: 0px 0px 0px 22px;\n}\n.Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6), .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9), .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  margin: 0px 0px 48px 0px;\n}\n.lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n  text-align: center;\n  padding: 0 19%;\n}\n.lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  text-align: center;\n  margin: 0px 0 74px;\n  padding: 0% 21%;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    background-position: 2% 80%, 88% 29%, 95% 57%, 87% 104%, center center;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 423px;\n    font-size: 56px;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n@media screen and (max-width: 1450px) {\n  .website-feature[_ngcontent-%COMP%] {\n    padding: 90px 0 100px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .benefit-wrapper[_ngcontent-%COMP%] {\n    padding: 90px 0 0;\n  }\n\n  .Specilize[_ngcontent-%COMP%] {\n    padding: 80px 0 90px 0px;\n    background-position: 3% 53%, 95% 13%, 100% 96%;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 30%;\n    flex-wrap: wrap;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 30%;\n    display: flex;\n    max-height: none;\n    flex-direction: column;\n    height: auto;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: auto;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 44px;\n  }\n  .lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 16px 27px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 104%, center center;\n    background-size: 17px, 15px, 30px, 30%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .btn-white[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 18px;\n  }\n\n  .Specilize[_ngcontent-%COMP%] {\n    padding: 80px 0 90px 0px;\n    background-position: 0% 53%, 95% 13%, 100% 94%;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 12% 36px 0;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 30%;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    margin: 0px 20px 20px 0;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-position: 96% 8%, 5% 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6), .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9), .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n    margin: 0 0 25px 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-image: none;\n    padding: 50px 0 54px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 36px 0 45px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 67%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    margin-top: 0;\n  }\n\n  .Specilize[_ngcontent-%COMP%] {\n    padding: 70px 0 80px 0px;\n    background-image: none;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 12% 36px 0;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 44%;\n    align-items: flex-start;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6), .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9), .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n    margin: 0px 20px 20px 0;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    margin-bottom: 10px !important;\n  }\n  .lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 I !important;\n  }\n  .lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 11px 16px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .benefits[_ngcontent-%COMP%] {\n    padding: 63px 0 51px 0;\n    background-image: none;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n    margin-left: 0;\n  }\n\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-right: 0 !important;\n  }\n  .Specilize[_ngcontent-%COMP%]   .Specilize-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3JhcGhpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRRQUFBO0VBS0EsNEJBQUE7RUFDQSxzRUFBQTtFQUNBLDZDQUFBO0FBSEY7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQVNBO0VBQ0Usd0JBQUE7RUFDQSx3R0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUFQRjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFQTjtBQVNJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBUE47QUFRTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQU5SO0FBT1E7RUFDRSxrQkFBQTtBQUxWO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxvSkFBQTtFQUdBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtBQWhCRjtBQWtCSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFoQk47QUFrQkk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQWhCTjtBQXFCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQW5CUjtBQW9CUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWxCVjtBQW1CVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFqQlo7QUFxQk07Ozs7RUFJRSx3QkFBQTtBQW5CUjtBQTJCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBeEJKO0FBMEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF4Qko7QUE2QkE7RUFDRTtJQUNFLHNFQUFBO0VBMUJGO0VBMkJFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBekJKOztFQTZCQTtJQUNFLG1CQUFBO0VBMUJGO0FBQ0Y7QUE2QkE7RUFDRTtJQUNFLHVCQUFBO0VBM0JGO0VBNEJFO0lBQ0UsY0FBQTtFQTFCSjtFQTRCRTtJQUNFLGdCQUFBO0VBMUJKOztFQThCQTtJQUNFLGlCQUFBO0VBM0JGOztFQThCQTtJQUNFLHdCQUFBO0lBQ0EsOENBQUE7RUEzQkY7RUE0QkU7SUFDRSxlQUFBO0VBMUJKO0VBNkJJO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBM0JOO0VBNEJNO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtFQTFCUjtFQTJCUTtJQUNFLGVBQUE7RUF6QlY7O0VBa0NFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBL0JKO0VBaUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBL0JKO0FBQ0Y7QUFtQ0E7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esc0VBQUE7SUFDQSw0Q0FBQTtFQWpDRjtFQW1DRTtJQUNFLDBCQUFBO0lBQ0EsNEJBQUE7RUFqQ0o7O0VBcUNBO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBbENGOztFQW9DQTtJQUNFLHdCQUFBO0lBQ0EsOENBQUE7RUFqQ0Y7RUFrQ0U7SUFDRSxlQUFBO0VBaENKO0VBaUNJO0lBQ0UsdUJBQUE7RUEvQk47RUFtQ0k7SUFDRSxhQUFBO0lBRUEsZUFBQTtFQWxDTjtFQW1DTTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBRUEsYUFBQTtJQUNBLHVCQUFBO0VBbENSO0VBbUNRO0lBQ0UsV0FBQTtFQWpDVjtFQW9DVTtJQUNFLGVBQUE7RUFsQ1o7O0VBMENBO0lBQ0UsbUNBQUE7RUF2Q0Y7RUF3Q0U7SUFDRSxnQkFBQTtFQXRDSjtFQXVDSTtJQUNFLDBCQUFBO0VBckNOO0VBd0NNO0lBQ0Usa0JBQUE7RUF0Q1I7RUF3Q007Ozs7SUFJRSxrQkFBQTtFQXRDUjtBQUNGO0FBNENBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsNkRBQUE7RUExQ0Y7RUEyQ0U7SUFDRSxlQUFBO0VBekNKOztFQTRDQTtJQUNFLHNCQUFBO0lBQ0Esc0JBQUE7RUF6Q0Y7RUEwQ0U7SUFDRSxnQkFBQTtFQXhDSjtFQXlDSTtJQUNFLDBCQUFBO0VBdkNOO0VBMENJO0lBQ0UsbUJBQUE7RUF4Q047RUF5Q007SUFDRSxrQkFBQTtFQXZDUjtFQXlDVTtJQUNFLFVBQUE7RUF2Q1o7RUEwQ1E7SUFDRSwwQkFBQTtJQUNBLGFBQUE7RUF4Q1Y7O0VBK0NBO0lBQ0Usd0JBQUE7SUFDQSxzQkFBQTtFQTVDRjtFQTZDRTtJQUNFLGVBQUE7RUEzQ0o7RUE0Q0k7SUFDRSx1QkFBQTtFQTFDTjtFQStDTTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQTdDUjtFQStDTTs7OztJQUlFLHVCQUFBO0VBN0NSOztFQW9ERTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUFqREo7RUFtREU7SUFDRSx1QkFBQTtFQWpESjtFQW1ERTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQWpESjtBQUNGO0FBcURBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHNCQUFBO0VBbkRGOztFQXFEQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBbERGOztFQXdETTtJQUNFLHNCQUFBO0lBQ0EsMEJBQUE7RUFyRFI7RUFzRFE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFwRFY7QUFDRiIsImZpbGUiOiJncmFwaGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2LWhlcm8ge1xyXG4gIHBhZGRpbmc6IDEzMHB4IDAgNzlweCAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0zLnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tNC5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTEuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmFwaGljLWJhbm5lci0xLnN2ZyksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiUgODAlLCA4OCUgMjklLCA5NSUgNTclLCA4MSUgMTAwJSwgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE3cHgsIDE1cHgsIDMwcHgsIGF1dG8sIDEwMCU7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDY4OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKmJ1dHRvbioqKioqKioqKioqKioqKipcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKip3b3JrIHdpdGggdXMqKioqKioqKioqKioqKioqKioqKipcclxuLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgcGFkZGluZzogMjAwcHggMCAxMDBweCAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTUuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTYuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk2JSAzMCUsIDUlIDg4JTtcclxuICBwIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIC50dHMge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKipTcGVjaWxpemUqKioqKioqKioqKioqKioqKioqXHJcbi5TcGVjaWxpemUge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNi5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tOC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyUgNTMlLCA5NSUgMTMlLCAxMDAlIDk0JTtcclxuICBwYWRkaW5nOiAxODhweCAwIDE2NXB4IDA7XHJcbiAgLlNwZWNpbGl6ZS10aXRsZSB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAjMTcyMTI3O1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbjogMzBweCAyMSUgOTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuU3BlY2lsaXplLWxpc3Qge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNDhweCA0OHB4IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDVweDtcclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGk6bnRoLWNoaWxkKDMpLFxyXG4gICAgICBsaTpudGgtY2hpbGQoNiksXHJcbiAgICAgIGxpOm50aC1jaGlsZCg5KSxcclxuICAgICAgbGk6bnRoLWNoaWxkKDEyKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDQ4cHggMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubHRzIHtcclxuICAvLyBwYWRkaW5nOiAxODBweCAwO1xyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE5JTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAwIDc0cHg7XHJcbiAgICBwYWRkaW5nOiAwJSAyMSU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyaWVzKioqKioqKioqKioqKioqKlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg4JSAyOSUsIDk1JSA1NyUsIDg3JSAxMDQlLCBjZW50ZXIgY2VudGVyO1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQyM3B4O1xyXG4gICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhLmJ0bi5idG4tbWFpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDAgMTAwcHggMDtcclxuICAgIHAge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC50dHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJlbmVmaXQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDAgMDtcclxuICB9XHJcblxyXG4gIC5TcGVjaWxpemUge1xyXG4gICAgcGFkZGluZzogODBweCAwIDkwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyUgNTMlLCA5NSUgMTMlLCAxMDAlIDk2JTtcclxuICAgIC5TcGVjaWxpemUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICB9XHJcbiAgICAuU3BlY2lsaXplLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgLmljb25zIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sdHMge1xyXG4gICAgLy8gcGFkZGluZzogMTgwcHggMDtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA1OXB4IDBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIlIDgwJSwgODklIDI5JSwgOTYlIDU3JSwgODMlIDEwNCUsIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3cHgsIDE1cHgsIDMwcHgsIDMwJSwgMTAwJTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi13aGl0ZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5TcGVjaWxpemUge1xyXG4gICAgcGFkZGluZzogODBweCAwIDkwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTMlLCA5NSUgMTMlLCAxMDAlIDk0JTtcclxuICAgIC5TcGVjaWxpemUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAxMiUgMzZweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuU3BlY2lsaXplLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAwO1xyXG4gICAgICAgICAgLmljb25zIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb25zIHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NiUgOCUsIDUlIDgwJTtcclxuICAgIC50dHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDMpLFxyXG4gICAgICAgIGxpOm50aC1jaGlsZCg2KSxcclxuICAgICAgICBsaTpudGgtY2hpbGQoOSksXHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDEyKSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgcGFkZGluZzogNTBweCAwIDU0cHggMDtcclxuICAgIC50dHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDM2cHggMCA0NXB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICAgICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY3JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5TcGVjaWxpemUge1xyXG4gICAgcGFkZGluZzogNzBweCAwIDgwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIC5TcGVjaWxpemUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAxMiUgMzZweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuU3BlY2lsaXplLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd2lkdGg6IDQ0JTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpudGgtY2hpbGQoMyksXHJcbiAgICAgICAgbGk6bnRoLWNoaWxkKDYpLFxyXG4gICAgICAgIGxpOm50aC1jaGlsZCg5KSxcclxuICAgICAgICBsaTpudGgtY2hpbGQoMTIpIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmx0cyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgSSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcGFkZGluZzogMTFweCAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYmVuZWZpdHMge1xyXG4gICAgcGFkZGluZzogNjNweCAwIDUxcHggMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIGEuYnRuLmJ0bi1tYWluIGltZyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLlNwZWNpbGl6ZSB7XHJcbiAgICAuU3BlY2lsaXplLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "pT9T":
    /*!****************************************************!*\
      !*** ./src/app/pages/careers/careers.component.ts ***!
      \****************************************************/

    /*! exports provided: CareersComponent */

    /***/
    function pT9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareersComponent", function () {
        return CareersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["/job-listing", a1];
      };

      function CareersComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1 == null ? null : item_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.location);
        }
      }

      var CareersComponent = /*#__PURE__*/function () {
        function CareersComponent(headerService) {
          _classCallCheck(this, CareersComponent);

          this.headerService = headerService;
          this.careers = [{
            name: "Software engineer - React Js",
            location: "Rajkot",
            id: 1
          }, {
            name: "Product Manager",
            location: "Rajkot",
            id: 2
          }, {
            name: "UX Designer",
            location: "Rajkot",
            id: 3
          }, {
            name: "Product UI Designer",
            location: "Rajkot",
            id: 4
          }, {
            name: "Software engineer - Front-end design",
            location: "Rajkot",
            id: 5
          }, {
            name: "Software engineer - React Js",
            location: "Rajkot",
            id: 6
          }, {
            name: "Software engineer - Node Js Designer",
            location: "Rajkot",
            id: 7
          }, {
            name: "Software engineer - React native",
            location: "Rajkot",
            id: 8
          }];
          window.scrollTo(0, 0);
          this.headerService.isHomePage.next(false);
        }

        _createClass(CareersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CareersComponent;
      }();

      CareersComponent.ɵfac = function CareersComponent_Factory(t) {
        return new (t || CareersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      CareersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CareersComponent,
        selectors: [["app-careers"]],
        decls: 21,
        vars: 1,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "Currentopenings"], [1, "row", "justify-content-center"], [1, "col-md-12", "col-lg-10"], [1, "title", "mt-5", "mb-3"], [1, "Currentopenings-inner"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["src", "assets/images/arrow-right.svg", "alt", "", 1, "img-fluid"]],
        template: function CareersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Join the ventonix ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " team ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Current openings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CareersComponent_li_20_Template, 7, 5, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.careers);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/career-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 101%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 79px;\n  margin-bottom: 130px;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.Currentopenings[_ngcontent-%COMP%] {\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 95% 11%, 1% 29%;\n}\n.Currentopenings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 800;\n  margin: 67px 0 101px 0;\n}\n.Currentopenings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover {\n  color: #009eff;\n}\n.Currentopenings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n}\n.Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  padding: 60px;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 12px;\n}\n.Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 32px;\n}\n.Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 30px;\n}\n.Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 48%;\n  right: 60px;\n}\n.Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border: 1px solid #009eff;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 30px;\n  color: #a3a3a3;\n  border: 0;\n  margin: 1px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border: 1px solid #009eff;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-right: 388px;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 388px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 104%, center center;\n    background-size: 17px, 15px, 30px, 30%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .Currentopenings[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .Currentopenings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 67px 0 60px 0;\n  }\n  .Currentopenings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n  }\n\n  .Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n  .Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .Currentopenings[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    background-image: none;\n  }\n  .Currentopenings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 67px 0 30px 0;\n  }\n  .Currentopenings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n  }\n\n  .Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    right: 20px;\n    width: 18px;\n  }\n  .Currentopenings-inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJlZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJRQUFBO0VBS0EsNEJBQUE7RUFDQSxzRUFBQTtFQUNBLDZDQUFBO0FBSEY7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRko7QUFLQTtFQUNFLHFCQUFBO0FBRkY7QUFJQTtFQUNFLHdHQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtBQUZGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURKO0FBRUk7RUFDRSxjQUFBO0FBQU47QUFHRTtFQUNFLGtCQUFBO0FBREo7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUZOO0FBR007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFEUjtBQUlJO0VBQ0UseUJBQUE7QUFGTjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUxOO0FBTU07RUFDRSx5QkFBQTtBQUpSO0FBV0E7RUFFSTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQVRKO0FBQ0Y7QUFZQTtFQUVJO0lBQ0UsbUJBQUE7RUFYSjtBQUNGO0FBZUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esc0VBQUE7SUFDQSw0Q0FBQTtFQWJGO0VBZUU7SUFDRSwwQkFBQTtJQUNBLDRCQUFBO0VBYko7O0VBaUJBO0lBQ0UsZUFBQTtFQWRGO0VBZUU7SUFDRSxxQkFBQTtFQWJKO0VBZUU7SUFDRSxrQkFBQTtFQWJKOztFQW1CSTtJQUNFLGFBQUE7RUFoQk47RUFpQk07SUFDRSxlQUFBO0VBZlI7QUFDRjtBQXFCQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDZEQUFBO0VBbkJGO0VBb0JFO0lBQ0UsZUFBQTtFQWxCSjs7RUFxQkE7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUFsQkY7RUFtQkU7SUFDRSxxQkFBQTtFQWpCSjtFQW1CRTtJQUNFLGtCQUFBO0VBakJKOztFQXVCSTtJQUNFLGFBQUE7RUFwQk47RUFxQk07SUFDRSxXQUFBO0lBQ0EsV0FBQTtFQW5CUjtFQXFCTTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQW5CUjtBQUNGIiwiZmlsZSI6ImNhcmVlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3YtaGVybyB7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0zLnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tNC5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTEuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXJlZXItYmFubmVyLTEuc3ZnKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg4JSAyOSUsIDk1JSA1NyUsIDgxJSAxMDElLCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTdweCwgMTVweCwgMzBweCwgYXV0bywgMTAwJTtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNzlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzMHB4O1xyXG4gIH1cclxufVxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLkN1cnJlbnRvcGVuaW5ncyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNi5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDExJSwgMSUgMjklO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW46IDY3cHggMCAxMDFweCAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMDA5ZWZmO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgfVxyXG59XHJcbi5DdXJyZW50b3BlbmluZ3MtaW5uZXIge1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogI2EzYTNhMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ4JTtcclxuICAgICAgICByaWdodDogNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGk6aG92ZXIge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5ZWZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgbGkge1xyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5ZWZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzODhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDM4OHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLnN2LWhlcm8ge1xyXG4gICAgcGFkZGluZzogNjBweCAwIDU5cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiUgODAlLCA4OSUgMjklLCA5NiUgNTclLCA4MyUgMTA0JSwgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTdweCwgMTVweCwgMzBweCwgMzAlLCAxMDAlO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuQ3VycmVudG9wZW5pbmdzIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiA2N3B4IDAgNjBweCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuQ3VycmVudG9wZW5pbmdzLWlubmVyIHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBwYWRkaW5nOiAzOXB4IDAgMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5DdXJyZW50b3BlbmluZ3Mge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiA2N3B4IDAgMzBweCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuQ3VycmVudG9wZW5pbmdzLWlubmVyIHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "rVrE":
    /*!************************************************!*\
      !*** ./src/app/pages/about/about.component.ts ***!
      \************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function rVrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/contact"];
      };

      var _c1 = function _c1() {
        return ["/careers"];
      };

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(headerService) {
          _classCallCheck(this, AboutComponent);

          this.headerService = headerService;
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.headerService.isHomePage.next(false);
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 117,
        vars: 4,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "work-with-us"], [1, "row", "justify-content-end"], [1, "col-md-6"], [1, "tssp"], [1, "tts"], [1, "icons"], ["src", "../../assets/images/about-icon-1.svg", "alt", "", 1, ""], [1, "content"], ["src", "../../assets/images/icon1.svg", "alt", "", 1, ""], [1, "btn", "btn-main", 3, "routerLink"], ["src", "../../../assets/images/arrow.svg", "alt", "icon"], [1, "team"], [1, "title", "text-center", "mb-5"], [1, "col-md-3"], [1, "team-inner", "text-center"], ["src", "../../assets/images/team1.svg", "alt", "", 1, "img-fluid"], ["src", "assets/images/team1.svg", "alt", "", 1, "img-fluid"], [1, "lts"], [1, "lts-container"], [1, "lts-inner"], [1, "btn-white-border", 3, "routerLink"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Ventonix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ventonix is an IT hub which provides you diverse services such as Website Designing, Website Development, Mobile App Development and Graphic Designing which suit perfectly to your needs. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " The mission of Ventonix is to provide secure and reliable service that meets the customer\u2019s needs. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Our expertise lies in creating websites according to clients vision and requirements. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Ventonix is committed to providing the best services in web technology, both technological and client servicing. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Meet our team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Jenna Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "section", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Take your career to next level, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " join our team ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "See openings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  padding: 130px 0 59px 0px;\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/about-header-icon-2.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 414%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 79px;\n  margin-bottom: 130px;\n}\n.work-with-us[_ngcontent-%COMP%] {\n  padding: 200px 0 200px 0;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 96% 28%, 5% 69%;\n}\n.work-with-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  max-width: 400px;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 24px;\n  line-height: 32px;\n  margin-right: 76px;\n  margin-bottom: 0;\n  font-weight: bold;\n  letter-spacing: 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 35px 0;\n  display: flex;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-top: 6px;\n}\n.work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.team[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg), url(/../../assets/images/about-icon-8.svg);\n  background-repeat: no-repeat;\n  background-position: 5% 54%, 95% 17%, 100% 93%;\n  padding: 188px 0 165px 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 60px;\n  text-align: center;\n  letter-spacing: 1px;\n  margin-bottom: 85px;\n}\n.team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #111010;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 32px;\n  text-align: center;\n  margin-top: 20px;\n}\n.team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 30px;\n  text-align: center;\n  margin-bottom: 55px;\n}\n.lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  line-height: 52px;\n}\n.lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-bottom: 29px;\n  display: inline-block;\n}\n@media screen and (max-width: 1400px) {\n  .work-with-us[_ngcontent-%COMP%] {\n    padding: 100px 0 100px 0;\n  }\n  .work-with-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 90%;\n    font-size: 18px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-right: 30px;\n  }\n\n  .team[_ngcontent-%COMP%] {\n    padding: 108px 0 100px 0;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n  }\n  .team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 151%, center center;\n    background-size: 17px, 15px, 30px, 20%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media screen and (max-width: 767px) {\n  .work-with-us[_ngcontent-%COMP%] {\n    background-image: none;\n    padding: 70px 0 0px 0;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n    margin: 0;\n  }\n  .work-with-us[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 70px;\n  }\n\n  .team[_ngcontent-%COMP%] {\n    background-image: none;\n  }\n  .team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtRQUFBO0VBS0EsNEJBQUE7RUFDQSxzRUFBQTtFQUNBLDZDQUFBO0FBSEY7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRko7QUFNQTtFQUNFLHdCQUFBO0VBQ0Esd0dBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0FBSkY7QUFLRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQU1JO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBSk47QUFLTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUhSO0FBSVE7RUFDRSxrQkFBQTtBQUZWO0FBR1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQURaO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBUUE7RUFDRSx5QkFBQTtFQUNBLG9KQUFBO0VBR0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBWUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBVEo7QUFXRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFUSjtBQWNBO0VBQ0U7SUFDRSx3QkFBQTtFQVhGO0VBYUU7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQVhKO0VBY0k7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFaTjs7RUFnQkE7SUFDRSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBYkY7RUFjRTtJQUNFLGVBQUE7RUFaSjs7RUFnQkU7SUFDRSxlQUFBO0VBYko7QUFDRjtBQWlCQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxzRUFBQTtJQUNBLDRDQUFBO0VBZkY7RUFnQkU7SUFDRSwwQkFBQTtJQUNBLDRCQUFBO0VBZEo7O0VBcUJJO0lBQ0UsMEJBQUE7RUFsQk47QUFDRjtBQXVCQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxxQkFBQTtFQXJCRjtFQXNCRTtJQUNFLGdCQUFBO0VBcEJKO0VBcUJJO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBbkJOO0VBcUJJO0lBQ0UsbUJBQUE7RUFuQk47O0VBdUJBO0lBQ0Usc0JBQUE7RUFwQkY7RUFxQkU7SUFDRSxlQUFBO0VBbkJKOztFQXVCRTtJQUNFLG1CQUFBO0VBcEJKO0FBQ0Y7QUF3QkE7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSw2REFBQTtFQXRCRjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2LWhlcm8ge1xyXG4gIHBhZGRpbmc6IDEzMHB4IDAgNTlweCAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0zLnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tNC5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTEuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi0yLnN2ZyksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5ZWZmIDAlLCAjMzBjY2M2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiUgODAlLCA4OCUgMjklLCA5NSUgNTclLCA4MSUgNDE0JSwgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE3cHgsIDE1cHgsIDMwcHgsIGF1dG8sIDEwMCU7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi53b3JrLXdpdGgtdXMge1xyXG4gIHBhZGRpbmc6IDIwMHB4IDAgMjAwcHggMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi01LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaWNvbi02LnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NiUgMjglLCA1JSA2OSU7XHJcbiAgcCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICAudHRzIHtcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNzZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAzNXB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRlYW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNi5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tOC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSUgNTQlLCA5NSUgMTclLCAxMDAlIDkzJTtcclxuICBwYWRkaW5nOiAxODhweCAwIDE2NXB4IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDg1cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAjMTExMDEwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2EzYTNhMztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubHRzIHtcclxuICAvL3BhZGRpbmc6IDE4MHB4IDA7XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gIH1cclxuICBhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAud29yay13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMTAwcHggMDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC50dHMge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGVhbSB7XHJcbiAgICBwYWRkaW5nOiAxMDhweCAwIDEwMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sdHMge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDAgNTlweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg5JSAyOSUsIDk2JSA1NyUsIDgzJSAxNTElLCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxN3B4LCAxNXB4LCAzMHB4LCAyMCUsIDEwMCU7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAud29yay13aXRoLXVzIHtcclxuICAgIHAge1xyXG4gICAgfVxyXG4gICAgLnR0cyB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAud29yay13aXRoLXVzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDAgMHB4IDA7XHJcbiAgICAudHRzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZWFtIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmx0cyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "u+pc":
    /*!***************************************************!*\
      !*** ./src/app/app-routing/app-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function uPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../pages/contact/contact.component */
      "XEn3");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pages/about/about.component */
      "rVrE");
      /* harmony import */


      var _pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pages/careers/careers.component */
      "pT9T");
      /* harmony import */


      var _pages_job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pages/job-listing/job-listing.component */
      "5jEh");
      /* harmony import */


      var _pages_application_application_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pages/application/application.component */
      "ff0e");
      /* harmony import */


      var _pages_services_website_website_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pages/services/website/website.component */
      "cEvD");
      /* harmony import */


      var _pages_services_mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pages/services/mobile-app/mobile-app.component */
      "NfKR");
      /* harmony import */


      var _pages_services_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../pages/services/graphic/graphic.component */
      "kt6P");
      /* harmony import */


      var _pages_services_seo_seo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../pages/services/seo/seo.component */
      "ywks");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }, {
        path: "home",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: "about",
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: "careers",
        component: _pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"]
      }, {
        path: "job-listing/:id",
        component: _pages_job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_5__["JobListingComponent"]
      }, {
        path: "website",
        component: _pages_services_website_website_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteComponent"]
      }, {
        path: "mobile",
        component: _pages_services_mobile_app_mobile_app_component__WEBPACK_IMPORTED_MODULE_8__["MobileAppComponent"]
      }, {
        path: "seo",
        component: _pages_services_seo_seo_component__WEBPACK_IMPORTED_MODULE_10__["SeoComponent"]
      }, {
        path: "graphic",
        component: _pages_services_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_9__["GraphicComponent"]
      }, {
        path: "application",
        component: _pages_application_application_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationComponent"]
      }, {
        path: "contact",
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "x0tw":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/online-appointment/online-appointment.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: OnlineAppointmentComponent */

    /***/
    function x0tw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineAppointmentComponent", function () {
        return OnlineAppointmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function OnlineAppointmentComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.desc);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var OnlineAppointmentComponent = /*#__PURE__*/function () {
        function OnlineAppointmentComponent() {
          _classCallCheck(this, OnlineAppointmentComponent);
        }

        _createClass(OnlineAppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.data);
          }
        }]);

        return OnlineAppointmentComponent;
      }();

      OnlineAppointmentComponent.ɵfac = function OnlineAppointmentComponent_Factory(t) {
        return new (t || OnlineAppointmentComponent)();
      };

      OnlineAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnlineAppointmentComponent,
        selectors: [["app-online-appointment"]],
        inputs: {
          data: "data"
        },
        decls: 12,
        vars: 6,
        consts: [[1, "lts"], [1, "lts-container"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "lts-inner"], [4, "ngIf"], [1, "btn-white-border", 3, "routerLink"], ["src", "../../../../assets/images/arrow.svg"]],
        template: function OnlineAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OnlineAppointmentComponent_p_8_Template, 2, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.desc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.data == null ? null : ctx.data.link));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.linkText, " \xA0");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 78px;\n  text-align: center;\n  padding: 0 28%;\n}\n.lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  text-align: center;\n  margin: 0px 0 60px;\n  padding: 0% 21%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb25saW5lLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJvbmxpbmUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubHRzIHtcclxuICAvLyBwYWRkaW5nOiAxODBweCAwO1xyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDc4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDI4JTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAwIDYwcHg7XHJcbiAgICBwYWRkaW5nOiAwJSAyMSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ywks":
    /*!*****************************************************!*\
      !*** ./src/app/pages/services/seo/seo.component.ts ***!
      \*****************************************************/

    /*! exports provided: SeoComponent */

    /***/
    function ywks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeoComponent", function () {
        return SeoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/header.service */
      "Fc3L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/recent-projects/recent-projects.component */
      "D39z");

      var _c0 = function _c0() {
        return ["/contact"];
      };

      var SeoComponent = /*#__PURE__*/function () {
        function SeoComponent(headerService) {
          _classCallCheck(this, SeoComponent);

          this.headerService = headerService;
          this.data = {
            title: "Happy with what we offer? Grab it Now!",
            desc: "Yeah ! Its pretty cool about what you are offering and i starterd to feel in love with your Amazing UI Kit",
            link: "/contact",
            linkText: "Ask a quotation"
          };
          this.headerService.isHomePage.next(false);
        }

        _createClass(SeoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SeoComponent;
      }();

      SeoComponent.ɵfac = function SeoComponent_Factory(t) {
        return new (t || SeoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]));
      };

      SeoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SeoComponent,
        selectors: [["app-seo"]],
        decls: 146,
        vars: 2,
        consts: [[1, "sv-hero", "s1"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "sv-hero-inner"], ["width", "152px", "height", "3px", "viewBox", "0 0 152 3", "version", "1.1"], ["d", "M0 0.5L150 0.5", "transform", "translate(1 1)", "id", "Path-4", "fill", "none", "fill-rule", "evenodd", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round"], [1, "mt-3"], [1, "website-feature"], [1, "row", "justify-content-end"], [1, "col-md-6"], [1, "tssp"], [1, "tts"], [1, "icons"], ["src", "../../../assets/images/seo-benefits-1.svg", "alt", "", 1, "img-fluid"], [1, "content"], ["src", "../../../assets/images/seo-benefits-2.svg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/images/seo-benefits-3.svg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/images/icon1.svg", "alt", "", 1, "img-fluid"], [1, "btn", "btn-main", 3, "routerLink"], ["src", "../../../../assets/images/arrow.svg"], [1, "benefits"], [1, "benefits-title"], [1, "benefits-list"], ["src", "../assets/images/seo-benefits-1.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-2.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-3.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-4.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-5.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-6.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-7.svg", "alt", "", 1, "img-fluid"], ["src", "../assets/images/seo-benefits-8.svg", "alt", "", 1, "img-fluid"], [1, "benefit-wrapper"], [1, "col-sm-12"], [1, "isBenefits"], [1, "lts"], [1, "lts-container"], [1, "lts-inner"], ["routerLink", "/contact", 1, "btn-white-border"]],
        template: function SeoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search Engine Optimization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SEO(Search Engine Optimization) for any website has become a necessity for any business to differentiate from others in the market. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Social marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-mail marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bulk SMS marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Google Adwords & many more.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Get a quote \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Features that just work...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Onsite SEO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Offsite SEO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "White hat SEO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Keyword Research");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Content writing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Google Adwords");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Social Media Marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Content marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "section", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "How do we benefit you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Performing this helps your website to a rank page on the search engine so that it catches viewer\u2019s eye.Many clients come to us with high-priced web development, media advertising or great website designs. Yet, they don\u2019t understand why the site does not show on the first pages of the search engines. Don\u2019t let this happen to your company. Ventonix will help you all the way with your problems. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " We have many years of experience in SEO and Marketing, we are best in branding your company name all around. We boost your business through advertisement on the digital medium by providing services like SEO, Social marketing, E-mail marketing, Bulk SMS marketing, Google Adwords and many more. We have a dedicated team of digital marketing and they will provide search reports for your website with your competitor website. We implement latest techniques to help you to stay competing in this digitized world. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "app-recent-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "section", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Happy with what we offer? Grab it Now!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Yeah ! Its pretty cool about what you are offering and i starterd to feel in love with your Amazing UI Kit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Ask a quotation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__["RecentProjectsComponent"]],
        styles: [".sv-hero[_ngcontent-%COMP%] {\n  padding: 130px 0 79px 0px;\n  height: auto !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(/../../assets/images/about-header-icon-3.svg), url(/../../assets/images/about-header-icon-4.svg), url(/../../assets/images/about-header-icon-1.svg), url(/../../assets/images/seo-banner-1.svg), linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  background-repeat: no-repeat;\n  background-position: 2% 80%, 88% 29%, 95% 57%, 81% 104%, center center;\n  background-size: 17px, 15px, 30px, auto, 100%;\n}\n.sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 65px;\n  font-weight: 900;\n  line-height: 78px;\n  margin-right: 688px;\n  margin-bottom: 130px;\n}\n.website-feature[_ngcontent-%COMP%] {\n  padding: 200px 0 100px 0;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg);\n  background-repeat: no-repeat;\n  background-position: 96% 30%, 5% 80%;\n}\n.website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  max-width: 400px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  color: #262332;\n  margin-bottom: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 40px 0;\n  display: flex;\n}\n.website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.benefits[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  background-image: url(/../../assets/images/about-icon-5.svg), url(/../../assets/images/about-icon-6.svg), url(/../../assets/images/about-icon-8.svg);\n  background-repeat: no-repeat;\n  background-position: 3% 44%, 95% 13%, 100% 94%;\n  padding: 188px 0 165px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #172127;\n  font-size: 45px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  line-height: 60px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin: 30px 21% 90px 0;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 2px;\n  width: 31%;\n  float: left;\n  box-sizing: border-box;\n  padding: 60px;\n  margin: 0px 48px 48px 0;\n  height: 300px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 32px;\n  margin: 15px 0 20px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #262332;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n}\n.benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  margin: 0px 0px 48px 0px;\n}\n.lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-align: center;\n  padding: 0 28%;\n}\n.lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  text-align: center;\n  margin: 0px 0 68px;\n  padding: 0% 26%;\n}\n.isBenefits[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #172127;\n  font-size: 45px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  line-height: 60px;\n  margin-bottom: 40px;\n}\n.isBenefits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #262332;\n  font-family: Montserrat;\n  font-size: 20px;\n  letter-spacing: 0;\n  line-height: 30px;\n  margin-bottom: 40px;\n}\n@media screen and (max-width: 1700px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    background-position: 2% 80%, 88% 29%, 95% 57%, 87% 104%, center center;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 423px;\n    font-size: 56px;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n@media screen and (max-width: 1450px) {\n  .website-feature[_ngcontent-%COMP%] {\n    padding: 90px 0 100px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .benefit-wrapper[_ngcontent-%COMP%] {\n    padding: 90px 0 0;\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    padding: 80px 0 90px 0px;\n    background-position: 3% 53%, 95% 13%, 100% 96%;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 30%;\n    flex-wrap: wrap;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 30%;\n    display: flex;\n    max-height: none;\n    flex-direction: column;\n    height: auto;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: auto;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 44px;\n  }\n  .lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 16px 27px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 60px 0 59px 0px;\n    background-position: 2% 80%, 89% 29%, 96% 57%, 83% 104%, center center;\n    background-size: 17px, 15px, 30px, 30%, 100%;\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n    line-height: 40px !important;\n  }\n\n  .btn-white[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 18px;\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    padding: 90px 0 126px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 30px 10% 42px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 45%;\n    text-align: center;\n    padding: 20px;\n    margin: 0px 30px 30px 0;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 32px;\n    margin: 15px 0 20px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .benefits[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n    margin: 0px 30px 30px 0;\n  }\n\n  .isBenefits[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .isBenefits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-position: 96% 8%, 5% 80%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .sv-hero[_ngcontent-%COMP%] {\n    padding: 39px 0 0px 0px;\n    background-image: none;\n    background: linear-gradient(135deg, #009eff 0%, #30ccc6 100%);\n  }\n  .sv-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .website-feature[_ngcontent-%COMP%] {\n    background-image: none;\n    padding: 50px 0 54px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 36px 0 45px;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 25px 0;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 67%;\n  }\n  .website-feature[_ngcontent-%COMP%]   .tts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    margin-top: 0;\n  }\n\n  .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n\n  .lts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    margin-bottom: 10px !important;\n  }\n  .lts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 I !important;\n  }\n  .lts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 11px 16px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .benefits[_ngcontent-%COMP%] {\n    padding: 63px 0 51px 0;\n    background-image: none;\n  }\n\n  a.btn.btn-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n    margin-left: 0;\n  }\n\n  .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-right: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd1FBQUE7RUFLQSw0QkFBQTtFQUNBLHNFQUFBO0VBQ0EsNkNBQUE7QUFIRjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUZKO0FBZ0NBO0VBQ0Usd0JBQUE7RUFDQSx3R0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUE5QkY7QUErQkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE3Qko7QUErQkU7RUFDRSxnQkFBQTtBQTdCSjtBQThCSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE1Qk47QUE4Qkk7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUE1Qk47QUE2Qk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUEzQlI7QUE0QlE7RUFDRSxrQkFBQTtBQTFCVjtBQXFDQTtFQUNFLG1CQUFBO0VBQ0Esb0pBQUE7RUFHQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7QUFyQ0Y7QUF1Q0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXJDTjtBQXVDSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQXJDTjtBQTBDTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQXhDUjtBQXlDUTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXZDVjtBQXlDUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXZDVjtBQTBDTTs7RUFFRSx3QkFBQTtBQXhDUjtBQWdERTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBN0NKO0FBK0NFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0o7QUFpREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBOUNKO0FBZ0RFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUE5Q0o7QUFrREE7RUFDRTtJQUNFLHNFQUFBO0VBL0NGO0VBZ0RFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBOUNKOztFQWtEQTtJQUNFLG1CQUFBO0VBL0NGO0FBQ0Y7QUFrREE7RUFDRTtJQUNFLHVCQUFBO0VBaERGO0VBaURFO0lBQ0UsY0FBQTtFQS9DSjtFQWlERTtJQUNFLGdCQUFBO0VBL0NKOztFQW1EQTtJQUNFLGlCQUFBO0VBaERGOztFQW1EQTtJQUNFLHdCQUFBO0lBQ0EsOENBQUE7RUFoREY7RUFrREk7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUFoRE47RUFpRE07SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VBL0NSO0VBZ0RRO0lBQ0UsZUFBQTtFQTlDVjs7RUF1REU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFwREo7RUFzREU7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFwREo7QUFDRjtBQXdEQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxzRUFBQTtJQUNBLDRDQUFBO0VBdERGO0VBd0RFO0lBQ0UsMEJBQUE7SUFDQSw0QkFBQTtFQXRESjs7RUEwREE7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUF2REY7O0VBeURBO0lBQ0UsdUJBQUE7RUF0REY7RUEwREk7SUFDRSx1QkFBQTtFQXhETjtFQTZETTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtFQTNEUjtFQTREUTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBMURWO0VBNERRO0lBQ0UsZUFBQTtFQTFEVjtFQTZETTs7SUFFRSx1QkFBQTtFQTNEUjs7RUFrRUU7SUFDRSxtQkFBQTtFQS9ESjtFQWlFRTtJQUNFLG1CQUFBO0VBL0RKOztFQW1FQTtJQUNFLG1DQUFBO0VBaEVGO0VBaUVFO0lBQ0UsZ0JBQUE7RUEvREo7RUFnRUk7SUFDRSwwQkFBQTtFQTlETjtFQWlFTTtJQUNFLGtCQUFBO0VBL0RSO0FBQ0Y7QUFxRUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSw2REFBQTtFQW5FRjtFQW9FRTtJQUNFLGVBQUE7RUFsRUo7O0VBcUVBO0lBQ0Usc0JBQUE7SUFDQSxzQkFBQTtFQWxFRjtFQW1FRTtJQUNFLGdCQUFBO0VBakVKO0VBa0VJO0lBQ0UsMEJBQUE7RUFoRU47RUFtRUk7SUFDRSxtQkFBQTtFQWpFTjtFQWtFTTtJQUNFLGtCQUFBO0VBaEVSO0VBa0VVO0lBQ0UsVUFBQTtFQWhFWjtFQW1FUTtJQUNFLDBCQUFBO0lBQ0EsYUFBQTtFQWpFVjs7RUEwRUk7SUFDRSxVQUFBO0VBdkVOOztFQTRFRTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUF6RUo7RUEyRUU7SUFDRSx1QkFBQTtFQXpFSjtFQTJFRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXpFSjtBQUNGO0FBNkVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHNCQUFBO0VBM0VGOztFQTZFQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBMUVGOztFQThFSTtJQUNFLHNCQUFBO0lBQ0EsMEJBQUE7RUEzRU47QUFDRiIsImZpbGUiOiJzZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3YtaGVybyB7XHJcbiAgcGFkZGluZzogMTMwcHggMCA3OXB4IDBweDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWhlYWRlci1pY29uLTMuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1oZWFkZXItaWNvbi00LnN2ZyksXHJcbiAgICB1cmwoLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtaGVhZGVyLWljb24tMS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL3Nlby1iYW5uZXItMS5zdmcpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwOWVmZiAwJSwgIzMwY2NjNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDIlIDgwJSwgODglIDI5JSwgOTUlIDU3JSwgODElIDEwNCUsIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxN3B4LCAxNXB4LCAzMHB4LCBhdXRvLCAxMDAlO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3OHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2ODhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKipidXR0b24qKioqKioqKioqKioqKioqXHJcbi8vIGEuYnRuLmJ0bi1tYWluIHtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDllZmYsICMzMGNjYzYsICMwMDllZmYpO1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBwYWRkaW5nOiAxNnB4IDQ2cHg7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcclxuLy8gICBsaW5lLWhlaWdodDogMjRweDtcclxuLy8gICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAmOmhvdmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuLy8gICAgIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKndvcmsgd2l0aCB1cyoqKioqKioqKioqKioqKioqKioqKlxyXG4ud2Vic2l0ZS1mZWF0dXJlIHtcclxuICBwYWRkaW5nOiAyMDBweCAwIDEwMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNS5zdmcpLFxyXG4gICAgdXJsKC8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LWljb24tNi5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlIDMwJSwgNSUgODAlO1xyXG4gIHAge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgLnR0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGNvbG9yOiAjMjYyMzMyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKipCZW5lZml0cyoqKioqKioqKioqKioqKioqKipcclxuLmJlbmVmaXRzIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTUuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTYuc3ZnKSxcclxuICAgIHVybCgvLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC1pY29uLTguc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMlIDQ0JSwgOTUlIDEzJSwgMTAwJSA5NCU7XHJcbiAgcGFkZGluZzogMTg4cHggMCAxNjVweCAwO1xyXG4gIC5iZW5lZml0cy10aXRsZSB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAjMTcyMTI3O1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBtYXJnaW46IDMwcHggMjElIDkwcHggMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNDhweCA0OHB4IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjMzMjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpOm50aC1jaGlsZCgzKSxcclxuICAgICAgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggNDhweCAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sdHMge1xyXG4gIC8vIHBhZGRpbmc6IDE4MHB4IDA7XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjglO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IDAgNjhweDtcclxuICAgIHBhZGRpbmc6IDAlIDI2JTtcclxuICB9XHJcbn1cclxuLmlzQmVuZWZpdHMge1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjMTcyMTI3O1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY29sb3I6ICMyNjIzMzI7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxufVxyXG4vLyAqKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyaWVzKioqKioqKioqKioqKioqKlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAuc3YtaGVybyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyJSA4MCUsIDg4JSAyOSUsIDk1JSA1NyUsIDg3JSAxMDQlLCBjZW50ZXIgY2VudGVyO1xyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQyM3B4O1xyXG4gICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhLmJ0bi5idG4tbWFpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDAgMTAwcHggMDtcclxuICAgIHAge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC50dHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJlbmVmaXQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDAgMDtcclxuICB9XHJcblxyXG4gIC5iZW5lZml0cyB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDAgOTBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSA1MyUsIDk1JSAxMyUsIDEwMCUgOTYlO1xyXG4gICAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgLmljb25zIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sdHMge1xyXG4gICAgLy8gcGFkZGluZzogMTgwcHggMDtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA1OXB4IDBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIlIDgwJSwgODklIDI5JSwgOTYlIDU3JSwgODMlIDEwNCUsIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3cHgsIDE1cHgsIDMwcHgsIDMwJSwgMTAwJTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi13aGl0ZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5iZW5lZml0cyB7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDAgMTI2cHggMDtcclxuICAgIC5iZW5lZml0cy10aXRsZSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMTAlIDQycHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJlbmVmaXRzLWxpc3Qge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAzMHB4IDMwcHggMDtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOm50aC1jaGlsZCgzKSxcclxuICAgICAgICBsaTpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMzBweCAzMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaXNCZW5lZml0cyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53ZWJzaXRlLWZlYXR1cmUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTYlIDglLCA1JSA4MCU7XHJcbiAgICAudHRzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAyNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zdi1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDM5cHggMCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDllZmYgMCUsICMzMGNjYzYgMTAwJSk7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLndlYnNpdGUtZmVhdHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgcGFkZGluZzogNTBweCAwIDU0cHggMDtcclxuICAgIC50dHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDM2cHggMCA0NXB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICAgICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY3JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iZW5lZml0cy1saXN0IHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmx0cyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgSSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcGFkZGluZzogMTFweCAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYmVuZWZpdHMge1xyXG4gICAgcGFkZGluZzogNjNweCAwIDUxcHggMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIGEuYnRuLmJ0bi1tYWluIGltZyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAuYmVuZWZpdHMtbGlzdCB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map