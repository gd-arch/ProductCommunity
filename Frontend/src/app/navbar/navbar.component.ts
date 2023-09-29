import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public loggedIn=false;
  public userName:any="";

  constructor(private loginService:LoginService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.userName=this.loginService.getUserName()!=null?this.loginService.getUserName():'';
  }
  logout(){
    this.loggedIn=false;
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  login(){
    this.loggedIn
  }

}
