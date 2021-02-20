import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "../pages/contact/contact.component";
import { HomeComponent } from "../pages/home/home.component";
import { AboutComponent } from "../pages/about/about.component";
import { CareersComponent } from "../pages/careers/careers.component";
import { JobListingComponent } from "../pages/job-listing/job-listing.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  { path: "careers", component: CareersComponent },
  { path: "job-listing/:id", component: JobListingComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  //imports: [CommonModule],
})
export class AppRoutingModule {}
