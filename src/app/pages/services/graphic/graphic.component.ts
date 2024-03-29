import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-graphic",
  templateUrl: "./graphic.component.html",
  styleUrls: ["./graphic.component.scss"],
})
export class GraphicComponent implements OnInit {
  data = {
    title: "Are you happy with what we offer? Grab your wrapkit copy now",
    desc:
      "You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time",
    link: "/contact",
    linkText: "Ask for quotation",
  };
  constructor(private headerService: HeaderService) {
    window.scrollTo(0, 0);
    this.headerService.isHomePage.next(false);
  }

  ngOnInit(): void {}
}
