import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../bug/issue';
import { IssueService } from './issue.service';
@Component({
  selector: 'app-bug-dashboard',
  templateUrl: './bug-dashboard.component.html',
  styleUrls: ['./bug-dashboard.component.css'],
})
export class BugDashboardComponent implements OnInit {
  issues: Issue[] = [];
  isLoaded: Promise<boolean> = Promise.resolve(false);

  constructor(private issueService: IssueService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getIssues();
    this.isLoaded = Promise.resolve(true);
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();

    // this.isLoaded = Promise.resolve(true);
  }
}
