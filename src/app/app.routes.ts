import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PageModule } from './page/page.module';
import { authenticationGuard } from './shared/authentication.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pages',
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
    canActivate: [authenticationGuard],
  },
  { path: ' ', redirectTo: 'pages', pathMatch: 'full' },
];
