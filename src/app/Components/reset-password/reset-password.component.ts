import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordpage! : FormGroup;
  submitted = false;

  constructor(private formbuilder : FormBuilder,private user:UserService) { }
  get f() {return this.resetpasswordpage.controls;}

  ngOnInit(): void {
    this.resetpasswordpage = this.formbuilder.group({
      password : ['',Validators.required],
      confirm : ['',Validators.required],
      service:['advance',Validators.required]
    })
  }

  
  onSubmit(){
    this.submitted=true;
    console.log("the data", this.resetpasswordpage.value);

    let payload={

      password: this.resetpasswordpage.value.Password,
    }
    this.user.resetpasswordService(payload).subscribe((response:any) =>{
      console.log("response",response);
    });
    }
    }
