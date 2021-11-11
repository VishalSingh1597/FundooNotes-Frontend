import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  token: any;
  notesArray: any
  
  
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
  this.note.GetAllNotes().subscribe((notes:any) => {
    let notesArr = notes.data;
    //  notesArray.reverse();
     console.log("the data",notesArr);
     this.notesArray=notesArr.reverse();

})
  }
    }
// ngOnInit(): void {
//   this.GetAllNotes();
// }

// GetAllNotes() {
//   this.note.GetAllNotes).subscribe((note: any) => {
//       console.log(res);
//       console.log(res.data);
//       this.noteList = res.data.reverse();
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// }
// }