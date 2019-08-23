import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(nombreUsuario, password) {
    if (nombreUsuario === "javainuse" && password === "123456") {
      sessionStorage.setItem('nombreUsuario', nombreUsuario)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('nombreUsuario')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('nombreUsuario')
  }
}
