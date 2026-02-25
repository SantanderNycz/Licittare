import { Routes } from "@angular/router";
import { MaintenanceComponent } from "./components/maintenance/maintenance.component";
import { HomePageComponent } from "./pages/home/home-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "**", component: MaintenanceComponent },
];
