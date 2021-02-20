import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  title = "ventoxin";
  showmenu = false;
  constructor() {}

  ngOnInit(): void {}
  showMenu() {
    this.showmenu = true;
  }
  hideMenu() {
    this.showmenu = false;
  }
}
