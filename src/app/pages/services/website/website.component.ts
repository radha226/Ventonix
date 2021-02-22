import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}
}
