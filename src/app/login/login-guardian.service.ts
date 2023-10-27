import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuardian {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.loginService.isAutenticado()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
