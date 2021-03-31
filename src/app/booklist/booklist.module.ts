import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';


const routes:Routes=[
{path:"",component:BooklistComponent},
{path:"book-details",component:BookdetailsComponent}
];

@NgModule({
  declarations: [
     BooklistComponent,
     BookdetailsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooklistModule { }
