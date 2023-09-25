import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';

export interface AuthRes {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string ;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthRes>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    )
    .pipe(catchError(err => {
      let errMsg = 'An error occured!';
      if(err && err.error && err.error.error) {
        switch(err.error.error.message) {
          case 'EMAIL_EXISTS':
            errMsg = 'Email address is already in use!'
            break;
        }
      }
      throw errMsg;
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthRes>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
      ).pipe(catchError(err => {
        let errMsg = 'Incorrect username or password!';
        if(err && err.error && err.error.error) {
          switch(err.error.error.message) {
            case 'EMAIL_EXISTS':
              errMsg = 'Incorrect username or password!'
              break;
          }
        }
        throw errMsg;
      }));
  }

  saveLoginData(res: AuthRes) {
    localStorage.setItem('token', res.idToken);
    let currentTimeStamp = new Date().getTime();
    currentTimeStamp += +res.expiresIn * 1000;
    localStorage.setItem('expireTimeStamp', currentTimeStamp.toString());
    this.authService.token.next(res.idToken);
    this.router.navigate(['/projects']);
  }

  checkUserLoginState() {
    this.router.events.subscribe(res => {
      const currentTimeStamp = new Date().getTime();
      const userTimestamp = +localStorage.getItem('expieTimestamp');
      if(currentTimeStamp > userTimestamp && userTimestamp !== 0) {
        localStorage.clear();
        this.authService.token.next(null);``
        this.router.navigate(['/auth']);
      }
    });
  }
}
