import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: 'desenvolvedores', component: DesenvolvedoresComponent},
  {path: 'projetos', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
