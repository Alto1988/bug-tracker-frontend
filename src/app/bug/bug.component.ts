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
      summary: '',
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
    this.http
      .put('http://localhost:9092/api/bug/' + this.bugId, this.formData.value, {
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
