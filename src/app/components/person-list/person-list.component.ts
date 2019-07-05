import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../../class/person';
import { PersonService } from '../../services/person/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Observable<Personas[]>;

  constructor(private personService: PersonService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.persons = this.personService.getPersonasList();
  }

  deletePersona(id: number) {
    this.personService.deletePersona(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
