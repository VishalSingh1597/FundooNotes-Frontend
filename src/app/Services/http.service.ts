import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService
{

  token: any;
  BaseUrl = environment.BaseUrl;
  constructor(private http: HttpClient) { }
  
  Post(url: any, data: any, token: boolean=false, headers: any) {
    return this.http.post(this.BaseUrl + url, data , token && headers);
  }
  // Post(url:string ,data:any=null,isHeaderRequired:any=false,headers:any=false)
  // {
  //   return this.http.post(url,data,isHeaderRequired && headers)
  // }
  Get(url: any, headers: any)
  {
    return this.http.get(this.BaseUrl + url, headers);
  }
  GetAllNotes(url: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options);
  }
}
