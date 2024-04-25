import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Isales {
  brand: string,
  model: string,
  price: number,
  year: number,
  mileage: number,
  garage: string
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private url = 'https://nestjs-hosting2.vercel.app';

  constructor(private http: HttpClient) { }

  createSale(data: Isales) {
    return this.http.post(`${this.url}/sales/add`, data);
  }

  fetchUserSales(id: string) {
    return this.http.get(`${this.url}/sales/${id}`);
  }
}
