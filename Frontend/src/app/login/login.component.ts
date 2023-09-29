import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;


  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required]

    })
  }
  login() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    
    if (this.loginForm != null)
      if (this.loginForm.valid)
        this.loginService.generateToken({ 'emailId': email, 'password': password }).subscribe(
          (response: any) => {
            
            this.loginService.loginUser(response.token, response.userName, email);
            location.reload();
            alert("You have logged in successfully");
            this.router.navigate(['dashboard'])
            .then(() => {
              window.location.reload();
            });
            
          },
          error => {
            alert("User not found ! Please check if email, password is correct!");
            

          }
        )


  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}
