import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'bugdashboard',
    component: BugDashboardComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
