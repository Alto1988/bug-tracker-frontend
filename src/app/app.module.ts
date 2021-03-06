import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { BugComponent } from './bug/bug.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { ResolveIssueComponent } from './resolve-issue/resolve-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    BugDashboardComponent,
    BugComponent,
    AboutComponent,
    HomePageComponent,
    BugFormComponent,
    ResolveIssueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
