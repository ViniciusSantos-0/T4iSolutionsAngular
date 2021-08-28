import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'desenvolvedores', component: DesenvolvedoresComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
