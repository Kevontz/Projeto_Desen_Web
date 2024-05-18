import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users!: {
    nome: string,
    email: string,
    funcao: string,
  }[]

  constructor(private router: Router){
    this.users = [
      {
        nome: "joao",
        email: "joao@email.com",
        funcao: "Analista de Dados"
      },
      {
        nome: "maria",
        email: "maria@email.com",
        funcao: "Engenheiro de BE"
      }
    ]
  }

  redirectToEdit() {
    this.router.navigate(["/app/edit-user/"])
  }


}