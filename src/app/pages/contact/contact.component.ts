import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactUs: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.checkContactformValidation();
  }
  checkContactformValidation() {
    this.contactUs = this.fb.group({
      fullName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
      conditon: [true],
    });
  }
  onSubmit(data) {
    console.log(data.value);
    if (!data.invalid) {
      this.checkContactformValidation;
    } else {
      console.log(data.value);
    }
  }
  formName() {
    return this.contactUs.controls;
  }
}
