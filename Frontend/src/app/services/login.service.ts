import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8086";
  constructor(private http:HttpClient) { }

loginUser(token: string,userName:string,emailId:string){
  localStorage.setItem("token",token);
  localStorage.setItem("userName",userName);
  localStorage.setItem("emailId",emailId);
}

isLoggedIn(){
  let token =localStorage.getItem("token");
  if(token==undefined||token==''||token==null){
    return false;
  }else return true;
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('emailId')
  return true;
}

getToken(){
  return localStorage.getItem('token');
}
getUserName(){
  return localStorage.getItem('userName');
}
getEmailId(){
  return localStorage.getItem('emailId');
}
// generate token from server
generateToken(credentials:any){
  return this.http.post(this.url+'/auth',credentials);
}



}


