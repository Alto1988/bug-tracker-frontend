import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../bug/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issues: Issue[] = [];
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
        this.issues = this.apiResponse.data;
        console.log(this.issues);
        console.log(this.apiResponse);
      });
    return this.issues.filter((issue) => !issue.completed);
  }
}
