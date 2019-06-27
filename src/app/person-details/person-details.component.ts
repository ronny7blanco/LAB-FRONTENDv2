import { Component, OnInit, Input } from '@angular/core';
import { Personas } from '../person';
import { PersonService } from '../person.service';
import { PersonListComponent } from '../person-list/person-list.component';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() person: Personas;

  constructor(private personService: PersonService, private listComponent: PersonListComponent) { }

  ngOnInit() {
  }

}
