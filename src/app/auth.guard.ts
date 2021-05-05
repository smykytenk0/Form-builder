import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  constructor(private authService : AuthService, private router: Router) {}
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
