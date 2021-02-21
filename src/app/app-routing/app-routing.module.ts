import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "../pages/contact/contact.component";
import { HomeComponent } from "../pages/home/home.component";
import { AboutComponent } from "../pages/about/about.component";
import { CareersComponent } from "../pages/careers/careers.component";
import { JobListingComponent } from "../pages/job-listing/job-listing.component";
import { ApplicationComponent } from "../pages/application/application.component";
import { WebsiteComponent } from "../pages/services/website/website.component";
import { MobileAppComponent } from "../pages/services/mobile-app/mobile-app.component";
import { GraphicComponent } from "../pages/services/graphic/graphic.component";
import { SeoComponent } from "../pages/services/seo/seo.component";
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
  { path: "website", component: WebsiteComponent },
  { path: "mobile", component: MobileAppComponent },
  { path: "seo", component: SeoComponent },
  { path: "graphic", component: GraphicComponent },
  { path: "application", component: ApplicationComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  //imports: [CommonModule],
})
export class AppRoutingModule {}
