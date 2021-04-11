import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-website",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"],
})
export class WebsiteComponent implements OnInit {
  data = {
    title: "Are you looking for Online Appointment?",
    desc: "",
    link: "/contact",
    linkText: "Contact us now",
  };
  constructor(private headerService: HeaderService) {
    window.scrollTo(0, 0);
    this.headerService.isHomePage.next(false);
  }

  ngOnInit(): void {}
}
