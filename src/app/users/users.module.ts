import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
