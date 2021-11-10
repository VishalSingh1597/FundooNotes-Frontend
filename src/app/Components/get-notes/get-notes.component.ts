import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  token: any;
  notesArray: any = []
  window: any;
  
  constructor(private note: NotesService) { }

  ngOnInit(): void {
  this.note.GetAllNotes(this.token).subscribe((notes:any) => {
    let notesArray = notes.data.data;
    notesArray.reverse();
     console.log("the data",this.notesArray);
})
  }
    }