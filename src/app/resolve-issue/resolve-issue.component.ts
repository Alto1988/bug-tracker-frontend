import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../bug/issue';

@Component({
  selector: 'app-resolve-issue',
  templateUrl: './resolve-issue.component.html',
  styleUrls: ['./resolve-issue.component.css'],
})
export class ResolveIssueComponent implements OnInit {
  //This is the id that i need for the backend to delete the issue /bug/{id}
  @Input() issueNumber: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();
  issues: Issue[] = [];
  selectedIssue: Issue | null = null;

  constructor() {}

  ngOnInit(): void {}

  agree() {
    this.confirm.emit(true);
    this.issueNumber = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.issueNumber = null;
  }

  completedIssue(issue: Issue) {
    const selectedIssue = {
      ...issue,
      completed: new Date(),
    };

    const index = this.issues.findIndex((id) => id === issue);
    this.issues[index] = selectedIssue;
  }
}
