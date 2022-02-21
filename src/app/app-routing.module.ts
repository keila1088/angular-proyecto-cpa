import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingModule } from '@users/users-routing.module';

import { HomeComponent } from '@core/components/home/home.component';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
