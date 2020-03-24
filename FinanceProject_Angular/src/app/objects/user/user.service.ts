import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  loginUser(user: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  createUser(user: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/createUser`, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listUsers`);
  }
}
