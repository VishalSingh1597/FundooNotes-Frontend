import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { DeleteNoteComponent } from '../delete-note/delete-note.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any
  @Input() note:any
  @Input() noteData:any
  @Input() color: any;
  @Input() code: any;

  isExpandable: boolean = false
  isTrashComponent: boolean = false
  isArchive: boolean = false

  @Output() colorRefresh: EventEmitter<any> = new EventEmitter();
  @Output() noteOperation = new EventEmitter<any>();
  @Output() archiveOperation = new EventEmitter<any>();


  constructor( private route: ActivatedRoute, private router: Router, private notes: NotesService) { }
  isColor: string = '';

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];
  token = localStorage.getItem('token')

  ngOnInit(): void {
    let comp = this.route.snapshot.component;

    if (comp == DeleteNoteComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == ArchivenotesComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }
  }

  moveToTrash() {
    let deleteData = {
      noteId: this.note.noteId,
      isDeleted: true
      // Id:this.note.id
    }
    console.log("deleted data", deleteData);
    this.notes.trashNotes(deleteData).subscribe((data:any) => {
      console.log("Deleted Successfully", data);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/get-notes'])
      });
    });
  }
  
  moveToArchive() {

    let data = {
      noteId: [this.note.noteId],
      isArchived: !this.isArchive
    }
    console.log(data);
    this.notes.archiveNotes(data).subscribe(
      (response: any) => {
        console.log('archiveResponse', response);
        this.noteOperation.emit(response);

        this.router.navigateByUrl('/').then(() => {
          this.router.navigate(['/dashboard/get-notes'])
        });
      });

  }

  unArchive() {

    let data = {
      noteId: [this.note.noteId],
      isArchived: false
    }
    console.log(data);
    this.notes.archiveNotes(data).subscribe(
      (response: any) => {
        console.log('unarchiveResponse', response);
        this.router.navigateByUrl('/').then(() => {
          this.router.navigate(['/dashboard/archive'])
        });
      });

  }
  setColor(color: any) {
    this.noteData.color = color;
    console.log('color', color);
    let data = {
      color: this.noteData.color,
      noteId: [this.note.noteId],
    }
    console.log(data);
    this.notes.changeColorService(data).subscribe(
      (response: any) => {
        this.noteOperation.emit(response);

        console.log('Response of setColour', response);
      },
      (error: any) => {
        console.log('archive Error at icons methods', error);

      }
    );
   
  }


  }