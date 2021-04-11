import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-seo",
  templateUrl: "./seo.component.html",
  styleUrls: ["./seo.component.scss"],
})
export class SeoComponent implements OnInit {
  data = {
    title: "Happy with what we offer? Grab it Now!",
    desc:
      "Yeah ! Its pretty cool about what you are offering and i starterd to feel in love with your Amazing UI Kit",
    link: "/contact",
    linkText: "Ask a quotation",
  };
  constructor(private headerService: HeaderService) {
    window.scrollTo(0, 0);
    this.headerService.isHomePage.next(false);
  }

  ngOnInit(): void {}
}
