import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'bugdashboard',
    component: BugDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
