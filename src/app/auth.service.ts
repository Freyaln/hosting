import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Iuser {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://nestjs-auth-w-guards-w-interceptors-w-decorators-w-lzrxjibpl.vercel.app';

  constructor(private http: HttpClient) { }

  register(data: Iuser) {
    return this.http.post(`${this.url}/register`, { data });
  }

  login(data: Iuser) {
    return this.http.post(`${this.url}/login`, { data });
  }
}
