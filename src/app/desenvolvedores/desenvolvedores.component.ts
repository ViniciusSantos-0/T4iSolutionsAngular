import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Desenvolvedor } from '../models/Desenvolvedor';
import { DesenvolvedoresServices } from './desenvolvedores.service';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {

  public modalRef!: BsModalRef;
  public title = 'Desenvolvedores';
  public ver = false;
  public devSelected!: Desenvolvedor;


  public dev !: Desenvolvedor[];
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private modalService: BsModalService, private devService: DesenvolvedoresServices) {
  }

  devSelect( dev: Desenvolvedor ) {
    this.devSelected = dev;
    this.ver = true;
  }
  voltar() {
   this.ver = false;
  }

  ngOnInit() {
    this.carregarDev();
  }

  carregarDev(){
    this.devService.getAll().subscribe(
      (devs: Desenvolvedor[]) => {
        this.dev = devs;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }

}
