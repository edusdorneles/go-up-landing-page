import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BannerComponent } from "./components/banner/banner.component";
import { AcademyBenefitsComponent } from "./components/academy-benefits/academy-benefits.component";
import { TheClubComponent } from "./components/the-club/the-club.component";
import { ClubBenefitsComponent } from "./components/club-benefits/club-benefits.component";
import { LocalizationComponent } from "./components/localization/localization.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterModule,
    BannerComponent,
    AcademyBenefitsComponent,
    TheClubComponent,
    ClubBenefitsComponent,
    LocalizationComponent
  ],
  templateUrl: "./home.component.html"
})
export class HomeComponent {}
