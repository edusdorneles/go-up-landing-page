import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { GroupFieldVisitComponent } from "./components/group-field-visit/group-field-visit.component";
import { GolfForCompanyComponent } from "./components/golf-for-company/golf-for-company.component";

@Component({
  selector: "app-experiences",
  standalone: true,
  imports: [HeaderComponent, GroupFieldVisitComponent, GolfForCompanyComponent],
  templateUrl: "./experiences.component.html"
})
export class ExperiencesComponent {}
