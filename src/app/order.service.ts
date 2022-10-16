import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private serverUrl='http://localhost:8084';
  constructor(private http:HttpClient) { }

  public getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.serverUrl}/customer/allorders`);
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.serverUrl}/customer/order`, order);
  }
  public deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}/customer/order/${orderId}`);
  }
}
