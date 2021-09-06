import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Desenvolvedor } from 'src/app/models/Desenvolvedor';
import { Works } from 'src/app/models/Works';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-devs-projetos',
  templateUrl: './devs-projetos.component.html',
  styleUrls: ['./devs-projetos.component.css']
})

export class DevsProjetosComponent implements OnInit {


  @Input() public devs!: Desenvolvedor[];
  @Output() closeModal = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit() {
  }

  worksConcat(works: Works[]) {
    return Util.nomeConcat(works);
  }

  devSelect(dev: Desenvolvedor) {
    this.closeModal.emit(null);
    this.router.navigate(['/dev', dev.id]);
  }
}
