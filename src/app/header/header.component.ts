import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  active: number = 1;
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {}

  getInitialData() {
    this.getInitialData();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
