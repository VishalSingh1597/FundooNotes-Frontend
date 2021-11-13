import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {

  token=localStorage.getItem('token')

  constructor(private note:NotesService) { }
  notesArray=[]
  notesArr=[]
  ngOnInit(): void {
    this.getArchiveNotes();
  }

  
  getArchiveNotes(){

    this.note.getArchiveNoteService().subscribe((response:any) => {
       console.log(response);  
        this.notesArray = response.data;
        console.log(this.notesArray);
        
        // this.notesArray=this.notesArr.filter((notedata:any)=>{
        //   return notedata.isDeleted == true &&  notedata.isArchived == true;
        //  });
        // this.notesArray.reverse()
        // console.log("noteList ",this.notesArray)
    })
  }  
}