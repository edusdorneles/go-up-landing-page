import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-banner",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss"
})
export class BannerComponent {
  isMenuOpen = false;

  onClickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickMenuItem() {
    this.isMenuOpen = false;
  }
}
