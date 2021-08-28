import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public title = 'Projetos';
  public selectedProject!: string;

  public projetos = [
    {id:1, name: "NetWorks", description: "Rede de contatos e negócios"},
    {id:2, name: "System For T4i", description: "Sistema para administração de serviços"},
    {id:3, name: "System For Google", description: "Sistema para verificar pré-requisitos de padrões de arquitetura dentro de um software"},
    {id:4, name: "Upgrade Our System", description: "Melhorias em nosso sistema"},
    {id:5, name: "Create An Innovative System", description: "Planejar, estruturar e criar um sistema inovador"},
    ];

    selectProject(project: any){
      this.selectedProject = project.name;
    }
    voltar(){
      this.selectedProject = '';
    }

  constructor() { }

  ngOnInit(): void {
  }

}
