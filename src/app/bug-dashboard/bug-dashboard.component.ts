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
  formData: FormGroup;
  constructor(private issueService: IssueService, private fb: FormBuilder) {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      created: '',
      updated: '',
      resolutionSummary: '',
    });
  }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  //TODO: create a method that allows us to create an issue
  createIssues() {
    const formValues = this.formData.value;
    if (
      formValues.title &&
      formValues.description &&
      formValues.priority &&
      formValues.status &&
      formValues.created &&
      formValues.updated
    ) {
      this.issueService.createIssue(formValues);
      this.formData.reset();
    }
  }
}
