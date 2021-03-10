import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { CareersComponent } from "./pages/careers/careers.component";
import { JobListingComponent } from "./pages/job-listing/job-listing.component";
import { ApplicationComponent } from "./pages/application/application.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { WebsiteComponent } from "./pages/services/website/website.component";
import { MobileAppComponent } from "./pages/services/mobile-app/mobile-app.component";
import { SeoComponent } from "./pages/services/seo/seo.component";
import { GraphicComponent } from "./pages/services/graphic/graphic.component";
import { OnlineAppointmentComponent } from "./shared/components/online-appointment/online-appointment.component";
import { RecentProjectsComponent } from "./shared/components/recent-projects/recent-projects.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CareersComponent,
    JobListingComponent,
    ApplicationComponent,
    WebsiteComponent,
    MobileAppComponent,
    SeoComponent,
    GraphicComponent,
    OnlineAppointmentComponent,
    RecentProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
