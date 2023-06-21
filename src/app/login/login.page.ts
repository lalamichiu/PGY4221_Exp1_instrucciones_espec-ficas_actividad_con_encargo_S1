import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string = "";
  modeloContrasena: string = "";

  constructor(private dbService: DbService) { 
    console.log("Constructor de login");
  }

  ngOnInit() {
  }

  validarCredenciales(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
    
  }
}
