import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'booklist', loadChildren:() => import('./book-list/book-list.module').then(m => m.BookListModule)},
  //{path:'booklist', loadChildren:'./book-list/book-list.module#BookListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
