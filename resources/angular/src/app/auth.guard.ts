import { CanActivateFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const authGuard: CanActivateFn = (route, state) => {


  if (true) {
    return true;
  } else {

    return false;
  }
};
