import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { ClassroomLessonsComponent } from "./components/classroom-lessons/classroom-lessons.component";
import { GolfAcademyComponent } from "./components/golf-academy/golf-academy.component";
import { GolfAnywhereComponent } from "./components/golf-anywhere/golf-anywhere.component";

@Component({
  selector: "app-classes",
  standalone: true,
  imports: [
    HeaderComponent,
    ClassroomLessonsComponent,
    GolfAcademyComponent,
    GolfAnywhereComponent
  ],
  templateUrl: "./classes.component.html"
})
export class ClassesComponent {}
