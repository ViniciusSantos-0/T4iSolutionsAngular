import { Component, OnInit } from '@angular/core';
import { Projeto } from '../models/Projeto';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public title = 'Projetos';
  public selectedProject!: Projeto;
  public ver = false;

  public projetos = [
    { id: 1, name: "NetWorks", description: "Rede de contatos e negócios" },
    { id: 2, name: "System For T4i", description: "Sistema para administração de serviços" },
    { id: 3, name: "System For Google", description: "Sistema para verificar pré-requisitos de padrões de arquitetura dentro de um software" },
    { id: 4, name: "Upgrade Our System", description: "Melhorias em nosso sistema" },
    { id: 5, name: "Create An Innovative System", description: "Planejar, estruturar e criar um sistema inovador" },
  ];

  selectProject(project: Projeto) {
    this.selectedProject = project;
    this.ver = true;
  }
  voltar() {
    this.ver = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
