import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.scss"],
})
export class CareersComponent implements OnInit {
  careers: Array<object> = [
    {
      name: "Sr. Mobile Apps Developer",
      location: "Rajkot",
      id: 1,
    },
    // {
    //   name: "Product Manager",
    //   location: "Rajkot",
    //   id: 2,
    // },
    // {
    //   name: "UX Designer",
    //   location: "Rajkot",
    //   id: 3,
    // },
    // {
    //   name: "Product UI Designer",
    //   location: "Rajkot",
    //   id: 4,
    // },
    // {
    //   name: "Software engineer - Front-end design",
    //   location: "Rajkot",
    //   id: 5,
    // },
    // {
    //   name: "Software engineer - React Js",
    //   location: "Rajkot",
    //   id: 6,
    // },
    // {
    //   name: "Software engineer - Node Js Designer",
    //   location: "Rajkot",
    //   id: 7,
    // },
    // {
    //   name: "Software engineer - React native",
    //   location: "Rajkot",
    //   id: 8,
    // }
  ];
  constructor(private headerService: HeaderService) {
    window.scrollTo(0, 0);
    this.headerService.isHomePage.next(false);
  }

  ngOnInit(): void {}
}
