import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  if (inject(AuthenticationService).authenticated) {
    return true;
  } else {
    inject(Router).navigateByUrl('/login');
    return false;
  }
};
