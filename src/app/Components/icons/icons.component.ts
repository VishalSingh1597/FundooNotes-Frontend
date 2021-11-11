import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any
  @Input() note:any
  @Input() noteData:any
  isExpandable: boolean = false
  isTrashComponent: boolean = false
  isArchive: boolean = false

  constructor( private route: ActivatedRoute, private router: Router) { }

  token = localStorage.getItem('token')

  ngOnInit(): void {
    let comp = this.route.snapshot.component;

  }

  }