import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.scss"],
})
export class ApplicationComponent implements OnInit {
  submitted = false;
  options = [
    {
      value: "Software engineer - React Js",
      name: "Software engineer - React Js",
    },
    { value: "Product Manager", name: "Product Manager" },
    { value: "UX Designer", name: "UX Designer" },
    { value: "Product UI Designer", name: "Product UI Designer" },
    {
      value: "Software engineer - Front-end design",
      name: "Software engineer - Front-end design",
    },
    {
      value: "Software engineer - React Js",
      name: "Software engineer - React Js",
    },
    {
      value: "Software engineer - Node Js",
      name: "Software engineer - Node Js",
    },
    {
      value: "Software engineer - React native",
      name: "Software engineer - React native",
    },
  ];
  applicationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.checkValidation();
    window.scrollTo(0, 0);
  }
  checkValidation() {
    this.applicationForm = this.formBuilder.group({
      jobDetails: ["", Validators.required],
      FullName: ["", Validators.required],
      Email: ["", [Validators.required, Validators.email]],
      Phone: ["", Validators.required],
      experience: ["", Validators.required],
      CTC: ["", Validators.required],
      Expected: ["", Validators.required],
      Reason: ["", Validators.required],
      resume: ["", Validators.required],
      letter: ["", Validators.required],
    });
  }
  get formName() {
    return this.applicationForm.controls;
  }
  onSubmit(data) {
    console.log(data.value);
    if (!data.valid) {
    } else {
      this._snackBar.open("You have Successfully Applied this position", "", {
        duration: 2000,
      });
      // console.log(data.value);
    }
  }

  ngOnInit(): void {}
}
