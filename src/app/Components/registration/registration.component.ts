import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  get f() { return this.registration.controls; }

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', Validators.required],
      service: 'advance'
  })
  }
  onSubmit(){
    this.submitted=true;
    console.log("calling api here", this.registration.value);

    let payload={

      firstName: this.registration.value.Firstname,
      lastName: this.registration.value.Lastname,
      email: this.registration.value.Email,
      password: this.registration.value.Password,
    }
    this.userService.registrationService(payload).subscribe((response:any) =>{
      console.log("response", response);
    });
  
  }
}