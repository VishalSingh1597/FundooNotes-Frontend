import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  headers:any;
  token: any;
  id=localStorage.getItem('userId')
  constructor(private http: HttpService) { }

  url = environment.BaseUrl;

createNote(reqData: any) {
  this.token= localStorage.getItem("token")
  console.log(this.token);
  console.log(reqData);
  
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    })
  }
  console.log(options);
  return this.http.Post('/addnotes',reqData, true,options);

}
GetAllNotes(){
  this.token= localStorage.getItem("token")
  console.log(this.token);
  
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    })
  }
  console.log(options);
  return this.http.Get('/getNote', options);
}
GetallNotes(url: any) {
  return this.http.GetAllNotes('/getNote');
}

updateNoteService(data:any){
  const updatData = {
    noteId: data.noteId,
    userId:data.userId,
    title: data.title,
    description: data.description
  }
  console.log(updatData);
  console.log(data);
  
  
  this.token= localStorage.getItem("token")
  console.log(this.token);
  
  let options={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + this.token
    })
  }
  return this.http.Put(`/updateNote?noteId=${data.noteId}&userId=${data.userId}&title=${data.title}&description=${data.description}`,data, this.token, options)
}
trashNotes(deleteData:any){
  // const updatData = {
  //   noteId: deleteData.noteId,
  // }
  console.log(deleteData.noteId);
  // console.log(updatData);
  
  
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  console.log("options",options);
  return this.http.Put(`/moveToTrash?noteId=${deleteData.noteId}`, deleteData, true,options )
}

getTrashNoteService(){
  var id=localStorage.getItem('userId')
  console.log("my user id" + id);
  
  let options = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };
  console.log(options);

  return this.http.getService('/getTrash',true, options);
}

deleteForEverNotes(deletedData:any){
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  console.log("options",options);
  return this.http.Delete(`/deletenote?noteId=${deletedData.noteId}`, deletedData,this.headers )
}
changeColorService(reqPayload: any) {
  console.log(reqPayload);
  
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  console.log("options",options);
  return this.http.Put(`/changeColour?noteId=${reqPayload.noteId}&noteColor=${reqPayload.color}`, reqPayload, true,options )
}

archiveNotes(data:any){
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  console.log("options",options);
  return this.http.Put(`/Archive?noteId=${data.noteId}`,data,true,options )
}

getArchiveNoteService(){
  let options = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };
  console.log(options);

  return this.http.getService('/getArchive',true,options);
}
}



