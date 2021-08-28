import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [	
    AppComponent,
    ProjetosComponent,
      DesenvolvedoresComponent,
      PerfilComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
