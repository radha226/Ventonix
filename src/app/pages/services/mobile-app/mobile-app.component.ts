import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-mobile-app",
  templateUrl: "./mobile-app.component.html",
  styleUrls: ["./mobile-app.component.scss"],
})
export class MobileAppComponent implements OnInit {
  data = {
    title: "Like what you see?",
    desc:
      "Why not drop us a message and we will get back to you with your personalized quotation?",
    link: "/contact",
    linkText: "Get a quote",
  };
  constructor(private headerService: HeaderService) {
    window.scrollTo(0, 0);
    this.headerService.isHomePage.next(false);
  }

  ngOnInit(): void {}
}
