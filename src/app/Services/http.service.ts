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

  // Put(url:any,data:any,headers:any){
  //   return this.http.put(this.BaseUrl + url,data,headers)
  // }
  Put(url: any, data: any, token: any, headers: any) {
    return this.http.put(this.BaseUrl + url, data , token && headers);
  }
  Delete(url: string, data: any, token: any = false, headers: any = null) {
   
    return this.http.post(this.BaseUrl + url, data, token && headers);
  }

  getService(url: string='', token: boolean = false, headers:any=null) {
    
    return this.http.get(this.BaseUrl + url, token && headers );
  }
}
