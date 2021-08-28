import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {
 public title = 'Desenvolvedores';

  public dev = [
    {id:1, name: 'Rodrigo Lobo', position: 'Sócio Diretor'},
    {id:2, name: 'Marina Cabral', position: 'Analista administrativo'},
    {id:3, name: 'Thiago Fragoso', position: 'Sócio'},
    {id:4, name: 'George Soares', position: 'Sócio'},
    {id:5, name: 'Romulo Martins', position: 'Sócio'},
    {id:6, name: 'Rodrigo Nunes de Lucena', position: 'Desenvolvedor de software sênior'},
    {id:7, name: 'Tomaz Santos Junior', position: 'Engenheiro de sofware full-Stack Sênior'},
    {id:8, name: 'Igor Albuquerque', position: 'Engenheiro de software'},
    {id:9, name: 'Vinicius Santos', position: 'Estagiário'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
