import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import {  HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEntryComponent } from './edit-entry/edit-entry.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inscription', component: RegisterComponent},
  {path: 'journal', component: EntriesListComponent},
  {path: 'journal/:id', component: EntriesListComponent},
  {path: 'ajouter', component: AddEntryComponent},
  {path: 'edit/:id', component: EditEntryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    EntriesListComponent,
    LoginComponent,
    RegisterComponent,
    AddEntryComponent,
    EditEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
