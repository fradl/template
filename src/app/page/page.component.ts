import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {}
