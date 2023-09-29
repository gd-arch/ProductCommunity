import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  public url="http://localhost:8086";
  constructor(private http:HttpClient) { }

  getStats(){
    return this.http.get(this.url+'/getstats');
  }
}
