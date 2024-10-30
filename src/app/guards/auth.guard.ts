import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const userService = inject(UserService)

  // const userData = userService.getUserData();
  // if(userData) {
  //   return true;
  // }
  // else {
  //   router.navigateByUrl("login");
  //   return false;
  // }

  const localData = localStorage.getItem("token")
  if(localData != null){
    return true;
  }
  else {
    router.navigateByUrl("login");
    return false;
  }
};
