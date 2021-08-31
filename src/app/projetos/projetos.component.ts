import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Projeto } from '../models/Projeto';
import { ProjetosService } from './projetos.service';

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

  public projetos!: Projeto[];



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService,
    private projetoService: ProjetosService) {
    this.createForm();
  }

  ngOnInit(){
    this.carregarProjetos();
  }
  carregarProjetos() {
    // Biblioteca rxjs
    this.projetoService.getAll().subscribe(
      //mensagem de sucesso
      (projetos: Projeto[]) => { this.projetos = projetos },
      //mensagem  de falha
      (erro: any) => { console.error(erro) }
    );
  }

  createForm() {
    this.projectForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  salvarProjeto(projeto: Projeto) {
    this.projetoService.put(projeto.id, projeto).subscribe(
      (projeto) => {console.log(projeto); this.carregarProjetos()},
      (erro:any) => {console.log(erro)}
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
  voltar() {
    this.ver = false;
  }



}
