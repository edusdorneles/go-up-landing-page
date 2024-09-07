import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ClassesComponent } from "./pages/classes/classes.component";
import { ExperiencesComponent } from "./pages/experiences/experiences.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "classes", component: ClassesComponent },
  { path: "experiences", component: ExperiencesComponent },
  { path: "*", redirectTo: "", pathMatch: "full" }
];
