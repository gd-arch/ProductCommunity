import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url="http://localhost:8086";
  constructor(private http:HttpClient) { }
  
  getReviews(productCode:string){
    return this.http.get<any>(this.url+"/getAllReview/"+productCode);
  }
  putReview(data:any,productCode:string){
    return this.http.put<any>(this.url+"/insertReview/"+productCode,data);
  }

  deleteReview(productCode:string,emailId:string){
    return this.http.delete<any>(this.url+"/deleteReview/"+productCode+"/"+emailId);
  }

}
