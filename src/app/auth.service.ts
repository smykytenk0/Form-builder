import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'})
export class AuthService{
  private isAuth = false;

  login(){
    return this.isAuth = true
  }

  logout(){
    return this.isAuth = false
  }

  isAuthenticated(): boolean{
    return this.isAuth
  }
}
