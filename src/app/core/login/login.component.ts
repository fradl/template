import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../../shared/service/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.logIn();
  }
}
