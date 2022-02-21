import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopnavComponent } from './components/topnav/topnav.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    TopnavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopnavComponent,
  ]
})
export class CoreModule {}
