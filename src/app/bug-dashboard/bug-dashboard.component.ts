import { Component, OnInit } from '@angular/core';
import { Issue } from '../bug/issue';
import { IssueService } from './issue.service';
@Component({
  selector: 'app-bug-dashboard',
  templateUrl: './bug-dashboard.component.html',
  styleUrls: ['./bug-dashboard.component.css'],
})
export class BugDashboardComponent implements OnInit {
  issues: Issue[] = [];
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  createIssues() {}
}
