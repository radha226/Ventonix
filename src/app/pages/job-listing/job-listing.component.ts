import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-job-listing",
  templateUrl: "./job-listing.component.html",
  styleUrls: ["./job-listing.component.scss"],
})
export class JobListingComponent implements OnInit {
  singleDetail: any;
  jobDetail: Array<object> = [
    {
      name: "Sr. Mobile Apps Developer",
      role: [
        {
          desc: "Build Functional and Appealing Mobile apps",
        },
        {
          desc: "Ability to write well-documented, clean Javascript code",
        },
        {
          desc: "Build pixel-perfect, buttery smooth UIs across both mobile platforms",
        },
        {
          desc: "Leverage native APIs for deep integrations with both platforms",
        },
        {
          desc: "Maintain code and write automated tests to ensure the product is of the highest quality",
        },
        {
          desc: "Rock solid at working with third-party dependencies and debugging dependency conflicts",
        },
        {
          desc: "Diagnose and fix bugs and performance bottlenecks for performance that feels native",
        },
      ],
      skill: [
        {
          desc: "Firm grasp of the JavaScript {{and Typescript or ClosureScript}} language and its nuances",
        },
        {
          desc: "Familiarity with native build tools, like XCode, Gradle Android Studio, IntelliJ",
        },
        {
          desc: "Understanding of REST APIs, the document request model, and offline storage",
        },
        { desc: "React Native" },
        { desc: "Redux/Mobx" },
        { desc: "RDBMS" },
        { desc: "Third Part SDK integration" },
        { desc: "Development experience with IOS/Android or both" },
        {
          desc: "React native Android app developer React Native IOS App developer JAVA SWIFT 4.0/4.2",
        },
        { desc: "Material Design pattern MVC" },
        { desc: "Web services API Web services API" },
        { desc: "JSON/GSON JSON" },
        {
          desc: "In depth knowledge and proven record in developing mobile apps",
        },
        {
          desc: "Extensive experience with React and state management frameworks such as Strong knowledge of data structures, algorithms and run time optimization",
        },
      ],
      id: 1,
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    this.headerService.isHomePage.next(false);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: any) => {
      this.singleDetail = this.jobDetail.find((value, index) => {
        return value["id"] == params["id"];
      });
      console.log(this.singleDetail);
    });
  }
}
