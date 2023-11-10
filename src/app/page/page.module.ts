import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './page.routes';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [],

  providers: [provideRouter(routes)],
  imports: [CommonModule],
})
export class PageModule {}
