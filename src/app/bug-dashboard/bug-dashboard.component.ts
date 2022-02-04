import { HttpClient } from '@angular/common/http';
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
  issues: Issue[] = this.issueService.issuesService;

  showReportIssues: boolean = false;
  apiResponse: any;
  selectedIssue: Issue | null = null;
  constructor(
    public issueService: IssueService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssues = false;
    this.getPendingIssues();
  }

  completedIssue(issue: Issue) {
    const selectedIssue = {
      ...issue,
      completed: new Date(),
    };

    const index = this.issues.findIndex((id) => id === issue);
    this.issues[index] = selectedIssue;
  }

  onConfirm(confirm: boolean) {
    if (confirm && this.selectedIssue) {
      this.completedIssue(this.selectedIssue);
    }
  }

  getPendingIssues(): Issue[] {
    this.http
      .get('http://localhost:9092/api/bug', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .subscribe((response) => {
        this.apiResponse = response;
        this.issues = this.apiResponse;

        console.log(this.issues);
        // console.log(this.apiResponse);
      });
    return this.issues.filter((issue) => !issue.completed);
  }
}
