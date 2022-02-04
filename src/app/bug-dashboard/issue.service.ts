import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../bug/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issuesService: Issue[] = [];
  constructor(private http: HttpClient) {}
}
