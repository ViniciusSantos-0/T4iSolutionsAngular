import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Desenvolvedor } from '../models/Desenvolvedor';
import { Projeto } from '../models/Projeto';
import { NgxSpinnerService } from 'ngx-spinner';
import { Works } from '../models/Works';
import { Util } from '../util/util';
import { DesenvolvedoresServices } from './desenvolvedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetosService } from '../projetos/projetos.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  public pro!: Projeto;
  public projetosDevs!: Projeto[];
  private unsubscriber = new Subject();


  public devs !: Desenvolvedor[];

  devSelect(dev: Desenvolvedor) {
    this.devSelected = dev;
    this.devForm.patchValue(dev);
    this.ver = true;
  }

  novoDev() {
    this.devSelected = new Desenvolvedor;
    this.devForm.patchValue(this.devSelected);
    this.ver = true;
  }
  voltar() {
    this.ver = false;
  }


  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private devService: DesenvolvedoresServices,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
    private projetoService: ProjetosService
    ) {}


  createForm() {
    this.devForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      position: ['', Validators.required],
      idProjeto: [Validators.required]
    });
  }
  openModal(template: TemplateRef<any>, projetoId: number) {
    this.projetoDevs(template, projetoId)
  }

  closeModal() {
    this.modalRef.hide();
  }

  projetoDevs(template: TemplateRef<any>, id: number) {
    this.spinner.show();
    this.projetoService.getByWorksById(id)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((projetos: Projeto[]) => {
        this.projetosDevs = projetos;
        this.modalRef = this.modalService.show(template);
      }, (error: any) => {
        console.log(error);
      }, () => this.spinner.hide()
    );
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
    if (dev.id == 0) {
      this.devService.post(dev).subscribe(
        (dev) => { console.log(dev); this.carregarDev() },
        (erro: any) => { console.log(erro) }
      )
    } else {
      this.devService.put(dev).subscribe(
        (dev) => { console.log(dev); this.carregarDev() },
        (erro: any) => { console.log(erro) }
      )
    }
  }
  devSubmit() {
    this.salvarDev(this.devForm.value);
  }
  worksConcat(works: Works[]) {
    return Util.nomeConcat(works);
  }

}
