import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {select, Store} from "@ngrx/store";
import {getAuthStatusSelector} from "./store/styles.reducer";
import {tap} from "rxjs/operators";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  constructor(private auth : AuthService, private router: Router, private store: Store) {}
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    const currentUser = this.auth.showAuthStatus();
    if(currentUser){
      return true
    }
    this.router.navigate(['/login']);
    return false;
  }
}
