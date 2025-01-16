import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   apiUrl = "http://127.0.0.1:8000/api"
  
    private httpClient = inject(HttpClient)
  
    getAll(): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/getAll`);  
    }
    insert(user: any): Observable<any>{
      return this.httpClient.post<any>(`${this.apiUrl}/usuario`, user); 
    }
    delete(id:number): Observable<any>{
      return this.httpClient.delete<any>(`${this.apiUrl}/usuario/${id}`); 
    }
}
