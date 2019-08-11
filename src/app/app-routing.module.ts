import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DetalletipoexaListComponent } from './components/detalletipoexa-list/detalletipoexa-list.component';
import { CreateDetalletipoexaComponent } from './components/create-detalletipoexa/create-detalletipoexa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/list-users', component: ListUsersComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'personas', component: PersonListComponent },
  { path: 'personas/add', component: CreatePersonComponent },
  { path: 'personas/update', component: PersonDetailsComponent },
  { path: 'detalletipoexa-list', component: DetalletipoexaListComponent},
  { path: 'detalletipoexa-list/create-detalle', component: CreateDetalletipoexaComponent},
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
