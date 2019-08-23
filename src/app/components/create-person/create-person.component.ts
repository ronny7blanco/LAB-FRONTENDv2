import { Component, OnInit } from '@angular/core';
import { Personas } from '../../class/person';
import { PersonService } from '../../services/person/person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Personas = new Personas();
  submitted = false;

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() {
  }

  newPersona(): void {
    this.submitted = false    
  }

  save() {
    this.personService.createPersona(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Personas(); 
    alert("Ingresado correctamente"); 
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/personas'])
  }
}
