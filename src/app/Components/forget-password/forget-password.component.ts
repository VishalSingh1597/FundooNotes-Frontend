import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotEmailForm! : FormGroup;
  submitted =false;

  constructor(private formBuilder:FormBuilder ,private userService:UserService) { }

  get f() {return this.forgotEmailForm.controls;}

  ngOnInit(): void {
    this.forgotEmailForm=this.formBuilder.group({
      Email :['',Validators.required],
    })
  }

onSubmit(){
  this.submitted=true;
  console.log("The data" ,this.forgotEmailForm.value)

let payload={

  email: this.forgotEmailForm.value.Email,
}
this.userService.forgetEmailService(payload).subscribe((response:any) =>{
  console.log("response",response);
});
}
}

