import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseURL';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }

  getAllCategory(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/categories`);
  }

  getSpecificCategory(type: string): Observable<any> {
    return this._httpClient.get(`${baseUrl}/products`, { params: { category: type } });
  }
}
