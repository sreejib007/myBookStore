import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'booklist',loadChildren:()=> import('./booklist/booklist.module').then(m => m.BooklistModule)},
  {path:'register',component:RegistrationFormComponent},
  {path:'mycart',component:MyCartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
