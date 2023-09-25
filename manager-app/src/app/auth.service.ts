import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;

  token = new BehaviorSubject<string>(localStorage.getItem('token'));

  constructor(private router: Router) {}

  isLogged() {
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.logged);
      }, 1000);
    });
    return result;
  }

  logIn() {
    this.logged = true;
  }

  logOut() {
    this.logged = false;
    localStorage.clear();
    this.token.next(null);
    this.router.navigate(['/auth']);
  }

}
