import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss']
})
export class DeleteNoteComponent implements OnInit {

  TrashNote=[]
  notesArray=[]
  notesArr=[]
 
  
token=localStorage.getItem('token')
  constructor(private note:NotesService) { }
 
  ngOnInit(): void {
    this.getTrashNotes();
  }

  getTrashNotes(){
    this.note.GetAllNotes().subscribe((notes: any) => {
           
       this.notesArr = notes.data;
      console.log(this.notesArr);
      
      this.notesArray=this.notesArr.filter((notedata:any)=>{
        return notedata.isDeleted == true;
       });
           console.log("the data",this.notesArray);
    })
  }

}
