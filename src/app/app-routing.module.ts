import { PersonDetailsComponent } from './person-details/person-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { CreatePersonComponent } from './create-person/create-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'personas', component: PersonListComponent },
  { path: 'add', component: CreatePersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
