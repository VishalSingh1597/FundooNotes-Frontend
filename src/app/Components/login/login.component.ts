import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  login!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService ,private router: Router) { }
  get f() { return this.login.controls; }
  ngOnInit(): void {
    this.login = this.formBuilder.group({
  Email: ['', Validators.required],
  Password: ['', [Validators.required, Validators.minLength(6)]],
})
}
onSubmit(){
  this.submitted=true;
  console.log(this.login.value);

  let payload={

    email: this.login.value.Email,
    password: this.login.value.Password,
  }
  this.userService.loginService(payload).subscribe((response:any) =>{
    console.log("response",response);
    localStorage.setItem("token",response.token);
    localStorage.setItem("firstName",response.data.firstName);
    localStorage.setItem("lastName",response.data.lastName);
    localStorage.setItem("email",response.data.email);
    localStorage.setItem("password",response.data.password);
    localStorage.setItem("userId",response.data.userId);

    this.router.navigateByUrl('/dashboard/create-note')
  });
 
}
}

