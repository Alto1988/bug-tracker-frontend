import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css'],
})
export class BugComponent implements OnInit {
  bugId: number = history.state.index;
  showForm: boolean = true;
  simpleBug = {
    title: '',
    description: '',
    summary: '',
    priority: '',
    status: '',
  };
  formData: FormBuilder | any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.simpleBug.title = history.state.title;
    this.simpleBug.description = history.state.description;
    this.simpleBug.summary = history.state.summary;
    this.formData = this.fb.group({
      title: [this.simpleBug.title, Validators.required],
      description: [this.simpleBug.description, Validators.required],
      resolutionSummary: this.simpleBug.summary,
      priority: this.simpleBug.priority,
      status: this.simpleBug.status,
    });
  }

  onDelete() {
    this.http
      .delete('http://localhost:9092/api/bug/' + this.bugId, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .subscribe((response) => {
        this.router.navigate(['/bugdashboard']);
      });
  }

  onUpdate() {
    // console.log(this.bugId);
    //Stretch goals fix this method for the love of god
    this.http
      .put('http://localhost:9092/api/bug/' + this.bugId, this.simpleBug, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .subscribe((response) => {
        this.router.navigate(['/bugdashboard']);
      });
  }

  show() {
    this.showForm = !this.showForm;
  }
}
