import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
token: any;
BaseUrl = environment.BaseUrl;

  constructor(private httpService: HttpService) { 
    localStorage.getItem('token')
  }
  registrationService(data: any){
    this.token=localStorage.getItem('Token');
    let options={
      headers:new HttpHeaders({
        'Authorization': 'Bearer' + this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.Post('/register',data, true,options )
  }
  loginService(data: any){
    this.token=localStorage.getItem('Token');
    let options={
      headers:new HttpHeaders({
        'Authorization': 'Bearer' + this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.Post('/login',data, true,options  )
}
forgetEmailService(data: any){
  this.token=localStorage.getItem('Token');
  let options={
    headers:new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.httpService.Post('/forgotpassword',data, true,options  )
}
resetpasswordService(data: any){
  this.token=localStorage.getItem('Token');
  let options={
    headers:new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.httpService.Post('/resetpassword',data, true,options )
}
}
