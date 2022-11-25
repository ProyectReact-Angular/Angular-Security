import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';
import { ApiauthService } from './service/apiauth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usuario: Usuario;

  constructor(public apiauthservice: ApiauthService, private router: Router){
    this.apiauthservice.usuario.subscribe(res => {
      this.usuario = res;
      //console.log('Cambio el objeto: ' + res);
    });
  }

  logout(){
    this.apiauthservice.logout();
    this.router.navigate(['/login']);
  }
}
