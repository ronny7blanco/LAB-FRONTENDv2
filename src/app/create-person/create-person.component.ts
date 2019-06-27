import { Component, OnInit } from '@angular/core';
import { Personas } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Personas = new Personas();
  submitted = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false   
  }

  save() {
    this.personService.createPersona(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Personas();  
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
