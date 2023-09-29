import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url="http://localhost:8086";
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.url+"/getProducts");
  }
  
  getRating(productCode:string){
    return this.http.get<any>(this.url+"/getAvgRating/"+productCode);
  }

  putProduct(data:any){
    return this.http.put(this.url+"/addProduct",data);

  }


}
