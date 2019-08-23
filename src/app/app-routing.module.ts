import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DetalletipoexaListComponent } from './components/detalletipoexa-list/detalletipoexa-list.component';
import { CreateDetalletipoexaComponent } from './components/create-detalletipoexa/create-detalletipoexa.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { HitorialexaListComponent } from './components/hitorialexa-list/hitorialexa-list.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { PersonaEditComponent } from './components/personas/persona-edit/persona-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGaurdService] },
  { path: 'admin/admin', component: AdminComponent, canActivate: [AuthGaurdService] },
  { path: 'admin/list-users', component: ListUsersComponent, canActivate:[AuthGaurdService] },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'personas', component: PersonListComponent, canActivate:[AuthGaurdService] },
  { path: 'personas/add', component: CreatePersonComponent, canActivate:[AuthGaurdService] },
  { path: 'personas/edit', component: PersonaEditComponent, canActivate:[AuthGaurdService] },
  { path: 'detalletipoexa-list', component: DetalletipoexaListComponent, canActivate:[AuthGaurdService] },
  { path: 'detalletipoexa-list/create-detalle', component: CreateDetalletipoexaComponent, canActivate:[AuthGaurdService]},
  { path: 'historialexa-list', component: HitorialexaListComponent, canActivate:[AuthGaurdService]},
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
