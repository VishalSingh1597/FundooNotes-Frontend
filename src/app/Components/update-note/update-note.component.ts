import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {


  updateNoteForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder,
  private note: NotesService) { }

token=localStorage.getItem('token')
@Input() noteId:any


  ngOnInit(): void {
    this.updateNoteForm = this.formBuilder.group({   
      title: this.data.title,
      description: this.data.description
    })
    console.log(this.noteId);
    
  }

  updateNote(data:any){
    let payload={
       noteId:this.data.noteId,
       userId:localStorage.getItem("userId"),
      //  firstName:localStorage.getItem("firstName"),
      //  lastName:localStorage.getItem("lastName"),
      //  email:localStorage.getItem("email"),
      //  password:"9930315160",
      title:this.updateNoteForm.value.title,
      description:this.updateNoteForm.value.description
    }
    console.log(payload);    
  this.note.updateNoteService(payload).subscribe((response:any)=>{
    console.log("The Updated Response",response);
    
  })  
  }
}
