import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-policy",
  templateUrl: "./policy.component.html",
  styleUrls: ["./policy.component.scss"],
})
export class PolicyComponent implements OnInit {
  isHomePage: boolean = true;
  showmenu = false;
  constructor(private headerService: HeaderService) {
    this.headerService.isHomePage.next(true);
  }

  ngOnInit(): void {
    this.headerService.isHomePage.subscribe((res) => {
      this.isHomePage = res;
      this.showmenu = false;
      // console.log("value", this.isHomePage);
    });
  }
  showMenu() {
    this.showmenu = true;
  }
  hideMenu() {
    this.showmenu = false;
  }
}
