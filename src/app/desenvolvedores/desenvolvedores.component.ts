import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {
  title = 'Desenvolvedores';

  public dev = [
    { name: 'Rodrigo Lobo' },
    { name: 'Marina Cabral' },
    { name: 'Thiago Fragoso' },
    { name: 'George Soares' },
    { name: 'Romulo Martins' },
    { name: 'Rodrigo Nunes de Lucena' },
    { name: 'Tomaz Santos Junior' },
    { name: 'Igor Albuquerque' },
    { name: 'Vinicius Santos' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
