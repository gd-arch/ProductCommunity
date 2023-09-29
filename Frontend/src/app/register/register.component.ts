import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public signUpForm !:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:  Router,private registerService:RegisterService) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      firstName:['',Validators.required],
      emailId:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
      lastName:['',[Validators.required]]
      
    })
    
  }
  signUp(){
    if(this.signUpForm.valid)
   this.registerService.registerUser(this.signUpForm.value).subscribe({
    next:(res)=>{
       
      if(!(res.id==''||res.id==null))
      alert("User Succesfully registered");
      else alert("Can register user");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },
    error:(err)=>{
      
      alert(err.error.message);}
   })

  }
  get registerForm() { return this.signUpForm.controls; }


}
