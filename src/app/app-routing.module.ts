import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { BugComponent } from './bug/bug.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
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
  {
    path: 'create_bug',
    component: BugFormComponent,
  },
  {
    path: 'bug/:id',
    component: BugComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
