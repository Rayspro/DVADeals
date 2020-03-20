import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post<any>(`${environment.server}/auth/register`, user, {
      observe: 'response'
    });
  }

  login(user) {
    const data: any = this.http.post<any>(`${environment.server}/auth/login`, user, {
      observe: 'response'
    });
    return data;
  }

  getAuth(): boolean {
    return !!localStorage.getItem('token');
  }

}
