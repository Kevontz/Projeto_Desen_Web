import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  userCount: number = 5;
  profissoes: {
    [key: string]: number;
  } = {
    'Desenvolvedor de FE': 5,
    'Desenvolvedor de BE': 10,
    'Analista de Dados': 2,
    'Líder Técnico': 1,
  };
}
