import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseURL';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userName: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('username') || '');

}
