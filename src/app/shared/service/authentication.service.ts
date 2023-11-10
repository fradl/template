import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticated = false;

  constructor(@Optional() @SkipSelf() parent?: AuthenticationService) {
    if (parent) {
      throw Error(
        `[GuardedSingletonService]: trying to create multiple instances,
        but this service should be a singleton.`
      );
    }
  }

  public logIn() {
    this.authenticated = true;
  }
}
