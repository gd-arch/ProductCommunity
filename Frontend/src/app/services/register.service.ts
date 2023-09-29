import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url="http://localhost:8086";
  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post<any>(this.url+"/registerUser",data);
  }
}
