import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestPipe } from './test.pipe';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormT } from './reactiveFormT/reactiveFormT.component';
import { ReactiveForm } from './reactiveForm/reactiveForm.component';
//import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestPipe,
    RegistrationFormComponent,
    FormComponent,
    TestComponent,
    ReactiveFormT,
    ReactiveForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
