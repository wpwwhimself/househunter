import { Routes } from '@angular/router';
import { ShowcaseComponent } from 'layouts/showcase/showcase.component';
import { DashboardComponent } from 'layouts/dashboard/dashboard.component';
import { HomePageComponent } from 'pages/showcase/home-page/home-page.component';
import { LoginComponent } from 'pages/showcase/login/login.component';
import { MainComponent } from 'pages/dashboard/main/main.component';
import { LocationsComponent } from 'pages/dashboard/locations/locations.component';
import { RegisterComponent } from 'pages/showcase/register/register.component';
import { AboutComponent } from 'pages/showcase/about/about.component';

export const routes: Routes = [
  {
    path: "",
    component: ShowcaseComponent,
    children: [
      { path: "", component: HomePageComponent },
      { path: "about", component: AboutComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]
  }, {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", component: MainComponent },
      { path: "locations", component: LocationsComponent },
    ]
  },
];
