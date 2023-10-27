import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAG6ednnOGYgNLxFgEBK0xpxikrVP5BYlw',
      authDomain: 'listado-personas-ec39f.firebaseapp.com',
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
