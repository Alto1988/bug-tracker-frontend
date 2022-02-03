import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css'],
})
export class BugFormComponent implements OnInit {
  formData: FormGroup | any;
  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
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
  addIssue() {
    this.apiService.createIssue(this.formData?.value);
  }
}
