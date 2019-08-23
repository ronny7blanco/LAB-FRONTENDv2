import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DetalletipoexaListComponent } from './components/detalletipoexa-list/detalletipoexa-list.component';
import { CreateDetalletipoexaComponent } from './components/create-detalletipoexa/create-detalletipoexa.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HitorialexaListComponent } from './components/hitorialexa-list/hitorialexa-list.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { PersonaEditComponent } from './components/personas/persona-edit/persona-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonListComponent,
    HomeComponent,
    ListUsersComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    DetalletipoexaListComponent,
    CreateDetalletipoexaComponent,
    LogoutComponent,
    HitorialexaListComponent,
    AdminComponent,
    PersonaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
