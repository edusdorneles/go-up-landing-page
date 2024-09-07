import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  isMenuOpen = false;

  onClickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickMenuItem() {
    this.isMenuOpen = false;
  }
}
