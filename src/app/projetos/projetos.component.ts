import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  title = 'Projetos';
 public projetos = [
   { name: "NetWorks"},
   { name: "System For T4i"},
   { name: "System For Google"},
   { name: "Upgrade Our System"},
   { name: "Create An Innovative System"},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
