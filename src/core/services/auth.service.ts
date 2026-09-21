import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ILogin, IRegister } from '../interFaces/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseURL';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _router = inject(Router)

  constructor(private _httpClient: HttpClient) { }

  register(registerData: IRegister): Observable<any> {
    return this._httpClient.post(`${baseUrl}/users`, registerData);
  }

  login(loginData: ILogin): Observable<any> {
    return this._httpClient.post(`${baseUrl}/users`, loginData);
  }

  private platformId = inject(PLATFORM_ID);
  authorized(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('token') != null) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this._router.navigate(['login']);
  }
}
