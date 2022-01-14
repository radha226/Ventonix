import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HeaderService } from "src/app/shared/services/header.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactUs: FormGroup;
  constructor(private fb: FormBuilder, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.isHomePage.next(false);
    this.checkContactformValidation();
  }
  checkContactformValidation() {
    this.contactUs = this.fb.group({
      fullName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      // email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
      conditon: [false],
    });
  }
  onSubmit(data) {
    if (!data.invalid) {
      this.checkContactformValidation;
    } else {
    }
  }
  formName() {
    return this.contactUs.controls;
  }
}
