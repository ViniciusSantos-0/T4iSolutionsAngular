import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Projeto } from '../models/Projeto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjetosService } from './projetos.service';
import { Desenvolvedor } from '../models/Desenvolvedor';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DesenvolvedoresServices } from '../desenvolvedores/desenvolvedores.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public modalRef!: BsModalRef;
  public projectForm!: FormGroup;
  public title = 'Projetos';
  public selectedProject!: Projeto;
  public ver = false;
  public textSimple!: string;
  public devsProjetos !: Desenvolvedor[];

  private unsubscriber = new Subject();

  public projetos!: Projeto[];
  public projeto !: Projeto;

  openModal(template: TemplateRef<any>, projetoId: number) {
    this.devProjetos(template, projetoId);
  }
  
  closeModal() {
    this.modalRef.hide();
  }

  devProjetos(template: TemplateRef<any>, id: number) {
    this.spinner.show();
    this.devService.getProjetoById(id)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((devs: Desenvolvedor[]) => {
        this.devsProjetos = devs;
        this.modalRef = this.modalService.show(template);
      }, (error: any) => {
        //this.toastr.error(`erro: ${error}`);
        console.log(error);
      }, () => this.spinner.hide()
    );
  }

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private projetoService: ProjetosService,
    private route: ActivatedRoute,
    private devService: DesenvolvedoresServices,
    private spinner: NgxSpinnerService
    ) {
    this.createForm();
  }

  ngOnInit() {
    this.carregarProjetos();
  }
  carregarProjetos() {
    // Biblioteca rxjs
    this.projetoService.getAll().subscribe(
      (projetos: Projeto[]) => { this.projetos = projetos },
      //mensagem  de falha
      (erro: any) => { console.error(erro) }
    );
  }

  createForm() {
    this.projectForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  salvarProjeto(projeto: Projeto) {
    if (projeto.id == 0) {
      this.projetoService.post(projeto).subscribe(
        (projeto) => { console.log(projeto); this.carregarProjetos() },
        (erro: any) => { console.log(erro) }
      )
    } else {
      this.projetoService.put(projeto).subscribe(
        (projeto) => { console.log(projeto); this.carregarProjetos() },
        (erro: any) => { console.log(erro) }
      )
    }
  }

  deletarProjeto(id: number) {
    this.projetoService.delete(id).subscribe(
      (model: any) => {
        console.log(model);
        this.carregarProjetos();
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }
  projectSubmit() {
    this.salvarProjeto(this.projectForm.value);
  }
  selectProject(project: Projeto) {
    this.selectedProject = project;
    this.projectForm.patchValue(project)
    this.ver = true;
  }

  projetoNovo() {
    this.selectedProject = new Projeto();
    this.projectForm.patchValue(this.selectedProject)
    this.ver = true;
  }

  voltar() {
    this.ver = false;
  }
}
