import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css'],
})
export class BugFormComponent implements OnInit {
  @Output() formClose = new EventEmitter();
  formData: FormGroup | any;
  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: '',
      priority: '',
      created: '',
      updated: '',
      resolutionSummary: '',
    });
  }
  addIssue() {
    if (this.formData && this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.apiService.createIssue(this.formData?.value);
    this.formClose.emit();
  }
}
