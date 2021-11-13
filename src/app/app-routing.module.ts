import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DeleteNoteComponent } from './Components/delete-note/delete-note.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: "login", component: LoginComponent } ,
  { path: "registration", component: RegistrationComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "reset-password", component:  ResetPasswordComponent },
  {path:'icons',component:IconsComponent},
  {path:'display-notes',component:DisplayNotesComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      { path: '', redirectTo: 'get-notes', pathMatch: 'full' }, 
      { path: "get-notes", component: GetNotesComponent},
      {path:"create-note", component: CreateNoteComponent},
      {path:"trash", component: DeleteNoteComponent},
      {path:'archive',component:ArchivenotesComponent}
    ]
  },

  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
