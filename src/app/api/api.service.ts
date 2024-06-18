import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

//   getItems(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/items`);
//   }

//   addItem(item: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/items`, item);
//   }
}
