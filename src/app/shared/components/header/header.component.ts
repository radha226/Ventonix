import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../../services/header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  title = "ventoxin";
  showmenu = false;
  constructor(private headerService: HeaderService) {}
  isHomePage: boolean = true;
  ngOnInit(): void {
    console.log("header");
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
