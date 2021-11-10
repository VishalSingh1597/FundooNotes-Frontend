import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  fullEdit:boolean = false;
  pin: boolean = false;
  title='';
  description='';
  token: any;

  constructor(private router: Router, private note: NotesService) { }

  ngOnInit(): void {
  }
  
  addNote(){
    let data = {
      title: this.title,
      description: this.description,
    }
    this.token = localStorage.getItem('token');
    if (this.title && this.description) {
      this.note.createNote( data).subscribe((response) => {
        console.log("response", response);
        let message = "note created successfull";
        console.log(message);

        this.title = " ";
        this.description = "";
      })
        

       
    } 
    else{
      this.fullEdit=false;
    }
  }
  displayFull() {
    this.fullEdit = true;
  }

  close(){
    this.fullEdit=false;
  }

}



