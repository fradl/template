import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contentlayout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contentlayout.component.html',
  styleUrl: './contentlayout.component.css',
})
export class ContentlayoutComponent {}
