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
    this.note.getTrashNoteService().subscribe((notes: any) => {
      this.notesArray = notes.data.reverse();
      console.log(this.notesArray);     
      //  this.notesArray = notes.data;
      // console.log(this.notesArr,"notesArr");
      
      // this.notesArray=this.notesArray.filter((notedata:any)=>{
      //   return notedata.isDeleted === true;
      //  });
      //      console.log("the data",this.notesArray);
    })
  }

}
