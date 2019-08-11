import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../../class/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Usuarios = new Usuarios();
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false   
  }

  save() {
    this.userService.createUsuario(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new Usuarios();  
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
