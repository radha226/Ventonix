import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-online-appointment",
  templateUrl: "./online-appointment.component.html",
  styleUrls: ["./online-appointment.component.scss"],
})
export class OnlineAppointmentComponent implements OnInit {
  @Input() data;
  constructor() {}
  ngOnInit(): void {
    console.log(this.data);
  }
}
