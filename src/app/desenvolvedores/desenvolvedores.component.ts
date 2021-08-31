import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Desenvolvedor } from '../models/Desenvolvedor';
import { DesenvolvedoresServices } from './desenvolvedores.service';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})
export class DesenvolvedoresComponent implements OnInit {

  public devSelected!: Desenvolvedor;
  public modalRef!: BsModalRef;
  public title = 'Desenvolvedores';
  public devForm !: FormGroup;
  public ver = false;

  public devs !: Desenvolvedor[];

  devSelect(dev: Desenvolvedor) {
    this.devSelected = dev;
    this.devForm.patchValue(dev);
    this.ver = true;
  }
  voltar() {
    this.ver = false;
  }


  constructor(private fb: FormBuilder, private modalService: BsModalService,
    private devService: DesenvolvedoresServices) {
      this.createForm();
  }


  createForm() {
    this.devForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      position: ['', Validators.required]
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregarDev();
  }
  carregarDev() {
    this.devService.getAll().subscribe(
      (devs: Desenvolvedor[]) => {
        this.devs = devs;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }
  salvarDev(dev: Desenvolvedor) {
    this.devService.put(dev.id, dev).subscribe(
      (dev) => {console.log(dev); this.carregarDev()},
      (erro:any) => {console.log(erro)}
    )
  }
  devSubmit() {
    this.salvarDev(this.devForm.value);
  }

}
