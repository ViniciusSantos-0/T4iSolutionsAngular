import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/models/Projeto';

@Component({
  selector: 'app-projetos-devs',
  templateUrl: './projetos-devs.component.html',
  styleUrls: ['./projetos-devs.component.css']
})
export class ProjetosDevsComponent implements OnInit {

  @Input() public projetos!: Projeto[];
  @Output() closeModal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  projetoSelect(id: number) {
    this.closeModal.emit(null);
    this.router.navigate(['/projeto/', id]);
  }

}
