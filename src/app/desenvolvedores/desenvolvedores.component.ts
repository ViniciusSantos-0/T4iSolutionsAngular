import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {
 
  public title = 'Desenvolvedores';
  public devSelected!: string;
 

  public dev = [
    {id:1, name: 'Alessandro Bezerra', position: 'Engenheiro de Dados'},
    {id:2, name: 'Juliane', position: 'Engenheira de software'},
    {id:3, name: 'Samuel', position: 'Analista Sênior'},
    {id:4, name: 'André Silva', position: 'Engenheiro de software'},
    {id:5, name: 'Anderson Gonçalves', position: 'Estagiário full-stack'},
    {id:6, name: 'Rodrigo Nunes de Lucena', position: 'Desenvolvedor de software sênior'},
    {id:7, name: 'Tomaz Santos Junior', position: 'Engenheiro de sofware full-Stack Sênior'},
    {id:8, name: 'Igor Albuquerque', position: 'Engenheiro de software'},
    {id:9, name: 'Vinicius Santos', position: 'Estagiário Futuro Engenheiro'},
  ];
  constructor() { }

  devSelect(dev: any){
    this.devSelected = dev.name;
  }
  voltar(){
    this.devSelected = '';
  }

  ngOnInit() {
  }

}
