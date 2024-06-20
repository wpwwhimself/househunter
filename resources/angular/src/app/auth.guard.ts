import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const http = inject(HttpClient)

  http.get("/api/auth/user")
    .subscribe(
      res => true,
      err => {
        console.error(err)
        router.navigate(["login"])
        return false
      }
    )
  return true
};
