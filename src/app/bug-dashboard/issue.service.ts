import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../bug/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issuesService: Issue[] = [];
  apiResponse: any;
  constructor(private http: HttpClient) {}

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
        this.issuesService = this.apiResponse;
        console.log(this.issuesService);
        // console.log(this.apiResponse);
      });
    return this.issuesService.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue) {
    console.log('Function was called');
    this.http
      .post('http://localhost:9092/api/bug', issue, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .subscribe((response) => {
        this.apiResponse = response;
        console.log(this.apiResponse);
      });
  }
}
