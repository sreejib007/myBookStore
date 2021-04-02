import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TestComponent } from './test/test.component';
import { CanActivateTeam } from './router.guad'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'booklist',loadChildren:()=> import('./booklist/booklist.module').then(m => m.BooklistModule)},
  {path:'register',component:RegistrationFormComponent},
  {
    path:'test/:id/:name/:role',
    canActivate: [CanActivateTeam],
    component:TestComponent},
  {path: '**', redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateTeam]
})
export class AppRoutingModule { }
