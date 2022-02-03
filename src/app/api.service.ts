import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from './bug/issue';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  issuesService: Issue[] = [];
  apiResponse: any;
  issueNo: number = 0;
  constructor(private http: HttpClient, private router: Router) {}
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
    console.log(issue);
    this.issueNo = this.issuesService.length + 1;
    this.issuesService.push(issue);
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
    this.router.navigate(['/bugdashboard']);
  }
}
