import { Lessons17UsersComponent } from './lessons17-users/lessons17-users.component';
import { Lessons17TaskListComponent } from './lessons17-task-list/lessons17-task-list.component';
import { Lessons16Component } from './lessons16/lessons16.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'lessons16', component: Lessons16Component},
  {path:'lessons17-task-list', component: Lessons17TaskListComponent},
  {path:'lessons17-users', component: Lessons17UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
