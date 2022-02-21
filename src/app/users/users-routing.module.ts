import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersDetailsComponent } from '@users/components/users-details/users-details.component';
import { UsersListComponent } from '@users/components/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/:id',
    component: UsersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
